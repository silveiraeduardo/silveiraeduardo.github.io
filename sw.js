if(!self.define){let e,i={};const f=(f,s)=>(f=new URL(f+".js",s).href,i[f]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=i,document.head.appendChild(e)}else e=f,importScripts(f),i()})).then((()=>{let e=i[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(s,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const c=e=>f(e,o),d={module:{uri:o},exports:r,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"dc400e9606696e9991f62cfc2612c497"},{url:"/android-chrome-512x512.png",revision:"5b18ff2fc73d498521f98b1570849f11"},{url:"/apple-touch-icon.png",revision:"1e1069c0e309c7f58fb96dc533b6c356"},{url:"/browserconfig.xml",revision:"878d1ba47d4572ad3cbff966cdbe79b5"},{url:"/favicon-16x16.png",revision:"919cf62083eb26f82b0fa489b2c72533"},{url:"/favicon-32x32.png",revision:"a80f942c1ab3958f540333b571420772"},{url:"/favicon.ico",revision:"df9bef4bec2ce52168b6e63ebed743b9"},{url:"/fonts.css",revision:"7013eb4e1cca966aed3e71d0eec80eea"},{url:"/fonts/sf-pro-display-black.ttf",revision:"0bae60a646319e22e4e9a862cdccc318"},{url:"/fonts/sf-pro-display-black.woff",revision:"ce76516874b94569bc627578a28dfa9b"},{url:"/fonts/sf-pro-display-black.woff2",revision:"f22d94de4477e3ef7b92a2be10d8b7f4"},{url:"/fonts/sf-pro-display-blackitalic.ttf",revision:"b1d67bd9d019f14a575ab22cf20fa649"},{url:"/fonts/sf-pro-display-blackitalic.woff",revision:"01c7bbed4c460971d31c318d6d3efbbe"},{url:"/fonts/sf-pro-display-blackitalic.woff2",revision:"dbc8d971f23eac8f2941451332618b8e"},{url:"/fonts/sf-pro-display-bold.ttf",revision:"fe58a6a449074dcbde80e602f25c373b"},{url:"/fonts/sf-pro-display-bold.woff",revision:"32b0e192a7af35542eebbcdee2ab1d40"},{url:"/fonts/sf-pro-display-bold.woff2",revision:"76efd88e44284b60bbaea8268a264c53"},{url:"/fonts/sf-pro-display-bolditalic.ttf",revision:"d5fc18df6bdf1fd6ef5067a09061223c"},{url:"/fonts/sf-pro-display-bolditalic.woff",revision:"33d5673b0e29c3bcecf8e92b3b8357b2"},{url:"/fonts/sf-pro-display-bolditalic.woff2",revision:"7abe4ad79968a63dabd4cb9c1db5c031"},{url:"/fonts/sf-pro-display-heavy.ttf",revision:"fd1ad6594c4b3c30f0887bf88e94cbb4"},{url:"/fonts/sf-pro-display-heavy.woff",revision:"7549e999f43ce7135ebf6ef0636004df"},{url:"/fonts/sf-pro-display-heavy.woff2",revision:"b52086c6f7447e77efd452a77bc80e09"},{url:"/fonts/sf-pro-display-heavyitalic.ttf",revision:"6d5f5de78972fc385144416e817fbea2"},{url:"/fonts/sf-pro-display-heavyitalic.woff",revision:"5ce68afa56d1ce994448c07a90a30bf7"},{url:"/fonts/sf-pro-display-heavyitalic.woff2",revision:"6497237cfd38203a5dca1b3c8ef7be9d"},{url:"/fonts/sf-pro-display-light.ttf",revision:"c38ee7fe8753f4254ff54c52932f76e7"},{url:"/fonts/sf-pro-display-light.woff",revision:"778826a4b2b1417416a0ee04cc9eac50"},{url:"/fonts/sf-pro-display-light.woff2",revision:"b7b1ce56ae8935d8f48d19d0b8dee814"},{url:"/fonts/sf-pro-display-lightitalic.ttf",revision:"bc9553c6299d9f24fbc389fd29c3faaf"},{url:"/fonts/sf-pro-display-lightitalic.woff",revision:"9c55ac1d10258cbb113ee992d697cf34"},{url:"/fonts/sf-pro-display-lightitalic.woff2",revision:"4119bd3845c50a8939420beff4d64c5a"},{url:"/fonts/sf-pro-display-medium.ttf",revision:"a291e9278891a02a4ab3a8a0b6829cc7"},{url:"/fonts/sf-pro-display-medium.woff",revision:"a1cc122d12f6d75a0322f1a025044b92"},{url:"/fonts/sf-pro-display-medium.woff2",revision:"936570f87f72e6fbe8922269027f035e"},{url:"/fonts/sf-pro-display-mediumitalic.ttf",revision:"928a6e1459de35c184ddba96db97c5fd"},{url:"/fonts/sf-pro-display-mediumitalic.woff",revision:"9f6f8e6357062de87b0385dd9102d511"},{url:"/fonts/sf-pro-display-mediumitalic.woff2",revision:"926fa9bad825e4d3175259073b1735cd"},{url:"/fonts/sf-pro-display-regular.ttf",revision:"2485201dbb3815984ae2d6abe40c6adf"},{url:"/fonts/sf-pro-display-regular.woff",revision:"5f7a4b8e9ecab313b29cbeb3079ec36c"},{url:"/fonts/sf-pro-display-regular.woff2",revision:"c01bf4f46988116b106151c4c334740e"},{url:"/fonts/sf-pro-display-regularitalic.ttf",revision:"a2365f279225bd6ee763a42c17b1958a"},{url:"/fonts/sf-pro-display-regularitalic.woff",revision:"e1422d52cac3485f3e32fbeb285b96b3"},{url:"/fonts/sf-pro-display-regularitalic.woff2",revision:"70e15d58fcdf4cb85f93b48f06c55c1d"},{url:"/fonts/sf-pro-display-semibold.ttf",revision:"ad56dd098c9b20ad9c411603b6a23820"},{url:"/fonts/sf-pro-display-semibold.woff",revision:"95498df988dc3a373c54f5f7c2df880a"},{url:"/fonts/sf-pro-display-semibold.woff2",revision:"698e24f88b02cd101dea8d0b3973c3b2"},{url:"/fonts/sf-pro-display-semibolditalic.ttf",revision:"90e144617ae24437de5f8a971a578d04"},{url:"/fonts/sf-pro-display-semibolditalic.woff",revision:"f1515cc5b9e4cec8eb651b690f6e6c15"},{url:"/fonts/sf-pro-display-semibolditalic.woff2",revision:"b6f77d02c5eedce91b1925ccdc486088"},{url:"/fonts/sf-pro-display-thin.ttf",revision:"f366a7a9ab7f0b5ddca0cf75abd84130"},{url:"/fonts/sf-pro-display-thin.woff",revision:"9d91b7cc83972dc2275ae51fad65170b"},{url:"/fonts/sf-pro-display-thin.woff2",revision:"879f04ef6751de5837674ba4e331c7aa"},{url:"/fonts/sf-pro-display-thinitalic.ttf",revision:"261b8386bbb7eb8924e0fc52054f64af"},{url:"/fonts/sf-pro-display-thinitalic.woff",revision:"1a5bc9108de10e50df11e64c036340ba"},{url:"/fonts/sf-pro-display-thinitalic.woff2",revision:"8e8480323b8b573ec4604416b934fac7"},{url:"/fonts/sf-pro-display-ultralight.ttf",revision:"da5fb6f9d2aef13b21030f40592078b6"},{url:"/fonts/sf-pro-display-ultralight.woff",revision:"95d191d09aad7d70a6e15b3e7c14757a"},{url:"/fonts/sf-pro-display-ultralight.woff2",revision:"87bf34dc4acb65b582aacea4362cc21d"},{url:"/fonts/sf-pro-display-ultralightitalic.ttf",revision:"4eb499baa6961a91353079fe5c91d148"},{url:"/fonts/sf-pro-display-ultralightitalic.woff",revision:"0930eca210a44848f9cb7bfa3dd4b18b"},{url:"/fonts/sf-pro-display-ultralightitalic.woff2",revision:"f247c49eb04e7cf297a8a4b61a31377d"},{url:"/fonts/sf-pro-text-bold.ttf",revision:"f07a7e3976faeaa0f3ae735f989e781e"},{url:"/fonts/sf-pro-text-bold.woff",revision:"3607ce76883dbd9c059722a0bbf78524"},{url:"/fonts/sf-pro-text-bold.woff2",revision:"27b613313b2089b581892a7975e8f801"},{url:"/fonts/sf-pro-text-bolditalic.ttf",revision:"d7b28b4c48dbdffbb9cae14f228fc0bc"},{url:"/fonts/sf-pro-text-bolditalic.woff",revision:"907442e2f50b13685228c0e36a031d94"},{url:"/fonts/sf-pro-text-bolditalic.woff2",revision:"b5a82352a73c5a93ecd48f36f417c5a7"},{url:"/fonts/sf-pro-text-heavy.ttf",revision:"f2dcafe3ec283525cc3198bfc48b7833"},{url:"/fonts/sf-pro-text-heavy.woff",revision:"9d836b8ee1c8a68ae4968c7446f854a7"},{url:"/fonts/sf-pro-text-heavy.woff2",revision:"af67a2f66d95e6d40daaec1b3b5c98fd"},{url:"/fonts/sf-pro-text-heavyitalic.ttf",revision:"d288544351fa9765e806564c07c60437"},{url:"/fonts/sf-pro-text-heavyitalic.woff",revision:"88fad9ee084a8aabc469d8e069a02019"},{url:"/fonts/sf-pro-text-heavyitalic.woff2",revision:"9fe0b91d3d5657f60b968cfcdab8834d"},{url:"/fonts/sf-pro-text-light.ttf",revision:"a4c506eca9c6d62515a7d07ee66c9135"},{url:"/fonts/sf-pro-text-light.woff",revision:"af64bf076141067e904724e5fb4322e9"},{url:"/fonts/sf-pro-text-light.woff2",revision:"6eca152c3fa857168a7351a69cf5a6ae"},{url:"/fonts/sf-pro-text-lightitalic.ttf",revision:"4eb15f222d22fc6bcc6ca2fe1c9a6d31"},{url:"/fonts/sf-pro-text-lightitalic.woff",revision:"12572a59f3d5a2ddfa13e4bb24a033b1"},{url:"/fonts/sf-pro-text-lightitalic.woff2",revision:"00e752ef4b279cfd7e4166d8c79b6b26"},{url:"/fonts/sf-pro-text-medium.ttf",revision:"852a82ec45dd0d04447cca4bc5a99c6c"},{url:"/fonts/sf-pro-text-medium.woff",revision:"1dd448ade24ad04638e768b4b1e929fd"},{url:"/fonts/sf-pro-text-medium.woff2",revision:"183f2f3ab7eeca254444042588822e6f"},{url:"/fonts/sf-pro-text-mediumitalic.ttf",revision:"1ff97a1af066e4d752510ceb445f7741"},{url:"/fonts/sf-pro-text-mediumitalic.woff",revision:"52a73e19c73c3b358621657e2e703766"},{url:"/fonts/sf-pro-text-mediumitalic.woff2",revision:"ff69a0731de095ef9f04f29d93d3fe4b"},{url:"/fonts/sf-pro-text-regular.ttf",revision:"86f4973be3039ada5d5731bf5c40990c"},{url:"/fonts/sf-pro-text-regular.woff",revision:"ef1cf025fb8dea25d2a8ebd05ea75766"},{url:"/fonts/sf-pro-text-regular.woff2",revision:"d5f6b7fbc5d2f976cce22bde646699c2"},{url:"/fonts/sf-pro-text-regularitalic.ttf",revision:"b376a4f01a65315f2855e5e6d2cc8264"},{url:"/fonts/sf-pro-text-regularitalic.woff",revision:"287decd5d5239d90ccdba65819edd310"},{url:"/fonts/sf-pro-text-regularitalic.woff2",revision:"8eda59cf5c7cef1f10c6ef1bca622154"},{url:"/fonts/sf-pro-text-semibold.ttf",revision:"9947d5644f99a36e930d7eac4562665f"},{url:"/fonts/sf-pro-text-semibold.woff",revision:"5b48b7cdf977afc36fa2c57b58d2fc47"},{url:"/fonts/sf-pro-text-semibold.woff2",revision:"891cba4654a9670f592b9481e0fe90fd"},{url:"/fonts/sf-pro-text-semibolditalic.ttf",revision:"d4b7168a5bd7dcd841d823bc3e405e1d"},{url:"/fonts/sf-pro-text-semibolditalic.woff",revision:"22d4dc41ceab2890a9132197f1cdbf51"},{url:"/fonts/sf-pro-text-semibolditalic.woff2",revision:"afbe1a0eacb16e01ae0c872bd91d1429"},{url:"/fonts/sfmono-bold.woff",revision:"41bc4358830ecf6cc2ab056270a64134"},{url:"/fonts/sfmono-bold.woff2",revision:"6a0182bb5ecf1e8ae46ccf1672de9138"},{url:"/fonts/sfmono-bolditalic.woff",revision:"f33d872689b78a9dd16257351cc54e7b"},{url:"/fonts/sfmono-bolditalic.woff2",revision:"351f25cd0f763d5e94235e98ad99d557"},{url:"/fonts/sfmono-heavy.woff",revision:"4e12d26dfe5094c54bd59000335c15cd"},{url:"/fonts/sfmono-heavy.woff2",revision:"e6b90541b7b6be2725eb1ec6a1b3cbff"},{url:"/fonts/sfmono-heavyitalic.woff",revision:"51183ad4739cd59b8a56c26774e08ec3"},{url:"/fonts/sfmono-heavyitalic.woff2",revision:"b49fed291f7dbfaf508adc60eb1e919c"},{url:"/fonts/sfmono-light.woff",revision:"1145026502699abe6192b4cfc2d44378"},{url:"/fonts/sfmono-light.woff2",revision:"e39ea6c65a7e592f9da45d3aadc4fa9d"},{url:"/fonts/sfmono-lightitalic.woff",revision:"b9f5676a14e625fbdc1ae4a370f11620"},{url:"/fonts/sfmono-lightitalic.woff2",revision:"e8b04b94bad2882df74b5c8c73664b84"},{url:"/fonts/sfmono-medium.woff",revision:"5e3c2e3ac83a9006569c8be01b46f6ec"},{url:"/fonts/sfmono-medium.woff2",revision:"6e20eafa533a7c239ae209be03465441"},{url:"/fonts/sfmono-mediumitalic.woff",revision:"fbb8ea572b8ad3b7e824cdd299af0415"},{url:"/fonts/sfmono-mediumitalic.woff2",revision:"58bb36ee85421b143c8a9a3327913e59"},{url:"/fonts/sfmono-regular.woff",revision:"b3d9c4d2ea0e2af19686766b637c1f7a"},{url:"/fonts/sfmono-regular.woff2",revision:"32fcea2286da8a5845de645b502c418b"},{url:"/fonts/sfmono-regularitalic.woff",revision:"b0afbfab1d0f559723698074804d63fe"},{url:"/fonts/sfmono-regularitalic.woff2",revision:"4b0522f37fddafc00fd5089b1cb5ea7a"},{url:"/fonts/sfmono-semibold.woff",revision:"269eb26c3161059e56cd950c6311cf25"},{url:"/fonts/sfmono-semibold.woff2",revision:"ac5054b41d37a5fa71d13c2e70deb850"},{url:"/fonts/sfmono-semibolditalic.woff",revision:"ed3bea7f52bbe8d07b5c18491b84a159"},{url:"/fonts/sfmono-semibolditalic.woff2",revision:"99b851ef34fcf6b3c44496bdaab6d20f"},{url:"/images/Eduardo_Silveira--lightmode.png",revision:"48aab1f63c3120225608ae90b6371805"},{url:"/images/Eduardo_Silveira.png",revision:"7e1591c7f97be6e84fc5e9003cd886e4"},{url:"/images/Eduardo_Silveira_tragetoria--sombra.png",revision:"1a7e61f9850c04b022c55ec206a64b86"},{url:"/images/Eduardo_Silveira_tragetoria.png",revision:"92f19fb3e1bb8ceec1c24274dea01231"},{url:"/images/logos/Eduardo_Silveira_espm-2.png",revision:"ccf92585893cb842402c13735a08e1dd"},{url:"/images/logos/Eduardo_Silveira_espm.png",revision:"82deb36db5aa6e1c06c6521f04ef8187"},{url:"/images/logos/Eduardo_Silveira_integracommerce-2.png",revision:"d811dc891f3740449657eb0a72b32d16"},{url:"/images/logos/Eduardo_Silveira_integracommerce.png",revision:"7db28099537110316b2714a07ed27ed0"},{url:"/images/logos/Eduardo_Silveira_luizalabs.png",revision:"5ac4dad8de69dddc06f142693ae430f3"},{url:"/images/logos/Eduardo_Silveira_magalu.png",revision:"30020abca3e5a0e40b71dc0d32e42dde"},{url:"/images/logos/Eduardo_Silveira_riachuelo.png",revision:"05db06e00286144bf53dcab1aa353d2b"},{url:"/images/logos/Eduardo_Silveira_univas-2.png",revision:"4f4be60e2e1e78e0762d2437c13d5f57"},{url:"/images/logos/Eduardo_Silveira_univas.png",revision:"55e0d8a3059574ff27735689680a6f2c"},{url:"/images/timeline/Eduardo_Silveira_espm.png",revision:"433b81ab34e7f7946c207ab8f6e2728c"},{url:"/images/timeline/Eduardo_Silveira_integracommerce.png",revision:"68b6ef55025e9f25aef6edd023ef5e93"},{url:"/images/timeline/Eduardo_Silveira_riachuelo--2.png",revision:"f0cb9e29eb7863e9a559c25536282f2c"},{url:"/images/timeline/Eduardo_Silveira_riachuelo.png",revision:"fe7ce60661a2d7080323e90481f894d7"},{url:"/images/timeline/Eduardo_Silveira_riachuelomais--2.png",revision:"c74091a0cfb59914392ea01dc0c45aea"},{url:"/images/timeline/Eduardo_Silveira_riachuelomais.png",revision:"032f75c02cf1c9219bfb67c979f2bbcf"},{url:"/images/timeline/Eduardo_Silveira_simplifique--2.png",revision:"5bd966e0209bb0d3bb88b9edc5337d10"},{url:"/images/timeline/Eduardo_Silveira_simplifique.png",revision:"37861bb6ad3c1659ee994188c4829d44"},{url:"/images/timeline/Eduardo_Silveira_univas.png",revision:"3c18034f38556a6569a851326ac4603a"},{url:"/images/timeline/Eduardo_Silveira_ux_lead--2.png",revision:"045cda53f1024504cec008caec61df58"},{url:"/images/timeline/Eduardo_Silveira_ux_lead.png",revision:"0016c5aacad86edb5066de5ae0a621a3"},{url:"/mstile-150x150.png",revision:"507a99bc2ac64a36297d1b040730d55a"},{url:"/safari-pinned-tab.svg",revision:"482e6b8e65285b761829a8df215fb425"},{url:"/site.webmanifest",revision:"5cf5d7aa1bfbb877da2611842e3ff6e9"},{url:"/svg/arrow_curve.svg",revision:"875cc2d6a10663b647fc1ef055cd3d81"},{url:"/svg/arrow_curve_right.svg",revision:"99d2794805eb2c00b5f44b3a79422b75"},{url:"/svg/arrow_down.svg",revision:"57d8ffcbc94749187d0fd7723ac2d631"},{url:"/svg/arrow_right.svg",revision:"f0a95ef5c525cc81d848a7f1cc1ed17d"},{url:"/svg/circle_contained.svg",revision:"bfb5db6983c73e09afab7ad7541f012f"},{url:"/svg/circle_outlined.svg",revision:"62037cc1d9798d3340476f1300ed7daa"},{url:"/svg/eduardosilveira_linkedin.svg",revision:"f8c12107cdd63f760ef610d3c9344527"},{url:"/svg/history.svg",revision:"7d5622dcb3c886fb94357ac97ba6a8ba"},{url:"/svg/keyboard.svg",revision:"b95f012efabfc0df282bbd0a27bd2955"},{url:"/svg/laptop.svg",revision:"45140c876446a017da3bdc2c3a18c457"},{url:"/svg/line.svg",revision:"4dc9c4c354664d5027e6ed65607d2713"},{url:"/svg/problemas.svg",revision:"bad3de9d7214133a48965bb8c554ba83"},{url:"/svg/school.svg",revision:"0e05007dd7608260951b94597fd12cd2"},{url:"/svg/silveira.svg",revision:"5f418141b2864243e12df0ed64b8b9e0"},{url:"https://eduardosilveira.com/_next/static/RR5DCK_YaYRn1gsrCS-WH/_buildManifest.js",revision:"3d0ccd4cf55074e9af081310f4ccf2f4"},{url:"https://eduardosilveira.com/_next/static/RR5DCK_YaYRn1gsrCS-WH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"https://eduardosilveira.com/_next/static/chunks/framework-6c918b6f4a592675.js",revision:"6c918b6f4a592675"},{url:"https://eduardosilveira.com/_next/static/chunks/framework-6c918b6f4a592675.js.map",revision:"ecfa209c7f8860521e1f830592dc7ed4"},{url:"https://eduardosilveira.com/_next/static/chunks/main-bc7b588f64115171.js",revision:"bc7b588f64115171"},{url:"https://eduardosilveira.com/_next/static/chunks/main-bc7b588f64115171.js.map",revision:"b5ed59440ac5eb418ddce334d86cfacf"},{url:"https://eduardosilveira.com/_next/static/chunks/pages/_app-d463632e66d46485.js",revision:"d463632e66d46485"},{url:"https://eduardosilveira.com/_next/static/chunks/pages/_app-d463632e66d46485.js.map",revision:"0b808b14240899df98c95853cd1479f7"},{url:"https://eduardosilveira.com/_next/static/chunks/pages/_error-5d8da6df50fc714d.js",revision:"5d8da6df50fc714d"},{url:"https://eduardosilveira.com/_next/static/chunks/pages/_error-5d8da6df50fc714d.js.map",revision:"395b505d94a30dfe577ce48ded497e9b"},{url:"https://eduardosilveira.com/_next/static/chunks/pages/index-cd3bc6eee388684c.js",revision:"cd3bc6eee388684c"},{url:"https://eduardosilveira.com/_next/static/chunks/pages/index-cd3bc6eee388684c.js.map",revision:"ff83b3f04e6046431a6b94b567cdfea0"},{url:"https://eduardosilveira.com/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"https://eduardosilveira.com/_next/static/chunks/webpack-295ac8c70d40cf2a.js",revision:"295ac8c70d40cf2a"},{url:"https://eduardosilveira.com/_next/static/chunks/webpack-295ac8c70d40cf2a.js.map",revision:"7efbc19e14aee09140724ae40d23e9fd"},{url:"https://eduardosilveira.com/_next/static/css/045325a0e1efa312.css",revision:"045325a0e1efa312"},{url:"https://eduardosilveira.com/_next/static/css/045325a0e1efa312.css.map",revision:"ea61fb5552fecc31994229e2c3f5399b"},{url:"https://eduardosilveira.com/_next/static/css/5dae8a68d914dce1.css",revision:"5dae8a68d914dce1"},{url:"https://eduardosilveira.com/_next/static/css/5dae8a68d914dce1.css.map",revision:"65573f230a6738f32de1e4492ca2dcd5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:f,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
