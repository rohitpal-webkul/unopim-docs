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
    "revision": "d0ac158a7e477bcfd8d6cf513ee1df49"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "a3f1f725589b7d29191d1746818b39cc"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "4f7a1207721de4f2d4d5b3764bf91061"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "20d47037ea6be32877971c3a7f211754"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "bb94f427b7fdc4854eccff38ce04fbb8"
  },
  {
    "url": "0.1/advanced/security-practice.html",
    "revision": "1beb0defc35b9540888f227b216ac8c3"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "f8f1e751974cd01590afe8216dd97288"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "fb4c9e68133aeaa15afe622b42e8993f"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "91cbba2acbfc780abc7e8e368da0f815"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "a4bec06045ad043279ea00a57548c818"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "176c8fb8b7cb9d7e06231267857788fa"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "951f13945e923d576043d1b405e72770"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "867ef27d7da9a930c53a3045aa00331d"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "9bc8b0964442dd1191c4a2b9c588e96e"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "efc40048e89b1ca90f085b6ae8c11e12"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "d3b5c16631f084e0aa632c254cccd298"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "637d9ceaa90ec3fa266b9ecce6068424"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "3688280b24a50dbf778e76cec0da81d0"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "fa6c4b18a9e72b2eaff80da18c5aa115"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "9f160b9e78863fd963f7f28bf604c845"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "67394b22f82845851e0466399e678bfb"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "40fbf16ded29f8b2cdf8e42a6bbcb823"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "0ad7cc0dcf17a0256b33604e1acdf116"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "7120baa2ba7f88a3863458b6c69c0ed6"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "61d4c0f00d5b02cbc5d654839b545d0c"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "8c6b9c6f2f10e634f557f6c21919810a"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "a9bd4c64e1375101b7fb45758c3f3814"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "7b5878b7627859e97162f4f6305a3fce"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "3ec2ba753a3d03cbef8ec3f6cce52405"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "19df323543a163a0db7f7e4eda2b3640"
  },
  {
    "url": "0.1/introduction/configuring_supervisor.html",
    "revision": "ba04255d4567fb60e046f1d849eb9135"
  },
  {
    "url": "0.1/introduction/creating-newuser.html",
    "revision": "56e69f944a0fb2207fdb46ed4bbaf7e9"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "da48692723f32afc8877813f16737c18"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "655b7e9da1082ef18efcb5b1f6c77c1f"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "f546e6f9675bf7a33d506fc3932d6179"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "e17da826cc29a3631ed05e127014bbc8"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "442909b4708936e85c4a44fe37a2c292"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "f8bcdb95178769149a1cfaf706465ae0"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "b7596cddd3b579fca467c19a7b81e5d2"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "2323606d70a18feb880eb650a5572723"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "6458a6fe67e36a497ecda377a2eacff2"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "4e9d88c1e9d2ff7081c0d9421836a677"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "ae7213fbf6de5267077d23a1105f13f8"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "7e4cba46902de47e2726a05950237cb1"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "96f06135e21e513fcd02d85bcdcdc135"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "bb883c86ec597b7773c89388a76114ed"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "04e9294fc93e89138327dc638d7c2e31"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "761c655d94c8a38c4420ee333f097f06"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "7ef62acb61f048782cab7c26ccd0091c"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "ff77cf19d6fd3a402b8ac0cf3c128af1"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "bd87cea2d71934c9f3499ffb1c73aede"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "12205d9d73d405c6578f80548be18ec7"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "3cb25ee04f9eb5312d6be9d3db7a8166"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "ab797d3e55cf513e93e2e66674ad28b9"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "ba3e63eb4d9cad9283aaf011dc2eb296"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "86609f5a5f8d2377029c3f74a94b3da7"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "b0ac2b0293fed213c6162925e3a2fac7"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "236ca56c010eb0fd3baeaeb7426be845"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "65e3ae9b89d213baa76ff577b937a1d8"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "bd2758d53a2203322afd3b4b8ede42bc"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "37fee1582bc65d1b2372337b07b46651"
  },
  {
    "url": "404.html",
    "revision": "ce52fd1ac25ca8e134a5aeb9562f446d"
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
    "url": "assets/js/100.20cb5ca6.js",
    "revision": "df312560cb59d4a2c99f0b7ee66cb15d"
  },
  {
    "url": "assets/js/101.4be46613.js",
    "revision": "a4645058afac3671003e0763ee254c6f"
  },
  {
    "url": "assets/js/102.49b1686f.js",
    "revision": "13baede02091a8f5ee68fc6cf7a70d20"
  },
  {
    "url": "assets/js/103.b0b74f21.js",
    "revision": "6d2fa57e9cff3315600e0f6320aa1c4a"
  },
  {
    "url": "assets/js/104.2e765804.js",
    "revision": "f2b318a2118aedcfb966c148f665f61e"
  },
  {
    "url": "assets/js/105.d3385b36.js",
    "revision": "6a3257bf2d279cff871290adad71852a"
  },
  {
    "url": "assets/js/106.bb39b6aa.js",
    "revision": "a89557c0061c79a68081c71fd3e7c5f2"
  },
  {
    "url": "assets/js/107.ee92d722.js",
    "revision": "cadf534f06dc2517b90c5efdbbda23fc"
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
    "url": "assets/js/110.8c539d60.js",
    "revision": "a3a8a0e582b63f0dcee6c5dfb79ef538"
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
    "url": "assets/js/114.9fc49ebd.js",
    "revision": "5e36da59c6383cf8db0a38154e758454"
  },
  {
    "url": "assets/js/115.12831eba.js",
    "revision": "cccc37cb115b0d8eeefb623b8e05a5df"
  },
  {
    "url": "assets/js/116.b0c6a638.js",
    "revision": "d18fc7ede517ce483abec386f96771b0"
  },
  {
    "url": "assets/js/117.b9476f58.js",
    "revision": "8bafa2b9691bb36e5fd1b3c23f4c1189"
  },
  {
    "url": "assets/js/118.b9c906ab.js",
    "revision": "0f0de1e29f8441d64d444153314b415a"
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
    "url": "assets/js/120.d64eb343.js",
    "revision": "367ab7ee7bee68ef877680f7c030def3"
  },
  {
    "url": "assets/js/121.e19ec753.js",
    "revision": "15e22bb7edfa7ed78e189542864631c3"
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
    "url": "assets/js/124.c2466fc7.js",
    "revision": "57e3bbcad35cbc8e08f6f522f45314e0"
  },
  {
    "url": "assets/js/125.0ea37dc0.js",
    "revision": "0b617ad1fab618a6b99d4de105ad38c6"
  },
  {
    "url": "assets/js/126.4c03d3ad.js",
    "revision": "803a2120bfa5f16efdf55a4f378960af"
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
    "url": "assets/js/129.87955e51.js",
    "revision": "d5c6e274897c58678d90d369e8a5841b"
  },
  {
    "url": "assets/js/13.85458a12.js",
    "revision": "798f4926db6e3c82bdc6f2ec4af362d6"
  },
  {
    "url": "assets/js/130.6d67da6f.js",
    "revision": "c6168f8f7e710059c4bb42b10e4acf7c"
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
    "url": "assets/js/134.32d98778.js",
    "revision": "b3c360aeaaa531c066e357aeecb6a6c1"
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
    "url": "assets/js/137.2246383a.js",
    "revision": "b7b066d0c502311038fc41cd678ef439"
  },
  {
    "url": "assets/js/138.2af7b8bd.js",
    "revision": "548fe55eb9bdedeb3460e34cdd92f621"
  },
  {
    "url": "assets/js/139.bfc34716.js",
    "revision": "619b44d4ab81112951d2ba266c7a1647"
  },
  {
    "url": "assets/js/14.a468f716.js",
    "revision": "6eac8b17fc21ec6cae2acef72c117a5c"
  },
  {
    "url": "assets/js/140.4ca3a866.js",
    "revision": "61e30fa6fcbc0c2c7b2dfd686b5273ec"
  },
  {
    "url": "assets/js/141.b2980440.js",
    "revision": "5df9f8f1a1fc492ee4afe7baadcb3b17"
  },
  {
    "url": "assets/js/142.338f1850.js",
    "revision": "63c8d1634c4aeacddba2fe6f1cc3fde8"
  },
  {
    "url": "assets/js/143.1537d635.js",
    "revision": "f80dead4f1f759b014de6c844e204aaf"
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
    "url": "assets/js/28.632e3001.js",
    "revision": "35361c93945b4788601f1f4536b336fc"
  },
  {
    "url": "assets/js/29.ff1d2764.js",
    "revision": "c9726909516b7a4da328c79fd2f39685"
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
    "url": "assets/js/32.83994259.js",
    "revision": "51879c7b29cd3e87ac7c81117ed22fb9"
  },
  {
    "url": "assets/js/33.feba05de.js",
    "revision": "cfb41b589946298d15d9686266e81f0c"
  },
  {
    "url": "assets/js/34.4245ff6a.js",
    "revision": "bb0c7b713b70a5ddd3add9d65c2b203d"
  },
  {
    "url": "assets/js/35.9f3b91fb.js",
    "revision": "1acd76850cd9eabd7d996239823abb7c"
  },
  {
    "url": "assets/js/36.15977a22.js",
    "revision": "ecaedabe8afec3e0a54b687837b2c215"
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
    "url": "assets/js/39.59b6d394.js",
    "revision": "b517c4aeb5d87917f02538377f729f42"
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
    "url": "assets/js/42.18cd46a9.js",
    "revision": "255cf8b54e8bfcfb72a458ab34622600"
  },
  {
    "url": "assets/js/43.7aeec7a9.js",
    "revision": "a413630e5acd862b546c740770de0fb0"
  },
  {
    "url": "assets/js/44.ae6edabc.js",
    "revision": "5577567dad32cd709543f259c5ece038"
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
    "url": "assets/js/51.396a7451.js",
    "revision": "f00dab6175bf902487d225b940277894"
  },
  {
    "url": "assets/js/52.0107138c.js",
    "revision": "fd1b257df85e3b7738c4a3e9480f47b0"
  },
  {
    "url": "assets/js/53.b38e06c3.js",
    "revision": "ff0c2af784c8fd8d37935c384d3a52c6"
  },
  {
    "url": "assets/js/54.57517525.js",
    "revision": "6ee080ced896758975bc6ae7b57b4454"
  },
  {
    "url": "assets/js/55.3577d6c0.js",
    "revision": "2db153d6b22ea9181149548834aab799"
  },
  {
    "url": "assets/js/56.2e2b0df5.js",
    "revision": "971f546843a688dede95e8bc3ef26fc0"
  },
  {
    "url": "assets/js/57.fa5a53c0.js",
    "revision": "7987d499cb83c29a9403213dee1c89d1"
  },
  {
    "url": "assets/js/58.4c4390bb.js",
    "revision": "1f44e6eb5429653b438ce5e4a1d3dbe5"
  },
  {
    "url": "assets/js/59.40c207ba.js",
    "revision": "deba41754c35e706990379707db5d18f"
  },
  {
    "url": "assets/js/60.d102b10a.js",
    "revision": "ddbb490409c97fc09f206685a1f5b186"
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
    "url": "assets/js/65.48c92b8c.js",
    "revision": "9c9e01ae64b36d5050fe57c9e3aa5c4b"
  },
  {
    "url": "assets/js/66.2c9fedbf.js",
    "revision": "6eacdea6c911df58a9b1b18f16638a62"
  },
  {
    "url": "assets/js/67.955dbd23.js",
    "revision": "17ebdff390be8d16ddcc2241652defe3"
  },
  {
    "url": "assets/js/68.eec75553.js",
    "revision": "3ca47c26cb9ad316b0aa5e8fb2617689"
  },
  {
    "url": "assets/js/69.bc1e09b5.js",
    "revision": "a561e601d6e07b59ac7e789e60fbb309"
  },
  {
    "url": "assets/js/70.ba8b755d.js",
    "revision": "72949f93f75342658a3c487c8f20982e"
  },
  {
    "url": "assets/js/71.5180c87d.js",
    "revision": "183241c022e730888ac6ea60452429f3"
  },
  {
    "url": "assets/js/72.7149147d.js",
    "revision": "2c6bddad6089e302f8bec63a9375b4ac"
  },
  {
    "url": "assets/js/73.cf767379.js",
    "revision": "64a63d1d6788428be0bdffda72d090ff"
  },
  {
    "url": "assets/js/74.146a4c53.js",
    "revision": "8f1453b2f67080143553c3f2814b73e9"
  },
  {
    "url": "assets/js/75.d08b668f.js",
    "revision": "3b2e1161d92654c4f95b0e845e252baf"
  },
  {
    "url": "assets/js/76.a9dd6717.js",
    "revision": "cf34cbaf8abd8c320c8669cde7550e07"
  },
  {
    "url": "assets/js/77.12e87e9e.js",
    "revision": "fc9a6567ec91f121106e871c5be4e7e2"
  },
  {
    "url": "assets/js/78.a90e9b37.js",
    "revision": "dd25139c75928f88ff66664cd98a2508"
  },
  {
    "url": "assets/js/79.680158c3.js",
    "revision": "ea4d638277d0d635ca4e2c01162e1947"
  },
  {
    "url": "assets/js/8.11eb4c04.js",
    "revision": "e6f1463d058e8995cf88e3027da8e36c"
  },
  {
    "url": "assets/js/80.453f95fb.js",
    "revision": "104bb19f8d2dab00803fb61da05fd7d9"
  },
  {
    "url": "assets/js/81.702cf92d.js",
    "revision": "6f950b4cbd6951817e4375dd99aaf8ae"
  },
  {
    "url": "assets/js/82.ac4d2131.js",
    "revision": "7e17bdf342df9b6d137baa8d19d32c68"
  },
  {
    "url": "assets/js/83.2ec9166e.js",
    "revision": "067d1be70adfe66faf55e0252ef15055"
  },
  {
    "url": "assets/js/84.f6d47a30.js",
    "revision": "293ec49a27bf21d7f71fb23ad0d2985c"
  },
  {
    "url": "assets/js/85.053a448c.js",
    "revision": "5e4b793fbf032c502c8bf32f3ef25d6b"
  },
  {
    "url": "assets/js/86.067c147a.js",
    "revision": "f550323dbb688367f0f0ff1280aa173a"
  },
  {
    "url": "assets/js/87.de77be06.js",
    "revision": "0dc5b2e062eded5c69d188e478a836f7"
  },
  {
    "url": "assets/js/88.b74bb6f6.js",
    "revision": "dbca8ea83b55b3f84e948683344ce794"
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
    "url": "assets/js/91.f31b82b4.js",
    "revision": "b5500cc08b13327f462c56030b45a167"
  },
  {
    "url": "assets/js/92.88e9f4b2.js",
    "revision": "b6d17c6622f0715c74b632d1f2974097"
  },
  {
    "url": "assets/js/93.29bf07bf.js",
    "revision": "034b0192f2c93c2710718af04abf1447"
  },
  {
    "url": "assets/js/94.7e7f62bd.js",
    "revision": "b01cfcb8b007188396b6277a5be35e0d"
  },
  {
    "url": "assets/js/95.792b5589.js",
    "revision": "4b3647a71899041a8417256adf8fdbe4"
  },
  {
    "url": "assets/js/96.8176050d.js",
    "revision": "427bee8f1547f0d6cbb8cb23dd59df55"
  },
  {
    "url": "assets/js/97.5119e9bc.js",
    "revision": "7b3a98d51a8c9f34809242abf0258e8e"
  },
  {
    "url": "assets/js/98.bf7edc69.js",
    "revision": "89d515c20060a957a4db5040f01aed39"
  },
  {
    "url": "assets/js/99.e38cd91a.js",
    "revision": "eb46d5f81ade112b2aef162fb6f61e57"
  },
  {
    "url": "assets/js/app.7f9b0714.js",
    "revision": "83439771d67140b0fa9ce45810992db9"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "f7936d820fa2b9d136739afb0b445bfa"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "0aca1b94f14b762b6bfca8e53f4b3914"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "03a6b25e73108d339f75946bcc2b5435"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "8f00a477fb187bb7d7e33cba5caf75cd"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "5154a198a0b635ad6af5816a3cfdbac2"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "fd2a511194e56792c135a3056dfe4641"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "975edf935f9244cb648b43339da21b54"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "54e2609af6f7ed009682ec92918ee013"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "d04b740251078b1615a42861a81aa4f4"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "8eefcd04617bb16a28c68063ae0ed789"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "90cd256784ef62937889a574c2592c27"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "56487f5adcd765ab08b7d20d7700c047"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "7b831728a17a5e9d88ab539b0ce6b6b1"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "46cf7faef58a50950c3bd3a4b664a391"
  },
  {
    "url": "master/api/category.html",
    "revision": "535e7d09785848ee91126cb91519f53a"
  },
  {
    "url": "master/api/channel.html",
    "revision": "66c993bfe4c66a0fce9f7fee664c4037"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "043e34f94adae1945ae701185ccc5b92"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "e3dd33bfc63a26e5142a3f161b84cc66"
  },
  {
    "url": "master/api/currency.html",
    "revision": "bdd8021a54cddf09059e0bc2f0ba95c6"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "4ebaceaf1e272d70012fa4741999a670"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "85f40b399ac2247dc990df84f8a3100d"
  },
  {
    "url": "master/api/index.html",
    "revision": "0e20b9be45d65bb68589fbc950af3056"
  },
  {
    "url": "master/api/locales.html",
    "revision": "7a4ac0784bb4e6b4dcf44eccab945208"
  },
  {
    "url": "master/api/media.html",
    "revision": "63db343df320c0fa29cf5fd5c74e7644"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "93d16410f46855eb9f8ffeb42fc15f8b"
  },
  {
    "url": "master/api/product.html",
    "revision": "db1774b4f91c8708fd8ade9b0619f975"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "a61593e4f02e4c2eb278e1644320902f"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "435cdbf88f24be4ee3222a8d1c89efbc"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "accc331e1bbc2c6fada95f933d6ee029"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "5100cfb2d006c2a134913d2d8c4c4a71"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "281351ad5c8963768728bc9514792d73"
  },
  {
    "url": "master/introduction/configuring_supervisor.html",
    "revision": "1c5e862b5935c268ef32a259aa6fa8af"
  },
  {
    "url": "master/introduction/creating-newuser.html",
    "revision": "ebe01b418cb9fa3a9e8c14a39afda5e9"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "2caa037cac2b138b819284e372450afa"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "4de3e656c35fc8c3eeb69f56d550a5b6"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "f3140f7abb31c1dcfc95535469bb5d18"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "307a8cb6c13dd670f40708b1fff41f11"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "95f7e61cbbeceb61719a5125fd18c360"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "193bf63e15bdcf9d9d155b6ab98d386e"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "346d3dcf2ac1d727a55eff3d832f911d"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "c344959076e8f99485889091e3674992"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "1dff2e89c74669fad3cbd369a336610a"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "7c4c47c03ed1bf57156d767919b393a0"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "cff412be6a99f81a580c6c511559750a"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "089140765196f74c48df6d31bda4171c"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "089331e91eec6fc8ecbc45077306971f"
  },
  {
    "url": "master/packages/history.html",
    "revision": "c4ce0a22ed3e287c36a368166c222bad"
  },
  {
    "url": "master/packages/index.html",
    "revision": "e7b124854da9e491a5b1507b819bece6"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "24b7def2e71896b4c81d515cfe4b8643"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "c7fa7a718cdc850c63d967a56c2269af"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "fec30c415e537e6cce0f9f4a71417bcb"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "4192ad421edf5e917ede3d79640f6c6c"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "00614e8f72b40253ad52f35c90be9624"
  },
  {
    "url": "master/packages/views.html",
    "revision": "6ebe4ac9288deb0e225c26ed229a4c4e"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "dbfec25108f6385a924a194dba8ddc81"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "1d718585d0d04b3800b111f49f913087"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "8b10f32ca21a3f7542a3ce307b50a633"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "6b719213c902dedec266f934600af4eb"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "d04b687ab1ec44f70eacc606f23c694e"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "1ab8c710f3c69497e8fb54e993a48363"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "2b9ca7c159ee893ddd795bbe6b3f3306"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "808f27bffc319de51f8bbb8adb143085"
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
