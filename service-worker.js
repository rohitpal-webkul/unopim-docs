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
    "revision": "edc3b25dbee1f3756633799fac78817a"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "262d644be409ceabcea864c3aec3caef"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "99e875419cbec8ad74ff84c21b657921"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "19eef12954ef1459b193a567d317c2be"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "d80c33c3443dc67aa3a1e01bb96f2049"
  },
  {
    "url": "0.1/advanced/security-practice.html",
    "revision": "567c1b65cae4547638ce259ab1456038"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "1e26d7479ca2774d7d727d33d406796d"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "613f5502c26f58491b58c28f4d75dc97"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "8ebcb966b9124e0155baf8f6705db8c9"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "0eea910b03b2341cad29f43a36aaa66b"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "e736d0aa7d03984b48a099a9c6d427cd"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "a91ebea01a27cac465bffa33a6e9f482"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "794981d3eb185f39f5c15dbd5b2a3a1b"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "f2eded94bfeccba686bfc891d362ee3a"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "379ff91b17ee5de0914d0932488f0f76"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "7e90b49ea873005199cc3e21501532e0"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "187dc3045fa689645f9d6f3e136dd02a"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "095fecc6e2247ec756c7911e9aa35997"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "940b9bd7c3102e4d947d8a1544b1a40b"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "5fc817e3cbb1e052586aa945b4ed60c5"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "c02cc2ecf821ce4f7d745e81aff60d80"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "7f89662dcf5c72be38e9bb49096b8de3"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "d6e4d6d0d291c0cb2e19f4545645ce2a"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "6b46f00773a855c6fed81dbc4542d10d"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "06da90e74e9af22d71598fcde4187cc5"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "6c76e79e4c74ed563ca8b558e516b418"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "75ff0e6b06253df8c5769a83a96764d8"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "98b4325017f5272e9cb29a3f0cdafac4"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "d2ee67faed1f8a4a8f605e8d0abcfa47"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "7b23427c935bb03bf91778a7e8e16f91"
  },
  {
    "url": "0.1/introduction/configuring_supervisor.html",
    "revision": "c1dc2fb94a4198b66468e9aecd3b4337"
  },
  {
    "url": "0.1/introduction/creating-newuser.html",
    "revision": "98e0848f60aebd2c679f935d5f7f3857"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "71dda88f6a957b7b57e6bc0f439e21b5"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "9771698faf4938402e4aecdfcbebf8ff"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "0fa81d668038fa121525b4ffc45b127d"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "aaf48d289b4a74799ae96e083eaeed49"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "5f93b199df4558da67c06e678d8a1f02"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "80718b03f08a47e4aeaf046b01f92d8b"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "c784dad54462cdf7b18f0127b8ff6296"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "cf1b753e2a464e69afc87c3c367e3c71"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "d88d3cb1115897bdba595fe5bdd7d970"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "e18e86f3a48208a4c3f24f5e9fc9a5c0"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "1c3996499922d64d73ec0addc2b5670e"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "9ca6a53b008fae9191277dc2ec957cc6"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "2b91b52fbf2a41e12fc093e8e29d6009"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "f44867198e29e09c8c8c5553d82ce3d6"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "0e3b74adf2b3ef151b56470112fe2211"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "b3709858d8333ee2ced2ffe6e15c3ad4"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "cc4d0e738a39baea060430600036ef8b"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "c59bb0666385a0835c452bbbfcec53e6"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "e4d4c2c04754ba3c7483d7ea90dfbb7d"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "2425071550d5030274a72a79467aecc1"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "0760a982cdfa17ff487591a259b3d2d8"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "79b28f8c784f7d3b12c39df5e44fbbdc"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "8621e71a3f3c625fd0724385f6e7c195"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "9328bc142c8723e872b0d228631ef43a"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "39414409ac77b032eea1ec73ad05563b"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "7502b76ac9a1ddfdcaf264f7d2f2cf86"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "42ada11d44086ff89d3e06a96b521d23"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "c20eb0055c5b42cbb789f87c29762c6f"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "3c3e05f94672e8e6a2787223cb1feb3e"
  },
  {
    "url": "404.html",
    "revision": "8ad31dac3508a6437b557cd7500545e8"
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
    "url": "assets/js/101.e85052ff.js",
    "revision": "76ed8953642e050d0f75c3a71b9a06a2"
  },
  {
    "url": "assets/js/102.fd54efc9.js",
    "revision": "91f4b416124abc7436cfc372f53e3968"
  },
  {
    "url": "assets/js/103.ccf0e293.js",
    "revision": "f94e200571a65dcf72f8463e8e2f2a42"
  },
  {
    "url": "assets/js/104.2ff15db2.js",
    "revision": "ed282dc00c590699d41bc14ec1da13fa"
  },
  {
    "url": "assets/js/105.58543df8.js",
    "revision": "0c53dec37bd4f09b869f2f9d1d1cf1f7"
  },
  {
    "url": "assets/js/106.6ec43b2e.js",
    "revision": "338a2aa61687ff2a632ecf0e3bc5fca9"
  },
  {
    "url": "assets/js/107.c4156d91.js",
    "revision": "d5dc58f5fe72fd5fd86c43baee08a267"
  },
  {
    "url": "assets/js/108.b864b44d.js",
    "revision": "d351b4b73b5e5e37b4a2916338b637b4"
  },
  {
    "url": "assets/js/109.24a8c5eb.js",
    "revision": "6d792fa2db8f0ed872f41c9af3cfc696"
  },
  {
    "url": "assets/js/11.7a5942b2.js",
    "revision": "47f2ed28b814943a0210ae159a901a95"
  },
  {
    "url": "assets/js/110.8d9bcdc9.js",
    "revision": "cbb14be35ab26bab996612d95e7f2d2b"
  },
  {
    "url": "assets/js/111.223c50ff.js",
    "revision": "ba4fc7ebd2180850b848d592c893d89c"
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
    "url": "assets/js/117.ef61bd8b.js",
    "revision": "d39103bac1cee930cfd961039e0d9228"
  },
  {
    "url": "assets/js/118.23f53409.js",
    "revision": "31a5edc169ec2de04925f7c8a4687cae"
  },
  {
    "url": "assets/js/119.f80c40f9.js",
    "revision": "afc95b9957203dcf19fc5bd561c0e3b8"
  },
  {
    "url": "assets/js/12.869a83d5.js",
    "revision": "dde99edf3a2e01854b17368304928f1d"
  },
  {
    "url": "assets/js/120.d31206dc.js",
    "revision": "c3f7ccedac89faa62aa4c95f57ccd5ab"
  },
  {
    "url": "assets/js/121.e19ec753.js",
    "revision": "15e22bb7edfa7ed78e189542864631c3"
  },
  {
    "url": "assets/js/122.ea8e262c.js",
    "revision": "a53e1d86afebc8099c105b4e93f38d45"
  },
  {
    "url": "assets/js/123.7db51c9f.js",
    "revision": "ebf054b36da54a2c95dd6a636dbda26a"
  },
  {
    "url": "assets/js/124.ebfccf8f.js",
    "revision": "582c35a9131ab60037bdadd450cce076"
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
    "url": "assets/js/128.e41ab80d.js",
    "revision": "d0bc70e51d80784997486899c34cd388"
  },
  {
    "url": "assets/js/129.de1a5943.js",
    "revision": "9b35ecae44a9ff7235adc914cc1ac4aa"
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
    "url": "assets/js/132.a5b7a6be.js",
    "revision": "af95ef6e32828643819adec8984bbfd2"
  },
  {
    "url": "assets/js/133.e2393843.js",
    "revision": "509026f6687266ef874f7f4a02e45960"
  },
  {
    "url": "assets/js/134.fd8619f3.js",
    "revision": "72c8ad5057f5abc0649abed93089cc8a"
  },
  {
    "url": "assets/js/135.3ad3319b.js",
    "revision": "0edeec8bef742038b1450ed71a142b3b"
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
    "url": "assets/js/138.0af7d172.js",
    "revision": "95d96f680289390256dc3dcc90f83a1c"
  },
  {
    "url": "assets/js/139.bfc34716.js",
    "revision": "619b44d4ab81112951d2ba266c7a1647"
  },
  {
    "url": "assets/js/14.b062c4c6.js",
    "revision": "335759fe9a13c3c4414174b23c978fb2"
  },
  {
    "url": "assets/js/140.f503e944.js",
    "revision": "0746bb6e2b629bf29a42441da0efe29a"
  },
  {
    "url": "assets/js/141.25226bff.js",
    "revision": "0106f6f7b4fa537a09727440d6e4554c"
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
    "url": "assets/js/23.4493258f.js",
    "revision": "282bdec545f16b96b37d3f17cd40cd29"
  },
  {
    "url": "assets/js/24.79594902.js",
    "revision": "c71608e9bd892b7610a6cb2042378530"
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
    "url": "assets/js/27.79f46683.js",
    "revision": "94ee0d3d592ae52e993cda8f3e9b9566"
  },
  {
    "url": "assets/js/28.632e3001.js",
    "revision": "35361c93945b4788601f1f4536b336fc"
  },
  {
    "url": "assets/js/29.945eb342.js",
    "revision": "c8a667e64cdcca7177f90943ce8e483f"
  },
  {
    "url": "assets/js/3.c08788cf.js",
    "revision": "9a5397d300c118eaed270de3385d25b0"
  },
  {
    "url": "assets/js/30.22c45d4b.js",
    "revision": "a016e84267865ea19e6989269fa21e4e"
  },
  {
    "url": "assets/js/31.c5af8d58.js",
    "revision": "4763c17766c489bea3435d926bc977de"
  },
  {
    "url": "assets/js/32.b07ee9b4.js",
    "revision": "4810f20fca132174d06736964bf37293"
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
    "url": "assets/js/35.e104785a.js",
    "revision": "c3c6a16ba97af79f0191d308524f0271"
  },
  {
    "url": "assets/js/36.1fc5a798.js",
    "revision": "bbd1f16e7f318e3494d74326874e6924"
  },
  {
    "url": "assets/js/37.e935b097.js",
    "revision": "c2350aefa280ecd9e9c882111c637da8"
  },
  {
    "url": "assets/js/38.b1beba2d.js",
    "revision": "b93c4fc14713ed472d19c6b5015db963"
  },
  {
    "url": "assets/js/39.4f0dd914.js",
    "revision": "639d7b2e6d3f23a55ec5060f6a7a6319"
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
    "url": "assets/js/41.c18d8f9c.js",
    "revision": "df1dae99406118d61f9df544452e389b"
  },
  {
    "url": "assets/js/42.76cea26c.js",
    "revision": "999577361dad44f4c616ee12151afe77"
  },
  {
    "url": "assets/js/43.d755fa45.js",
    "revision": "ce53e8a1dd039ce2a01207bc639c7b60"
  },
  {
    "url": "assets/js/44.f55de224.js",
    "revision": "8b4a91d6217948819fa8272ff495bcf1"
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
    "url": "assets/js/57.b9064135.js",
    "revision": "7b63c421937ed263436b2c2a5979da50"
  },
  {
    "url": "assets/js/58.d70661b5.js",
    "revision": "7d5b41e741ef9fa84c9b90b3dc402d09"
  },
  {
    "url": "assets/js/59.40c207ba.js",
    "revision": "deba41754c35e706990379707db5d18f"
  },
  {
    "url": "assets/js/60.35a22ea1.js",
    "revision": "db1dcda809974ce91e6bfc161c48e923"
  },
  {
    "url": "assets/js/61.b5fd91fd.js",
    "revision": "cfa19774ab6ff14c1966ecb774b24e6c"
  },
  {
    "url": "assets/js/62.2268480e.js",
    "revision": "6b1307ab4d07ef91e436eeef3ed16309"
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
    "url": "assets/js/65.981b51ed.js",
    "revision": "559a2dcdbfd353470fde6fe1cf58a1fd"
  },
  {
    "url": "assets/js/66.00c53164.js",
    "revision": "1ecbdaba3787d5ef9ae0b073cd26b0be"
  },
  {
    "url": "assets/js/67.cb93b2ee.js",
    "revision": "2644dbd8f15964a55111ab92cde179e2"
  },
  {
    "url": "assets/js/68.0c3e124e.js",
    "revision": "295136ac6a0a15600fb348dff1ab81c0"
  },
  {
    "url": "assets/js/69.aa0a0c8b.js",
    "revision": "d1062d0d46009d928f4cc1f950a44eb4"
  },
  {
    "url": "assets/js/70.99562a6e.js",
    "revision": "6ed727cce50bd878d786ee239343245b"
  },
  {
    "url": "assets/js/71.2d4587c2.js",
    "revision": "7efab9b7c3d9c67c4ed4a59a1661954b"
  },
  {
    "url": "assets/js/72.6d8cc15c.js",
    "revision": "bfc79831434c820ac081ef5b8eef340f"
  },
  {
    "url": "assets/js/73.42ffed3d.js",
    "revision": "cbc5cd828fe38207cd2593c84a0076cc"
  },
  {
    "url": "assets/js/74.8716592c.js",
    "revision": "f8ade188cd6c97c94230c544fb0397f5"
  },
  {
    "url": "assets/js/75.4230baed.js",
    "revision": "9eb8d30706cc649a84a0e46c152cc4a3"
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
    "url": "assets/js/78.8ecd46e0.js",
    "revision": "35881b1aefde84d2439a02e9570bc933"
  },
  {
    "url": "assets/js/79.b30adda9.js",
    "revision": "631cd56fd28be06c29575de6f4cae021"
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
    "url": "assets/js/81.560bf6d2.js",
    "revision": "53feb4ce13081d35052927678f59c99a"
  },
  {
    "url": "assets/js/82.36a628e2.js",
    "revision": "2d4b4abdd00e68a2013e2e49c53d6d10"
  },
  {
    "url": "assets/js/83.b73ab677.js",
    "revision": "740dc6a40be28cd33b36afac4b7929dc"
  },
  {
    "url": "assets/js/84.19b657a4.js",
    "revision": "28bb79f6733265bb5369b9f78a078420"
  },
  {
    "url": "assets/js/85.df39aec9.js",
    "revision": "c92d280b55cae588c876fa7d721a84aa"
  },
  {
    "url": "assets/js/86.b06f9910.js",
    "revision": "656de00cc5be01444e0568c3ddc6ee18"
  },
  {
    "url": "assets/js/87.a25b3d98.js",
    "revision": "4282f4c33027b9c4b725260247b10e64"
  },
  {
    "url": "assets/js/88.6a788fd2.js",
    "revision": "d951c2499f2d5f1540c9748fef685b44"
  },
  {
    "url": "assets/js/89.58cc48e9.js",
    "revision": "dec36674a0a1f58d6331924bf45eaa53"
  },
  {
    "url": "assets/js/9.87cd171b.js",
    "revision": "09ac2a291466db1d881498af5aa28d8a"
  },
  {
    "url": "assets/js/90.c764b36f.js",
    "revision": "452a2b907504294f061e2a9941dce71c"
  },
  {
    "url": "assets/js/91.f31b82b4.js",
    "revision": "b5500cc08b13327f462c56030b45a167"
  },
  {
    "url": "assets/js/92.95d41027.js",
    "revision": "33796e3dd903f9f18c1b9af1fd6b30d7"
  },
  {
    "url": "assets/js/93.d5cb22ab.js",
    "revision": "ee4fea7bc3828e6309dd993ad3f657cb"
  },
  {
    "url": "assets/js/94.705d645a.js",
    "revision": "4c7ccb22c7db8e1085a5a96b0a5c46f0"
  },
  {
    "url": "assets/js/95.8ff6a950.js",
    "revision": "4985a3076fa7d00f5f443f066e9bf614"
  },
  {
    "url": "assets/js/96.590433d1.js",
    "revision": "995bc0799aeb85947c6ba67b862205a3"
  },
  {
    "url": "assets/js/97.5e57367c.js",
    "revision": "f67b6bf361ef99d8d7ce66d01dedacd4"
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
    "url": "assets/js/app.320fc176.js",
    "revision": "406914715361294618d327d267a9a15f"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "bca857e1eb5facb9a4f0303997a8f3cd"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "5bccd55f6bb7e395b7c5e17120841bf6"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "ac1559bcca90f19b5e73f6472cfbd00f"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "b3333a1e9e092f6aaebc675161a2cc7e"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "96748b451c1d35d42a32163d17b74356"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "25cdca90cd5357e8de2c69848342fd1f"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "b2ab5e7096fa47390572ba028e781649"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "ea8bf6ed75e3b8ad3db8b18ce84e3143"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "c0ad13a68085813f2a784c8856eec841"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "09ebc083c0e8cf8395ce64acaec0dc1e"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "f8aea96c7758609b70647c41761b6e84"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "2dab1e106e9844ac53e2d5b4931fc660"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "2d0c5e8ea9027bdc2cfb0fdf70ec3e50"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "1af2cef7f77ff3e0fa71a3f172061b30"
  },
  {
    "url": "master/api/category.html",
    "revision": "01fbeb47388b6a484767aeae9858a3e0"
  },
  {
    "url": "master/api/channel.html",
    "revision": "e837c51bab1a35a7d0c9fa7f92885ceb"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "5d387f6efab0392c57dc752029936e79"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "b7e92e7bbc204e221c9bab3f13acde77"
  },
  {
    "url": "master/api/currency.html",
    "revision": "e387b352c184704d09581ca5021ee56d"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "aa4d1895b4baf436c6bfd0a3460a1c9b"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "863e59e8e26bb493305a30a6a2e5ed5b"
  },
  {
    "url": "master/api/index.html",
    "revision": "9af1fa65719d986d45ea1cad57b6c011"
  },
  {
    "url": "master/api/locales.html",
    "revision": "37292a8697a1afd3638528b5b53d3385"
  },
  {
    "url": "master/api/media.html",
    "revision": "2c950a45bf22e4762df7ff2335f63ef4"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "68ce9dae0fa11d73371de4d60f2102de"
  },
  {
    "url": "master/api/product.html",
    "revision": "04b806d3223d2baa13f549737760e6e1"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "2bd8f8f4d983d0ad62e30e0ccb808e88"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "cfa11866569945d8ef87af0d253b7d6a"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "2ae0268c3a59224e67826afdc9e55a62"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "d929c4488106c7e562151827fae8e23e"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "519d72d95aa70fe87946a642eb99ecd5"
  },
  {
    "url": "master/introduction/configuring_supervisor.html",
    "revision": "7e07219de294cb1ccb8d601c18db8bb6"
  },
  {
    "url": "master/introduction/creating-newuser.html",
    "revision": "26d2872d04455b8b09621d9fed16d1b9"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "20a204af05d162875fe112d9cc1ea9c2"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "6d81d731f881859e4159d4af5a6ea6f7"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "c070ba9b6b3d3a9530cc52580baf0e87"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "dced54b3c0b095be8468a2ab9d249bd2"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "9195350bdce33cddb66ee0485930f9dc"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "d6d8a43796e4060a016c29280798657e"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "d5ee47decd305734b944c6fce16ce10b"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "878ff68df15a6a39d7cf285bd3a37af1"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "b1d5fe4a62b7c7097b6e9f1eefc9e3cc"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "4da9ca136953d88a0151994e65422584"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "bd29097d8adaa6a9045ad1b0435b7cb6"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "536b71b9207d536f75038de5dcc73205"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "a6c6bb179ddb0e797cde8dacece28bb9"
  },
  {
    "url": "master/packages/history.html",
    "revision": "9f79fcd8a7a92863c52c800051a5fbaf"
  },
  {
    "url": "master/packages/index.html",
    "revision": "ab484a8d22074a321bafe86c1f8d8317"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "3d9976da8af3fcea9dc7ee59d24c89c6"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "c771a5b3d1370a6fd7d66031a241c904"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "a8d4024cff7e9405b87b8a0333d13063"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "122dd7f9d7e1001e0ee7d3e59d8676b1"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "86bbaf86f95f21d68a569e6e43cbc293"
  },
  {
    "url": "master/packages/views.html",
    "revision": "3a16a923e0a00ad66d9c25d4cd6723f4"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "65df5b02b930e279af4670714c94dd26"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "6f1488167db235c170688f562c56f8fb"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "458b520162162b6d4a70cb9f50976e1d"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "c5560fbd44868417b114f6844ce556ae"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "a97d6031c47d3262335b0709e5a5a250"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "2072af26a37a558a055ce3416e130734"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "08a0551e9398c3ba5fd0ce6f6c8b3df1"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "74eef6a88c3e4b0c5631eeeae6076ee3"
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
