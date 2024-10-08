(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{378:function(e,t,s){"use strict";s.r(t);var a=s(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"plugin-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-deployment"}},[e._v("#")]),e._v(" Plugin Deployment")]),e._v(" "),t("p",[e._v("When deploying a custom UnoPim plugin or plugin, it's important to handle asset management properly. This ensures that assets like CSS, JavaScript, and images are available after deployment without needing to rebuild the assets on the production server.")]),e._v(" "),t("p",[e._v("In this section, we will cover how to structure and publish your assets during deployment so that they are accessible via the "),t("code",[e._v("public")]),e._v(" directory.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-directory-structure"}},[e._v("#")]),e._v(" 1. "),t("strong",[e._v("Directory Structure")])]),e._v(" "),t("p",[e._v("Your plugin should include a "),t("code",[e._v("publishable")]),e._v(" directory to store assets that need to be copied to the "),t("code",[e._v("public")]),e._v(" directory during deployment. The typical structure for this setup is as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("└── plugins\n    └── Webkul\n        └── Example\n            └── src\n            └── publishable\n                └── example\n                    └── build\n")])])]),t("p",[e._v("In this example:")]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("publishable")]),e._v(" directory contains the "),t("code",[e._v("build")]),e._v(" folder where your precompiled assets are stored (CSS, JS, fonts, images, etc.).")]),e._v(" "),t("li",[e._v("These assets will be copied to the "),t("code",[e._v("public")]),e._v(" directory when the plugin is deployed.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_2-building-assets-for-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-building-assets-for-deployment"}},[e._v("#")]),e._v(" 2. "),t("strong",[e._v("Building Assets for Deployment")])]),e._v(" "),t("p",[e._v("Before deploying your plugin, ensure that the assets are properly built.")]),e._v(" "),t("p",[e._v("If you are using a bundler like Vite, you should run the build process locally:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),t("p",[e._v("This command will generate the production-ready assets, which will be placed in the "),t("code",[e._v("publishable/example/build/")]),e._v(" directory.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_3-publishing-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-publishing-assets"}},[e._v("#")]),e._v(" 3. "),t("strong",[e._v("Publishing Assets")])]),e._v(" "),t("p",[e._v("To ensure the built assets are available after deploying your plugin, you need to configure your service provider to publish the "),t("code",[e._v("build")]),e._v(" directory contents to the "),t("code",[e._v("public")]),e._v(" directory. This can be achieved using Laravel's "),t("code",[e._v("publishes()")]),e._v(" method in your service provider ("),t("code",[e._v("ExampleServiceProvider")]),e._v(").")]),e._v(" "),t("h4",{attrs:{id:"step-1-update-service-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-update-service-provider"}},[e._v("#")]),e._v(" Step 1: "),t("strong",[e._v("Update Service Provider")])]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("ExampleServiceProvider")]),e._v(", add the following "),t("code",[e._v("publishes()")]),e._v(" method inside the "),t("code",[e._v("boot()")]),e._v(" function:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("loadViewsFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("__DIR__")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/../Resources/views'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Publish the assets from the 'publishable' directory to the 'public/themes' directory")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("publishes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("__DIR__")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/../../publishable'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("public_path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'themes'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'example'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Optionally, load the CSS for your custom menu using the 'unopim.admin.layout.head' event")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("Event")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'unopim.admin.layout.head'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$viewRenderEventManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$viewRenderEventManager")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("addTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'example::style'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("In this example:")]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("publishes()")]),e._v(" method copies everything from your package’s "),t("code",[e._v("publishable")]),e._v(" directory into the "),t("code",[e._v("public/themes")]),e._v(" directory during the deployment process.")]),e._v(" "),t("li",[e._v("This ensures that assets like CSS, JavaScript, fonts, or images are publicly accessible from the "),t("code",[e._v("public")]),e._v(" directory.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_4-deployment-without-rebuilding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-deployment-without-rebuilding"}},[e._v("#")]),e._v(" 4. "),t("strong",[e._v("Deployment Without Rebuilding")])]),e._v(" "),t("p",[e._v("By following this process, you can avoid needing to build the assets again after deploying the plugin. The assets built locally (in "),t("code",[e._v("publishable/example/build")]),e._v(") are published directly to the "),t("code",[e._v("public")]),e._v(" directory during the deployment phase.")]),e._v(" "),t("p",[e._v("After deployment, run the following command to publish the assets:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan vendor:publish "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--tag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("example\n")])])]),t("p",[e._v("This command will copy the assets from "),t("code",[e._v("publishable")]),e._v(" to the "),t("code",[e._v("public")]),e._v(" directory, making them accessible via the browser.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_5-verify-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-verify-deployment"}},[e._v("#")]),e._v(" 5. "),t("strong",[e._v("Verify Deployment")])]),e._v(" "),t("p",[e._v("After running the "),t("code",[e._v("vendor:publish")]),e._v(" command, verify that the assets have been correctly copied to the "),t("code",[e._v("public/themes/example/build")]),e._v(" directory. This will ensure the plugin's assets are served correctly in the admin panel without requiring additional builds on the production server.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_6-final-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-final-optimization"}},[e._v("#")]),e._v(" 6. "),t("strong",[e._v("Final Optimization")])]),e._v(" "),t("p",[e._v("After publishing the assets, it's a good practice to clear any caches and optimize the application. You can do this by running:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan optimize:clear\n")])])]),t("p",[e._v("This command will clear compiled views, route caches, and configuration caches, ensuring that your application is ready to serve the latest version of your plugin.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("By following these steps, you ensure that your custom UnoPim plugin's assets are deployed efficiently, reducing the need to build the assets on the production server. This approach is ideal for environments where you have limited control over asset building during deployment.")])])}),[],!1,null,null,null);t.default=n.exports}}]);