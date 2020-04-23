importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
// sw.js

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
workbox.precaching.precacheAndRoute([{"url":"/index.html","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/about/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/blogs/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/contact/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/courses/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/privacy/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/products/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/videos/","revision":"02bcc2ff3009908af90356ee4dd312db"},{"url":"/2020/02/07/Learn-smarter-&-Better/","revision":"e6bbfc99e19a9da1fe2b18ec5d4675c4"}]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate()
);
