var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;"undefined"!=typeof require&&require;import{r as n,R as s,V as a,a as l}from"./vendor.997f8905.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class h extends n.exports.Component{constructor(e){super(e)}render(){const e=this.props.item,t=(this.props.item.width-this.props.margin)/14;return this.props.item.height,s.createElement("a",{href:"https://calil.jp/book/"+this.props.item.isbn,target:"_blank",style:{display:"inline-block",width:"100%",height:"100%"}},e.cover?s.createElement("img",{src:e.cover,alt:e.title,"data-aspect":e.properties.aspect}):s.createElement("div",{className:"nocover"},s.createElement("div",{className:"bg"}),s.createElement("div",{className:"textCover"},e.height>100?s.createElement(s.Fragment,null,s.createElement("div",{className:"title",style:{fontSize:t+"px"}},e.title),s.createElement("div",{className:"author",style:{fontSize:.7*t+"px"}},e.author)):null)))}}const c=(e,t,i,r,o)=>{const n=[];let s=0;const a=r*i;return e.some((e=>{const i=e.properties&&e.properties.aspect?e.properties.aspect:.666666,r=Math.floor(a*i)+o;if(s+r>t)return!0;e.height=a,e.width=r,n.push(e),s+=r})),n},p=(e,t,i)=>{const r=t.reduce(((e,t)=>e+t.width),0),o=r/(r+i);t.some((e=>{e.width=Math.floor(e.width*o),e.height=Math.floor(e.height*o)}));const n=t[0].height/e[0].height;return e.some((e=>{e.width=Math.floor(e.width*n),e.height=Math.floor(e.height*n)})),t.concat(e)},m=(e,t)=>{t&&e.sort((function(e,i){return e[t]<i[t]?1:e[t]>i[t]?-1:0}));const i={},r=Math.floor(e.length/2);return i[r]=e[0],Array.from({length:r}).forEach(((t,o)=>{e[2*o+1]&&(i[r-1-o]=e[2*o+1]),e[2*o+2]&&(i[r+1+o]=e[2*o+2])})),Object.values(i)},d=e=>{let n=e.items.map((e=>((e,n)=>{for(var s in n||(n={}))i.call(n,s)&&o(e,s,n[s]);if(t)for(var s of t(n))r.call(n,s)&&o(e,s,n[s]);return e})({},e))),l=[],d=[],u=null,g={key:null,value:null},y=[],w=[],f=[];e.headerComponent&&(w.push({type:"header",component:e.headerComponent}),y.push(e.headerHeight));let v=0,E=n.slice(v,v+100);const C=e.width-2*e.padding-function(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const i=e.offsetWidth-t.offsetWidth;return e.parentNode&&e.parentNode.removeChild(e),i}();for(let t=0;E.length>0&&w.length<=e.rowCount;t++){const i=t%e.rowRatios.length,r=e.rowRatios[i];let o=c(E,C,r,e.itemHeight,e.itemMargin);const s=o.reduce(((e,t)=>e+t.width),0),a=C/s;a<2&&o.length>1?o.some((e=>{e.width=Math.floor(e.width*a),e.height=Math.floor(e.height*a)})):f.length>0&&(o=p(o,f,s),w.pop(),y.pop()),e.sortKey&&(o=m(o,e.sortKey)),w.push(o),f=o;let l=[];o.forEach((t=>{l.push(t.height+e.itemMargin)})),y.push(Math.max(...l)),v+=o.length,E=n.slice(v,v+100)}e.footerComponent&&(w.push({type:"footer",component:e.footerComponent}),y.push(e.footerHeight)),l=w,d=y;if(e.scrollTo&&e.scrollTo.value!==g.value){const{key:t,value:i}=e.scrollTo;setTimeout((()=>{((t,i)=>{let r;l.some(((e,o)=>{if(void 0===e.type&&e.filter((e=>e[t]===i)).length>0)return r=o,!0}));let o=e.padding;d.some(((e,t)=>{if(t===r)return!0;o+=e}));const n=setInterval((()=>{if(u.firstElementChild.scrollTop>=o)return clearTimeout(n);u.firstElementChild.scrollTo(0,o)}),1);setTimeout((()=>clearTimeout(n)),1e3)})(t,i)}),100),g=JSON.parse(JSON.stringify(e.scrollTo))}return s.createElement("div",{className:e.className?e.className:"hiradumi",ref:e=>u=e},s.createElement(a,{width:e.width,height:e.height,itemCount:l.length,itemSize:e=>d[e],onScroll:t=>{if(!u)return;const i=u.firstElementChild;t.scrollTop=i.scrollTop,t.scrollBottom=i.scrollHeight-i.clientHeight-i.scrollTop,e.onScroll(t)},style:e.style},(t=>{const i=l[t.index],r=JSON.parse(JSON.stringify(t.style));return r.display="flex",r.justifyContent="space-between",void 0===i.type?(r.top=parseInt(t.style.top)+e.padding+"px",r.left=e.padding+"px",r.width=`calc(100% - ${2*e.padding}px)`,r.boxSizing="border-box",s.createElement("div",{className:"row",style:r,key:"row"},i.map(((t,i)=>s.createElement("div",{key:"item"+i,className:"item",id:t.id,style:{display:"inline-block",width:t.width+"px",height:t.height+"px",margin:e.itemMargin/2+"px"}},e.itemComponent?s.createElement(e.itemComponent,{item:t,margin:e.itemMargin,sortKey:e.sortKey}):s.createElement(h,{item:t,margin:e.itemMargin,sortKey:e.sortKey})))))):(r.top=parseInt(t.style.top)+e.padding+"px",r.marginTop=e.itemMargin/2,s.createElement("div",{className:"row",style:r},s.createElement(i.component,null)))})))};class u extends n.exports.Component{constructor(e){super(e)}setRowHeight(){let e=[];Array.prototype.slice.call(document.querySelectorAll(".rowHeight")).forEach((t=>{""!==t.value?e.push(parseInt(t.value)):e.push(parseInt(t.placeholder))})),this.props.onChange({rowHeightList:e})}copy(){let e=[];Array.prototype.slice.call(document.querySelectorAll(".rowHeight")).forEach((t=>{""!==t.value?e.push(t.value):e.push(parseFloat(t.placeholder))})),function(e){var t=document.createElement("div"),i=document.createElement("pre");i.style.webkitUserSelect="auto",i.style.userSelect="auto",t.appendChild(i).textContent=e;var r=t.style;r.position="fixed",r.right="200%",document.body.appendChild(t),document.getSelection().selectAllChildren(t);var o=document.execCommand("copy");document.body.removeChild(t)}(e.toString())}setSortKey(e){e.checked?this.props.onChange({sortKey:"term_popular_count"}):this.props.onChange({sortKey:null})}setRowFactors(){const e=[];Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).forEach((t=>{e.push(t.value)})),this.props.onChange({rowRatios:e})}render(){return s.createElement("div",{id:"settingsUI",style:{maxWidth:"1400px",margin:"0 auto",padding:"10px"}},s.createElement("div",null,s.createElement("label",{htmlFor:"itemHeight"},"itemHeight:"),s.createElement("input",{type:"range",id:"itemHeight",name:"width",min:"10",max:"600",value:this.props.itemHeight,onChange:e=>this.props.onChange({itemHeight:parseInt(e.target.value)})}),this.props.itemHeight," ",s.createElement("label",{htmlFor:"itemMargin"},"itemMargin:"),s.createElement("input",{type:"range",id:"itemMargin",name:"width",min:"0",max:"50",value:this.props.itemMargin,onChange:e=>this.props.onChange({itemMargin:parseInt(e.target.value)})}),this.props.itemMargin," ",s.createElement("label",{htmlFor:"rowCount"},"rowCount:"),s.createElement("input",{type:"range",id:"rowCount",name:"width",min:"1",max:"30",value:this.props.rowCount,onChange:e=>this.props.onChange({rowCount:parseInt(e.target.value)})}),this.props.rowCount,"  ",s.createElement("label",{htmlFor:"padding"},"padding:"),s.createElement("input",{type:"range",id:"padding",name:"width",min:"0",max:"50",value:this.props.padding,onChange:e=>this.props.onChange({padding:parseInt(e.target.value)})}),this.props.padding," ",s.createElement("label",{htmlFor:"sortKey"},"sortKey:"),s.createElement("input",{type:"checkbox",id:"sortKey",name:"sortKey",defaultChecked:!0,onChange:e=>this.setSortKey(e.target)})),s.createElement("br",null),s.createElement("div",null,s.createElement("label",null,"rowRatios:"),this.props.rowRatios&&this.props.rowRatios.map(((e,t)=>s.createElement("input",{type:"number",placeholder:String(e),value:String(e),step:"0.1",className:"rowHeight",key:t,onChange:this.setRowFactors.bind(this),style:{width:"3rem"}}))),s.createElement("button",{onClick:this.copy.bind(this)},"Copy")))}}class g extends n.exports.Component{constructor(e){super(e)}render(){const e=this.props.item,t=(this.props.item.width-this.props.margin)/14;return this.props.item.height,s.createElement("a",{href:"https://calil.jp/book/"+this.props.item.isbn,target:"_blank",style:{display:"inline-block",width:"100%",height:"100%"}},e.cover?s.createElement("img",{src:e.cover,alt:e.title,"data-aspect":e.properties.aspect}):s.createElement("div",{className:"nocover"},s.createElement("div",{className:"bg"}),s.createElement("div",{className:"textCover"},e.height>100?s.createElement(s.Fragment,null,s.createElement("div",{className:"title",style:{fontSize:t+"px"}},e.title),s.createElement("div",{className:"author",style:{fontSize:.7*t+"px"}},e.author)):null)))}}class y extends n.exports.Component{constructor(e){super(e),this.state={items:e.items,itemHeight:200,width:100,height:0,padding:10,itemMargin:10,rowCount:1/0,sortKey:"term_popular_count",rowRatios:null,scrollTo:null,showHiradumi:!0}}componentDidMount(){document.body.clientWidth>767?this.setState({rowRatios:[1,.9,.8,.7]}):this.setState({rowRatios:[.97,.75,.65,.55]}),this.setState({width:window.innerWidth,height:window.innerHeight});const e=setInterval((()=>{this.settingUI&&(this.setState({width:window.innerWidth,height:window.innerHeight-this.settingUI.clientHeight}),clearInterval(e))}),100);if(window.addEventListener("resize",(()=>{this.setState({width:window.innerWidth,height:window.innerHeight-this.settingUI.clientHeight})})),location.hash){const e=location.hash.substr(1);this.setState({scrollTo:{key:"isbn",value:e}})}}onChange(e){this.setState({showHiradumi:!1}),this.setState(e),setTimeout((()=>{this.setState({showHiradumi:!0})}),100)}render(){return this.state.items?s.createElement("div",null,this.state.rowRatios?s.createElement(s.Fragment,null,s.createElement("div",{ref:e=>this.settingUI=e},s.createElement(u,{itemHeight:this.state.itemHeight,width:this.state.width,padding:this.state.padding,itemMargin:this.state.itemMargin,rowCount:this.state.rowCount,rowRatios:this.state.rowRatios,sortKey:this.state.sortKey,onChange:this.onChange.bind(this)})),s.createElement("div",{style:{width:"100%",margin:"0 auto"}},this.state.showHiradumi?s.createElement(d,{width:this.state.width,height:this.state.height,items:this.state.items,padding:this.state.padding,itemHeight:this.state.itemHeight,itemMargin:this.state.itemMargin,rowCount:this.state.rowCount,rowRatios:this.state.rowRatios,itemComponent:g,className:"hiradumi",sortKey:this.state.sortKey,onScroll:e=>{},headerComponent:w,headerHeight:50,footerComponent:f,footerHeight:50,style:{},scrollTo:this.state.scrollTo}):null)):null):null}}const w=()=>s.createElement("header",null,"header"),f=()=>s.createElement("footer",null,"footer");fetch("https://bookdata-fair.calil.dev/all.json").then((e=>e.json())).then((e=>{l.render(s.createElement(s.StrictMode,null,s.createElement(y,{items:e})),document.getElementById("root"))}));
