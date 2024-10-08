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
    "revision": "33a3296546d2177b837b8bb2e30bfc4e"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "229614d3cd953f0011cf24f5bf83ff77"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "c56fd9b732ca2959992d7bc823769c70"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "f3f20709d25a4cc5247a7e88abce990b"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "35a3c98e8bac1f4a04443c6e555eb813"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "59ae7c138b9fb34bf3fd7d13c8f4ad37"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "af8aaed0ab224b2246de15ba147b4cdd"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "a8100a190d43e2589adb2d9322bfa9cf"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "584d6e20f20795944af9339522e98e1b"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "9384c90c7fa0ee3e799cc85bc42ece97"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "9a20750fd703c3fee78dc93edb5711e9"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "f150ecdbdb0537696fb943d8352d8345"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "b20969b84ccd23300baec5d6a2ae8101"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "c24e56fa2c5ee740ab7f44505550a975"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "b2739214950acfc0092c4dbc603397b3"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "102b483f183197860d6667fbb8087bf8"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "530ff688e5ae65b5f00cb188c7297876"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "dc36f0e5fc6e523d3d40668c98b5b80f"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "8e84a0a6e974d954e4d9a54db41ef6f3"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "d551dfe8cd5ea32d20c77f96dbd600eb"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "bc39dbc84822d148ea2db6ad9025c7b4"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "c0f7bb7de422b926a7789a4a330fa43f"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "86b7cb14c45650277c7e4b4101bad33e"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "1203c5da5b596f319c8e0bc22447704b"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "aa9b301c352665b000ef2c88410e72ee"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "869c537b17a8a494f1659bda1bd7c280"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "3becf1278d68cae7e6e4ed9802701513"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "fb1be6083e5d10e16d9814b1665eb9a5"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "c8baaac7926bbf6717d078a076e9a107"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "338c8a36cc309cfcfd6064894b5dff40"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "748814f169caf118d6a01171b61f2ef2"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "ffafcf7c1b13adb73591103d88766ff2"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "39cf42d2dd289908696d5a64a04eab17"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "77e11ab0070d1823e036441ba581398d"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "fd12193bbf814d188510d2a72a9869e2"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "37205d04d3adf22a70115dc1fcf571a5"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "953e26a6781b7468becb4b3810a00e35"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "23cf7e5ae540f090a06992d853bd2eb7"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "fbf084c44684678b924851d0364d91af"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "7d49d483af0c0cebcaf1dcb61240fc9a"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "be46c6912675ba4a1b829bd0f4cfd8e8"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "0c784973fb916256b379bfdad5a12996"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "f7602c26dc0a00918d29324c6daf08a3"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "572074f9199f95416418581f1666fb3d"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "42401d2264cdf5b8998c6b9a5b51460b"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "a11cf4d1f19b34b19f5b137e64bda4f2"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "a0ccf5bc12690118c380dbf4582294d2"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "7deb0e0d725f67af16495a66d1686456"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "3eb69ded620c740eabe61056b9b576ac"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "fbe54f7e2cf2dee16ab897f814373642"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "2114564ff1f2850e78791643df90b6b8"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "c7dd408b4294ff05c0573a8cb85a2478"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "dc2475978a3d10345e4592cfc661bfe6"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "16a3a375567ef1ceed0e3543941e5fd4"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "01f9c311b8042dcffea6dc1eee7afd82"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "a32da69cfd4111c3176759ce6516408c"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "fd986da82d7035a64bd3353c2a45d026"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "82faa29d57dfa31cebba2908ea2dc0dc"
  },
  {
    "url": "404.html",
    "revision": "37f05ce763ae519b56a1e98f10f4ce59"
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
    "url": "assets/js/100.0829c2f9.js",
    "revision": "46aa59aae123dc4233fc0fb134f6dfa6"
  },
  {
    "url": "assets/js/101.239746ae.js",
    "revision": "999df95f3b0d1f84890904acc00a7ece"
  },
  {
    "url": "assets/js/102.b16a6969.js",
    "revision": "43686dbfe5e5cab05e0423df4f4977d0"
  },
  {
    "url": "assets/js/103.0b78a1e6.js",
    "revision": "24452b7b5724fe4cff329abbe371d5da"
  },
  {
    "url": "assets/js/104.a2be104a.js",
    "revision": "2eaee360c4963edd83dce1e1bbf446e8"
  },
  {
    "url": "assets/js/105.da24dae5.js",
    "revision": "8f427884fb9b7119f2e4d66730ed35c4"
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
    "url": "assets/js/108.67f07a9c.js",
    "revision": "dc76838290031efe30ed413dd5786b6c"
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
    "url": "assets/js/110.37570d8d.js",
    "revision": "da340189d5c52ff6312da65ff675d981"
  },
  {
    "url": "assets/js/111.ce06f4d1.js",
    "revision": "bee347143473d6566ffce205e85d50b0"
  },
  {
    "url": "assets/js/112.e20454de.js",
    "revision": "7eecdf107677d532e4bd25bea77a00cc"
  },
  {
    "url": "assets/js/113.d4ec834f.js",
    "revision": "48839b8c368696258af223522dca9e1b"
  },
  {
    "url": "assets/js/114.88265cb5.js",
    "revision": "e8d640ce3b3b614b66f63700b0a18b2c"
  },
  {
    "url": "assets/js/115.aede2aeb.js",
    "revision": "0d6fd2f990ae38f6bfdf1f3d6b314044"
  },
  {
    "url": "assets/js/116.e1feb3b3.js",
    "revision": "101df4d5ebef4f8a246963ba357a1b4c"
  },
  {
    "url": "assets/js/117.b1feba6c.js",
    "revision": "5ce9f9c0f2515aead6f3e8feb2fb85f9"
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
    "url": "assets/js/120.7898f38f.js",
    "revision": "11929e60cc313041330f14260a2619b5"
  },
  {
    "url": "assets/js/121.c715319b.js",
    "revision": "0b1982a1c5fbdd6a2c7b796fe598ae52"
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
    "url": "assets/js/126.30bebadb.js",
    "revision": "beb700b3288270601dc0eb58841afc8c"
  },
  {
    "url": "assets/js/127.2e776bc5.js",
    "revision": "8c6db3c7689b7e713326c735264eb4ec"
  },
  {
    "url": "assets/js/128.c23f39dd.js",
    "revision": "7d072e76ba62b7f85d33f5eb46821453"
  },
  {
    "url": "assets/js/129.2d42b4c2.js",
    "revision": "87c34b0900a141e665e81c846918fdfd"
  },
  {
    "url": "assets/js/13.85458a12.js",
    "revision": "798f4926db6e3c82bdc6f2ec4af362d6"
  },
  {
    "url": "assets/js/130.3b57e21b.js",
    "revision": "95a0a05e2e820af92f80071e35d0e219"
  },
  {
    "url": "assets/js/131.c66690d9.js",
    "revision": "ca6e6f39e05dfa3d9d730e3c6e4dec4b"
  },
  {
    "url": "assets/js/132.a5ae4578.js",
    "revision": "0e044a0af0768186d607b5413cad3a37"
  },
  {
    "url": "assets/js/133.a5290850.js",
    "revision": "610aaed70b84a89be9f87960719ce47b"
  },
  {
    "url": "assets/js/134.e7e0c315.js",
    "revision": "62da87443ee25faf12d200f8d79519d0"
  },
  {
    "url": "assets/js/135.d0997eef.js",
    "revision": "842a5784ac4d334dcc9d6740a4c36cdf"
  },
  {
    "url": "assets/js/136.f6e45c4e.js",
    "revision": "e10fbe996be2bd6c54757bfba20209f0"
  },
  {
    "url": "assets/js/137.e6bf9794.js",
    "revision": "6df5daf37973cad4a9382060f69e5d23"
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
    "url": "assets/js/27.4d48509b.js",
    "revision": "0fed15c49194ee108f37c7fc44bda431"
  },
  {
    "url": "assets/js/28.99989fab.js",
    "revision": "e29afd1b1209227929327911274f950b"
  },
  {
    "url": "assets/js/29.6c218369.js",
    "revision": "62fbdc97e4f73a80b6e929f7e2bf8e90"
  },
  {
    "url": "assets/js/3.c08788cf.js",
    "revision": "9a5397d300c118eaed270de3385d25b0"
  },
  {
    "url": "assets/js/30.097a5672.js",
    "revision": "185e9412ac50a8a95bcb4a9bdd58cc4d"
  },
  {
    "url": "assets/js/31.66de6372.js",
    "revision": "9fecc20a3b743e34e16c252d6f559eff"
  },
  {
    "url": "assets/js/32.471dcd3c.js",
    "revision": "37650844ba4713270d56b8bac42f61fd"
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
    "url": "assets/js/35.dccc2d11.js",
    "revision": "82a89b0c03f69d6eef5f5ed3bbdd0f92"
  },
  {
    "url": "assets/js/36.edac66d2.js",
    "revision": "43303affee1249f950656d50daafda5e"
  },
  {
    "url": "assets/js/37.d6665061.js",
    "revision": "13352aae38d9cf55a2c5b0e57dd2f64c"
  },
  {
    "url": "assets/js/38.537b489e.js",
    "revision": "aea0e9df69d5ea00b09b16ad91c67e4b"
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
    "url": "assets/js/40.85e8dd26.js",
    "revision": "86e9541d5e707c58703ea9413e029812"
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
    "url": "assets/js/46.94f7d800.js",
    "revision": "6b1b492faf5d2841b590c89dcb0169d2"
  },
  {
    "url": "assets/js/47.4f826e60.js",
    "revision": "340a81fe181750d719c874c80a322df1"
  },
  {
    "url": "assets/js/48.17cc51a1.js",
    "revision": "2e5bc79c250cb4df7951896770ecc3a9"
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
    "url": "assets/js/51.586774e0.js",
    "revision": "246e7c28ebd943e8d5c6754c9b0c8871"
  },
  {
    "url": "assets/js/52.315ab57e.js",
    "revision": "49ead77f07e427c7a85176bba91a3ecd"
  },
  {
    "url": "assets/js/53.f476d104.js",
    "revision": "8cbe324b975db1dca8f1f0be2b6586e7"
  },
  {
    "url": "assets/js/54.e38aacf0.js",
    "revision": "0fd4b4ce040edc4db6ad39caad7fd486"
  },
  {
    "url": "assets/js/55.fe9a7f6c.js",
    "revision": "58be13a0da7c043a0ab0f11424eff7a8"
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
    "url": "assets/js/62.ccc022cd.js",
    "revision": "226c974b8dedad19868f0c7da02711d1"
  },
  {
    "url": "assets/js/63.36eef7bf.js",
    "revision": "b083d945fca639a47f51fb647f24138b"
  },
  {
    "url": "assets/js/64.6ae077d1.js",
    "revision": "aefd5015f5a88f37ef6085dbbb42bc35"
  },
  {
    "url": "assets/js/65.e30ee8d7.js",
    "revision": "3341276cd8856e9db90ec19c7fed9291"
  },
  {
    "url": "assets/js/66.e6118756.js",
    "revision": "9066213a2ae49c04a4b1100ea622c0d6"
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
    "url": "assets/js/76.d9c26b0e.js",
    "revision": "83a69164059a29cc8fd948948892a385"
  },
  {
    "url": "assets/js/77.5c4122f1.js",
    "revision": "1060158f00e293ebcf6db5f70316cf1a"
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
    "url": "assets/js/81.8bce5052.js",
    "revision": "7dda177519ac772cdaf2b80fa03dd49f"
  },
  {
    "url": "assets/js/82.0f7918d0.js",
    "revision": "cf7202ae3782586311ee422754479978"
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
    "url": "assets/js/86.cd4e818c.js",
    "revision": "6ab83b1af87cbfafd3d56a8894e5edf0"
  },
  {
    "url": "assets/js/87.bede7d8e.js",
    "revision": "c8bebc3e4dd5a777fa952fbfd269038b"
  },
  {
    "url": "assets/js/88.4031387e.js",
    "revision": "b92fa2256ee7d812d53e7d0f523569b1"
  },
  {
    "url": "assets/js/89.a420c537.js",
    "revision": "cfef1d9140e99e98937389f6148f8515"
  },
  {
    "url": "assets/js/9.87cd171b.js",
    "revision": "09ac2a291466db1d881498af5aa28d8a"
  },
  {
    "url": "assets/js/90.ee9245b9.js",
    "revision": "f68a855c8f272201337806fd555b88a4"
  },
  {
    "url": "assets/js/91.10de2c65.js",
    "revision": "dabd27559ba08add78bb3b3fb47b1ac5"
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
    "url": "assets/js/94.e2a63bce.js",
    "revision": "2a2fb05131f87eb9b1e7a9e9eab5428b"
  },
  {
    "url": "assets/js/95.c7275877.js",
    "revision": "ce0b3f076f579a25ab4ed34a7de873fd"
  },
  {
    "url": "assets/js/96.260e3598.js",
    "revision": "e0e33a9121d76a8e3be9efb9b8e8cd70"
  },
  {
    "url": "assets/js/97.3b49c9c4.js",
    "revision": "e249b02ed9347a43bbddb7f3152bca0f"
  },
  {
    "url": "assets/js/98.2ca351a5.js",
    "revision": "96d44b4145c211489ba81943b4a864b9"
  },
  {
    "url": "assets/js/99.683d859e.js",
    "revision": "d93b28cd7eae8f1cf690b191e3a85db1"
  },
  {
    "url": "assets/js/app.22ed0380.js",
    "revision": "930ac9fa9016b5b038152b0e24e40553"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "18635c1147d186ead280ff4437613e77"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "f2c6c684b1f046f1bbd28b572afe7434"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "752dd48281efb3b3c4d1aa8e0d85aada"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "1035fd993e1bbd2bccf772b642b2a4ba"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "045a315676de910427597b3cc9d5fee9"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "5e6e10fef2b2e49a553e03e390e7a23f"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "af8a1b7e051f10b2570d62ff081643cf"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "e93842d36725b5d917a44a61085d9bb1"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "69389588a5dcb7e421d7f7e24b999a74"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "387e5080df802135aad944585642940f"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "f049eae31457c1a447ebb530438aba5c"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "24825a02f2f5901b64734b3e80e134a6"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "221ea2418e30e079c9337015548e7a50"
  },
  {
    "url": "master/api/category.html",
    "revision": "62b560ecd6545514fc8961061ca9ed6d"
  },
  {
    "url": "master/api/channel.html",
    "revision": "825f54638f4e9e39248f8616394fb6ca"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "9cb8028d899e5aebfc27a01c4aa85819"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "59e6394a53b2a722272455be782f2c1d"
  },
  {
    "url": "master/api/currency.html",
    "revision": "3d15820569ff32d8bf9ecd8ed901fe5d"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "767a2e1f10e5c95bfe8e887c1ae34e7f"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "de977525b474ba75805b40df0d3ec8b3"
  },
  {
    "url": "master/api/index.html",
    "revision": "0822cb8224321f8327eceaddf21f3d7b"
  },
  {
    "url": "master/api/locales.html",
    "revision": "bdba39e6b6d89b8dedfdba8147e46763"
  },
  {
    "url": "master/api/media.html",
    "revision": "6d8b0dac182ec63de03ad1c6bc8cbf84"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "d1e4fae7c01136cfd79df5e90ab6e6ef"
  },
  {
    "url": "master/api/product.html",
    "revision": "09e94d6de9fd52effbb2e7ea1f367d12"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "f8269f753703fbdd1af75f020aef6d07"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "036403055f2af0204ce33707f36b12eb"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "011f978c0fd5a48b1411b74e6a1eb993"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "26c59c204c16e78a5242cabb5e182e88"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "3c7cfd6db382c6d7046884d956f499e5"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "5505358a08527d096ff120009db9f25a"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "d63a59a8e52dbb3edadedc3d54fa6397"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "895824f8bb3fd6fda5dd150c7acb16ff"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "efa226d0b20f5c0c39897b9b64985f8c"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "81792404f0fc4be56528c2814bfd5919"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "d7a47d7b34cff80e69aa96cfa88068e5"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "28bb078c06bea11c309e1b5b0c0186f3"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "c052bb9af3a036a32da68f6639fd84d9"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "2ceeae1de1502ea080a547414d7b95c4"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "cb0014ffa156b89b667ae76bb458ca28"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "203c4ec0c7e1e7a9e74160b76cf440c5"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "d84b612632d137311ab8a565b7dfbbb4"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "e47f9c5c6d483dc3a037122f43fc269f"
  },
  {
    "url": "master/packages/history.html",
    "revision": "5bc041c99b0db605f832e77a527e1d7f"
  },
  {
    "url": "master/packages/index.html",
    "revision": "285f362f167c7ded6b2b4efaa46e7162"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "3b4032263d57518914fb5eb60cb665c0"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "7e7a85ddc4e8237b140f29dc74f79d13"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "f61f9e6a082726181907183de181b1f1"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "ab27121844a0ea4fd837335bff28e823"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "9b51aa5b5e4d853d25c458c5892ab240"
  },
  {
    "url": "master/packages/views.html",
    "revision": "dc3c6cb41ad0d1d21c6a0167a70498b3"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "c0a58869435fa22a46b743af9edeaa16"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "b3673b69acf1c48907371457c46d848a"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "dc1757d87c102e33bf15cfb2534bc222"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "863f472f1d9d5b00e496aefc1b2179af"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "153f753a4b5f0080f29a366134726435"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "5638f95133877fea841cfbd0c21fc472"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "393b232b6f21cfe35682ae431738a0cc"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "df145b2db7976679bd783922c197367b"
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
