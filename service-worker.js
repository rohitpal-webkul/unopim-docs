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
    "revision": "a6e005e7749ce709687d9ae7c34c9b85"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "6bf0e88e25b0398c9e139683e3f0b707"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "a842b1a5a18ab3626bf947167bd77064"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "02f895373ddabab495127885dd1f9d1d"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "2da3ed0e3bce6c5effc5531309d1000b"
  },
  {
    "url": "0.1/advanced/security-practice.html",
    "revision": "61c25a4b7a2a340679b04dcfc081984f"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "a463f8f9fca057b5bf7d280797c1e825"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "6b5af5fc795e9f1e996ef770ca79057c"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "0f8b429f352919ada5c63d9e2cc2841f"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "52e4f5e880527d8e43170310febbd2da"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "d869cf4e18ceb7db03ec2738930e8948"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "b7a0ca6eae3ab35778104ecba98c8ed7"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "b1555308a950fba21ef675f127273f26"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "3b9c94d375c2e9c2f9a32a1b83a61198"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "35f96e8b2a042c1167132acec51cd672"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "f1a8c5fd9c389bb15de7851839132d4c"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "e95d5b848fa028000f963341f6a8ceed"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "08e6b53f50de56a0b54d0005432f5b84"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "0fe6e210e988e915c5d6597c8832dff8"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "4703b2eb3ddf3bd04d506a3c067eb413"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "8465cd1c2483e2a8d39742e3247d57c1"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "e2d2b6aff020c7aa4adc6c8e58d9d6e3"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "f1bd50a625d99567b206700110aa30de"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "d2b23e734aee6c97046a596ec2547e20"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "8a7cd3865f42b713e89d432ab74afdec"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "264b8859d90ddeb4205d97cb79ec1de1"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "ecb79634473ca44173414e4b35b9add2"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "56f257c4b5282f385d24cdb0feb29a97"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "2352910ea7bcfc645dece46305dae838"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "81a3a57ad00bf9dd0f3171915dba0edf"
  },
  {
    "url": "0.1/introduction/configuring_supervisor.html",
    "revision": "19a3f6a2cb72548c6ca4f57ff9b807c9"
  },
  {
    "url": "0.1/introduction/creating-newuser.html",
    "revision": "364a377eed3a279be658f079cf8459a6"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "b03ab72348c293c777887977f2ea058d"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "fcbfaa0df5b23480a5c4371b4ac04384"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "698b3b9677c2e93e5da32636b61f00ce"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "68821606a57e364fbad53f09d05d3698"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "19123855b21bfb1ccdf16be55f4b81e1"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "674ce9bac3592350f1ed959ce6508997"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "3c0dbbcddd3cf1d0c9cb95c50ef192e5"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "1ce3ee328173d3ac823d9e702a69f9d3"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "a738138c2de5c091274d5b5f7ca658fc"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "5b5d51051aeefc8fd9f0a16db64230d7"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "84ae942dd56861d4c81dfa1a35b41621"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "24a1c8ec1496b1549ab0b032e8182447"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "7692759c8d586ac3aceb3bf7113be2e1"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "ad42f2435eecdecb148aceb0e85b5c3b"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "3d52ba5659a896d715fff0b85186c79a"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "d57f2c5344d10a1eed3311d93ba13e2e"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "280590815c3b16b9831817e42846df32"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "9e5441ced6f640b5cd509a37f287ba4c"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "306e2728931f9d1bd9c33764a4151f7f"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "c37566234770e38a372e41de28254ce8"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "b277e9a76f40317246fa4d7c04860c42"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "9ca9d6ec28decec4c615d48158471e30"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "64588fd487479f44d86cfd23a6b8771e"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "da20a267f75c11526c22edbab26b0082"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "9bf224458f78278f11bab02a56d3eb53"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "fc7b2c91d4f49788a1664e6b8e43b8e4"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "1b2ab92e71202ad053727dd4d9495880"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "b4be13c02cebfb4249903665ee3341b9"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "6bc2281aff090b2777bd08abfd7ae223"
  },
  {
    "url": "404.html",
    "revision": "2312a9358e3b4259ae57018d5553526b"
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
    "url": "assets/js/100.7c5a8c17.js",
    "revision": "44dcb3218d2bc07de390980edf961a65"
  },
  {
    "url": "assets/js/101.d3b361aa.js",
    "revision": "ff5885f89aaa1e739189ae6968c0f9a1"
  },
  {
    "url": "assets/js/102.1202155b.js",
    "revision": "b599cc085ac4edce22fe80aaf0c8ed55"
  },
  {
    "url": "assets/js/103.c4c0951a.js",
    "revision": "6f71dabace3848c804ed3f23bf143b59"
  },
  {
    "url": "assets/js/104.f4928350.js",
    "revision": "da4726735942a528566037cb2c7628f1"
  },
  {
    "url": "assets/js/105.86301d21.js",
    "revision": "bcc3644f99ab30992c13f38eeac979ee"
  },
  {
    "url": "assets/js/106.69f086e9.js",
    "revision": "d5fde77cee82415e6c516c74efeece35"
  },
  {
    "url": "assets/js/107.65bac58e.js",
    "revision": "89c3ba0cb64578c82d87a17ad8dfc22f"
  },
  {
    "url": "assets/js/108.f1db6550.js",
    "revision": "16d04e8eabf2f67b666b7ae38dae2811"
  },
  {
    "url": "assets/js/109.b895df1d.js",
    "revision": "c69d7f56c0592f875e0282bd858ea201"
  },
  {
    "url": "assets/js/11.7a5942b2.js",
    "revision": "47f2ed28b814943a0210ae159a901a95"
  },
  {
    "url": "assets/js/110.2ae08f68.js",
    "revision": "20c08173decfad904892248c0eb5c106"
  },
  {
    "url": "assets/js/111.a29c51bc.js",
    "revision": "e220c420d1f650f04989383eb1931dcf"
  },
  {
    "url": "assets/js/112.0c2d8a87.js",
    "revision": "9a19af81793ab1437e51c54e0c240814"
  },
  {
    "url": "assets/js/113.9c5ef840.js",
    "revision": "d61d16c41f461275dee96a0738a4fd33"
  },
  {
    "url": "assets/js/114.6e578ec0.js",
    "revision": "fa6c4da6098dc7e1c4faf3bd7816483e"
  },
  {
    "url": "assets/js/115.12831eba.js",
    "revision": "cccc37cb115b0d8eeefb623b8e05a5df"
  },
  {
    "url": "assets/js/116.3958100b.js",
    "revision": "6bb126dd7716f16682edc43076e4bc0c"
  },
  {
    "url": "assets/js/117.b62b8a1c.js",
    "revision": "d11a90f051d1aaf8b673cbf933fc9bc4"
  },
  {
    "url": "assets/js/118.1455d231.js",
    "revision": "450b048a83205107f0164ba1867adbe9"
  },
  {
    "url": "assets/js/119.6d491f7c.js",
    "revision": "da6fc51ad108b135a4f172870ef08705"
  },
  {
    "url": "assets/js/12.869a83d5.js",
    "revision": "dde99edf3a2e01854b17368304928f1d"
  },
  {
    "url": "assets/js/120.690108bc.js",
    "revision": "1c404b0f9bbefffa85b5d2bbf47174eb"
  },
  {
    "url": "assets/js/121.91216dbb.js",
    "revision": "ad4c87fa956254303d0ae1ddb6d99753"
  },
  {
    "url": "assets/js/122.58b63b22.js",
    "revision": "0799047ecc26c4af178b670867fdd464"
  },
  {
    "url": "assets/js/123.32dc9608.js",
    "revision": "0282abc77008cc54e0f25b414d8c20ae"
  },
  {
    "url": "assets/js/124.9362a801.js",
    "revision": "e8bb2a2a7a1a51cc359145e39162864e"
  },
  {
    "url": "assets/js/125.d51758f0.js",
    "revision": "254383d919c1d91fbc6b1d533cea53d0"
  },
  {
    "url": "assets/js/126.561a875b.js",
    "revision": "9fd02cb79f9d432224b1432418ea6bec"
  },
  {
    "url": "assets/js/127.339d4a3c.js",
    "revision": "37f80f5489ff0cfca6663b976049d72b"
  },
  {
    "url": "assets/js/128.aeaf587b.js",
    "revision": "f01f11c3c5e462780bc1b145243cfaf5"
  },
  {
    "url": "assets/js/129.35fc4b9a.js",
    "revision": "b9f616b336b9480a35cd621108f9dc4f"
  },
  {
    "url": "assets/js/13.9c2c520e.js",
    "revision": "13c4145d59b2ca162df6408a8d21b4c9"
  },
  {
    "url": "assets/js/130.2f1feb5c.js",
    "revision": "507f6471b32aa797efb024b22b3ded51"
  },
  {
    "url": "assets/js/131.b4ed0cf7.js",
    "revision": "98c1f907572dd2c7c0273d5608a5d04f"
  },
  {
    "url": "assets/js/132.5204a131.js",
    "revision": "fc1d33b479350b119429b9fb6ba39d7c"
  },
  {
    "url": "assets/js/133.e2393843.js",
    "revision": "509026f6687266ef874f7f4a02e45960"
  },
  {
    "url": "assets/js/134.430fb720.js",
    "revision": "233ee24b3b2445cb6952034e57a57abb"
  },
  {
    "url": "assets/js/135.903115ae.js",
    "revision": "817f5879bfbb9cc094ae928d4b63f4f5"
  },
  {
    "url": "assets/js/136.3abb6116.js",
    "revision": "172075ad870e1d1269d6c44902c5d264"
  },
  {
    "url": "assets/js/137.81d57f07.js",
    "revision": "02ebec79d12c92997c5c3da53e400a21"
  },
  {
    "url": "assets/js/138.d688403d.js",
    "revision": "e22ca83ff9b13ab20cf5fbbc3aef2a35"
  },
  {
    "url": "assets/js/139.3d9ae57c.js",
    "revision": "69e18419b9b38be6a5c3c30bb1ac74b1"
  },
  {
    "url": "assets/js/14.602df2df.js",
    "revision": "7f1cb2a2b08511544e64a38e3e6d0de2"
  },
  {
    "url": "assets/js/140.f503e944.js",
    "revision": "0746bb6e2b629bf29a42441da0efe29a"
  },
  {
    "url": "assets/js/141.50bbe411.js",
    "revision": "97b46d1d5d825bfe6890c3cb3f120778"
  },
  {
    "url": "assets/js/142.338f1850.js",
    "revision": "63c8d1634c4aeacddba2fe6f1cc3fde8"
  },
  {
    "url": "assets/js/143.2a38efd2.js",
    "revision": "035adb9e922b35059a17fc495c6ee0c2"
  },
  {
    "url": "assets/js/144.b35c7643.js",
    "revision": "adfa8e001c68ee2ded55fa383c5e0619"
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
    "url": "assets/js/23.12fc2071.js",
    "revision": "4509c9b55a2f8161742d05a5d41df345"
  },
  {
    "url": "assets/js/24.12358281.js",
    "revision": "f916ba5b993c016db13557cf89c2bf3e"
  },
  {
    "url": "assets/js/25.d5c285d1.js",
    "revision": "8bef706b01949f4ec5511dd36db8c589"
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
    "url": "assets/js/28.ae35ced3.js",
    "revision": "b44772817544ba0dc39a564396c20907"
  },
  {
    "url": "assets/js/29.7a8c5ff0.js",
    "revision": "120516321ba01c0ceb3676288b9c411a"
  },
  {
    "url": "assets/js/3.c08788cf.js",
    "revision": "9a5397d300c118eaed270de3385d25b0"
  },
  {
    "url": "assets/js/30.96f663fd.js",
    "revision": "fc304b529965573e477dc73ff77e76fe"
  },
  {
    "url": "assets/js/31.a61361ac.js",
    "revision": "66520e7fe9fab98b81d97507534b2484"
  },
  {
    "url": "assets/js/32.f798d157.js",
    "revision": "60a5c8918041d0243e6c68c040855e43"
  },
  {
    "url": "assets/js/33.feba05de.js",
    "revision": "cfb41b589946298d15d9686266e81f0c"
  },
  {
    "url": "assets/js/34.bc36d499.js",
    "revision": "ed30413fbce2499299fee8c8c17b7b4f"
  },
  {
    "url": "assets/js/35.34082d40.js",
    "revision": "b134d2415d70d16b278d2a2e980c6f56"
  },
  {
    "url": "assets/js/36.15977a22.js",
    "revision": "ecaedabe8afec3e0a54b687837b2c215"
  },
  {
    "url": "assets/js/37.74bfa6f7.js",
    "revision": "3acd0954f2b3cd77d0b5af1f0e446f3f"
  },
  {
    "url": "assets/js/38.d39531b0.js",
    "revision": "87f7bc01d32efd0be2267b832cf22aa1"
  },
  {
    "url": "assets/js/39.ff2ef09d.js",
    "revision": "509871b1d24e878480bada12896fd1d8"
  },
  {
    "url": "assets/js/4.7528cfee.js",
    "revision": "3d5eee6141c415de30f9556231051c62"
  },
  {
    "url": "assets/js/40.7e7b1ddd.js",
    "revision": "f55c7cc1dbbd8e3b29369e5bc13cae0a"
  },
  {
    "url": "assets/js/41.8cb73822.js",
    "revision": "f6ccbddaec61da7fbbda19320a7e36fa"
  },
  {
    "url": "assets/js/42.8fa00043.js",
    "revision": "1cc57da004cb7c88a3dfd0204ff4ed09"
  },
  {
    "url": "assets/js/43.7aeec7a9.js",
    "revision": "a413630e5acd862b546c740770de0fb0"
  },
  {
    "url": "assets/js/44.593d96a1.js",
    "revision": "1652b162b1f61f360bdd80725b99be9f"
  },
  {
    "url": "assets/js/45.425239dd.js",
    "revision": "741561075c963ee316db6d9a98732cd3"
  },
  {
    "url": "assets/js/46.d59cc5a9.js",
    "revision": "8226417d4afd38b687294d13c3512f9a"
  },
  {
    "url": "assets/js/47.58e82176.js",
    "revision": "86f38a13c423266e36c12323f41dc60a"
  },
  {
    "url": "assets/js/48.4bbcb498.js",
    "revision": "9e8646151fa933bfca05d9b386df478e"
  },
  {
    "url": "assets/js/49.b487b709.js",
    "revision": "b352ae9c2f09e3c50bc954ae26ac7059"
  },
  {
    "url": "assets/js/5.5873d029.js",
    "revision": "1a8e799eb717b41b19039adaf73f51e6"
  },
  {
    "url": "assets/js/50.0b419f14.js",
    "revision": "6481f23dc267494a5192477113f0d67d"
  },
  {
    "url": "assets/js/51.09ab9406.js",
    "revision": "a702a7243dea591e7d8f9e02cc2482e5"
  },
  {
    "url": "assets/js/52.69bf0982.js",
    "revision": "874e680174e6f0ecbe54131ec08a5e84"
  },
  {
    "url": "assets/js/53.98b41557.js",
    "revision": "4defa8a19fff6e8f965c0e5542d7515f"
  },
  {
    "url": "assets/js/54.4eebf92f.js",
    "revision": "1482f73cc7aaf70faf13b1642905427a"
  },
  {
    "url": "assets/js/55.7bca28d3.js",
    "revision": "be6d27bfb6bf7026bed004a6b0e56ef9"
  },
  {
    "url": "assets/js/56.4c919cee.js",
    "revision": "8dc174c6c73a17116c1263fae7c40522"
  },
  {
    "url": "assets/js/57.1ee6e26e.js",
    "revision": "759cf98526a81da3bb7f623f38588d4a"
  },
  {
    "url": "assets/js/58.d70661b5.js",
    "revision": "7d5b41e741ef9fa84c9b90b3dc402d09"
  },
  {
    "url": "assets/js/59.14a0323f.js",
    "revision": "c34cd6bbb8c377307376fd7361a8440e"
  },
  {
    "url": "assets/js/60.35a22ea1.js",
    "revision": "db1dcda809974ce91e6bfc161c48e923"
  },
  {
    "url": "assets/js/61.2d0b4a35.js",
    "revision": "b3f87b5ff9be4ff737da9c3484297c09"
  },
  {
    "url": "assets/js/62.c75efc70.js",
    "revision": "cdc23b74b80bef350625f2a7c3d3f4b0"
  },
  {
    "url": "assets/js/63.69d84cd9.js",
    "revision": "5827a99501ba5abc0360d591ab7f1fbc"
  },
  {
    "url": "assets/js/64.83b9b498.js",
    "revision": "2e2bbf2082b29b613be4f1ad648d8353"
  },
  {
    "url": "assets/js/65.6209b1f8.js",
    "revision": "0b78cec013fc22841d70813f14d949a4"
  },
  {
    "url": "assets/js/66.00c53164.js",
    "revision": "1ecbdaba3787d5ef9ae0b073cd26b0be"
  },
  {
    "url": "assets/js/67.955dbd23.js",
    "revision": "17ebdff390be8d16ddcc2241652defe3"
  },
  {
    "url": "assets/js/68.bd7b5418.js",
    "revision": "00a7ea813041f5db01ba688750829d18"
  },
  {
    "url": "assets/js/69.96c17962.js",
    "revision": "b59be32cd53da467b1e4c8973d213720"
  },
  {
    "url": "assets/js/70.e3993171.js",
    "revision": "255bcfbc8bbc16ca774a725c8c2633f3"
  },
  {
    "url": "assets/js/71.412d5b15.js",
    "revision": "b658bfd2288728bba6c715ac352e3cae"
  },
  {
    "url": "assets/js/72.7149147d.js",
    "revision": "2c6bddad6089e302f8bec63a9375b4ac"
  },
  {
    "url": "assets/js/73.56555059.js",
    "revision": "59ff7ca7df4c9d3dfccf367f1bea0e29"
  },
  {
    "url": "assets/js/74.020fa3ee.js",
    "revision": "6b7efcf4ca7fd7ed745d12bff9ca29c0"
  },
  {
    "url": "assets/js/75.796a746d.js",
    "revision": "798fd288db0c2904632aabfb18c8152c"
  },
  {
    "url": "assets/js/76.658252bd.js",
    "revision": "19b8b08cd0cf3bb78ffb3fda57c0f31d"
  },
  {
    "url": "assets/js/77.cea22d78.js",
    "revision": "8966bbe2e2da2d9ab897d27f3af06748"
  },
  {
    "url": "assets/js/78.9e3915c6.js",
    "revision": "687e733bdcaa8cd8d9901b0876c7ca4d"
  },
  {
    "url": "assets/js/79.6825b6ae.js",
    "revision": "e8df8573e1f52ac29e96fcf18b5b0fb7"
  },
  {
    "url": "assets/js/8.11eb4c04.js",
    "revision": "e6f1463d058e8995cf88e3027da8e36c"
  },
  {
    "url": "assets/js/80.46a486c4.js",
    "revision": "426231e9afae21a70a8a9a946a9f24a6"
  },
  {
    "url": "assets/js/81.ec2764b1.js",
    "revision": "932677fcecaf6b415922329bb2065728"
  },
  {
    "url": "assets/js/82.ec1eb9aa.js",
    "revision": "9924d8d2d6970b20f4c10066a50f6d60"
  },
  {
    "url": "assets/js/83.4cf8c3fc.js",
    "revision": "537002df206f30eb901585fc2c1ac381"
  },
  {
    "url": "assets/js/84.d5814f26.js",
    "revision": "c26b74f5e8f60f4327aa67ca314a739d"
  },
  {
    "url": "assets/js/85.5d72c15c.js",
    "revision": "7208cdd9e7c9cdf7480c96c60136dd4a"
  },
  {
    "url": "assets/js/86.067c147a.js",
    "revision": "f550323dbb688367f0f0ff1280aa173a"
  },
  {
    "url": "assets/js/87.0583a8ef.js",
    "revision": "e84045db9ab5955b9e7b01406087103d"
  },
  {
    "url": "assets/js/88.b303b9bf.js",
    "revision": "59c336e4b6160e77b7e6750b3670e817"
  },
  {
    "url": "assets/js/89.c9208e08.js",
    "revision": "c9676e145b3752d0edcc8f0138e0a7a8"
  },
  {
    "url": "assets/js/9.87cd171b.js",
    "revision": "09ac2a291466db1d881498af5aa28d8a"
  },
  {
    "url": "assets/js/90.da6e412c.js",
    "revision": "1f250904ff18215099463e617a4f4233"
  },
  {
    "url": "assets/js/91.ed4367ea.js",
    "revision": "645cc3aad88214a48080dc9aea89a32e"
  },
  {
    "url": "assets/js/92.61501634.js",
    "revision": "872c8085fcdb54767b178ca60d6e0b6f"
  },
  {
    "url": "assets/js/93.ba31d9f1.js",
    "revision": "c3fdc9b32cf0a617c70979096c882cf3"
  },
  {
    "url": "assets/js/94.7e7f62bd.js",
    "revision": "b01cfcb8b007188396b6277a5be35e0d"
  },
  {
    "url": "assets/js/95.cf211c81.js",
    "revision": "017b77fb0391fa3a707546e7e5cca584"
  },
  {
    "url": "assets/js/96.590433d1.js",
    "revision": "995bc0799aeb85947c6ba67b862205a3"
  },
  {
    "url": "assets/js/97.e7509ea2.js",
    "revision": "716de5ad788c0c28fa03d475df293b50"
  },
  {
    "url": "assets/js/98.1feb18ca.js",
    "revision": "1e041a09ac72551fc546a7626927a39a"
  },
  {
    "url": "assets/js/99.82840620.js",
    "revision": "49d95b9f7336b7840e0e054ec525a549"
  },
  {
    "url": "assets/js/app.9190d3e1.js",
    "revision": "41b03f811e45616a896a502d9dfc6063"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "a489c969a3c07812f9874468cca39fc7"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "e5a418947c037b0d3ee654026027cfb3"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "c06b86cbd2f21de2de4a4be3a5f6f36d"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "0ee1a47d4cf3485bc9b853d43603488c"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "f77ea131e12d0c6767d82598011ed4e4"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "3b04a0de7438c92195f6f5351aee425c"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "a6f492a8f81c33f57a8c40b522d97c61"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "a27b3114571a74178104f727067a49bf"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "8487d6d7c20cce8c95952b4a1dbb290c"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "34a95ada85b190ddfe588d6ee3f9c770"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "0d97059caeae3b94c49ecbb770f7b268"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "c003441d99b06627730edda97e6110c3"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "5468af10ef7e5ae874d4c49456459791"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "f708adb7b5770d405ad4e690da1b035e"
  },
  {
    "url": "master/api/category.html",
    "revision": "4debffc1005e232ad3b25f66fd01a6a2"
  },
  {
    "url": "master/api/channel.html",
    "revision": "6e9217e8dbffeebd47a3d92cf7051316"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "295019e17e487a2cdc1d5b70a0df5ade"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "1107339e5c8c15f9f7a95404ba60ac2f"
  },
  {
    "url": "master/api/currency.html",
    "revision": "8afd6d20628cc1912901145927d9f568"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "7d8e21caf0c0b2862a7f7b917b9665c5"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "4171cabd4ff83b1879f43d05ebd803e9"
  },
  {
    "url": "master/api/index.html",
    "revision": "08122d5628e67ddb5915b5b38e3d15a4"
  },
  {
    "url": "master/api/locales.html",
    "revision": "55d0ddd74284c1615402b1c069e8031a"
  },
  {
    "url": "master/api/media.html",
    "revision": "5c7d2d2f998daa1047c354bcab3c0818"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "453f8619d9f9d96dfc78d42632a2aeba"
  },
  {
    "url": "master/api/product.html",
    "revision": "a4a606fbd2864cd402f3435d0724bf36"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "70aee6221421b04a5a726aa102f68b6c"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "8b4ea4f034f16d7ad10299cc3e5cfbd7"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "7148db1c6257609c54bcc1170ec31377"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "a40daf632a4b8b3048682b512d47bb46"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "64c1f68bb399e85edb694a073132014f"
  },
  {
    "url": "master/introduction/configuring_supervisor.html",
    "revision": "4c38b7ee3ae55e42761cf6f21af7a8c1"
  },
  {
    "url": "master/introduction/creating-newuser.html",
    "revision": "8726b4e4d5bb7904dc75d6184ecd9188"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "6680ad31f7c74a436d6d2fcb7d947a71"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "415e61e66bac772f1e5265427e98c89f"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "70d694328a85dfe20f4fb183dfe98d4e"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "bf2e38307771410a17db4741a4ea663e"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "e9f9e5fe0efcfdb9467003bb50fc92da"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "bb82a373da479ab0616b5cf7ec5ccae8"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "4441acfd6dc5ac370d7b83697ce5a878"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "4bc88b9d70cb16be79a3c71677a6ea87"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "d4d51a8268e4246bfb909b03a4bbf054"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "3f52c791d44bea7c028c6b543ea946a6"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "47db33574b35820890259f4585ff97bd"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "be498665d8a6262921cf8f92ebca1e94"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "e057a92bc6f0fa633b486c0265535663"
  },
  {
    "url": "master/packages/history.html",
    "revision": "7c9789407c20a4b62afc72730549e3df"
  },
  {
    "url": "master/packages/index.html",
    "revision": "0ef27631d63141af54ec74f415440d87"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "95354bcd4e1c168184ddeb5726efed9d"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a96d710690139eb1204c8c976c4b8a82"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "b283190fb06560d8e2674ddd482fc7a0"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "b4ae04241317f93a7995b9d8ad4e2fce"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "2567e151384271b96cc4edf335aaf667"
  },
  {
    "url": "master/packages/views.html",
    "revision": "30f25fbfc8d7189607c99ad44b869eac"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "3f3d85e9736b5e40b9bbdb34a08fd5dd"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "36cf5306e48604a25ccbb08f768a4323"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "372bda9eb494289f10470bf222f31bb5"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "ef2ab61a01bbcbd73fd52d9739f37260"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "a19de1db0f1e15646d20492a768c1b81"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "324eb08d3ed5ba0bb70f5d5071f936eb"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "57f9b71ea4db655557240edfe55bd658"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "b390b2575fb2de2230c82a9bd87783ff"
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
