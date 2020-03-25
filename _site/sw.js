importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
workbox.core.setCacheNameDetails({
    prefix: 'anon3mity.github.io',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});
// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([{"url":"/index.html","revision":"fd89643f80b5b1711578679421f0d77b"},{"url":"/android/ui/2020/02/07/Shape-Drawable-Button.Xml-Android-Studio/","revision":"86513c5d448727ad543a11fa4d96879e"}]);
