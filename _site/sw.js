importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
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
workbox.precaching.precacheAndRoute([{"url":"/index.html","revision":"b44452ea368d45f3f8b520e01b011b43"},{"url":"/about/","revision":"3afeeed96a702ab793d9718607537106"},{"url":"/android/2020/02/07/how-to-set-a-onclick-listner/","revision":"c3035c1f0d91b070653e62fd5c19500a"},{"url":"/blog/false/","revision":"7fb242e24fceb2e7cc5cddd8acdf951a"}]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate()
);
