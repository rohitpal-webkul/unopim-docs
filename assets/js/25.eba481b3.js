(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{321:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"product-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#product-type"}},[t._v("#")]),t._v(" Product Type")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#creating-a-new-product-type"}},[t._v("Creating a New Product Type")]),e("ul",[e("li",[e("a",{attrs:{href:"#plugin-creation"}},[t._v("Plugin Creation")])]),e("li",[e("a",{attrs:{href:"#configuration-file-setup"}},[t._v("Configuration File Setup")])]),e("li",[e("a",{attrs:{href:"#define-the-product-type"}},[t._v("Define the Product Type:")])])])]),e("li",[e("a",{attrs:{href:"#merging-the-configuration"}},[t._v("Merging the Configuration")]),e("ul",[e("li",[e("a",{attrs:{href:"#merge-configuration-in-serviceprovider"}},[t._v("Merge Configuration in ServiceProvider")])]),e("li",[e("a",{attrs:{href:"#define-product-type-class"}},[t._v("Define Product Type Class")])]),e("li",[e("a",{attrs:{href:"#extending-abstracttype"}},[t._v("Extending AbstractType:")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("UnoPim provides several default product types, including simple, configurable, virtual, grouped, downloadable, and bundled. However, if these default product types do not meet your requirements, you can create your own custom product types.")]),t._v(" "),e("p",[t._v("UnoPim comes with several built-in product types like simple, configurable, and others to handle different kinds of products. However, if these types don't fit what you need for your store, UnoPim lets you create your own custom product types.")]),t._v(" "),e("p",[t._v("Creating custom product types in UnoPim means you can define new types of products that suit your business perfectly. This flexibility allows you to manage and showcase products in ways that are tailored to your specific needs, ensuring your online store can offer exactly what your customers are looking for.")]),t._v(" "),e("h2",{attrs:{id:"creating-a-new-product-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-product-type"}},[t._v("#")]),t._v(" Creating a New Product Type")]),t._v(" "),e("p",[t._v('To extend the functionality of UnoPim by introducing a new product type, such as "coupon," follow these straightforward steps:')]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(': In this example, we will create a new product type called "coupon".')]),t._v(" "),e("h3",{attrs:{id:"plugin-creation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-creation"}},[t._v("#")]),t._v(" Plugin Creation")]),t._v(" "),e("p",[t._v("Begin by creating a new package for your custom development needs. If you're unfamiliar with package development in UnoPim, you can find detailed guidance in the "),e("a",{attrs:{href:"../packages"}},[t._v("Package Development")]),t._v(" section.")]),t._v(" "),e("h3",{attrs:{id:"configuration-file-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file-setup"}},[t._v("#")]),t._v(" Configuration File Setup")]),t._v(" "),e("p",[t._v("Within your package's "),e("code",[t._v("Config")]),t._v(" directory, establish a new file named "),e("code",[t._v("product_types.php")]),t._v(". This file will serve as the configuration hub for defining your custom product types.")]),t._v(" "),e("h3",{attrs:{id:"define-the-product-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-the-product-type"}},[t._v("#")]),t._v(" Define the Product Type:")]),t._v(" "),e("p",[t._v("Populate the "),e("code",[t._v("product_types.php")]),t._v(" file with the necessary configuration details to define your new product type. Here’s an example of how to structure this configuration:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Coupon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\Example\\Type\\Coupon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),e("h4",{attrs:{id:"explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("key")]),t._v(" : A unique identifier for your product type, used internally within UnoPim.")]),t._v(" "),e("li",[e("code",[t._v("name")]),t._v(" : The display name of your product type, which will be visible in the admin panel and to your customers.")]),t._v(" "),e("li",[e("code",[t._v("class")]),t._v(" : The namespace of the PHP class that defines the behavior and attributes of your custom product type. This class should be located in your package's directory structure.")]),t._v(" "),e("li",[e("code",[t._v("sort")]),t._v(": An optional field to specify the position of your product type in lists or dropdowns within UnoPim. Lower numbers appear higher in the list.")])]),t._v(" "),e("h2",{attrs:{id:"merging-the-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merging-the-configuration"}},[t._v("#")]),t._v(" Merging the Configuration")]),t._v(" "),e("p",[t._v("Follow these steps to merge the configuration and define its behavior:")]),t._v(" "),e("h3",{attrs:{id:"merge-configuration-in-serviceprovider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge-configuration-in-serviceprovider"}},[t._v("#")]),t._v(" Merge Configuration in ServiceProvider")]),t._v(" "),e("p",[t._v("In your package's service provider (e.g., "),e("code",[t._v("CouponServiceProvider.php")]),t._v("), utilize the "),e("code",[t._v("mergeConfigFrom()")]),t._v(" method within the "),e("code",[t._v("register()")]),t._v(" method to integrate your product type configuration with UnoPim's core configurations. Here's an example snippet:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CouponServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Register services.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/product_types.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'product_types'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h3",{attrs:{id:"define-product-type-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-product-type-class"}},[t._v("#")]),t._v(" Define Product Type Class")]),t._v(" "),e("p",[t._v("Within your package, create a PHP class file named "),e("code",[t._v("Coupon.php")]),t._v(" under "),e("code",[t._v("src/Type")]),t._v(' directory. This class will define the specific behavior and attributes of your "coupon" product type. Here’s a basic example to get started:')]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Coupon")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractType")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("Replace the placeholder comments with actual methods and properties tailored to your product type's requirements.")]),t._v(" "),e("h3",{attrs:{id:"extending-abstracttype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extending-abstracttype"}},[t._v("#")]),t._v(" Extending AbstractType:")]),t._v(" "),e("p",[t._v("After completing the above steps, your product type will be created. However, the "),e("code",[t._v("Type/Coupon.php")]),t._v(" file does not have any code specific to the coupon type product yet. To inherit the basic functionality of any product type, you need to extend the classes from the Product package, specifically the "),e("code",[t._v("type/AbstractType.php")]),t._v(" file.")]),t._v(" "),e("p",[t._v("By extending the "),e("code",[t._v("AbstractType.php")]),t._v(" class in your product type ("),e("code",[t._v("Type/Coupon.php")]),t._v("), you can provide the core functionality of a product. Additionally, if you need to define custom methods for your product type, you can do so within the "),e("code",[t._v("Coupon.php")]),t._v(" file.")])])}),[],!1,null,null,null);e.default=n.exports}}]);