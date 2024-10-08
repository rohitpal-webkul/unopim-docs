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
    "revision": "952594522e26e31d98aadbe3b80f8398"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "258ac9aae99f884e01526b2f33ec917e"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "709fa676fda25ba6fdc6f8bb811a6df8"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "4483dc873f41441b8c51918482037a6a"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "7fef7cf6a14c6d17eef675e4acb2ac70"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "69b5f0a28d62535e3f13b1452054dff9"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "0cff724c6fd314a3fb5a6dda22268dab"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "eed8da49cded41de6b5ce17c6ef378be"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "f1ae0c98ffde0ff9162959eaf4f6553f"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "e77ca4e0967a59fa77b01345ef70ac6d"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "ae925f42d3be8d6cfcbfda20f2412d47"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "4a215b026849cb8384f4f666adbd4620"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "f00cff0c04431cd6b37b3719883d92e2"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "5fcbb55588f4c63c276812e6be20ba75"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "21fc7193a30856ce8829d9f22f8ca8f7"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "91c65cabf0c6b4b0c2c8413f79d903e2"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "9e8d55b59903c9fea702f2c424a36373"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "b4666f621083a7cbfb5c80764619ab5f"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "e418330d5d8869c84a641bd2a4787300"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "1c94100b4829d4e8d8bebeaecad537b4"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "7d44567492b464e2259af054e1214136"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "b82a802d42209fe00ced60b5f8150331"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "5260e7aafbc57598b3b1ca034c89f286"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "6110456a6e990d55e81fd305bce69b1e"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "9d6d362cfe34bfabf95006d2ab6c9e87"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "48573565586c57cafe733f81f93ff329"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "a4cab3a365f33354a453359f8b4196d4"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "4bb9b7a4ae33a8785488dc6c1a9b0eb1"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "c3a4376777dbfc16beec829621e41798"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "0eb5f7a6af3e8cfa782247e98866b3fe"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "d8542c1c1d6c7cc5c4ee895e10aed677"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "46da6013e23db78fe23e01ab5cff002a"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "df9f978fa363da0f12f2187993f1220b"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "9c3a4247d6597ae82ffac82cc79fcaf3"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "c083c9130767b6f8eea5bf25d87b8884"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "5694e8c945f02b566cec7a7b30817be8"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "4f723360773984274864e3534a8f2a2c"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "a12f5f6113dcd3c7b697deef8d772182"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "4d1f5d92acfb816469e1233c622253c1"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "e95805da164d751d4d5b788479490986"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "bf8e77c0212c8d47c06ef8af9bbce0a7"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "2960b84a1424fddb26c2280f5d5a6125"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "00999a93c30951271b2eeb1746e58350"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "36fced8d408eb311b05fd138119e7937"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "2860d1f4ad38c31f09cb47921bfc7d29"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "0fa8912f078ce4998dbac14a4e51dfc3"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "a96e558dbbce8dc62c5253a8139f8464"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "d8ab66d805d4c7f4f1625f4719f0adec"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "bd0c6d90e0b7ed01b935bd29d48862cf"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "bc5535a4605ea39a8db68c093799e929"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "fe3cd3bb91252e45013d5785524257dc"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "315d44f552c903b5cde9db80e3f20e7f"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "75462bf044857d1f13a92592145de133"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "bfa8768df614df35f2782290c175b47b"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "3c0b6eedf43a7d1f4d002ac4e36b6023"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "3697230a586d760d0f1777131cc26859"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "fa756f921f3bf8edc12f1e3e1b7610b6"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "b7891e89573b688736c3ad98823d38b6"
  },
  {
    "url": "404.html",
    "revision": "ef604e0caca249f62290ac9469ee976f"
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
    "url": "assets/js/102.45392628.js",
    "revision": "bcb325a57c04354c68e3fd8ff9275293"
  },
  {
    "url": "assets/js/103.a9f2701e.js",
    "revision": "e9ebee71e285b9a4e39be8a3546e8919"
  },
  {
    "url": "assets/js/104.a860f74b.js",
    "revision": "275c89960585bcd0e062bec285fdb602"
  },
  {
    "url": "assets/js/105.654a844b.js",
    "revision": "725bb31112328a5c6463609435d428bc"
  },
  {
    "url": "assets/js/106.2621e430.js",
    "revision": "4f664fa7ed8fb6727f8f48805a4c11bb"
  },
  {
    "url": "assets/js/107.53e00172.js",
    "revision": "3f2efa92fd1e6de0e799a3935bda2285"
  },
  {
    "url": "assets/js/108.20b4dc9a.js",
    "revision": "be35a636a23da08d10333a181bdecc49"
  },
  {
    "url": "assets/js/109.3ccd4823.js",
    "revision": "b66eda20398f93e4ae676f2f9371e22f"
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
    "url": "assets/js/111.ce06f4d1.js",
    "revision": "bee347143473d6566ffce205e85d50b0"
  },
  {
    "url": "assets/js/112.d983e8b1.js",
    "revision": "a2b6ddbb10b18ed3a65db73d2a7a1f80"
  },
  {
    "url": "assets/js/113.98615416.js",
    "revision": "131cbf1a716e1a026f7e7835bcd3e301"
  },
  {
    "url": "assets/js/114.8dc4f273.js",
    "revision": "64363f5abd5eef63cdadd46f3001c23a"
  },
  {
    "url": "assets/js/115.03b42e17.js",
    "revision": "b1e58ffa51f1359e1759a173b4011cfa"
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
    "url": "assets/js/118.92053796.js",
    "revision": "77686511710f1eb12782d898e41d4d3a"
  },
  {
    "url": "assets/js/119.8a4aa2f5.js",
    "revision": "576eb5b1ceec5db85199a5463c0990f4"
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
    "url": "assets/js/125.421ea950.js",
    "revision": "497318a50d735150e87c6d1ce348701e"
  },
  {
    "url": "assets/js/126.cb0112f5.js",
    "revision": "1f717d9b55ae9cd2bbb68b64067d87b9"
  },
  {
    "url": "assets/js/127.ab2eb73f.js",
    "revision": "1e0c586693d2e8da5aae946e799b9ae5"
  },
  {
    "url": "assets/js/128.6805c774.js",
    "revision": "7347fe175e4c8bf9b4a2d576398459d3"
  },
  {
    "url": "assets/js/129.2d42b4c2.js",
    "revision": "87c34b0900a141e665e81c846918fdfd"
  },
  {
    "url": "assets/js/13.33d3c53f.js",
    "revision": "aee1b4910f1e1a1ecb67446301308c4e"
  },
  {
    "url": "assets/js/130.3b57e21b.js",
    "revision": "95a0a05e2e820af92f80071e35d0e219"
  },
  {
    "url": "assets/js/131.717d0524.js",
    "revision": "4eb122c0df02e08f34fada3e2534dc88"
  },
  {
    "url": "assets/js/132.8c924bc8.js",
    "revision": "10d8caf7cecef172efb2feca9cc60bfd"
  },
  {
    "url": "assets/js/133.c476e6ba.js",
    "revision": "e6574caf57795c55f71d3915b564bc9f"
  },
  {
    "url": "assets/js/134.e7e0c315.js",
    "revision": "62da87443ee25faf12d200f8d79519d0"
  },
  {
    "url": "assets/js/135.be23774f.js",
    "revision": "3272a4cd8d538dc0ec184e14cd407e99"
  },
  {
    "url": "assets/js/136.45392de5.js",
    "revision": "0736cbc973cae17003aae99ec472493d"
  },
  {
    "url": "assets/js/137.0be95bb3.js",
    "revision": "e9ca7d567d764de6bb1addd55f255989"
  },
  {
    "url": "assets/js/138.1e58f9fb.js",
    "revision": "b3019d3ebc527b654950742931ee111e"
  },
  {
    "url": "assets/js/14.8828b582.js",
    "revision": "2002ff8361fa0734a700a82ebe76f702"
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
    "url": "assets/js/23.eb8e879c.js",
    "revision": "3f4ec86e04de5c32f6999915b0a7717b"
  },
  {
    "url": "assets/js/24.12358281.js",
    "revision": "f916ba5b993c016db13557cf89c2bf3e"
  },
  {
    "url": "assets/js/25.de5b17e8.js",
    "revision": "126b65dc047dd5dfe1b04bf81167935f"
  },
  {
    "url": "assets/js/26.3ae161d0.js",
    "revision": "fb2c5c925597c9a08209e696c5a9e10e"
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
    "url": "assets/js/29.f6e3c7de.js",
    "revision": "2eed616963f1e70c85d674783faaf015"
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
    "url": "assets/js/31.d6493165.js",
    "revision": "dba4426d8d6ec6c87fd60ee4a83117b2"
  },
  {
    "url": "assets/js/32.29dc9fb0.js",
    "revision": "e09e446fdf02a0d605d591b539ee1f85"
  },
  {
    "url": "assets/js/33.9a7ab2dd.js",
    "revision": "06613d4119bb53062dc3d5815f86e7d2"
  },
  {
    "url": "assets/js/34.1bf9e221.js",
    "revision": "deb33007fef54c09a75aa6d086e334fe"
  },
  {
    "url": "assets/js/35.2202edb2.js",
    "revision": "a1a113e513370fa02d31a32f0a993110"
  },
  {
    "url": "assets/js/36.0008fb78.js",
    "revision": "21f2611a05bffd2f12e4a9b4aba4e3f5"
  },
  {
    "url": "assets/js/37.d6665061.js",
    "revision": "13352aae38d9cf55a2c5b0e57dd2f64c"
  },
  {
    "url": "assets/js/38.7e41fac2.js",
    "revision": "dbe7932445951a2b0d01b066b6dda1ed"
  },
  {
    "url": "assets/js/39.3b17accb.js",
    "revision": "f36b38d900bfa320025612bd1aa6ea64"
  },
  {
    "url": "assets/js/4.8063a9b6.js",
    "revision": "98ecdc2047bc9fb2330c842d05d9372d"
  },
  {
    "url": "assets/js/40.516d1fa0.js",
    "revision": "a46639e8ac76d15f68ca33a25018b3a6"
  },
  {
    "url": "assets/js/41.248da60e.js",
    "revision": "8339432826ef3ad154635dc8a46470e9"
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
    "url": "assets/js/46.bd7446e3.js",
    "revision": "fba43c52e018f6fb340f7eb0b1cde81b"
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
    "url": "assets/js/49.bf8862c8.js",
    "revision": "ae4f79aaf36995e43feead0935284fb9"
  },
  {
    "url": "assets/js/5.5873d029.js",
    "revision": "1a8e799eb717b41b19039adaf73f51e6"
  },
  {
    "url": "assets/js/50.133aa893.js",
    "revision": "0cf9c83e92965bca7b206be0e4f086b8"
  },
  {
    "url": "assets/js/51.a1ef1742.js",
    "revision": "4cf63a14bca97b87d06d838a596b84d7"
  },
  {
    "url": "assets/js/52.e956e178.js",
    "revision": "b84dae18e27d24f05254ae11e96a5860"
  },
  {
    "url": "assets/js/53.e78f3b5f.js",
    "revision": "bb813eb06b9b0eb5af5b599212f072a8"
  },
  {
    "url": "assets/js/54.5bebd109.js",
    "revision": "d9ebd5073e374c62232bbd3970130d88"
  },
  {
    "url": "assets/js/55.c5ff5c06.js",
    "revision": "2e913301dbe6675f7fe921a3532a7e18"
  },
  {
    "url": "assets/js/56.21b02b4c.js",
    "revision": "25b5d5ce991b60c45555bdd3555b419b"
  },
  {
    "url": "assets/js/57.97d732cf.js",
    "revision": "920719f13b436a4dceedab0db40b9b18"
  },
  {
    "url": "assets/js/58.365da79a.js",
    "revision": "28f106dfa697cf5e28f288b48d9cf95f"
  },
  {
    "url": "assets/js/59.274d8716.js",
    "revision": "3f9f46a386347720579506206d9a7448"
  },
  {
    "url": "assets/js/60.74589ce8.js",
    "revision": "7b7b18921f0f8a27d57b3b7a06a137fa"
  },
  {
    "url": "assets/js/61.e4eb85b7.js",
    "revision": "8e82c7118c861e0bab1d707d6fba71b2"
  },
  {
    "url": "assets/js/62.3762461b.js",
    "revision": "bedcc4b65020c57a7d076aa07e3450a1"
  },
  {
    "url": "assets/js/63.8d3be896.js",
    "revision": "154f6cc44ed576f7b7a2d6a4bef25b12"
  },
  {
    "url": "assets/js/64.d6c2f4f9.js",
    "revision": "f69493c1d7983b3c266b418d7243aeb1"
  },
  {
    "url": "assets/js/65.20e384c0.js",
    "revision": "a24288e3d9a683c3d952f40075200472"
  },
  {
    "url": "assets/js/66.886bfc85.js",
    "revision": "3e075cfc04bc7ddeec1f54276b975ba4"
  },
  {
    "url": "assets/js/67.fff305e4.js",
    "revision": "de1cace0e88a4f62f3497dc756de36c1"
  },
  {
    "url": "assets/js/68.c4d18fab.js",
    "revision": "ea722cd1b8680fa3b0980054a5a934d9"
  },
  {
    "url": "assets/js/69.e4133ed2.js",
    "revision": "a1efee2dbfa2f60389be0d72f41add28"
  },
  {
    "url": "assets/js/70.4cc00edf.js",
    "revision": "059a7ece76636de5bfb585421f3e5b95"
  },
  {
    "url": "assets/js/71.fc163cb5.js",
    "revision": "aa022fdce6414f097c2493f49050f569"
  },
  {
    "url": "assets/js/72.0c660002.js",
    "revision": "4d7abed050db837232d4cafd99bf20d7"
  },
  {
    "url": "assets/js/73.c6016aef.js",
    "revision": "57d8beaace27066702909ead373ab566"
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
    "url": "assets/js/79.e35de409.js",
    "revision": "1c32bd1683b6c09df2f2b6686fe290f9"
  },
  {
    "url": "assets/js/8.11eb4c04.js",
    "revision": "e6f1463d058e8995cf88e3027da8e36c"
  },
  {
    "url": "assets/js/80.024e3aa1.js",
    "revision": "43bd0f79c5f9fa0a6c72eb441cb5e2f9"
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
    "url": "assets/js/90.498847b6.js",
    "revision": "dff1449ed31ab5263079179d29b25552"
  },
  {
    "url": "assets/js/91.92f6d63b.js",
    "revision": "45b186c11d459708c6d9da06ed0eabee"
  },
  {
    "url": "assets/js/92.dfe3d68f.js",
    "revision": "e26b7b48440eacb83d7806ed79400337"
  },
  {
    "url": "assets/js/93.858f12e7.js",
    "revision": "7bc70f9f82d3d8e42038aab8de50e5ab"
  },
  {
    "url": "assets/js/94.1c3d665f.js",
    "revision": "1a9dd954248d4c260c4396d59dd212cb"
  },
  {
    "url": "assets/js/95.d16fe9d1.js",
    "revision": "98743917e78609b51496ae40c129d950"
  },
  {
    "url": "assets/js/96.dde44de3.js",
    "revision": "3cf730de53db71db10e7d663e230043b"
  },
  {
    "url": "assets/js/97.0d1eda99.js",
    "revision": "2ca6f7aa348baaa82f7365a6a1241636"
  },
  {
    "url": "assets/js/98.33089bef.js",
    "revision": "c62e1e9c409c0695553ef44c01c6c4ff"
  },
  {
    "url": "assets/js/99.2429080e.js",
    "revision": "223e98f8fdb83d0d36958eeecc32f657"
  },
  {
    "url": "assets/js/app.db2c3985.js",
    "revision": "245fa9ae7398d6a477740fb970a72450"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "cfbb5925deccfe6625a85e557968c6eb"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "fbb4afad97fb87980274b6cf792f4109"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "95c859625ae0e2c001093419602458a5"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "e01c7fb40ae34f27367965203c916f48"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "0bb39a0207c387a68fd6d283fdd31fc1"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "216c5baef50c31a75d5174797ec4d2e3"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "4ef7c64d81ee5cac9a27437e88e50fdb"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "a6af382167176a6ee73acfb21bf1b1fe"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "fda4284545180b698d8dcae9324d7412"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "ab212410a12a054d38ee5bdee5752071"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "75abccdac0a9d89bae8147a0fec06b5d"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "d774108fb2097f4c62d3698dc836aed6"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "4380b4388b327bd7b02429d5d3db7eb8"
  },
  {
    "url": "master/api/category.html",
    "revision": "301941b9315c9c6646c6d89e80458f42"
  },
  {
    "url": "master/api/channel.html",
    "revision": "012a9d5803d830648ab2a43e20e68afd"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "bea43d656524d5cc5db7f990e0bba71d"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "b014294a8d45d33b7c874eebbe412f72"
  },
  {
    "url": "master/api/currency.html",
    "revision": "4bf9429da91908d9af0fbf6d8dc97b4e"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "2671d65269f680ef5bf1e1ebbe958f00"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "3ef0af2960f93f61688a17a97795178d"
  },
  {
    "url": "master/api/index.html",
    "revision": "a9da8deb6cc891f95f8506a66315ea86"
  },
  {
    "url": "master/api/locales.html",
    "revision": "96cb8e5745baa438d514b3bffb4fbc5b"
  },
  {
    "url": "master/api/media.html",
    "revision": "a2e06a54416d0200730fa1f66e501c37"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "a046b727f5e65e431048530b0409f4e0"
  },
  {
    "url": "master/api/product.html",
    "revision": "29df7bd91128d99d0de16fe3c613f848"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "d23c4170a4a5fac3f47569654100f464"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "168620e2cb14113504508e63c0db9efb"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "832fcdc90bcb3eab7b1c8c0eecf4aaa5"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "216227fae3699693ffb1dca4708862a9"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "0bfb060ba350126cc18ab8eaae625704"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "1854d8c6b171be14917d32635c0c7390"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "e1a5c3b9c5d5ba1290dd5aec251a935c"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "d6a80ff54c050580d8eafbe622a424f0"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "ed42d1a4fbd518abf68f8c3766872870"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "cd22bea022840a364fd568e635dcbb43"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "276c672454241253726b058d40a1727b"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "660108829019004b0149014e475f844c"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "7fd82c9179137bdbe4f5dcfca7236834"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "2b1aff4918f15964674842dc270c3a4a"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "c0b0b839f717b7becdbef8230f676d44"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "0381048551746467129554dde4d431b8"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "f1e9caef8654d48890fcc7dc0492e03a"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "02a579f2469fc6c11c88b1184d925484"
  },
  {
    "url": "master/packages/history.html",
    "revision": "29453fb9d9b79f8698a57647b02b11b7"
  },
  {
    "url": "master/packages/index.html",
    "revision": "c43a3bceac3aebab83a32f9b909cc137"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "6c04c84b58903f6da1f55dc2a574b652"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "d5b26ff32576dcdb344d4cc19d3fbae0"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "dc6a5f4081636fc93f7dd5db9caee157"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "2ca320d3156a2057ff2c0b61e2ef6d6d"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "6767cc5d31ca5ae676e24fa9209c89d7"
  },
  {
    "url": "master/packages/views.html",
    "revision": "5b62322465ead17f407430a52700b481"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "27bdb6b851452de87993a0fc0e0ea992"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "f7ee291639504b3f994d87031ff9ce34"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "5c73f920bfdbef6771cc742f2cdfe403"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "e84f97a2e6ee5b95c3fc65c667336635"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "731033078ded35b8cb621e883bb04b41"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "4c7a01df754b2b90ae0d2e1aa26440ea"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "25b82c7923026b1f6e3e64f5af8fdf21"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "79991aaa2a4213dd87d1b2a1e6215be3"
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
