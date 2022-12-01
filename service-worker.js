/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ee2ab4133333b9ee74240da73fb6823f"
  },
  {
    "url": "api/index.html",
    "revision": "a1aeec9f092b56bbbef585c0b39052a1"
  },
  {
    "url": "assets/css/0.styles.75d3a74b.css",
    "revision": "b34430a9b966640d6c6f1c434245c93f"
  },
  {
    "url": "assets/img/dashboard_3.19.caa86734.png",
    "revision": "caa867345ef6659241fd6fd40cbfd148"
  },
  {
    "url": "assets/img/databases.f4d298e3.png",
    "revision": "f4d298e33deaac8de2a17bc87ea1d3e1"
  },
  {
    "url": "assets/img/file-manager-delete-file.cf0f5fd5.png",
    "revision": "cf0f5fd5d5f40b30e4980be41c4b6d48"
  },
  {
    "url": "assets/img/file-manager-extract-files.0ef60e09.png",
    "revision": "0ef60e09e33aad8888c02477daae8f7b"
  },
  {
    "url": "assets/img/file-manager-extract.72bea043.png",
    "revision": "72bea043996303786ef14ff8921554d3"
  },
  {
    "url": "assets/img/file-manager.d1a07884.png",
    "revision": "d1a078845df44c5bfeb978823c601d6c"
  },
  {
    "url": "assets/img/files.4aa4878b.png",
    "revision": "4aa4878b1596ab287dae4417621c2807"
  },
  {
    "url": "assets/img/multiphp-ini-keys.83901b7f.png",
    "revision": "83901b7f141fdb6b99f86b244ee0ad2a"
  },
  {
    "url": "assets/img/multiphp-manager.88fa8221.png",
    "revision": "88fa822191bbb6b068796b609a0c9186"
  },
  {
    "url": "assets/img/mutliphp-ini-editor.859b4a87.png",
    "revision": "859b4a87c13eb1beec0520bbf4f09f90"
  },
  {
    "url": "assets/img/mysql-wizard-create-database.e64fa0ed.png",
    "revision": "e64fa0ed54dff2371928c3e64f6b66c6"
  },
  {
    "url": "assets/img/mysql-wizard-privileges.0eee95f6.png",
    "revision": "0eee95f6fd59926640564c5ef93fe372"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/software.77971e2e.png",
    "revision": "77971e2e619a23472449bdd911a762c7"
  },
  {
    "url": "assets/js/10.91af0719.js",
    "revision": "51e83cf0c87a4bcd8e46ad778613385e"
  },
  {
    "url": "assets/js/11.c8030ef1.js",
    "revision": "43b6ec10f326ff0f28a9095c736be40a"
  },
  {
    "url": "assets/js/12.2f5ff773.js",
    "revision": "c084ab10c0e278910c58cc3bca1fdc82"
  },
  {
    "url": "assets/js/13.f16d3b15.js",
    "revision": "d76ec0c94dbfb255f87f4f09fa035026"
  },
  {
    "url": "assets/js/14.3aeee8db.js",
    "revision": "5a6ec968342f7da4f1cd07dbbbbcb344"
  },
  {
    "url": "assets/js/15.b494120f.js",
    "revision": "9b5eaa6c060fa204464744bba2cf1f9d"
  },
  {
    "url": "assets/js/16.8bd55c70.js",
    "revision": "f0eed840fc0aeab187e9a936e6b9c2bc"
  },
  {
    "url": "assets/js/17.21c27487.js",
    "revision": "334c7ef8fd2653527615a648592253b2"
  },
  {
    "url": "assets/js/18.6fce109c.js",
    "revision": "cfef392b24aacfc555125a42604070a4"
  },
  {
    "url": "assets/js/19.41d1032a.js",
    "revision": "223b4190a6011261579f13c7199d638c"
  },
  {
    "url": "assets/js/2.9c9be21b.js",
    "revision": "d49e4bc8d1eb9ecd7d82e2fdfbc955f5"
  },
  {
    "url": "assets/js/20.f9d9a0da.js",
    "revision": "c58ec3775d63cddff96f400a8966fb73"
  },
  {
    "url": "assets/js/21.4057a0b0.js",
    "revision": "4c54d0f3446c3e341bf4eb8cdc762bb4"
  },
  {
    "url": "assets/js/22.cd85f6bf.js",
    "revision": "9fee829136c4cd64a18e5b4af26e3668"
  },
  {
    "url": "assets/js/23.50b054d0.js",
    "revision": "05fc2fc41de3bb63b4ed32face5d4d3b"
  },
  {
    "url": "assets/js/24.ea268424.js",
    "revision": "efdc2c32b3b66a243d2445f738a1ae7e"
  },
  {
    "url": "assets/js/25.d0c6b4b7.js",
    "revision": "61815eb41fd444be5067b3e85df35301"
  },
  {
    "url": "assets/js/26.d82f295c.js",
    "revision": "cdf7cfb974cc7789cf2719c029eb2fad"
  },
  {
    "url": "assets/js/27.2183e9fc.js",
    "revision": "16d99f059c71fb1063f12e316cd7f458"
  },
  {
    "url": "assets/js/28.45a598e4.js",
    "revision": "66001cca8fec421d38d67b1900c0fe03"
  },
  {
    "url": "assets/js/29.68900e5e.js",
    "revision": "0093a6f5a01e27f93ab8ae1bbf69edde"
  },
  {
    "url": "assets/js/3.8d1c95fe.js",
    "revision": "510f7d348712069236635d99d365b673"
  },
  {
    "url": "assets/js/30.d6c0dc3d.js",
    "revision": "534eafaface7b8376775399b03519f3e"
  },
  {
    "url": "assets/js/31.9980a39f.js",
    "revision": "df91c7515505062adcf160826205fbd7"
  },
  {
    "url": "assets/js/32.aef4fe5a.js",
    "revision": "266d95dfe2293186c5b3fa270ea03159"
  },
  {
    "url": "assets/js/33.b7a7646d.js",
    "revision": "12664a4bc0d23c8817c2df9a4f6aa9b0"
  },
  {
    "url": "assets/js/34.9825e2dc.js",
    "revision": "1902577ebd49cc4361707b3ec0dde865"
  },
  {
    "url": "assets/js/35.8b099da3.js",
    "revision": "f38aa546be797dedab6b1263f96a475e"
  },
  {
    "url": "assets/js/36.a2552fe4.js",
    "revision": "876cbd2a63955917db54e3d068c12eb8"
  },
  {
    "url": "assets/js/37.2d813fc2.js",
    "revision": "ce5b10516885827c8869b96824523fe9"
  },
  {
    "url": "assets/js/38.ea588629.js",
    "revision": "67beec87710cb276037c5d80446423b2"
  },
  {
    "url": "assets/js/39.35a48ee8.js",
    "revision": "1ea77c4c97ec245e452a1231fa753976"
  },
  {
    "url": "assets/js/4.72799744.js",
    "revision": "5a7c1cb90647b6d9d39ef7c0c81eebf7"
  },
  {
    "url": "assets/js/40.971a7eb7.js",
    "revision": "623b208cee9d6d78abd43c2ea7baa0cf"
  },
  {
    "url": "assets/js/41.f1dd6526.js",
    "revision": "4dfa3c50b62cf55a2366a579460b627f"
  },
  {
    "url": "assets/js/42.7b658996.js",
    "revision": "3d00908b5ccba0fe45524dc806e4929d"
  },
  {
    "url": "assets/js/43.423fa03f.js",
    "revision": "795c980b6ef4ead960294fe0169ae771"
  },
  {
    "url": "assets/js/44.41f3c3d2.js",
    "revision": "6915389d12d13752cb89af97ce63cfc5"
  },
  {
    "url": "assets/js/45.c63bd659.js",
    "revision": "f06ff87caa2453b59931d16c4ec3558c"
  },
  {
    "url": "assets/js/46.507245a2.js",
    "revision": "ac5b5bf1a1a4d6e224e34a54192e3184"
  },
  {
    "url": "assets/js/47.e611866b.js",
    "revision": "cd3f820e56f2a86d7288aca5e14e69ee"
  },
  {
    "url": "assets/js/48.c20c60b9.js",
    "revision": "4c5904d629685d4ad3bc9f1530d283ad"
  },
  {
    "url": "assets/js/49.47f88f45.js",
    "revision": "b1664f30bd68b31b0b4d8362fa094631"
  },
  {
    "url": "assets/js/5.94c4ca2d.js",
    "revision": "0b34725e5433f981aa0d9947dc42047b"
  },
  {
    "url": "assets/js/50.b986b360.js",
    "revision": "60839671ab466f17ecf59b19c0f9a8a1"
  },
  {
    "url": "assets/js/51.2d0bbc28.js",
    "revision": "0f4e8f507e2925dacd639aaa06191d36"
  },
  {
    "url": "assets/js/52.5bb4a56d.js",
    "revision": "d70876d3a89c3eaf0b953f24dcfa8f13"
  },
  {
    "url": "assets/js/53.4b2d59c8.js",
    "revision": "07075c62ec56dda0e54ce74966d1acc9"
  },
  {
    "url": "assets/js/6.c669c994.js",
    "revision": "c25aa084c062b95527d5845787d88075"
  },
  {
    "url": "assets/js/7.9a6da57a.js",
    "revision": "cb52626b94493fe44a8ee07260e82d8d"
  },
  {
    "url": "assets/js/8.4de831ab.js",
    "revision": "2d18b0d2018fe1456fc7bfa42eb91dea"
  },
  {
    "url": "assets/js/9.1518e507.js",
    "revision": "83b4711d61f3e1f46da9de4504dd6076"
  },
  {
    "url": "assets/js/app.f86009ad.js",
    "revision": "eafae5cd5e5a29fd9fb715981174d4f2"
  },
  {
    "url": "features/customization/routes.html",
    "revision": "d6a95a6e9742aeff71ca63836a0fd539"
  },
  {
    "url": "features/customization/theme.html",
    "revision": "52465890b0774603ee209ad2053d6dff"
  },
  {
    "url": "features/integrations/pup.html",
    "revision": "ba5ccbcc162eaba7350f93b95ecaac3c"
  },
  {
    "url": "features/integrations/sharex.html",
    "revision": "8f03d195ed3a339b80087e3ac8f9b03f"
  },
  {
    "url": "features/reference/security.html",
    "revision": "9c228d716b6a29c79a40957d9c6b3d33"
  },
  {
    "url": "get-started/index.html",
    "revision": "711fe77a076df554beac6a45792f972f"
  },
  {
    "url": "get-started/status.html",
    "revision": "78c3db584880ea15555249a48f03106a"
  },
  {
    "url": "get-started/upgrading.html",
    "revision": "f5afcf0315e275c5c2f1024dfcdc6312"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "65a72afe3688915cd9165fa19b598659"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6b9e989bbd272541a8246fa0999d7267"
  },
  {
    "url": "index.html",
    "revision": "494b812793de1ff866c09ac39c6932ec"
  },
  {
    "url": "logo.png",
    "revision": "af45cbf4badea16af1c1f99a40d6c51a"
  },
  {
    "url": "manual/first-steps/initial-setup.html",
    "revision": "15d6dd5ca9e8fe394769ba828a677e8a"
  },
  {
    "url": "manual/first-steps/setup-email.html",
    "revision": "6e33303ecc6b6bc61792f922806da274"
  },
  {
    "url": "manual/troubleshooting/debug.html",
    "revision": "780889f899bc9ecb58349d9f2fbc4e72"
  },
  {
    "url": "manual/troubleshooting/errors.html",
    "revision": "8f9de8b42e5410b77ec877ca24b70246"
  },
  {
    "url": "manual/troubleshooting/server-issues.html",
    "revision": "c95628b5bc577d46ea3d21e6e1038d9f"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "b85e7b4ccdde89456e4f35aa1636c28a"
  },
  {
    "url": "settings/api.html",
    "revision": "e921bb6865f04fe9ac82a365425d06f0"
  },
  {
    "url": "settings/categories.html",
    "revision": "d1cad7fbe68951dcba19b78d210a8512"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "f43aa5dbea99398858caae07d2e050e4"
  },
  {
    "url": "settings/content.html",
    "revision": "fa5167ec9f626e2524d1cbe9a8896366"
  },
  {
    "url": "settings/email.html",
    "revision": "3c07d6c20cb2bb17b45bb144ff200d2a"
  },
  {
    "url": "settings/external-services.html",
    "revision": "ae8e11bd3f4c23ef61a92dc7c2c11132"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "d81f49934f40ed715680c94042a8c85e"
  },
  {
    "url": "settings/homepage.html",
    "revision": "c8c072a976e3ed4d0ec29cdcae306e9e"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "eaddbbd6dd946cd5cc19fb9dbe12721b"
  },
  {
    "url": "settings/index.html",
    "revision": "e367f66b06c5aca4c99eec7e2a595e6f"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "42200b667fb4ab7e14decf6133e4b012"
  },
  {
    "url": "settings/listings.html",
    "revision": "fe7b8fb6795a4bcb90a4f7e226bbad42"
  },
  {
    "url": "settings/pages.html",
    "revision": "b86f92fe1e53a00a713d238730688844"
  },
  {
    "url": "settings/routing.html",
    "revision": "194ba4ef567dae81e9dac3566c7ec669"
  },
  {
    "url": "settings/system.html",
    "revision": "0c9f076458a220468b87e53d46989482"
  },
  {
    "url": "settings/theme.html",
    "revision": "902bb8b5926069f392bc0b84f2dc3588"
  },
  {
    "url": "settings/tools.html",
    "revision": "cb282574f5157896c0ec81fd3ef68024"
  },
  {
    "url": "settings/users.html",
    "revision": "7eb1df7950c4fc2cc093bcd1d65eacbf"
  },
  {
    "url": "settings/website.html",
    "revision": "d01e3844d921b909f33e5683ea8a7ecd"
  },
  {
    "url": "setup/container/building.html",
    "revision": "5ac4a8d5727177e752fef50c535acc66"
  },
  {
    "url": "setup/container/compose.html",
    "revision": "a5acb236eb13492e57cdae5732a346db"
  },
  {
    "url": "setup/container/development.html",
    "revision": "b3f3b3820e24e8ae9afd4a4d2df30b57"
  },
  {
    "url": "setup/server/cpanel.html",
    "revision": "e8ad01ada68088e0e38c2a25e961e1c2"
  },
  {
    "url": "setup/server/installation.html",
    "revision": "9a09db043b1eabb9d1ceffe4cd8e476e"
  },
  {
    "url": "setup/server/requirements.html",
    "revision": "bd4d8f3c31c95ef56e6c30d5e2b52827"
  },
  {
    "url": "setup/server/settings-file.html",
    "revision": "f4e9f3e90b04ad925f3c41dae45a184f"
  },
  {
    "url": "setup/server/updating.html",
    "revision": "9d52d3027ba9d8ae615f3deaa065f4c2"
  },
  {
    "url": "setup/system/environment.html",
    "revision": "2feba38e6a68904c291e0d4cdfbdad18"
  },
  {
    "url": "setup/system/requirements.html",
    "revision": "d847825127597346c43e8a7b265a87c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
