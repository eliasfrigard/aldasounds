(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3ffeb9c"],{"110c":function(e,a,t){},"3ad6":function(e,a,t){"use strict";t.r(a);var i=t("7a23"),u=Object(i["K"])("data-v-4a9957ee");Object(i["u"])("data-v-4a9957ee");var s={class:"article"},n={class:"ui container content"},c={class:"article-title"},r={class:"article-author"},l={class:"article-date"},o={class:"article-body"};Object(i["s"])();var m=u((function(e,a,t,u,m,d){return Object(i["r"])(),Object(i["e"])("div",s,[Object(i["i"])("div",n,[Object(i["i"])("h1",c,Object(i["B"])(m.title),1),Object(i["i"])("img",{class:"article-image",src:m.image,alt:"",srcset:"",onError:a[1]||(a[1]=function(){return d.noImage&&d.noImage.apply(d,arguments)})},null,40,["src"]),Object(i["i"])("p",r,Object(i["B"])(m.author),1),Object(i["i"])("p",l,Object(i["B"])(d.computedDate),1),Object(i["i"])("p",o,Object(i["B"])(m.body),1)])])})),d=(t("99af"),t("d3b7"),t("c1df")),p=t.n(d),b={name:"Article",data:function(){return{id:this.$route.params.id,title:"New album out now!",image:"P1110937-sized.webp",author:"Veera Kuisma",date:"2012-04-23T18:25:43.511Z",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat odio id nulla sollicitudin accumsan. Maecenas lorem dolor, consequat in blandit eget, tempor et massa. Praesent accumsan pellentesque efficitur. Nulla facilisi. Cras fringilla dolor ut dui congue, sollicitudin varius diam facilisis. Fusce porta enim sit amet nisl vulputate, et egestas lacus porttitor. Maecenas mi purus, pellentesque accumsan accumsan sed, egestas eget nisl. Nulla imperdiet ac urna eu interdum. Maecenas euismod erat non commodo consequat.Curabitur sit amet mi sed velit consequat pulvinar. Duis accumsan leo nec turpis dignissim fermentum. Donec aliquam diam est, vel mattis sapien maximus id. Aenean massa diam, commodo sit amet nibh sit amet, posuere bibendum augue. Fusce eget malesuada eros, ac sollicitudin ipsum. Fusce sollicitudin facilisis massa, ac cursus arcu iaculis ullamcorper. Pellentesque sodales, elit a aliquet dignissim, felis odio convallis erat, non porttitor eros purus at arcu.Proin vehicula nibh at pharetra commodo. Aenean lacinia mi ut euismod sagittis. Etiam tincidunt consequat nisl nec feugiat. Vestibulum molestie pharetra ultrices. Sed dapibus neque faucibus pretium porta. Nunc tincidunt nulla ut mauris efficitur placerat. Donec non sem congue, tincidunt ligula non, gravida orci. Phasellus ac semper mauris. Sed placerat tincidunt nulla, nec iaculis augue rutrum sit amet. Cras congue volutpat leo, ut lacinia arcu blandit vitae. Aliquam sit amet varius magna. Phasellus pellentesque lorem ac gravida viverra. Cras iaculis ultricies velit sed ullamcorper. In aliquam enim sit amet aliquet hendrerit. Etiam luctus elit nec odio dictum molestie.In varius placerat tincidunt. Aenean maximus pellentesque mauris eu cursus. Curabitur auctor vehicula enim, in tristique mauris auctor sit amet. Morbi quam nisi, vulputate a ultricies ac, pharetra placerat enim. Vestibulum ultrices magna ligula, nec blandit nulla consectetur tempus. Sed at augue elementum, placerat diam a, posuere tortor. Duis efficitur sem lacus, eget accumsan nisi dictum vulputate. Nam nec lacinia dolor, a gravida orci. Integer venenatis sed arcu vel aliquam.Donec malesuada nisi quis nisl vestibulum, id dignissim quam efficitur. Morbi sed consectetur magna. Nunc in pharetra nibh. Praesent a mi pharetra, scelerisque massa eu, tempor mauris. In hac habitasse platea dictumst. Nullam elementum massa id justo tempor consequat. Mauris commodo fringilla diam eget lobortis. Sed scelerisque tristique vulputate. Quisque tellus massa, gravida in imperdiet nec, egestas et augue. Nam eget nulla nulla. Nulla purus augue, molestie sed elit vel, pharetra dapibus nunc. Donec rhoncus hendrerit nisl eu mattis."}},methods:{noImage:function(){document.querySelector(".article-author").style.marginTop="0px"}},computed:{computedDate:function(){var e=p()(this.date).format("Do"),a=p()(this.date).format("MMMM"),t=p()(this.date).format("YYYY");return"".concat(e," ").concat(a," ").concat(t)}},created:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/".concat(this.id)).then((function(e){return e.json()})).then((function(a){e.title=a.title}))}};t("abb5");b.render=m,b.__scopeId="data-v-4a9957ee";a["default"]=b},"99af":function(e,a,t){"use strict";var i=t("23e7"),u=t("d039"),s=t("e8b5"),n=t("861d"),c=t("7b0b"),r=t("50c4"),l=t("8418"),o=t("65f0"),m=t("1dde"),d=t("b622"),p=t("2d00"),b=d("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!u((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=m("concat"),q=function(e){if(!n(e))return!1;var a=e[b];return void 0!==a?!!a:s(e)},j=!h||!v;i({target:"Array",proto:!0,forced:j},{concat:function(e){var a,t,i,u,s,n=c(this),m=o(n,0),d=0;for(a=-1,i=arguments.length;a<i;a++)if(s=-1===a?n:arguments[a],q(s)){if(u=r(s.length),d+u>f)throw TypeError(g);for(t=0;t<u;t++,d++)t in s&&l(m,d,s[t])}else{if(d>=f)throw TypeError(g);l(m,d++,s)}return m.length=d,m}})},abb5:function(e,a,t){"use strict";t("110c")}}]);
//# sourceMappingURL=chunk-e3ffeb9c.f02029d9.js.map