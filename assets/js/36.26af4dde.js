(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{332:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"authentication-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication-apis"}},[e._v("#")]),e._v(" Authentication APIs")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#post-authenticate-by-password"}},[e._v("POST: Authenticate by Password")])]),t("li",[t("a",{attrs:{href:"#post-authenticate-by-refresh-token"}},[e._v("POST: Authenticate by Refresh Token")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"post-authenticate-by-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-authenticate-by-password"}},[e._v("#")]),e._v(" "),t("strong",[e._v("POST: Authenticate by Password")])]),e._v(" "),t("p",[t("strong",[e._v("Endpoint:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("POST {{url}}/oauth/token\n")])])]),t("p",[t("strong",[e._v("Headers")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Key")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Content-Type")]),e._v(" "),t("td",[e._v("application/json")])]),e._v(" "),t("tr",[t("td",[e._v("Authorization")]),e._v(" "),t("td",[e._v("Basic "),t("code",[e._v("base64ClientIdSecret")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Note on "),t("code",[e._v("base64ClientIdSecret")])])]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("base64ClientIdSecret")]),e._v(" is a Base64-encoded string created by concatenating the "),t("code",[e._v("clientId")]),e._v(" and "),t("code",[e._v("clientSecret")]),e._v(" in the format "),t("code",[e._v("clientId:clientSecret")]),e._v(".")]),e._v(" "),t("li",[e._v("This encoded value is used in the Authorization header for Basic Authentication.")])]),e._v(" "),t("p",[t("strong",[e._v("Request Body Example:")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"username"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{username}}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"password"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{password}}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"grant_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("strong",[e._v("Response :")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"token_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bearer"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"expires_in"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access_token"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZDIxYmUwYS01MzE5LTRkZDAtOTQ4Mi0zOTM5Njg0YzY3ODIiLCJqdGkiOiIyMTE0MTFlYWExZGU1YTRlNzcxOGRmODk1N2M2YWQyNzAzZTk0YzBhMjJjNDZlNTM4NWZmMTM0N2FjNDhiYzFkNjRlOTU2ODE0OWZjZmQ3NiIsImlhdCI6MTcyNzc1OTEzOS44MzI2NjEsIm5iZiI6MTcyNzc1OTEzOS44MzI2NjQsImV4cCI6MTcyNzc2MjczOS44MDQwMDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.YTbSjKgZg4v8D2n11Az9TqjiJVvTyQPl-8BoqqkdfGhUlkMZ4DZ-JT49m7KPh-Y6slX8qzr_ZMryeKhbN_avR0lRxRt-xPkuXUbvGld-TpWHbsJ6eR7QK2UGyzMhM_CRQQH9MYNx8tIcNTON_mmp6DcqV9GcHzP20rUfkUIByvwaZF36l1rx3RosRjttvG1Jff9SeFcaHAwpy8uk9iu0nplOS-Se88Se8Ir8TU_kEZfUudwPw-7GEsQ2Bz9Z_AuZheVvBt8uPjlCGGjfGl7dcG_wy4JYkb3fyKe8IqTcTb6vsjC24pvtijkjaJljUaePzaPp5k5EdGXxLtYkAhxDBSmaxSicVesh-EHbqJHQmwc_CPN9K6tiuSv6YmGEfau4Mn6ryULDyjngvvN_gvAj7-F2cwk76pZWfcVMPazG40CfSyrfWG8xv7kuYNiZLQ48k8oahDdqoYK9a0MhBXmdq4AO6OKKPhp9_rS86ecB1vWNqKOJg3pnDq9cgsR26vXADrpJiL4ETDl3djR4sBGpBaqUstSC79H91yGApxfOvUWVxyA7ou_dEoryMaW6iVzwEv5-hZG9c3CoNEupvd_YeFjFSby-eBQ8AjubZm_B_NUbcJq7G4XoV2K1Gzpvfcvywb9F5cFANX-aoBLESauW8kPi7MA3n2QrXpadtmgBSD4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"refresh_token"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"def50200b3b5e3ec4f608279263600e4041189dccaabe3e16ad487e72c26b80a128fcfe6232d21c4c9441ee258b8f03964f4685643865677e2e2613a7ed7251849f13934028f84dc33cbf589a6ce0c37e98066e561fbe16997751a831dd9df294a690c3ac43beab27cb86e64fa7eb1fe572c514fb5487d929dfc6b415f34803ce7168cd468fbc9a0f30b460244a8b9da559ec5dfe1b7b01f52219150e02d75a001007fed26a1fd66f2086fed15e4961f9481fdbdac032b3c055e5d6509e615e831fa6b395195cc561b14be95d9f16bf73a77bedcf20b9348e11d1a2a8bab3abaa62f585f1aa804e53b7f8e297b295a18b146eea8ada82ee4ea8d4e6cfdd563f1f06947b5b84ad1e02551674d302a77d1f0949f10324e37ed7c55620c0271a871555784b3d256ca7a48d261ca7afcac50235ae75066a73b7dd99034549a0c9cefb98685527f32b05f13cb681432919644766bc56fb1ad3412c43e96037cd1511d175460ee6f0d5e12a7e2ab90b2ae6e12be2e1a1f62f40ffe80457cd96f850adb5e3c4d23"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h4",{attrs:{id:"explanations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explanations"}},[e._v("#")]),e._v(" Explanations")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("token_type")]),e._v(': Indicates the type of token issued (e.g., "Bearer").')]),e._v(" "),t("li",[t("strong",[e._v("expires_in")]),e._v(": Lifetime of the access token in seconds (e.g., 3600 seconds = 1 hour).")]),e._v(" "),t("li",[t("strong",[e._v("access_token")]),e._v(": The token used for authenticating API requests.")]),e._v(" "),t("li",[t("strong",[e._v("refresh_token")]),e._v(": Token used to obtain a new access token when the current one expires.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"post-authenticate-by-refresh-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-authenticate-by-refresh-token"}},[e._v("#")]),e._v(" "),t("strong",[e._v("POST: Authenticate by Refresh Token")])]),e._v(" "),t("p",[e._v("If the access token expires, use the refresh token to obtain a new access token.")]),e._v(" "),t("p",[t("strong",[e._v("Endpoint:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("POST {{url}}/oauth/token\n")])])]),t("p",[t("strong",[e._v("Headers")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Key")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Content-Type")]),e._v(" "),t("td",[e._v("application/json")])]),e._v(" "),t("tr",[t("td",[e._v("Authorization")]),e._v(" "),t("td",[e._v("Basic "),t("code",[e._v("base64ClientIdSecret")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Request Body Example:")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"refresh_token"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{refreshToken}}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"grant_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"refresh_token"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("strong",[e._v("Response Example:")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"token_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bearer"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"expires_in"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access_token"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZDIxYmUwYS01MzE5LTRkZDAtOTQ4Mi0zOTM5Njg0YzY3ODIiLCJqdGkiOiIyMTE0MTFlYWExZGU1YTRlNzcxOGRmODk1N2M2YWQyNzAzZTk0YzBhMjJjNDZlNTM4NWZmMTM0N2FjNDhiYzFkNjRlOTU2ODE0OWZjZmQ3NiIsImlhdCI6MTcyNzc1OTEzOS44MzI2NjEsIm5iZiI6MTcyNzc1OTEzOS44MzI2NjQsImV4cCI6MTcyNzc2MjczOS44MDQwMDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.YTbSjKgZg4v8D2n11Az9TqjiJVvTyQPl-8BoqqkdfGhUlkMZ4DZ-JT49m7KPh-Y6slX8qzr_ZMryeKhbN_avR0lRxRt-xPkuXUbvGld-TpWHbsJ6eR7QK2UGyzMhM_CRQQH9MYNx8tIcNTON_mmp6DcqV9GcHzP20rUfkUIByvwaZF36l1rx3RosRjttvG1Jff9SeFcaHAwpy8uk9iu0nplOS-Se88Se8Ir8TU_kEZfUudwPw-7GEsQ2Bz9Z_AuZheVvBt8uPjlCGGjfGl7dcG_wy4JYkb3fyKe8IqTcTb6vsjC24pvtijkjaJljUaePzaPp5k5EdGXxLtYkAhxDBSmaxSicVesh-EHbqJHQmwc_CPN9K6tiuSv6YmGEfau4Mn6ryULDyjngvvN_gvAj7-F2cwk76pZWfcVMPazG40CfSyrfWG8xv7kuYNiZLQ48k8oahDdqoYK9a0MhBXmdq4AO6OKKPhp9_rS86ecB1vWNqKOJg3pnDq9cgsR26vXADrpJiL4ETDl3djR4sBGpBaqUstSC79H91yGApxfOvUWVxyA7ou_dEoryMaW6iVzwEv5-hZG9c3CoNEupvd_YeFjFSby-eBQ8AjubZm_B_NUbcJq7G4XoV2K1Gzpvfcvywb9F5cFANX-aoBLESauW8kPi7MA3n2QrXpadtmgBSD4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"refresh_token"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"def50200b3b5e3ec4f608279263600e4041189dccaabe3e16ad487e72c26b80a128fcfe6232d21c4c9441ee258b8f03964f4685643865677e2e2613a7ed7251849f13934028f84dc33cbf589a6ce0c37e98066e561fbe16997751a831dd9df294a690c3ac43beab27cb86e64fa7eb1fe572c514fb5487d929dfc6b415f34803ce7168cd468fbc9a0f30b460244a8b9da559ec5dfe1b7b01f52219150e02d75a001007fed26a1fd66f2086fed15e4961f9481fdbdac032b3c055e5d6509e615e831fa6b395195cc561b14be95d9f16bf73a77bedcf20b9348e11d1a2a8bab3abaa62f585f1aa804e53b7f8e297b295a18b146eea8ada82ee4ea8d4e6cfdd563f1f06947b5b84ad1e02551674d302a77d1f0949f10324e37ed7c55620c0271a871555784b3d256ca7a48d261ca7afcac50235ae75066a73b7dd99034549a0c9cefb98685527f32b05f13cb681432919644766bc56fb1ad3412c43e96037cd1511d175460ee6f0d5e12a7e2ab90b2ae6e12be2e1a1f62f40ffe80457cd96f850adb5e3c4d23"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("hr")])}),[],!1,null,null,null);t.default=n.exports}}]);