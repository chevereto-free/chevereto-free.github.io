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
    "revision": "1310f93d61a32f445ab32cb1ad4371fd"
  },
  {
    "url": "api/index.html",
    "revision": "dc6bf63ddf632691e93dc866b8cce331"
  },
  {
    "url": "assets/css/0.styles.264270f3.css",
    "revision": "5aacddb0f3f5fd5c0aa558c63f0128d8"
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
    "url": "assets/js/10.1594615c.js",
    "revision": "c6cb104714b3a790e15b4c4cd03c2f1c"
  },
  {
    "url": "assets/js/11.3ec5ef28.js",
    "revision": "cee386efe1fa34b7219d79fe7f9485c3"
  },
  {
    "url": "assets/js/12.24a1e919.js",
    "revision": "890ee91e0bb2ec938817b825f0141241"
  },
  {
    "url": "assets/js/13.48758ade.js",
    "revision": "e92107755d968868d1b8c8de1a67d3d5"
  },
  {
    "url": "assets/js/14.4a46698c.js",
    "revision": "eada12736374b796ba73b0e0503f5609"
  },
  {
    "url": "assets/js/15.8ddd6d8f.js",
    "revision": "0cbdcfdf42cc69b0ccdd6843cf6d8956"
  },
  {
    "url": "assets/js/16.5e2fa225.js",
    "revision": "6babfc32a031d69922eb7176cb56ae58"
  },
  {
    "url": "assets/js/17.e7810eb1.js",
    "revision": "c9f1267a48f165fd211c173087f62cc6"
  },
  {
    "url": "assets/js/18.e93a2155.js",
    "revision": "9517ed59da25b42e29425353399273d6"
  },
  {
    "url": "assets/js/19.a7c53f47.js",
    "revision": "b5d8a02233b8a062e73a49c1a4523ad4"
  },
  {
    "url": "assets/js/2.35cfb8e5.js",
    "revision": "69a700f356caee8828a06b286b9fded2"
  },
  {
    "url": "assets/js/20.37c705cb.js",
    "revision": "7567b2522d3bcc3d1534b1f98ab098d3"
  },
  {
    "url": "assets/js/21.7eaa6f35.js",
    "revision": "4ff853b738d10c5af311db6b48866cf2"
  },
  {
    "url": "assets/js/22.c1b4e486.js",
    "revision": "26d29ff303c134920b72b37a32400d26"
  },
  {
    "url": "assets/js/23.f0455eae.js",
    "revision": "36ecb68260b53816839b5a6248e26ba0"
  },
  {
    "url": "assets/js/24.9cb4893f.js",
    "revision": "cebc3ec7bd88eb80ccf1c50621b93697"
  },
  {
    "url": "assets/js/25.6bb0927a.js",
    "revision": "c604e5f9871bbdcb06ea3eec322d0dac"
  },
  {
    "url": "assets/js/26.f72d7f59.js",
    "revision": "d4e531949a99e8f9d1728d2f21ae4f89"
  },
  {
    "url": "assets/js/27.cfc44803.js",
    "revision": "9ed5d9fa5d4f90f41afce5502bd2598e"
  },
  {
    "url": "assets/js/28.eb853972.js",
    "revision": "d74b42d7d0286fcb8a6d9ec25ac80652"
  },
  {
    "url": "assets/js/29.82234df4.js",
    "revision": "106311fbd0e653f42ae096f37aecd6dc"
  },
  {
    "url": "assets/js/3.80f6c17d.js",
    "revision": "73d2d863d81bcd84698750be91a4809b"
  },
  {
    "url": "assets/js/30.a99388c6.js",
    "revision": "7449f7bb0cbb4a6be908630baf9efc86"
  },
  {
    "url": "assets/js/31.8bd5ac4b.js",
    "revision": "60a4230349db7b2fb35a4ddb5ce4c6dc"
  },
  {
    "url": "assets/js/32.f33dd6c5.js",
    "revision": "05a6c0d7b27e287ec1009e6fcf729885"
  },
  {
    "url": "assets/js/33.6bb80953.js",
    "revision": "279c866d59857472cc92415c93729851"
  },
  {
    "url": "assets/js/34.ab02fab8.js",
    "revision": "6f1aea70c71f200092e6889cbd346e16"
  },
  {
    "url": "assets/js/35.29dd15a9.js",
    "revision": "3998e8584591805f34c4e0e7bb6ada9c"
  },
  {
    "url": "assets/js/36.c7f2600d.js",
    "revision": "5c9b24d89a04fd8f652fea318c727803"
  },
  {
    "url": "assets/js/37.f3f35fd3.js",
    "revision": "935b351bb184e32b628ea04b6f2c2bc3"
  },
  {
    "url": "assets/js/38.7e09de50.js",
    "revision": "ad3504d0d55a6e894f81520b088a06c2"
  },
  {
    "url": "assets/js/39.cab75886.js",
    "revision": "b5de84536b754f4825f3fa9b2e674460"
  },
  {
    "url": "assets/js/4.84a92973.js",
    "revision": "0cf1ff6de41d43038758991239570e69"
  },
  {
    "url": "assets/js/40.e4af83bb.js",
    "revision": "d96dc6e00e25e81acca3302c495a3658"
  },
  {
    "url": "assets/js/41.3bd9ee53.js",
    "revision": "2a146eb7de101a157517cca909aed82a"
  },
  {
    "url": "assets/js/42.73d7934c.js",
    "revision": "a54418495a2d63b743be58f4e3ccdbad"
  },
  {
    "url": "assets/js/43.3c627368.js",
    "revision": "2e4a5a96716defb9995f273831ff3a79"
  },
  {
    "url": "assets/js/44.f6523a74.js",
    "revision": "2ffcd421bf2f8a3c92c92977ce44e90b"
  },
  {
    "url": "assets/js/45.ab9e8819.js",
    "revision": "60d78018ef85c7ceedff4f1c6baf3f1a"
  },
  {
    "url": "assets/js/46.aa53a4d8.js",
    "revision": "524a1ad532b19217dc44f7b297cd7b85"
  },
  {
    "url": "assets/js/47.3a31a170.js",
    "revision": "ca1a73eddfb25c2ffa4e802594892b31"
  },
  {
    "url": "assets/js/48.af505e66.js",
    "revision": "51a9623f114cc96a0326074a46d99535"
  },
  {
    "url": "assets/js/49.01c45206.js",
    "revision": "0e285b7861ba9272bfd31666d32d4f33"
  },
  {
    "url": "assets/js/5.f4e6c99b.js",
    "revision": "a190a15bcc0b6348b5f7792c270c96f8"
  },
  {
    "url": "assets/js/50.f081f580.js",
    "revision": "03f5addccf8dfcb844475d83b9a09be2"
  },
  {
    "url": "assets/js/51.88e6c013.js",
    "revision": "8ba724fdf32c29bad3ed21ad9c2f1089"
  },
  {
    "url": "assets/js/52.f472c8e2.js",
    "revision": "b827f7684db05c6fb4ab88ffa381bfe4"
  },
  {
    "url": "assets/js/53.f22f8e80.js",
    "revision": "f4e31614bf2279b273ec87ab31389d06"
  },
  {
    "url": "assets/js/6.3a0a3db5.js",
    "revision": "a929d9d93e56fb94e2aa36d40f2041a6"
  },
  {
    "url": "assets/js/7.60f1e5a6.js",
    "revision": "031087d8a2e59f637c44d598243ed454"
  },
  {
    "url": "assets/js/8.b4ff213e.js",
    "revision": "efe04a3e1af09b39e8a2a259a883dd91"
  },
  {
    "url": "assets/js/9.9a3d7651.js",
    "revision": "daf9c5785d3d842e2eb9cd455cccc461"
  },
  {
    "url": "assets/js/app.970debc3.js",
    "revision": "50ec938ac28efb0299e47cd4eb167df7"
  },
  {
    "url": "features/customization/routes.html",
    "revision": "267da637027c61eb135389feb8623325"
  },
  {
    "url": "features/customization/theme.html",
    "revision": "77dd31f5bb69ac27b6d06dd08d418f4e"
  },
  {
    "url": "features/integrations/pup.html",
    "revision": "940d1f42805a0069d2ec55f89ad41c6c"
  },
  {
    "url": "features/integrations/sharex.html",
    "revision": "2667809c2d36c4ad4ca37eab636d38dc"
  },
  {
    "url": "features/reference/security.html",
    "revision": "e6fe89abb2835c163ebf195f1c1d4113"
  },
  {
    "url": "get-started/index.html",
    "revision": "e39b42a907039f19077c1dee6404bb1e"
  },
  {
    "url": "get-started/status.html",
    "revision": "ff5a3748d0f4cd90ddebf4c727159713"
  },
  {
    "url": "get-started/upgrading.html",
    "revision": "49b694b6654fbbee4c093073a16306ac"
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
    "revision": "8b438ab4220bf1893e3a5a4a0aee8713"
  },
  {
    "url": "logo.png",
    "revision": "af45cbf4badea16af1c1f99a40d6c51a"
  },
  {
    "url": "manual/first-steps/initial-setup.html",
    "revision": "1bd6a5a7c405028a29b045c913e1ac60"
  },
  {
    "url": "manual/first-steps/setup-email.html",
    "revision": "eeeb4680bd145adf48758da51b3e19aa"
  },
  {
    "url": "manual/troubleshooting/debug.html",
    "revision": "173686e143430bce14c96d95f1df232f"
  },
  {
    "url": "manual/troubleshooting/errors.html",
    "revision": "664d31fc7773c95fcd83556c8fa4641b"
  },
  {
    "url": "manual/troubleshooting/server-issues.html",
    "revision": "c8606b2ee0ea5d26ad8c5601519c1fe1"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "df4d9d2061f49ce128f4174489258b6c"
  },
  {
    "url": "settings/api.html",
    "revision": "d3d8ac9d322b4ba5533af25c36fa004f"
  },
  {
    "url": "settings/categories.html",
    "revision": "107ec552b23a97a201d427c6ba55d831"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "d2e17bb7bec07d2981a70679140c5564"
  },
  {
    "url": "settings/content.html",
    "revision": "8f4c25bed0489ce2b7249235b102b002"
  },
  {
    "url": "settings/email.html",
    "revision": "e08901254613aaa29e44f5809c71c55b"
  },
  {
    "url": "settings/external-services.html",
    "revision": "fdbfdc87c7402587e21ba80a195baf39"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "0ac29bd216349178e20ae2c0443f7412"
  },
  {
    "url": "settings/homepage.html",
    "revision": "6073b7f50e18338575160dbe9c7d6af6"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "4a28ec19130eec9059c1d42abf8b9783"
  },
  {
    "url": "settings/index.html",
    "revision": "aff8fb8bd71c9c40f6d581a47d9f73a9"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "d39ca72b49b4ccbc32592268780c4f89"
  },
  {
    "url": "settings/listings.html",
    "revision": "41f56b16a225db9a798b59c4488ac3b9"
  },
  {
    "url": "settings/pages.html",
    "revision": "1e4bc5719f506eed04e603193d34d5c4"
  },
  {
    "url": "settings/routing.html",
    "revision": "8cf4844a92047fbf1637482e1cd18f98"
  },
  {
    "url": "settings/system.html",
    "revision": "b2a3ec2178c490678aefb4f2ffedc8ea"
  },
  {
    "url": "settings/theme.html",
    "revision": "d91dd24401c97ada5d3c8a9cda6ca6f7"
  },
  {
    "url": "settings/tools.html",
    "revision": "df95105f0d45d49297256665d26c592c"
  },
  {
    "url": "settings/users.html",
    "revision": "46566d3f28e3c1d81751323a451e69ba"
  },
  {
    "url": "settings/website.html",
    "revision": "bf26ca4bb080c2691aafc76df0f8ea3d"
  },
  {
    "url": "setup/container/building.html",
    "revision": "0f1ecc26a17d9cb1e7083156cc9c1913"
  },
  {
    "url": "setup/container/compose.html",
    "revision": "325ae6ce0ae84b90df3533b44325c7e8"
  },
  {
    "url": "setup/container/development.html",
    "revision": "ba6cd65fe70514199f1f365f2e40051e"
  },
  {
    "url": "setup/server/cpanel.html",
    "revision": "55261266b05430e328ce60c8f07ce4a5"
  },
  {
    "url": "setup/server/installation.html",
    "revision": "2d1e04a26d0fd50fc13c3677b8006f6b"
  },
  {
    "url": "setup/server/requirements.html",
    "revision": "bb8873b7f182a71b3f802e6b918988b5"
  },
  {
    "url": "setup/server/settings-file.html",
    "revision": "93c3882412e7a6e3b635f1c82caea587"
  },
  {
    "url": "setup/server/updating.html",
    "revision": "621f99114df9b1cab08542b490a1debf"
  },
  {
    "url": "setup/system/environment.html",
    "revision": "1f319bd30ef565e6c8aae9efe7b38f14"
  },
  {
    "url": "setup/system/requirements.html",
    "revision": "6d56379bbee0d972ff3b0ec5516357f9"
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
