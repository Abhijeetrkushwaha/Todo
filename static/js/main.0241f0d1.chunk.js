(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(12),r=a.n(c),s=(a(23),a(13)),l=a(14),i=a(15),u=a(17),h=a(16),m=a(2),p=a.n(m),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={post:null,search:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),document.querySelector("#search").value="",e.setState({post:null}),p.a.get("https://api.unsplash.com/search/photos?query=".concat(e.state.search,"&client_id=").concat("DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok")).then((function(t){e.setState({post:t.data.results})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.unsplash.com/search/photos?query=computer&client_id=".concat("DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok")).then((function(t){e.setState({post:t.data.results})}))}},{key:"render",value:function(){var e=this.state.post?this.state.post.map((function(e){return o.a.createElement("div",{className:"content",key:e.id},o.a.createElement("img",{src:e.urls.small,alt:""}),o.a.createElement("a",{href:e.links.download_location},"link"))})):o.a.createElement("div",{className:"content"},o.a.createElement("p",null,"Loading images"));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Abhijeet.R. Kushwaha"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",id:"search",onChange:this.handleChange}),o.a.createElement("button",{type:"submit"},"search")),e)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0241f0d1.chunk.js.map