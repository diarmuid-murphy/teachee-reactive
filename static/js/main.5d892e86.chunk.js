(this["webpackJsonpsimple-test"]=this["webpackJsonpsimple-test"]||[]).push([[0],{37:function(e,t,a){e.exports=a(50)},42:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=(a(42),a(13)),i=a(5),m=a(57),u=a(56),s=(a(43),a(17)),h=a(18),d=a(25),E=a(23),v=a(52),f=a(53),b=a(54),p=a(55),g=a(58),y=a(59),w=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={comments:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then((function(e){return e.json()})).then((function(t){e.setState({comments:t})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,null,l.a.createElement(f.a,null,l.a.createElement("h2",null,"Comments:"),l.a.createElement(g.a,{variant:"info"},"These comments are loaded with the ",l.a.createElement("code",null,"componentDidMount")," lifecycle method, which in turn fires off an AJAX ",l.a.createElement("code",null,"fetch")," request to asynchronously get the comments, update ",l.a.createElement("code",null,"state"),", and finally render each comment card."))),l.a.createElement(v.a,null,this.state.comments.map((function(e){return l.a.createElement(f.a,{key:e.id,md:12},l.a.createElement(y.a,null,l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null,e.name),l.a.createElement(y.a.Text,null,e.body,l.a.createElement("br",null),"Email: ",l.a.createElement("a",{href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer"},e.email)))))}))))}}]),a}(l.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getCameraFeed=function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(t){console.log(t),e.setState({isCameraEnabled:!0}),e.video.current.srcObject=t,e.context=e.canvas.current.getContext("2d")}))},e.disableCamera=function(){e.setState({isCameraEnabled:!1}),e.video.current.srcObject.getTracks().forEach((function(e){return e.stop()}))},e.handleOnPlay=function(t){var a=t.target,n=a.clientWidth,l=a.clientHeight;e.canvas.current.width=n,e.canvas.current.height=l;requestAnimationFrame((function a(){try{e.context.drawImage(e.video.current,0,0,n,l)}catch(t){return new Error(t)}requestAnimationFrame(a)}))},e.state={isCameraEnabled:!1},e.video=l.a.createRef(),e.canvas=l.a.createRef(),e.context=null,e}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,{className:"text-center"},l.a.createElement("div",null,this.state.isCameraEnabled?l.a.createElement(p.a,{variant:"warning",onClick:this.disableCamera},"Disable Camera"):l.a.createElement(p.a,{variant:"success",onClick:this.getCameraFeed},"Enable Camera")),l.a.createElement(v.a,null,l.a.createElement(f.a,{lg:6},l.a.createElement("h3",null,"Video Element"),l.a.createElement("video",{onPlay:this.handleOnPlay,ref:this.video,width:"100%",height:"auto",id:"canvas",autoPlay:!0}),l.a.createElement("p",null,"This is a ",l.a.createElement("code",null,"video")," element streaming directly from the webcam.")),l.a.createElement(f.a,{lg:6},l.a.createElement("h3",null,"Canvas Element"),l.a.createElement("canvas",{ref:this.canvas,style:{width:"100%",height:"auto"}}),l.a.createElement("p",null,"This is a ",l.a.createElement("code",null,"canvas")," element being recursively 'painted' to from the video."))),l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},"Back to Home"))))),l.a.createElement(w,null))}}]),a}(l.a.Component);var k=function(){return l.a.createElement(v.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,{className:"text-center"},l.a.createElement("h1",null,"Welcome to my reactive app"),l.a.createElement("p",null,"The button below will use React Router to direct the user to ",l.a.createElement("code",null,"/call"),",",l.a.createElement("br",null),"which in turn will load the relevant component without any requests being sent from the page."),l.a.createElement(o.b,{className:"btn btn-info",to:"call"},"JOIN"))))};a(49);var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{bg:"dark",variant:"dark"},l.a.createElement(m.a.Brand,{className:"mr-auto",href:"https://github.com/diarmuid-murphy/",target:"_blank"},"Teachee"),l.a.createElement(m.a.Text,{className:"mr-sm-2"},"Created by Diarmuid Murphy")),l.a.createElement(u.a,null,l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/call",component:C}),l.a.createElement(i.a,{path:"*",component:k})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5d892e86.chunk.js.map