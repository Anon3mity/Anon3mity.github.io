// sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'anon3mity.github.io',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// default to `networkFirst` strategy
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate()
);