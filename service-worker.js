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
    "url": "0.1/advanced/events.html",
    "revision": "eb6289aea885bf32c313dcfa628e0fdb"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "a377be861015021fa2b88d10cc8ffbe7"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "44e2b2e5b47979e86d5bc80af259ed46"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "fb638ad1353fb10cb4c09cbbe69aaa01"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "af719998fd527bb359cad2b20a76e903"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "6adfa37a30229eab266739b464e8d513"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "146666048520e46fea5219b4ed8d1449"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "5da0f1cc4beba6ed5aafffc681155dfd"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "8c3065fdbda6f7c525256ca5f8032f81"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "c539bb895afed89b9167edb05e54a39c"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "29f12c316d9cb6690a070d6f9477e9ba"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "9ed98a3b48ccbcf26f399d3b903bc548"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "78b0e70b39ff77e884cb3b15b4f48090"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "a799b6ffa4d2d9c578f8182e4e3962ec"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "db1d77870f014679d2c6aa34dd6c3b59"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "17e27d364aecf25e12fb1694c61ccb21"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "b74042d42287b9aeb925bba5edb5f119"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "3fbd5086600b4b623d43e311b727cfbf"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "e612de4440eecf6747277b35b0660af3"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "fb65602cc5039c1a5e7ea8db9a075a80"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "7cc298e45f221916052e3fecc8172910"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "c23d3829b6be85a639b8749591309eee"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "1da0fba9ef63fdf730070f6b71f6407a"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "cb9404ed0454dc6fdd93b3d74b0a7302"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "57eddc762c1421e1b55e55cbe9a191a7"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "bf25b1779a3fdb296897519ed0167b01"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "5d2965fda5efc2e902bfedf281677fb3"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "3b0f58e9c4a4d030a136aaa2aa87efc1"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "b794704291e9da481cd408087e254e64"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "ac0b4516ea62d12c1162f3d3fa9a20f6"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "d0df1ca5d99a939f61a11aa122dc5e38"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "953bba048862434d7e4da122b347bcb0"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "72b5839b0506383f29e9fac1ef3fbbdd"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "e89979907f6dfab145f1e1a9fafe3359"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "1825d74e90960dd3493859c75362cbef"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "078763a1d1059c50c442bee42f406af8"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "08525c87f600a425c630947bccf279c4"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "ce4bde0d295993b9d76939a23454cbcd"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "1b8b6e1d95ef2c919a41451e2e518d6e"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "a39aefff9947b9c0b4db798ca8c65b13"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "9c908a67a25f7120b11f650903285adb"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "c09a06538f100cb9fc3cbe1b3cec6025"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "ef663e819ca7a874ec0ab07abd8d3028"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "77c65b398db7f669d195f2d64fd1e11c"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "2f3b226b38789291d6146063000defed"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "ca1bae8b5f183a4ca198f57249d51fe5"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "3afe485c7081964fef454a86f2115798"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "044ce8524fffccea2da7c2710c91355d"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "1e5f4c778630c83daa672b9a56ee115f"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "dcc33d61d64039c215e613df65e8b80d"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "de58b0ed603887222385937155f504f7"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "c984c30af2cb80436cbb94b1980463c2"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "e6e90157537b37ca8a728338f44eed0a"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "877962c2d8f5aae0ca05baa37b43dbb9"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "2e3ff0d8f26da7817cc9ce732b9341bf"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "14662bb931f3a6c8290d415b8745bc3d"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "81029d33f6db88062c318a058a421bb3"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "82af1cc5301a521450f8155d5e78451d"
  },
  {
    "url": "404.html",
    "revision": "23e371ae6e0fd5c23837e3072b33315c"
  },
  {
    "url": "assets/css/0.styles.d1829642.css",
    "revision": "ccd9566401441bcce58ff3468c1db8c5"
  },
  {
    "url": "assets/img/apiKey.530fc37b.png",
    "revision": "530fc37b5c01405e35da6781e2290bc7"
  },
  {
    "url": "assets/img/collection_export.0c1fb331.png",
    "revision": "0c1fb331c40669d9e910069522f993d3"
  },
  {
    "url": "assets/img/configuration.beedd9e9.png",
    "revision": "beedd9e9f84d58e77e3195234ccc4406"
  },
  {
    "url": "assets/img/environment_export.4d1f8856.png",
    "revision": "4d1f885635f60b5af7c4bbdefee828e2"
  },
  {
    "url": "assets/img/environment_variable.5805dc92.png",
    "revision": "5805dc92fb094bf0ad0345c9bd6eb01b"
  },
  {
    "url": "assets/img/generate.63faefc6.png",
    "revision": "63faefc6c374f54f21efa8c2251c30bf"
  },
  {
    "url": "assets/img/saveIntegration.b9b9e346.png",
    "revision": "b9b9e346e2502fc0ab42b337e83c29cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4723c82d.js",
    "revision": "c4c02dd93ead3760668f9c1a34e32fe6"
  },
  {
    "url": "assets/js/10.fed0cda8.js",
    "revision": "0202f7f187ec8af0610fc3e05a95f1d5"
  },
  {
    "url": "assets/js/100.43453e42.js",
    "revision": "21dcf099e2d422b3baf3141123f67c3f"
  },
  {
    "url": "assets/js/101.3ca69aa2.js",
    "revision": "3c9fed73116dfe74e6f74ac9f25a2485"
  },
  {
    "url": "assets/js/102.d8d5f5aa.js",
    "revision": "dec02f3e140d05dc0eb90fc3d34a823f"
  },
  {
    "url": "assets/js/103.20a97eeb.js",
    "revision": "83c118736d274251895fd9cdcc83d4b4"
  },
  {
    "url": "assets/js/104.cccc9a4e.js",
    "revision": "0dbc3ed8d6697523924daaeb8e9e4e85"
  },
  {
    "url": "assets/js/105.da24dae5.js",
    "revision": "8f427884fb9b7119f2e4d66730ed35c4"
  },
  {
    "url": "assets/js/106.4f1a40d4.js",
    "revision": "7fa0514e16cbbf8da440942fbe354f8b"
  },
  {
    "url": "assets/js/107.367819e1.js",
    "revision": "5e49d9ac3cb000e497b50cdcff1af7dd"
  },
  {
    "url": "assets/js/108.0c8433fb.js",
    "revision": "b8af78457d522e18368cda2a7dfd210e"
  },
  {
    "url": "assets/js/109.0e4791e5.js",
    "revision": "efed39d010aa3e9b62d0d769ca2a1068"
  },
  {
    "url": "assets/js/11.7a5942b2.js",
    "revision": "47f2ed28b814943a0210ae159a901a95"
  },
  {
    "url": "assets/js/110.c8e27032.js",
    "revision": "401238cbcfafbed46b1cfd96a33d1109"
  },
  {
    "url": "assets/js/111.90bb992f.js",
    "revision": "2b70076e75dab53ddcc8b918d7d9c1a7"
  },
  {
    "url": "assets/js/112.4709d7c6.js",
    "revision": "3f3398238e6adb47e9cbc9c20b6e5779"
  },
  {
    "url": "assets/js/113.d4ec834f.js",
    "revision": "48839b8c368696258af223522dca9e1b"
  },
  {
    "url": "assets/js/114.d386b164.js",
    "revision": "0574de2db73b71c988e966c3ba7880c4"
  },
  {
    "url": "assets/js/115.aede2aeb.js",
    "revision": "0d6fd2f990ae38f6bfdf1f3d6b314044"
  },
  {
    "url": "assets/js/116.75026478.js",
    "revision": "c94dbf47cbfaae9bf19489a2b5c54000"
  },
  {
    "url": "assets/js/117.0d8a05db.js",
    "revision": "21942e98a477f9bf9785f2ffcf0e1285"
  },
  {
    "url": "assets/js/118.3da3c912.js",
    "revision": "3f53945cd987c782e30dcd5fd9522f06"
  },
  {
    "url": "assets/js/119.2975d8d8.js",
    "revision": "8b6bd89c15b3b66374a4f45521fb069c"
  },
  {
    "url": "assets/js/12.869a83d5.js",
    "revision": "dde99edf3a2e01854b17368304928f1d"
  },
  {
    "url": "assets/js/120.57ea335d.js",
    "revision": "4847826028b24593c0ac8d466d13e408"
  },
  {
    "url": "assets/js/121.c880a3b2.js",
    "revision": "cc3ae9115897ec90f6cdb13e7d063dcc"
  },
  {
    "url": "assets/js/122.13ff53f3.js",
    "revision": "0d8b22bfabbab2574dfa999b6469b19b"
  },
  {
    "url": "assets/js/123.787301d8.js",
    "revision": "a68674911dc2399f51ec16222137256c"
  },
  {
    "url": "assets/js/124.8d23f406.js",
    "revision": "4ec2ef0627a8c898ae3c6942d9ea5197"
  },
  {
    "url": "assets/js/125.c9b5a4e3.js",
    "revision": "e9e9c3b1b794b70376a5cf14e04eb27c"
  },
  {
    "url": "assets/js/126.cb0112f5.js",
    "revision": "1f717d9b55ae9cd2bbb68b64067d87b9"
  },
  {
    "url": "assets/js/127.41b23209.js",
    "revision": "eb867d8b922481da789a9a1ae347a445"
  },
  {
    "url": "assets/js/128.c23f39dd.js",
    "revision": "7d072e76ba62b7f85d33f5eb46821453"
  },
  {
    "url": "assets/js/129.10060b72.js",
    "revision": "482dcf9abe8411473a8de4dcc698e798"
  },
  {
    "url": "assets/js/13.33d3c53f.js",
    "revision": "aee1b4910f1e1a1ecb67446301308c4e"
  },
  {
    "url": "assets/js/130.aa20fc9b.js",
    "revision": "58372fc3f142a83aab6999ecd497cd1e"
  },
  {
    "url": "assets/js/131.f6a95dfd.js",
    "revision": "a9b17d7d9e48b77b01ae3893a4d1daac"
  },
  {
    "url": "assets/js/132.ab9fc33e.js",
    "revision": "a6f9b0eab7ce01358b87b60c282f2d29"
  },
  {
    "url": "assets/js/133.c4ac141b.js",
    "revision": "b39875bc4ef4ede2175416058f3ddebb"
  },
  {
    "url": "assets/js/134.cf0a6733.js",
    "revision": "103d228323c3ec938e2d784378210fcc"
  },
  {
    "url": "assets/js/135.26c6340e.js",
    "revision": "3b9cba1553e1241aa00240802de67161"
  },
  {
    "url": "assets/js/136.be778fbe.js",
    "revision": "5ffc0151ee944322a6b19ed4c659d44f"
  },
  {
    "url": "assets/js/137.125de74c.js",
    "revision": "3082f93215e702bb95fdada5aab772ab"
  },
  {
    "url": "assets/js/138.1e58f9fb.js",
    "revision": "b3019d3ebc527b654950742931ee111e"
  },
  {
    "url": "assets/js/14.d15b0afa.js",
    "revision": "44dd57d3d98958e6259d095ba1a6928b"
  },
  {
    "url": "assets/js/15.074494e5.js",
    "revision": "007cdff8d2f8cca9ddcbce866cc15210"
  },
  {
    "url": "assets/js/16.00f79b3e.js",
    "revision": "1322e09dbc454cc982bce708e8fb3b91"
  },
  {
    "url": "assets/js/17.f81d5789.js",
    "revision": "93de3f085ce54cb8902db2ab94e1302a"
  },
  {
    "url": "assets/js/18.0b390a25.js",
    "revision": "6651c7e04ff9312951b25a7d0ea3968f"
  },
  {
    "url": "assets/js/19.d5598e67.js",
    "revision": "6faf6fe3efb4136f7017bc670a6066d7"
  },
  {
    "url": "assets/js/2.466c6646.js",
    "revision": "ba2b24fb67e591ece43f493159f91cb3"
  },
  {
    "url": "assets/js/20.14b34ea9.js",
    "revision": "bbb5d74b813e0c070377434bc6ee7c62"
  },
  {
    "url": "assets/js/21.98281c1b.js",
    "revision": "1e7b6bbf5531b6e50b3be33c9e683de8"
  },
  {
    "url": "assets/js/22.db3db27b.js",
    "revision": "8b81fa872f1ff8146f863cdae392237e"
  },
  {
    "url": "assets/js/23.4493258f.js",
    "revision": "282bdec545f16b96b37d3f17cd40cd29"
  },
  {
    "url": "assets/js/24.01248968.js",
    "revision": "24d9528bb487a23f257d525bc4b6b55d"
  },
  {
    "url": "assets/js/25.d5c285d1.js",
    "revision": "8bef706b01949f4ec5511dd36db8c589"
  },
  {
    "url": "assets/js/26.b1aecfac.js",
    "revision": "aaaeab47e978a24b0b07eca3cbce2397"
  },
  {
    "url": "assets/js/27.ae9056f2.js",
    "revision": "3aa2f8f4950c5a261d844c1cbad07387"
  },
  {
    "url": "assets/js/28.6913b540.js",
    "revision": "26ad6dbb043aceaa3f2aba9fc7959d27"
  },
  {
    "url": "assets/js/29.1cc25a9b.js",
    "revision": "91dc276a07b5833743da6ff30d66b7ef"
  },
  {
    "url": "assets/js/3.c08788cf.js",
    "revision": "9a5397d300c118eaed270de3385d25b0"
  },
  {
    "url": "assets/js/30.a0597361.js",
    "revision": "e65161f6dd7315525a9712f7809736d4"
  },
  {
    "url": "assets/js/31.1f336c3b.js",
    "revision": "ae03663db9f0b5711d778b84d3eb07b1"
  },
  {
    "url": "assets/js/32.6a040528.js",
    "revision": "964ae3ef22220dd1828bbafa052e0089"
  },
  {
    "url": "assets/js/33.8508f937.js",
    "revision": "4309eeced3a625686f6110ea8d1d1904"
  },
  {
    "url": "assets/js/34.e2daff22.js",
    "revision": "b2f82cfc48d9dfa108eb0d3b29791402"
  },
  {
    "url": "assets/js/35.2202edb2.js",
    "revision": "a1a113e513370fa02d31a32f0a993110"
  },
  {
    "url": "assets/js/36.740f23f1.js",
    "revision": "35ce0249820706096d387d14b0ae2c37"
  },
  {
    "url": "assets/js/37.d6665061.js",
    "revision": "13352aae38d9cf55a2c5b0e57dd2f64c"
  },
  {
    "url": "assets/js/38.9f4aefd4.js",
    "revision": "3a147dd40027c43625120082f8898881"
  },
  {
    "url": "assets/js/39.6bdd10e7.js",
    "revision": "238d6eb99cfa4798f995870e24c7f680"
  },
  {
    "url": "assets/js/4.31558275.js",
    "revision": "fc73b6550a54f3b27cd3cf75f08d8a95"
  },
  {
    "url": "assets/js/40.5debfd5b.js",
    "revision": "94b7aef8554b8121b59195b39b3b9a36"
  },
  {
    "url": "assets/js/41.aa210a1b.js",
    "revision": "d56d3a5d038170d39229030338f2abc9"
  },
  {
    "url": "assets/js/42.67f3cb3a.js",
    "revision": "dd758691f947e289a635603ce46518e5"
  },
  {
    "url": "assets/js/43.574f05b5.js",
    "revision": "6a52f1ba07e2827495b1db6295e8b87d"
  },
  {
    "url": "assets/js/44.3f56dca2.js",
    "revision": "2e90fb10174c29085150d278497c5445"
  },
  {
    "url": "assets/js/45.15125963.js",
    "revision": "9f92da1d6e0fed02316e14862a3825ba"
  },
  {
    "url": "assets/js/46.94f7d800.js",
    "revision": "6b1b492faf5d2841b590c89dcb0169d2"
  },
  {
    "url": "assets/js/47.86708151.js",
    "revision": "4caafbfb28017d3f84ac53c5d6ec4b42"
  },
  {
    "url": "assets/js/48.50c4aac1.js",
    "revision": "a79226f9ff66a40e901043c751b2a4c2"
  },
  {
    "url": "assets/js/49.a32d186b.js",
    "revision": "8b66bb4ead3fe7013edd3fe98c5d0287"
  },
  {
    "url": "assets/js/5.5873d029.js",
    "revision": "1a8e799eb717b41b19039adaf73f51e6"
  },
  {
    "url": "assets/js/50.05d15e12.js",
    "revision": "3f6593198a856e4f9742f38799c19383"
  },
  {
    "url": "assets/js/51.8aaa5996.js",
    "revision": "4f0fd8c6b2dd64e100601f4f1b2340bc"
  },
  {
    "url": "assets/js/52.b416a2d6.js",
    "revision": "53d8691f3096b5552aca13e00505cb00"
  },
  {
    "url": "assets/js/53.f476d104.js",
    "revision": "8cbe324b975db1dca8f1f0be2b6586e7"
  },
  {
    "url": "assets/js/54.393f5944.js",
    "revision": "6d6ff394d855a23f801ec48bbc8234ec"
  },
  {
    "url": "assets/js/55.a649f62d.js",
    "revision": "80a3685c5d44f0dc0aa4ebe112da41c9"
  },
  {
    "url": "assets/js/56.f0637d2e.js",
    "revision": "999d4d1be8719cc72d82b633e91a4087"
  },
  {
    "url": "assets/js/57.78b570db.js",
    "revision": "490eac7ce5e61b444d6eee985f61f2a0"
  },
  {
    "url": "assets/js/58.7037b302.js",
    "revision": "188fe1e601ff2e80929a50817f095347"
  },
  {
    "url": "assets/js/59.0ead6ebd.js",
    "revision": "c9c49dd404e2c760316cc30faed4626e"
  },
  {
    "url": "assets/js/60.74589ce8.js",
    "revision": "7b7b18921f0f8a27d57b3b7a06a137fa"
  },
  {
    "url": "assets/js/61.0e06d52d.js",
    "revision": "9fbd7b876d93a15255d572886c3ed689"
  },
  {
    "url": "assets/js/62.f93dec74.js",
    "revision": "0f52c6f224622ef7b7a4cc2a2d1996db"
  },
  {
    "url": "assets/js/63.36eef7bf.js",
    "revision": "b083d945fca639a47f51fb647f24138b"
  },
  {
    "url": "assets/js/64.d6c2f4f9.js",
    "revision": "f69493c1d7983b3c266b418d7243aeb1"
  },
  {
    "url": "assets/js/65.0ccd7b6d.js",
    "revision": "29df9fa92cda11942bf2d4c8c99d23ac"
  },
  {
    "url": "assets/js/66.5a95056c.js",
    "revision": "ec17372a5613fd6cbab62fc894ffeac8"
  },
  {
    "url": "assets/js/67.3bab79ee.js",
    "revision": "914e2bc235cce69bd93433eb61ca245d"
  },
  {
    "url": "assets/js/68.bf20cda5.js",
    "revision": "81336feb76d27d1376399c76d88e74f3"
  },
  {
    "url": "assets/js/69.643b734a.js",
    "revision": "965c8fe666bb3a992ce727fbff3cd67d"
  },
  {
    "url": "assets/js/70.534af764.js",
    "revision": "f99d60e791d98c59dac511a438a1c810"
  },
  {
    "url": "assets/js/71.6f5d7d49.js",
    "revision": "e1db39eab09d80228e6641301f9f7722"
  },
  {
    "url": "assets/js/72.a45ee5a1.js",
    "revision": "3b0f7d4c0c585b7a636d3d26b05064fd"
  },
  {
    "url": "assets/js/73.7657c2b7.js",
    "revision": "a9b1c1c2aa2a9db5cf639778bf6870d4"
  },
  {
    "url": "assets/js/74.b9a9aba8.js",
    "revision": "51b86ab8b8748d05f7c0af699174a7c5"
  },
  {
    "url": "assets/js/75.0b1e276a.js",
    "revision": "d1eb3f5a81bb591f372689998511e83c"
  },
  {
    "url": "assets/js/76.29f04b3c.js",
    "revision": "2b7eab4d291f3c843546a19039f2ff5a"
  },
  {
    "url": "assets/js/77.9fc64b53.js",
    "revision": "d5284d6ab5a52429443bc1226f83340e"
  },
  {
    "url": "assets/js/78.a2a22fab.js",
    "revision": "caddcd8b4e34f6fe20aa1d5c14127834"
  },
  {
    "url": "assets/js/79.575d2ca2.js",
    "revision": "777747fbcd38b77e3592121efc7c42fc"
  },
  {
    "url": "assets/js/8.11eb4c04.js",
    "revision": "e6f1463d058e8995cf88e3027da8e36c"
  },
  {
    "url": "assets/js/80.7c907cad.js",
    "revision": "0cc8ba98eaad92b177e1f4a753672f2e"
  },
  {
    "url": "assets/js/81.9d66ec9e.js",
    "revision": "d171f7a3e006492ab6f847d6ce90f204"
  },
  {
    "url": "assets/js/82.65fa1ca8.js",
    "revision": "5dd8425b7a767ae2ffe01c54748737fc"
  },
  {
    "url": "assets/js/83.e5778419.js",
    "revision": "0e4d079136b1e8bef5e1649c2dd96584"
  },
  {
    "url": "assets/js/84.ce87e452.js",
    "revision": "4cc4bc69a5233e8f58c47e68e484d4ff"
  },
  {
    "url": "assets/js/85.06160d31.js",
    "revision": "dac412e55d2ea8c4b6b8cb7e37c23c77"
  },
  {
    "url": "assets/js/86.a8aa9f19.js",
    "revision": "af8ed1f025e05a9a3bf0a89aa107555f"
  },
  {
    "url": "assets/js/87.d46b66d7.js",
    "revision": "11dbf501c3fc4a509abef8b2054f4e44"
  },
  {
    "url": "assets/js/88.4031387e.js",
    "revision": "b92fa2256ee7d812d53e7d0f523569b1"
  },
  {
    "url": "assets/js/89.23619330.js",
    "revision": "efec51710291e30a620137f91cabb4f3"
  },
  {
    "url": "assets/js/9.87cd171b.js",
    "revision": "09ac2a291466db1d881498af5aa28d8a"
  },
  {
    "url": "assets/js/90.bad76de3.js",
    "revision": "e8260642f373cb7482bb6f6ba6aaba77"
  },
  {
    "url": "assets/js/91.92f6d63b.js",
    "revision": "45b186c11d459708c6d9da06ed0eabee"
  },
  {
    "url": "assets/js/92.0669c06d.js",
    "revision": "de99a0e0451868be78e114fb3a20aaa5"
  },
  {
    "url": "assets/js/93.2b829dd2.js",
    "revision": "9ed6e7e124fe7796e6aaa7f46d97817c"
  },
  {
    "url": "assets/js/94.e2a63bce.js",
    "revision": "2a2fb05131f87eb9b1e7a9e9eab5428b"
  },
  {
    "url": "assets/js/95.0a5429c7.js",
    "revision": "15fee68b5a4e03da7ef79fe173e64dec"
  },
  {
    "url": "assets/js/96.e8368ba6.js",
    "revision": "475ecac6271b82fb8dea3bc18e008f6a"
  },
  {
    "url": "assets/js/97.3b49c9c4.js",
    "revision": "e249b02ed9347a43bbddb7f3152bca0f"
  },
  {
    "url": "assets/js/98.029b342f.js",
    "revision": "9041ad98fc9e177185c72984ced2f28d"
  },
  {
    "url": "assets/js/99.2429080e.js",
    "revision": "223e98f8fdb83d0d36958eeecc32f657"
  },
  {
    "url": "assets/js/app.6d62f337.js",
    "revision": "923ed9f487994c6a380690f9124c5283"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "8924a09616eaf788a4b3c51fd0c7611f"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "6cf5778e21b64d5810b2389ef6383965"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "ba0bc550c92d144aed00515bf5361073"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "d6b97b7add8fe2ff2c48f64edc6194d2"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "00b4fa178bdbfc4db43cb9adcd24b3c7"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "85f7ac765b393cbea17cba2e763a5866"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "fbc192bbac65310c3f7374c6c24627c0"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "3da092f29f3525de5f9a2ecca2f02666"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "e0a60f56fdc970393a4dcd22bde137f2"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "a912d915c87320e2d1d92cb6f22cef45"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "7cca5008257c29701a2680def616d912"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "dfea6eddb526f8a48da9d59c06a0cd1e"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "8282a319a16e65041a821f4ad80fd2d5"
  },
  {
    "url": "master/api/category.html",
    "revision": "bb61e3a969e73cd5049d50f61b634fcf"
  },
  {
    "url": "master/api/channel.html",
    "revision": "c0db0b99e9bb7064d2d476741250e9c6"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "89e0cde6a669d079ea1ac1bdd9a311f8"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "39cc23ef409dd285763cf587f93fe01e"
  },
  {
    "url": "master/api/currency.html",
    "revision": "5e0ce4a28170984336cabe4ac403ede7"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "6c2d760a18664cc31834b4d6631ef830"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "dede1f4e7f4a7291b5402338c3887dca"
  },
  {
    "url": "master/api/index.html",
    "revision": "669569ddf758e572a315113b27a1016d"
  },
  {
    "url": "master/api/locales.html",
    "revision": "b827500f9db25f3f6fb57c556c3e35b1"
  },
  {
    "url": "master/api/media.html",
    "revision": "5d2fc12ab342a8180b85fb150061480e"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "113d229da805a7f4c060afd37b8338aa"
  },
  {
    "url": "master/api/product.html",
    "revision": "aa334017d12c45cbc7a12f4f4502493d"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "d9b7ba21797ae3c655006556d83cfecf"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "f786708c68337bb979b98c0b3ca376a6"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "6ce0ffaa3dcbc38c5b277d8fe3b1dd5b"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "40476721ef7a446bb9a3d1608711cf18"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "f5340c64e47c3aeaabe325b77885e7bf"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "0ae140809bde0eb34d2e24974ab09c9e"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "7dc9854bcb21e39270cfa2d1e0e2c813"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "d99388ee218b10d3bb98356b2ac3c06e"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "427d5c6716a40cb3db09720e7cb92d9d"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "1a7ccebd3c92cc847e55cd539dc59ea8"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "5d6d43affa54d667fafa57693cda8961"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "ed756057fe4828596b395bd05236300f"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "e08152dea5b1e2215b1a862b82f2bcbe"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "f6f7f7acc86876d59544d0ef5d6a0b6a"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "507de66f3edd335be700e5d197792286"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "02603fa2170a7d80221c06ed50ff7523"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "c1436b69aa072c2e9341613b2e1cdb63"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "ff42e0ad8d14458d00cc32fad1be80dc"
  },
  {
    "url": "master/packages/history.html",
    "revision": "0539b94530c1248ffc63d4ca5134a474"
  },
  {
    "url": "master/packages/index.html",
    "revision": "9cbad433348cc35ce410bab3c4890161"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "50b76e0e05416a4d9ee49e370f2d2d98"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "341dd9028e55e66c5c113eaaff0d9f5b"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "07e37324e4e450d7bc1069cb09aeea03"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "50af7b44aeec43249b521da5e7699cf2"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "fe2c76b245d923b738fa92f2f509acc8"
  },
  {
    "url": "master/packages/views.html",
    "revision": "b5b5f4a5c531c4f966026a6aeb94ba95"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "252d5100541268ca9f7ae92078031eb9"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "4de7df06f1a7168354546e64145969bb"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "4ca0d97797d33c46eadc1c7c882e6728"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "7b86b450bdbceee0bc4fa91a09a32894"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "e4cda9279edd8a6b343ce738029c3117"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "4346a2ae1fc62e8797b57bcbd3f50871"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "08d562348792f7dd7d7e65db574bf195"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "b8d77e90bfbd23e2c73d0f340dd50dcc"
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
