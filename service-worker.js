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
    "url": "0.1/advanced/create-data-import.html",
    "revision": "a15ec65aa115497de6f36004a4c50e9c"
  },
  {
    "url": "0.1/advanced/create-product-type.html",
    "revision": "5ecc0c4cfe1e0a4ec72c9b16dc7f8f1a"
  },
  {
    "url": "0.1/advanced/events.html",
    "revision": "a37d0197f225a921b011e902a74562aa"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "d3ee21eeee5d4ffb83d051bc05349aa7"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "c76c1f9a83a23614e7664f3fd2b74154"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "e18edd79804a7ceb7014e31f72e9bb27"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "82941b6441edc3d12ea73df03d38a65e"
  },
  {
    "url": "0.1/advanced/security-practice.html",
    "revision": "e4320d9789b0d30e54b8b3bfe6a47cd9"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "f97c9cc44ad2d528bcf0ee7f56625b6a"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "959647e4782b86127e756dbe352e84b5"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "6d0a3888f202b38b35a2bc38d9b111b8"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "f8b2bf89c74c980ec171418f0150f426"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "759e7d2be12cb069742355c8dc6136c9"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "633549e0269a75dbf2dbccfb21d11814"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "0ed8710c6735a782b854797526fcd521"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "32ce5349ad6d5c37ac620ff8bcbe7efe"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "f8f1bb2448007f3cb64afc0d91c469ec"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "c421e0618fcebcd7e8457eece7957bf3"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "98146bed60ae7e1c0563c6d9c8ba42b0"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "dc6d6bf8dc28a16563e28d89ca72253e"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "b822ae14a6a3174a16c6dfbd7cbbd441"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "fe544a496037caa91bb0f1996492b840"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "ea2e0978f099cbb537e7ffa67d9dc558"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "b541ba96ddb9a0f564a6a4e08e8c638c"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "160664500240d8350d673ccf56cb6c64"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "e1646f9a285fa64befcdf8bb182847ed"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "dab471f53254d985fa70d6c0017d22bc"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "0b673d89acb04dc465c72381364076e6"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "c35b76019157b480289cad752bdcdebd"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "10dcf10cf20f1e25a7186f983c7490fd"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "9ae8ed7007b39100ae074a3f030d1818"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "cda1d31a28d3558abdf7cb90cc55454c"
  },
  {
    "url": "0.1/deploy/index.html",
    "revision": "e5ed1e6694e7138f43c9ef0583612dd2"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "290f7e4977b7ad5cb6ebd6ddd2de6e49"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "b952a1b11d6a254f32ccd09a6fd12e07"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "181fbe00d77cffcd7a7c7db242f74768"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "e5d19cedf0e89904676d2a48f23d94e0"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "5cbda9cd43ea47308f22852d2ce1c106"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "8025f12e25f43e84e08f053ecf9fbbd7"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "602112ce321c16847e4feb51bbbf3409"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "b781a7af88464c7fc71ed46aec9f7ecf"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "de19c12eee5a715e9bce52c56817bd4f"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "a62e1711aaf3fac324dd824e422af7a0"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "7a312783f52d71751fafda0ba8711ee8"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "ba95289f6dc9f734da2197be72048c81"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "603e1bb8da2fd1ae936348d1ea8834ee"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "9b0a4dfa3092216bd11a0a59f5f88466"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "dd84b2bfd57294d22d095ff7b001f2c4"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "755114908c1628b50946e56cf1b22541"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "0c76ca066f8fac087203afbbc41a8667"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "470584921ceb002b98ed8987b0166a1b"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "4406bea57a0bc38d5c010d62df89752a"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "87970089ba022af68316c577089f304b"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "bd0542a81849553de0fff934369b3aa7"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "052cc9054d9ff5927b050b2f2e9096d6"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "705507227f8ed7497f3245d5f0fa2f69"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "3f381dbdc0158e2b78e8b01bff423e9e"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "727a452d4bac3ddbcc581ced21af8e51"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "a04010377e682f9acbf4e81ab0a4a26c"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "0660e90c01c33912cbbd382cd3b8c1ef"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "8d4ade2b857bbdf6d87cd26d8c6afe5c"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "dd3984271bd438bd3b6e528993be6bfc"
  },
  {
    "url": "404.html",
    "revision": "2a1dd0a727697a67c7797b216f3a04f6"
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
    "url": "assets/js/100.1783784c.js",
    "revision": "3127c19069c5622ae696f49d5eaffd63"
  },
  {
    "url": "assets/js/101.765206ea.js",
    "revision": "27caecb423156f09d0cb83f2ec615e44"
  },
  {
    "url": "assets/js/102.bfdd55a4.js",
    "revision": "1ba998ec8211352dcea4c85ee2ffa5c4"
  },
  {
    "url": "assets/js/103.3774a06a.js",
    "revision": "100dfed2db7ffa129ed63c1604fab687"
  },
  {
    "url": "assets/js/104.d37a98c3.js",
    "revision": "bcb9a319d0a9140d6530a5bdfd6ef7ce"
  },
  {
    "url": "assets/js/105.064bdc79.js",
    "revision": "01abd337452e1bdd7b099da693318f86"
  },
  {
    "url": "assets/js/106.8429856d.js",
    "revision": "5082d2f26c85e6d36db994c391815840"
  },
  {
    "url": "assets/js/107.b3ef8f1a.js",
    "revision": "1e2214cfae1989eb55db53ea4805556a"
  },
  {
    "url": "assets/js/108.45771a39.js",
    "revision": "ecf2936ea89b304ec61a1cad0b35bd52"
  },
  {
    "url": "assets/js/109.ea9ab779.js",
    "revision": "33925b6e2155ccd2b2019e7e07a96e10"
  },
  {
    "url": "assets/js/11.db93b1c9.js",
    "revision": "06fa1e7a685354bbd664454855ee6e8f"
  },
  {
    "url": "assets/js/110.a1da765f.js",
    "revision": "0801700a39cca27d34536a12dde63a69"
  },
  {
    "url": "assets/js/111.541e1f92.js",
    "revision": "7f453f784bf865887284cd3b1a1e5d79"
  },
  {
    "url": "assets/js/112.2c7b4cc7.js",
    "revision": "0ea27e3c4e73c946d1f49a306cd629f6"
  },
  {
    "url": "assets/js/113.a9304c3c.js",
    "revision": "ec2701fff1808e52d1b41b0d6c3d5dd3"
  },
  {
    "url": "assets/js/114.71a53ce7.js",
    "revision": "a26dfebb7369e6ac854135fc4f47c238"
  },
  {
    "url": "assets/js/115.eaa55396.js",
    "revision": "614450596e0defcceada13a5ede3aa44"
  },
  {
    "url": "assets/js/116.bfbf7390.js",
    "revision": "d2b1e20c6dde19e6eb72d25ddb6e02a5"
  },
  {
    "url": "assets/js/117.45a1d56c.js",
    "revision": "0a568105d4ce1386dcd133c0e52e025a"
  },
  {
    "url": "assets/js/118.267f7fa3.js",
    "revision": "02d34cf7247e2da32f84d625912a4b01"
  },
  {
    "url": "assets/js/119.1ea4c36a.js",
    "revision": "47eef595eb3a044b3f94e53b152bccd2"
  },
  {
    "url": "assets/js/12.5edcac46.js",
    "revision": "6b67fee6a23e066f3b6b9c5373d6db7c"
  },
  {
    "url": "assets/js/120.ae6d3368.js",
    "revision": "e48695ed8ef86bb301cdafc81bd2bb73"
  },
  {
    "url": "assets/js/121.a28b04b9.js",
    "revision": "bed1d57de68f922d37f89a11c34aec7c"
  },
  {
    "url": "assets/js/122.25725a16.js",
    "revision": "dfadc5c039e3f4a55255bf6578e8e0fe"
  },
  {
    "url": "assets/js/123.fb25e85d.js",
    "revision": "28ea76af8b2b1e5191841326fa1f2041"
  },
  {
    "url": "assets/js/124.cdc5a378.js",
    "revision": "6d8a63e1bd2163eefe962de43cdd7ce5"
  },
  {
    "url": "assets/js/125.774d64bd.js",
    "revision": "99559bae32666f8bcafc69cd644670e2"
  },
  {
    "url": "assets/js/126.d1635f60.js",
    "revision": "fd99778bb169b05c5a8bf3930b24a12b"
  },
  {
    "url": "assets/js/127.c73413de.js",
    "revision": "2dbb30f2f17e052e551e84b8b0624a1d"
  },
  {
    "url": "assets/js/128.b7b8341a.js",
    "revision": "dd4e3d98d7087ee260ae3a69fb595675"
  },
  {
    "url": "assets/js/129.f410c120.js",
    "revision": "00c8385e14016179f37176b50a997bd1"
  },
  {
    "url": "assets/js/13.9910f6d2.js",
    "revision": "c24df7b842202f811baa6b69b1815d7c"
  },
  {
    "url": "assets/js/130.c689585d.js",
    "revision": "929e592ec861b9b3ea71cdd456fa8e69"
  },
  {
    "url": "assets/js/131.73773fdc.js",
    "revision": "3843e52d155eb896b85997a03dea9242"
  },
  {
    "url": "assets/js/132.7da81625.js",
    "revision": "7eb6e3536e21e0399501d261d7d0ac3e"
  },
  {
    "url": "assets/js/133.0ab524ed.js",
    "revision": "2eaf43c0a6c65557bb734bb023cf9363"
  },
  {
    "url": "assets/js/134.3e93a789.js",
    "revision": "4378ba0a7fe43cb7ac9bae93430e1209"
  },
  {
    "url": "assets/js/135.80dba30c.js",
    "revision": "adda87c0d053450f8a7343b9e4d9a230"
  },
  {
    "url": "assets/js/136.6be49c8f.js",
    "revision": "7e9d58b3d4daccbe662f9ceea15cf4a5"
  },
  {
    "url": "assets/js/137.4bce57af.js",
    "revision": "3192f0e258496292bd60e74f236d64f2"
  },
  {
    "url": "assets/js/138.4b5b1a63.js",
    "revision": "255c0532c534e215471f3cec959e2f6c"
  },
  {
    "url": "assets/js/139.d9add81d.js",
    "revision": "60113b2fdfc27def5de9457949afe2c2"
  },
  {
    "url": "assets/js/14.d96b79ec.js",
    "revision": "c129fa59613daad505ca5187723f514a"
  },
  {
    "url": "assets/js/140.c2e4a73f.js",
    "revision": "51f6907aa9875b7778cc5869be02e29b"
  },
  {
    "url": "assets/js/141.852ab9f7.js",
    "revision": "5aeb13e128dd19e4b92620f52dea768c"
  },
  {
    "url": "assets/js/142.55cd8074.js",
    "revision": "3b0c1e35b15c9733c1e5619cb977e24b"
  },
  {
    "url": "assets/js/143.84f37958.js",
    "revision": "d15e2accd72d26ce0fc20c9bfe8afd89"
  },
  {
    "url": "assets/js/144.78ee1bb7.js",
    "revision": "2aaab6dc61c7335985fc5cb369f7c318"
  },
  {
    "url": "assets/js/145.1bcfa99e.js",
    "revision": "f076a6724e714b0613f0d086efe71e3d"
  },
  {
    "url": "assets/js/146.b6a0b298.js",
    "revision": "e36fdc4767b4b82e92ecfa7c39909f63"
  },
  {
    "url": "assets/js/147.2e8ed01a.js",
    "revision": "8f0803a5be6d89696851fb6a0cbe3d19"
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
    "url": "assets/js/23.4493258f.js",
    "revision": "282bdec545f16b96b37d3f17cd40cd29"
  },
  {
    "url": "assets/js/24.fe1bcc56.js",
    "revision": "0b4e5889bc32f6c64c0482883f52c2b4"
  },
  {
    "url": "assets/js/25.eba481b3.js",
    "revision": "972e4027398e8887721988aa907777b2"
  },
  {
    "url": "assets/js/26.b65cdfbc.js",
    "revision": "c285b9a4e297c9cb99b67217702390c3"
  },
  {
    "url": "assets/js/27.27cdea52.js",
    "revision": "a6fd299d8ee0c238a6cde4d7065f4957"
  },
  {
    "url": "assets/js/28.958307df.js",
    "revision": "2ef26fc525a6561e34fae10c50b0d87a"
  },
  {
    "url": "assets/js/29.43f1deb7.js",
    "revision": "bc30c0878a01e3d79ffa5c5aa47335a6"
  },
  {
    "url": "assets/js/3.fbe1d52a.js",
    "revision": "01259b849e67127f7ea69dc3e06e7616"
  },
  {
    "url": "assets/js/30.8e0cef2f.js",
    "revision": "daec4ac82fcacc9dd0763296ee41c0fa"
  },
  {
    "url": "assets/js/31.709fe6c6.js",
    "revision": "a103405d34ee12bd796cac1c277e6f2a"
  },
  {
    "url": "assets/js/32.0f40c757.js",
    "revision": "902b9e8e8fe63f03ddb5068ee7e7e70f"
  },
  {
    "url": "assets/js/33.2aae5248.js",
    "revision": "5c9328c1a8b5e1951ac7ee75dce2a76b"
  },
  {
    "url": "assets/js/34.47a1606a.js",
    "revision": "fb08e1a932287de8b8c161ab6dc61d8f"
  },
  {
    "url": "assets/js/35.0b1d0a98.js",
    "revision": "712eeee79304be1de1ab0e9ca497aadd"
  },
  {
    "url": "assets/js/36.26af4dde.js",
    "revision": "3c4e2839652360f97298ecf1151c19f2"
  },
  {
    "url": "assets/js/37.039c3388.js",
    "revision": "30b871680e7edbff59d83ed85ee4240d"
  },
  {
    "url": "assets/js/38.c336901a.js",
    "revision": "9853b9470d91af680892eb2ee3945136"
  },
  {
    "url": "assets/js/39.515bf64a.js",
    "revision": "e84acf3eb8cf1b3cf2614a20924b27d1"
  },
  {
    "url": "assets/js/4.d7021c11.js",
    "revision": "55b8592142aeb9b43de90b65a0a5dcd3"
  },
  {
    "url": "assets/js/40.9fd47b4a.js",
    "revision": "13e6a366760fa5a5b1f20469bdd7ba59"
  },
  {
    "url": "assets/js/41.f88dc27c.js",
    "revision": "5a85674449bddcff2c93306f68bc2505"
  },
  {
    "url": "assets/js/42.7bd52958.js",
    "revision": "2669c444138aae97a7a0c39604fd0a54"
  },
  {
    "url": "assets/js/43.bc3b4fe9.js",
    "revision": "3188245158c62118d79e011fa6c48cf0"
  },
  {
    "url": "assets/js/44.7369f9fc.js",
    "revision": "007215823477c57e11a402311f3b5ed9"
  },
  {
    "url": "assets/js/45.35325d83.js",
    "revision": "30b7d62f4ecee6b9a8829d7f72332586"
  },
  {
    "url": "assets/js/46.4abedc4c.js",
    "revision": "7d18a0644f83d2e8658ac57de33996d0"
  },
  {
    "url": "assets/js/47.b4a4b344.js",
    "revision": "d5d0df4dae3ab1a629675b9c553a546d"
  },
  {
    "url": "assets/js/48.84fddeec.js",
    "revision": "2e69442e5af469ae7acabdfea6d92395"
  },
  {
    "url": "assets/js/49.346e193c.js",
    "revision": "0bd82305d4a400984492ebf8d3e03a4c"
  },
  {
    "url": "assets/js/5.39da4bdb.js",
    "revision": "665b1028727cd674d1b8759cf177c089"
  },
  {
    "url": "assets/js/50.0fad10e3.js",
    "revision": "811e062f677859d992f2310634e51951"
  },
  {
    "url": "assets/js/51.b86018d3.js",
    "revision": "9dc9036f68ae75ae5e695204c48beaaa"
  },
  {
    "url": "assets/js/52.bafa7ea1.js",
    "revision": "a8d502aa58b22094aba0ce2f7a4d2aca"
  },
  {
    "url": "assets/js/53.eb78a505.js",
    "revision": "e4782f77f8cc47dac2068fcbb589dca1"
  },
  {
    "url": "assets/js/54.4ba8d48a.js",
    "revision": "634a8b3dbfd2bfba308661ee1d10038c"
  },
  {
    "url": "assets/js/55.9eaeec88.js",
    "revision": "5ad1f6c0627cace52d19df9a6deac5e7"
  },
  {
    "url": "assets/js/56.b9c53c82.js",
    "revision": "a369f6e68c38dd3514b18f32c0eab830"
  },
  {
    "url": "assets/js/57.338e473c.js",
    "revision": "3925e06d0ae58651ba05ab26caf6d825"
  },
  {
    "url": "assets/js/58.64bf5944.js",
    "revision": "26a1908fdb5fc03daf770c0d2a9cc85d"
  },
  {
    "url": "assets/js/59.bc1f1954.js",
    "revision": "b82803ccdb5f420b49b3811419b28c06"
  },
  {
    "url": "assets/js/60.98bd9fe2.js",
    "revision": "d9dcb81e43548fdf0a44820d4a23ba2a"
  },
  {
    "url": "assets/js/61.872dc03c.js",
    "revision": "1853cfbe8d88114134ca6755b16054e9"
  },
  {
    "url": "assets/js/62.f1b7d05e.js",
    "revision": "37b107e26f2c96ec3bbf738b82435ef1"
  },
  {
    "url": "assets/js/63.e0e68dfc.js",
    "revision": "a2de08d883ec69c7b007e70dcaa7f924"
  },
  {
    "url": "assets/js/64.a8927540.js",
    "revision": "e88e393c4dbb2709f845188b50a33d81"
  },
  {
    "url": "assets/js/65.e391082c.js",
    "revision": "278117d3916101d9333fb1a915cd119b"
  },
  {
    "url": "assets/js/66.d42fb6d5.js",
    "revision": "59400ddca891fa1e0167000f3efce887"
  },
  {
    "url": "assets/js/67.39b8170e.js",
    "revision": "0e684dc0eeeffb816c31ab92d413ebfe"
  },
  {
    "url": "assets/js/68.d24a1ab4.js",
    "revision": "6524ee87736c260de7996527b1aa0c30"
  },
  {
    "url": "assets/js/69.2aa78b0d.js",
    "revision": "35bd5664ce6904d34d313dd8ef1644c8"
  },
  {
    "url": "assets/js/70.df4cb58f.js",
    "revision": "ed8a8527c35bc7caa0a2d9b7c137e0a4"
  },
  {
    "url": "assets/js/71.ee762a0c.js",
    "revision": "6d7da79f0ca82e81f10aed516b5a4341"
  },
  {
    "url": "assets/js/72.ab48f536.js",
    "revision": "fb8e097ab0c859df0d3e5fa6fd7d5077"
  },
  {
    "url": "assets/js/73.be614d5a.js",
    "revision": "40cbda3b076fc71fe843db9673c7bbb0"
  },
  {
    "url": "assets/js/74.0b782f40.js",
    "revision": "a5a558c179a46d38d06cc9be55e076ec"
  },
  {
    "url": "assets/js/75.4f3123a0.js",
    "revision": "f537986a4e783cc96408a5dc14ac20f3"
  },
  {
    "url": "assets/js/76.fd80051f.js",
    "revision": "ee5fc4de40ce1eb78d3fce2a7b7a6088"
  },
  {
    "url": "assets/js/77.130b5b40.js",
    "revision": "fb023d772da5c7a8d70a83acb4901398"
  },
  {
    "url": "assets/js/78.fae19d57.js",
    "revision": "989740682abe319d897b97cf20ffa41d"
  },
  {
    "url": "assets/js/79.827919f6.js",
    "revision": "2ba59c030599c7a035862b53855ecb1a"
  },
  {
    "url": "assets/js/8.a5cd020c.js",
    "revision": "bc5ac0eac88f4e0457d331fdee0d471f"
  },
  {
    "url": "assets/js/80.19da8fd6.js",
    "revision": "ee206b99dafc4780ead323a65d3d4331"
  },
  {
    "url": "assets/js/81.64653018.js",
    "revision": "6a775d90eb089d15264a83e92b785e12"
  },
  {
    "url": "assets/js/82.c1b7471d.js",
    "revision": "07c87452883359443b63fbb528338a51"
  },
  {
    "url": "assets/js/83.c9f2da43.js",
    "revision": "1e90fda165821005fc6776d897974e61"
  },
  {
    "url": "assets/js/84.686867c2.js",
    "revision": "d0280b1c760912a08dc5361dfd7ab0e0"
  },
  {
    "url": "assets/js/85.a90fcfff.js",
    "revision": "6398f93d470499c2c80c1ed7928a9f4a"
  },
  {
    "url": "assets/js/86.27168055.js",
    "revision": "0e6c205b597afa0b3bf32b54e8cd7e07"
  },
  {
    "url": "assets/js/87.4efb2cc2.js",
    "revision": "4631bb16d6ca0ea81f5f2bd346c98775"
  },
  {
    "url": "assets/js/88.2b9bb391.js",
    "revision": "855906ba4aedb95895f86d64967c5da2"
  },
  {
    "url": "assets/js/89.dbdb6c0f.js",
    "revision": "838abe4c8ef5da749c82eea3f6e220b4"
  },
  {
    "url": "assets/js/9.83d071c5.js",
    "revision": "478b3b3734a098492a8cfc14761c0130"
  },
  {
    "url": "assets/js/90.1c5a5791.js",
    "revision": "02e2e109e3a8a689f85ba190a529a01a"
  },
  {
    "url": "assets/js/91.361eede4.js",
    "revision": "acd8d1ea9794b41dadb8ee55a1f731fc"
  },
  {
    "url": "assets/js/92.91ff6764.js",
    "revision": "a47903342732a7c5d7730d18bc30adcf"
  },
  {
    "url": "assets/js/93.58b12ecc.js",
    "revision": "3213c51ea02accbb29e28130389e1911"
  },
  {
    "url": "assets/js/94.84681b43.js",
    "revision": "9754a961fd3abfc517fa9ee08620dab3"
  },
  {
    "url": "assets/js/95.daf9eb0a.js",
    "revision": "ee4ee3785bc00be7261c45c5e907aecc"
  },
  {
    "url": "assets/js/96.7e394adc.js",
    "revision": "cba022e3329e44aa7f66de6e1e830e03"
  },
  {
    "url": "assets/js/97.38f31c6e.js",
    "revision": "ab01592c93d3b8de90ad23617cebbfe5"
  },
  {
    "url": "assets/js/98.ee56ad2b.js",
    "revision": "d83da2fcd8f57e3a59ebec87322b9c15"
  },
  {
    "url": "assets/js/99.8e77f1d4.js",
    "revision": "37ada4cfa284d9a5133acb41bc4c5df5"
  },
  {
    "url": "assets/js/app.742574a0.js",
    "revision": "d880e7ca62d9a7617f8b1565390f0947"
  },
  {
    "url": "assets/js/vendors~docsearch.992c13e1.js",
    "revision": "e3f6a35ad9d78a6678af8afb901dcc00"
  },
  {
    "url": "index.html",
    "revision": "ba67d230d2882e2da63f7725df293a96"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "285db4b1dae34dc3225abecf7d81bb16"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "fea85b843ffe7edb91159c4af2ee20eb"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "50e518dc07be24aa75f7db1792a18ebb"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "4d717ee76eae4b3b6a7e781996450c6a"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "867d9f8d588aebe2834384a684d3a4b8"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bfdf9e0f3f00a3ba437980072ab2921b"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "dcc0db039be0adf957af4499eb8266de"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "d300c5531c3fc221023c76580ac1e06e"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "525a0d8dd1447cc2d0677384a2d07ead"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "f8bdc6076925b5e12b42f56d947cba84"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "7f439cc8bd9e7f87902c21444fc856c9"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "3023942e71262a6cf8f33a2232e6691c"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "8d8a2461005c4bbbd8079e54be741785"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "c128a5013aee6ecad644d684f1d08355"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "dc8a60b8ab162e446343d777a9fb9079"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "a07129915ca7dc5592506c876a520cc3"
  },
  {
    "url": "master/api/category.html",
    "revision": "d0876edc4bd1ab9e37b15cc223e58187"
  },
  {
    "url": "master/api/channel.html",
    "revision": "100ebd529ed3a1bd07a4586942c68ec6"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "06e9dc687c44c8c8c9190b73aebb2f0f"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "47d8d5172d0fd6d8d68b28fde2163539"
  },
  {
    "url": "master/api/currency.html",
    "revision": "6300c4d72a193014524a9f5485fdcb11"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "e7bc2b21e0ed6c93c8bb45d5caedf492"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "21937578a676a9c9b2405d76a6b032d3"
  },
  {
    "url": "master/api/index.html",
    "revision": "7f0dbc37ff48ea329b222ad5778ac7ad"
  },
  {
    "url": "master/api/locales.html",
    "revision": "8bf03a4b446cabbf20da0458ba9ad21f"
  },
  {
    "url": "master/api/media.html",
    "revision": "b20d3b9ae1fdfccb7dad9d406a2b0b51"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "003c36f81c34382450003eabc7523597"
  },
  {
    "url": "master/api/product.html",
    "revision": "d21dd5d22ac389abf8e0d02d8f4d3e24"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "55d38db1be683027e117abc296ab55e0"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "4525bd1d8a157000c723e36eef11cb37"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "78bf05de4cc7e16ac0ebd8bf622be45a"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "0539755025ea057b1e276340e8b1f6f0"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "d45fa61984e39c07099b02deb420198b"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "4b5c006996fc21914505318870c37020"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "58325e389f7d5ea55c9d86178f6d9741"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "a5915ccf9634aa133866cc8870252799"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "eb8e4dcacb68c367927c23e0bd617d4d"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "c173a7d0217ab9a3f6e8bd615642e93c"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "66a8f3d5b23a6d8f44cb0995bcdceb17"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "02d202c5e9c246e552bf5396a21a714b"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "9710f02e7bf8ab6e7f78d4391fc5f752"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "ecca55165e68e222e5d6db67d4dd9077"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "373d9919914ebfcabeb7f77a45159e33"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "afbd821cf73c74771258fe0395679019"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "f5cead022fe6ae0010a3d94947d9b35d"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "6b61ee7cab7f5920ce72b7176789aed2"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "378411faa3c5cd6bc989e5cda9f4406a"
  },
  {
    "url": "master/packages/history.html",
    "revision": "ea1fe247ba12970eadc01f46ed27fc0b"
  },
  {
    "url": "master/packages/index.html",
    "revision": "3ecfa3b8e820d8026a5b352d7bfcb47c"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "3814dbf1b76fb560d9f9b80dba00b589"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "33526adfef230d8bc05c48464b1957a2"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "4457eff83b5d7f009152079270802cb9"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "503d2806e6f98dd50950b06689be16de"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "429395eb35452fac17c7db2914187534"
  },
  {
    "url": "master/packages/views.html",
    "revision": "c3b803f3001823ae4b8d8dd740a51110"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "0741fa491b8523459b860e2ff9c82cf3"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "42b35bd60b4651e0c2a119c7f63377a4"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "77b9f965dc44866c18d758bdcefc3104"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "e701c20c534611451663e1768552d646"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "76919a6e34c99d844ed2fb41ff5ecf8f"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "d2cbb0d629fa25313d952bb3b435ed6c"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "d400640225c995c6d8e466a2611aa600"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "197e1af31de500519d35384a15ff79cd"
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
