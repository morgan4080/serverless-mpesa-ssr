import { createApp } from './app';
const isDev = process.env.NODE_ENV !== 'production';

export default context => {
  // since there could potentially be asynchronous route hooks or components,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering.
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now();
    const { app, router, store } = createApp();
    const { url } = context;
    const { fullPath } = router.resolve(url).route;

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    router.app.$store.state.authStatus = context.authenticated;

    // set server-side router's location
    router.push(url);

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // Call fetchData hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`);
      // context.rendered = () => {
      //   context.state = store.state;
      // };
      // After all preFetch hooks are resolved, our store is now
      // filled with the state needed to render the app.
      // Expose the state on the render context, and let the request handler
      // inline the state in the HTML response. This allows the client-side
      // store to pick-up the server-side state without having to duplicate
      // the initial data fetching on the client.
      // the Promise should resolve to the app instance so it can be rendered
        context.state = store.state;
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}