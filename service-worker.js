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
    "revision": "498e88bfd364f7140288fc845e0bb7f0"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "40092ca9f1c748ea922c7992110e9863"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "e6ede91a004f6c4e2080047bbab3a89e"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "0c3777d28ea6f22fb6c056b40d829e6c"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "5b7ebeaff4a2cf6c5985529b0af5eb4f"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "4865ee2287042048ad2e806906200078"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "1a72d0f187531964e61c86cbefbe34c4"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "4b85dec427118f3c07e7aac4551faafb"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "51e406a45759f61d4ccefccc7feb4313"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "2f25ff79e448bd54fea9dc0f556db75e"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "8f9d53977c554417e2b1bf21430c4d19"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "99b77d07aca5dcccbf13cb47b28b4c5b"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "8d0554aa867c794db6a1389adb8e490a"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "6761422b3cf7664e79fc24753db31846"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "a707de2abc82c6f6ff7a2bacb2b8dfab"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "1093a57d61c88681a4cbde4c1d12ce74"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "44ef7db80136b6f35e9a34927e7eac17"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "a56efce41aa4f217e83e5afaa9bf5fd8"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "97a6c3a0eebec5fe117aa2d9cd7e9414"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "5343d9d2b6ed5f45e25a07f5b974da39"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "1d5e418e78d05e75512871ec5a698a98"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "e3a13846d2393a32b9a0e85476afb86b"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "06805222cd2ad9e5c533164fe35b85a3"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "e656bbc4b0b11afddfa1529bc2b3be7f"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "7fa4f0aa4e83565c18424ac81c7923e3"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "3b521a1876e8d068260bf023e337a249"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "22a96fca86168a46e02d592855541eb3"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "0c2957cb1a99b04deb8a6d7bb375bc36"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "bca30aa70fe17045b3499f2f3629f19d"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "bfe129447177b7a2bada7a5d4cf5ecef"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "ded67a60c703de5c0f48523035d258d8"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "ec35fe281ba454f4dd68008b484e147d"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "f431a222c7976ffd73a4f27cbc0abda1"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "ee910da36dc5fbd4710131ab29422864"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "c2d744e71e518fbef63b6d5a85f62acd"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "b8c4ed9587f677c620ed0830ff74dbff"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "1080456a7bd79c1ec285a2a684c02671"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "6d325282780ecc3a2025593f6f9d6f9d"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "1fef2b60d7311e0faf3d4556579f22f2"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "8411684e1f5c10bf1c056cb852fc4e2c"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "e18910178948a5045faa7d0765b6af35"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "f2a376c4314f9581a61eeb7c77735a81"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "4dd7341e4682cbad20aae270f88dfefb"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "d794ff773efd69a0b7c40fe45d4c2c01"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "9d48a4b40b805a4198c9da54ec45025e"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "5c6a91bc644f010373d1efe6f4ebd1b7"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "c163b18281526eda8a3abc19c38d28a9"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "8384d40288abcb5d5d30f26621fd72a7"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "2c36b934a16864279af1b34bf04863e4"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "f654abbc7e6427193694da7e0e719b84"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "ab7a29088c4521626dd4555a03b92dbe"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "c5aab9563fa059bdf2408376a2cf54d0"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "9e53d9086ff20fc22266a160f4182838"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "f317b3b7b829737c68c8a0b6593f00cd"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "3d84b2c12ea85cc898092842c33520fd"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "c1f87c724fa00365a287a472ea47a574"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "f7218dc66d350181f7699e1148b42f6c"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "8936085d8e4e4050d656cf9d98ddd521"
  },
  {
    "url": "404.html",
    "revision": "70779ab5337fd8ba45523f937539cd14"
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
    "url": "assets/js/1.f8495b64.js",
    "revision": "d246938aea37c88a4c3ca0fe511bbd2d"
  },
  {
    "url": "assets/js/10.29f9cac8.js",
    "revision": "8ca61f6b390c8d4ab255d8fca3e4794b"
  },
  {
    "url": "assets/js/100.0829c2f9.js",
    "revision": "46aa59aae123dc4233fc0fb134f6dfa6"
  },
  {
    "url": "assets/js/101.338b1613.js",
    "revision": "bfda1077fac30b91fbb5b2f895b19206"
  },
  {
    "url": "assets/js/102.b16a6969.js",
    "revision": "43686dbfe5e5cab05e0423df4f4977d0"
  },
  {
    "url": "assets/js/103.a9f2701e.js",
    "revision": "e9ebee71e285b9a4e39be8a3546e8919"
  },
  {
    "url": "assets/js/104.79d7d176.js",
    "revision": "eb39a96437fffa3effbfb059946e8c9a"
  },
  {
    "url": "assets/js/105.786b9d96.js",
    "revision": "00e316d2bdaf18f7e2c969af3bd1e888"
  },
  {
    "url": "assets/js/106.26b548aa.js",
    "revision": "11372f78ef9914c1077a26f743c6c89d"
  },
  {
    "url": "assets/js/107.367819e1.js",
    "revision": "5e49d9ac3cb000e497b50cdcff1af7dd"
  },
  {
    "url": "assets/js/108.7d809eff.js",
    "revision": "5c9ce0feced665347bacd286ec85614a"
  },
  {
    "url": "assets/js/109.62d462eb.js",
    "revision": "568d7c03372a64ac6a94b7e33603cd89"
  },
  {
    "url": "assets/js/11.db93b1c9.js",
    "revision": "06fa1e7a685354bbd664454855ee6e8f"
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
    "url": "assets/js/112.c4afca2b.js",
    "revision": "11d4126e464e131fa8729880dc3d372f"
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
    "url": "assets/js/115.38fcf776.js",
    "revision": "9408eb0b082b221915ebce8a688bb04c"
  },
  {
    "url": "assets/js/116.c5b5a641.js",
    "revision": "5cf774b2d63dc4738efe898c31a57580"
  },
  {
    "url": "assets/js/117.b1feba6c.js",
    "revision": "5ce9f9c0f2515aead6f3e8feb2fb85f9"
  },
  {
    "url": "assets/js/118.1046b5e4.js",
    "revision": "acd9173dbc527a69f97b180465066bcf"
  },
  {
    "url": "assets/js/119.8a4aa2f5.js",
    "revision": "576eb5b1ceec5db85199a5463c0990f4"
  },
  {
    "url": "assets/js/12.5edcac46.js",
    "revision": "6b67fee6a23e066f3b6b9c5373d6db7c"
  },
  {
    "url": "assets/js/120.56e5668c.js",
    "revision": "d79901ce6b9bdfb9211c987effefc51c"
  },
  {
    "url": "assets/js/121.c715319b.js",
    "revision": "0b1982a1c5fbdd6a2c7b796fe598ae52"
  },
  {
    "url": "assets/js/122.666280f0.js",
    "revision": "92682470532f60cc886f6f1018cc334b"
  },
  {
    "url": "assets/js/123.b5df99a5.js",
    "revision": "b0c41755eae98f53abb8e87282acd792"
  },
  {
    "url": "assets/js/124.24bad323.js",
    "revision": "59f42d41431295da68aceb5d7d0fd023"
  },
  {
    "url": "assets/js/125.6857c1ff.js",
    "revision": "6099aa3e9f11e250c331b348ff9b63bb"
  },
  {
    "url": "assets/js/126.d1439865.js",
    "revision": "5ef429e71f03eddc158f81865caa53c9"
  },
  {
    "url": "assets/js/127.2e776bc5.js",
    "revision": "8c6db3c7689b7e713326c735264eb4ec"
  },
  {
    "url": "assets/js/128.094920a3.js",
    "revision": "0d8d9eaf975421135f9abf717afdf5d0"
  },
  {
    "url": "assets/js/129.ac6ab755.js",
    "revision": "9b542cb68e7039eaad57f8d8171b822a"
  },
  {
    "url": "assets/js/13.22b11845.js",
    "revision": "c34816c919e36b17c324f541940a0ef3"
  },
  {
    "url": "assets/js/130.002e4b4f.js",
    "revision": "050cdb6ccdd9c8d342a325de640881ca"
  },
  {
    "url": "assets/js/131.b4e726dc.js",
    "revision": "ac2935e54e48191511dbe3ee68ab904a"
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
    "url": "assets/js/134.55baa088.js",
    "revision": "b40899aed6b8c4aeb9ca8fe2baf61f0b"
  },
  {
    "url": "assets/js/135.89ec310c.js",
    "revision": "d097a726c4e5b4acb4111541c7998b4a"
  },
  {
    "url": "assets/js/136.be778fbe.js",
    "revision": "5ffc0151ee944322a6b19ed4c659d44f"
  },
  {
    "url": "assets/js/137.56fa407d.js",
    "revision": "e5dd477176407742962a56224afc5d47"
  },
  {
    "url": "assets/js/138.3c548fe3.js",
    "revision": "48953f64e65b9ffaaf1ad08769b4adc1"
  },
  {
    "url": "assets/js/14.84d8c853.js",
    "revision": "0eff48c2d63232dd04b9376f7c57414c"
  },
  {
    "url": "assets/js/15.c16f4f8d.js",
    "revision": "805e5b06605c2d0ec757a3abf00dfb4b"
  },
  {
    "url": "assets/js/16.f8c1742f.js",
    "revision": "d6e919fb48599844016e27b47589d3f8"
  },
  {
    "url": "assets/js/17.a39e9b63.js",
    "revision": "bcfd6732c73a38567d2cd03acc28ce32"
  },
  {
    "url": "assets/js/18.6dd34d71.js",
    "revision": "4f74bc06c3a61efc24beadafbb239dbe"
  },
  {
    "url": "assets/js/19.038c1c8e.js",
    "revision": "ced535e7f08051882df769b42e7ce621"
  },
  {
    "url": "assets/js/2.169647b3.js",
    "revision": "d15a1e42e0c4544335be612152b0716d"
  },
  {
    "url": "assets/js/20.2a31218d.js",
    "revision": "4d23b90762b4607b63959677c2bad206"
  },
  {
    "url": "assets/js/21.56b916bb.js",
    "revision": "24a60af12ab0a313a8d76e5e6db48f64"
  },
  {
    "url": "assets/js/22.b5baa3f2.js",
    "revision": "8f457ff370a64d8ad7c5c859be93aee4"
  },
  {
    "url": "assets/js/23.74a86ec1.js",
    "revision": "b4a3890e05fd3124f6268498e0d98133"
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
    "url": "assets/js/26.94939219.js",
    "revision": "0134e22b7ed7e9dfdaec3fd1241281b3"
  },
  {
    "url": "assets/js/27.97558a31.js",
    "revision": "f4a23ed9ab8278219c35eaaffeced843"
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
    "url": "assets/js/3.fbe1d52a.js",
    "revision": "01259b849e67127f7ea69dc3e06e7616"
  },
  {
    "url": "assets/js/30.754f7f63.js",
    "revision": "8d3406c89a1ac08c70fd6c4dd1e33e0b"
  },
  {
    "url": "assets/js/31.c0a4244b.js",
    "revision": "eaf766be7f695907aabc171d4d6a1f94"
  },
  {
    "url": "assets/js/32.8a3c0d69.js",
    "revision": "7cc5b04991240ace109f366e1005831a"
  },
  {
    "url": "assets/js/33.7fa81ac3.js",
    "revision": "9bcc0f87f9c69a58d876bf8de986cf5a"
  },
  {
    "url": "assets/js/34.1bf9e221.js",
    "revision": "deb33007fef54c09a75aa6d086e334fe"
  },
  {
    "url": "assets/js/35.94b20d8a.js",
    "revision": "c9205281256493fbf438216d4a89c3ab"
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
    "url": "assets/js/38.56becb66.js",
    "revision": "ddd7ef8f4902ab99a728fa05d046d5b1"
  },
  {
    "url": "assets/js/39.476f5a07.js",
    "revision": "6ffa3a7fa39dcc41052948b78c91e3f2"
  },
  {
    "url": "assets/js/4.d7021c11.js",
    "revision": "55b8592142aeb9b43de90b65a0a5dcd3"
  },
  {
    "url": "assets/js/40.eedb8a44.js",
    "revision": "32cf6df7245101a8d41f1bdbcf7e878c"
  },
  {
    "url": "assets/js/41.718ddc7e.js",
    "revision": "dad9b85f0e651947960a11c04b95b07e"
  },
  {
    "url": "assets/js/42.56c62b6d.js",
    "revision": "ba07365d436e20f6d2ccf2d91031da77"
  },
  {
    "url": "assets/js/43.1066c2bc.js",
    "revision": "dc3ff83a371818ed3c39b67487f6dba1"
  },
  {
    "url": "assets/js/44.ee8c137e.js",
    "revision": "034508d7d220a5de9f91e06f1fa0dc28"
  },
  {
    "url": "assets/js/45.6e4bb15a.js",
    "revision": "62f46dc14c9b810ce662cc51029fb942"
  },
  {
    "url": "assets/js/46.b7b7d83c.js",
    "revision": "c658b99cf37b6dd44795c08c5b54c1c3"
  },
  {
    "url": "assets/js/47.1e17dd67.js",
    "revision": "38ff6af61df2ad84a5c4857dd63f947d"
  },
  {
    "url": "assets/js/48.17cc51a1.js",
    "revision": "2e5bc79c250cb4df7951896770ecc3a9"
  },
  {
    "url": "assets/js/49.7527987c.js",
    "revision": "8dc45a054983a84f5ac17a0e4fcfb850"
  },
  {
    "url": "assets/js/5.39da4bdb.js",
    "revision": "665b1028727cd674d1b8759cf177c089"
  },
  {
    "url": "assets/js/50.05d15e12.js",
    "revision": "3f6593198a856e4f9742f38799c19383"
  },
  {
    "url": "assets/js/51.8bb3f701.js",
    "revision": "6ed40478e29ab21bcdfd5770bc35581d"
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
    "url": "assets/js/54.1bd5c0c8.js",
    "revision": "b6adc77fe5715a0a8c2b4833a7093a0d"
  },
  {
    "url": "assets/js/55.fe9a7f6c.js",
    "revision": "58be13a0da7c043a0ab0f11424eff7a8"
  },
  {
    "url": "assets/js/56.6cf7e1ce.js",
    "revision": "187160e6d8f264d3665b52b81fc9f839"
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
    "url": "assets/js/60.2dd21cfa.js",
    "revision": "6b1023ab359e2cba94cbfe2c2a01ea0e"
  },
  {
    "url": "assets/js/61.e4eb85b7.js",
    "revision": "8e82c7118c861e0bab1d707d6fba71b2"
  },
  {
    "url": "assets/js/62.5221ea16.js",
    "revision": "b940b040733a150cb8f5a48c76df9c29"
  },
  {
    "url": "assets/js/63.36eef7bf.js",
    "revision": "b083d945fca639a47f51fb647f24138b"
  },
  {
    "url": "assets/js/64.af0a3a7e.js",
    "revision": "054212de86d4a228fb717f56e05ccfc8"
  },
  {
    "url": "assets/js/65.20e384c0.js",
    "revision": "a24288e3d9a683c3d952f40075200472"
  },
  {
    "url": "assets/js/66.d6050690.js",
    "revision": "84c0eb11392c3eca0e28089cc76cd972"
  },
  {
    "url": "assets/js/67.b166d447.js",
    "revision": "565ebd8aa7f7224d53f3457f99d4904b"
  },
  {
    "url": "assets/js/68.43d7798a.js",
    "revision": "864bf59de451cca5042c59626d353b80"
  },
  {
    "url": "assets/js/69.fcef6b0e.js",
    "revision": "b567e4d8895d89fd35c0559356292317"
  },
  {
    "url": "assets/js/70.56587591.js",
    "revision": "b184133f83220832d9bac44cd5351a94"
  },
  {
    "url": "assets/js/71.195e10f2.js",
    "revision": "8f439c2782bf0202d28ff1681a97d86c"
  },
  {
    "url": "assets/js/72.50f5b139.js",
    "revision": "ce5352cf10aaa468b2a731fc2f1a0d8c"
  },
  {
    "url": "assets/js/73.c6016aef.js",
    "revision": "57d8beaace27066702909ead373ab566"
  },
  {
    "url": "assets/js/74.803418cf.js",
    "revision": "436f147a85119b2ebd35d920bc8c4145"
  },
  {
    "url": "assets/js/75.57543db5.js",
    "revision": "436e945af7f564430af5a18ad22b872f"
  },
  {
    "url": "assets/js/76.65b9498c.js",
    "revision": "538a52a48b2ee468c481d9b31d86ab53"
  },
  {
    "url": "assets/js/77.5c4122f1.js",
    "revision": "1060158f00e293ebcf6db5f70316cf1a"
  },
  {
    "url": "assets/js/78.c53f955c.js",
    "revision": "ed6c53215e7e5d9c0771a5d3650c7c86"
  },
  {
    "url": "assets/js/79.e35de409.js",
    "revision": "1c32bd1683b6c09df2f2b6686fe290f9"
  },
  {
    "url": "assets/js/8.a5cd020c.js",
    "revision": "bc5ac0eac88f4e0457d331fdee0d471f"
  },
  {
    "url": "assets/js/80.12815d9e.js",
    "revision": "88e835d3aa93a25c3ca7e50b983319e8"
  },
  {
    "url": "assets/js/81.e4271b0e.js",
    "revision": "f9871f6175bfcdc23292579587989ab9"
  },
  {
    "url": "assets/js/82.0f7918d0.js",
    "revision": "cf7202ae3782586311ee422754479978"
  },
  {
    "url": "assets/js/83.b17811cf.js",
    "revision": "ba24d8b2e07fb297d7ae4a6899737e5c"
  },
  {
    "url": "assets/js/84.40662c48.js",
    "revision": "195a7b679547a8c8d496c96e3a1df03b"
  },
  {
    "url": "assets/js/85.ff1faa1d.js",
    "revision": "37a42f02871b924bd4fdcc50ad51e51d"
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
    "url": "assets/js/88.3a2a4d7a.js",
    "revision": "8524784bf732a1ec9e373fd8c8eff067"
  },
  {
    "url": "assets/js/89.23619330.js",
    "revision": "efec51710291e30a620137f91cabb4f3"
  },
  {
    "url": "assets/js/9.83d071c5.js",
    "revision": "478b3b3734a098492a8cfc14761c0130"
  },
  {
    "url": "assets/js/90.6196956a.js",
    "revision": "d74f7ee73844ffc28361bddadea0217c"
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
    "url": "assets/js/94.8d8a630b.js",
    "revision": "f72d71b9ce96b14c0cb5d1ab93d6c190"
  },
  {
    "url": "assets/js/95.d16fe9d1.js",
    "revision": "98743917e78609b51496ae40c129d950"
  },
  {
    "url": "assets/js/96.260e3598.js",
    "revision": "e0e33a9121d76a8e3be9efb9b8e8cd70"
  },
  {
    "url": "assets/js/97.68e67f74.js",
    "revision": "902fc65a96fe976f5a0308124cd313dc"
  },
  {
    "url": "assets/js/98.33089bef.js",
    "revision": "c62e1e9c409c0695553ef44c01c6c4ff"
  },
  {
    "url": "assets/js/99.683d859e.js",
    "revision": "d93b28cd7eae8f1cf690b191e3a85db1"
  },
  {
    "url": "assets/js/app.f0ba4340.js",
    "revision": "007265ffcc30140038cbde461ea2af61"
  },
  {
    "url": "assets/js/vendors~docsearch.992c13e1.js",
    "revision": "e3f6a35ad9d78a6678af8afb901dcc00"
  },
  {
    "url": "index.html",
    "revision": "f768e28f8db980b046f324741ec2912d"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "c0cc3aecc61c30e7892a9121f066e3dd"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "e6220a13f0a91d950cb04d554d21e003"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "2fd1dc122f112ad560ea397bb105e484"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "458f7624751ab7358c5cfc0a86d94145"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "da5728d7eacc5888c5f624fe2f4a4a52"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "a77ab6c23c1e543c65075c6ce498a2ad"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "015027bcbec62458857123049b5214de"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "6f22deddec246e662b06d55f69e84f33"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "21e3df200c1b480b3af056983ff1f2d6"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "232d8c4939a0e74649853d15742c11f5"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "a60180de2c1cf7b1443aaa15e5346478"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "73b34c712f7891ae7dbf89f4b2f21ff3"
  },
  {
    "url": "master/api/category.html",
    "revision": "eecd44bb3e446903b439a9aab0517127"
  },
  {
    "url": "master/api/channel.html",
    "revision": "e97cb467542e34a103d95924aee2271e"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "3b7657e792b07965b078fae351507ed6"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "1836e525059086f62f96304fbab8e95a"
  },
  {
    "url": "master/api/currency.html",
    "revision": "861cf1161459569a24e1a952ccc71597"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "01c6f75388bb0145115bbd359b44c998"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "60c9f66770489813a3ed116afba6d90b"
  },
  {
    "url": "master/api/index.html",
    "revision": "57d8b09e5625edd0f241a5b21d2b1aa0"
  },
  {
    "url": "master/api/locales.html",
    "revision": "276349c0a2290b3fc978e64794e40c14"
  },
  {
    "url": "master/api/media.html",
    "revision": "8ece84b4bb51a0fa36d70853ed4b58cc"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "78ae37aca77be19bac0d12413e9f0744"
  },
  {
    "url": "master/api/product.html",
    "revision": "a0ecfe48191cdfaaa42d1732a5f5227b"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "669a5e22edb01dd22316a9d1f70321e8"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "aecbc5c71b2835101674bf06899b8d5c"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "bc0a2a0088b945070264bd43b7365874"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "25e74ea6505139e926ab2ba61a1f25f5"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "cc83a55c820c4cea153302330988eef0"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "ae8fb4ab5f68fe08ef150cc9c9c73719"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "57857bc38ad446f492b8f8bd06c20c90"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "8ee6bf623d76f47075833f9e1311d1ad"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "751f358f38c57c05f4d8a0edd1966320"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "cd98a26b1ec676e02889e990032a0397"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "890f3fa19a56c43a62c657f6b2438591"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "6cdad5f6a6db45753634d69176ac19db"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "e648b519025a9db59b2c3c0826d23a29"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "86ef49486fafdeaae6f6a4677e3dc963"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "da0937e45ddf47ca9a9d77fb66431534"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "1a1a0b55ab10b3b80288d3af01a5fc6a"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "31a2251784b5860c4769286c25400845"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "2a8fbd30763f92e2a72fba52087b89e6"
  },
  {
    "url": "master/packages/history.html",
    "revision": "20a13e29c658d7e317eed8271e8c4048"
  },
  {
    "url": "master/packages/index.html",
    "revision": "b661224ad360087478ab6efc0b05c631"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "b75f5075a3612cd9261d0ba2e54cfa36"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a73b48cee71f2304c21eb401db62ce9a"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "ca912aade7fd2c3796f8510f25222c12"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "7fa38bd8c7b1119f25b90c9fa24c3ffa"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "74910da9694811ddb2c0dd1a39ac8f8f"
  },
  {
    "url": "master/packages/views.html",
    "revision": "baf4b34b223bdcfe5a93431ae75cdabe"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "b4a7ba3aaf58ec13920a93cdcc9b32f6"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "3ff1d6996e3ca18730a239befb5f4d4d"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "d9186f5263b3cff8d8233cddeeee590b"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "c6a6f85dae8b846ec2138a51cb8619d7"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "e638684ec9e0980247228bc6f80888f3"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "687b4de4892113fe4b56d37fa2109077"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "2e7552f229c5725949f01a7fb8f4c755"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "f4366ec8faa696d95916a21912da073f"
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
