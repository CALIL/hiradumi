import{R as i,V as x,r as S,a as H}from"./vendor.997f8905.js";const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};R();const K=e=>{const t=e.item,n=(e.item.width-e.margin)/14,r=e.item.height/7;return i.createElement("a",{href:"https://calil.jp/book/"+e.item.isbn,target:"_blank",style:{display:"inline-block",width:"100%",height:"100%"}},t.cover?i.createElement("img",{src:t.cover,alt:t.title,"data-aspect":t.properties.aspect}):i.createElement("div",{className:"nocover"},i.createElement("div",{className:"bg"}),i.createElement("div",{className:"textCover"},t.height>100?i.createElement(i.Fragment,null,i.createElement("div",{className:"title",style:{fontSize:n+"px"}},t.title),i.createElement("div",{className:"author",style:{fontSize:n*.7+"px"}},t.author)):null)),e.sortKey&&t[e.sortKey]>0&&t.height>100?i.createElement("span",{className:"sortKey",style:{opacity:t[e.sortKey]/2+.1,fontSize:n+"px",width:r+"px",height:r+"px",right:r/4,bottom:r/4}},t[e.sortKey]):null)};function M(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const n=e.offsetWidth-t.offsetWidth;return e.parentNode&&e.parentNode.removeChild(e),n}const I=(e,t,n,r,l)=>{const o=[];let a=0;const g=r*n;return e.some(m=>{const v=m.properties&&m.properties.aspect?m.properties.aspect:.666666,w=Math.floor(g*v)+l;if(a+w>t)return!0;m.height=g,m.width=w,o.push(m),a+=w}),o},N=(e,t,n)=>{const r=t.reduce((a,g)=>a+g.width,0),l=r/(r+n);t.some(a=>{a.width=Math.floor(a.width*l),a.height=Math.floor(a.height*l)});const o=t[0].height/e[0].height;return e.some(a=>{a.width=Math.floor(a.width*o),a.height=Math.floor(a.height*o)}),t.concat(e)},T=(e,t)=>{t&&e.sort(function(l,o){return l[t]<o[t]?1:l[t]>o[t]?-1:0});const n={},r=Math.floor(e.length/2);return n[r]=e[0],Array.from({length:r}).forEach((l,o)=>{e[o*2+1]&&(n[r-1-o]=e[o*2+1]),e[o*2+2]&&(n[r+1+o]=e[o*2+2])}),Object.values(n)},k=e=>{let t=e.items.map(s=>Object.assign({},s)),n=[],r=null,l={key:null,value:null},o=[],a=[],g=[];e.headerComponent&&(a.push({type:"header",component:e.headerComponent}),o.push(e.headerHeight));let m=0,E=t.slice(m,m+100);const v=e.width-e.padding*2-M();for(let s=0;E.length>0&&a.length<=e.rowCount;s++){const c=s%e.rowRatios.length,d=e.rowRatios[c];let h=I(E,v,d,e.itemHeight,e.itemMargin);const y=h.reduce((u,b)=>u+b.width,0),p=v/y;p<2&&h.length>1?h.some(u=>{u.width=Math.floor(u.width*p),u.height=Math.floor(u.height*p)}):g.length>0&&(h=N(h,g,y),a.pop(),o.pop()),e.sortKey&&(h=T(h,e.sortKey)),a.push(h),g=h;let f=[];h.forEach(u=>{f.push(u.height+e.itemMargin)}),o.push(Math.max(...f)),m+=h.length,E=t.slice(m,m+100)}e.footerComponent&&(a.push({type:"footer",component:e.footerComponent}),o.push(e.footerHeight)),n=a;const w=(s,c)=>{let d;n.some((p,f)=>{if(typeof p.type=="undefined"&&p.filter(u=>u[s]===c).length>0)return d=f,!0});let h=e.padding;o.some((p,f)=>{if(f===d)return!0;h+=p});const y=setInterval(()=>{if(r.firstElementChild.scrollTop>=h)return clearTimeout(y);r.firstElementChild.scrollTo(0,h)},1);setTimeout(()=>clearTimeout(y),1e3)};if(e.scrollTo&&e.scrollTo.value!==l.value){const{key:s,value:c}=e.scrollTo;setTimeout(()=>{w(s,c)},100),l=JSON.parse(JSON.stringify(e.scrollTo))}let C=0;return o.some((s,c)=>{C+=s}),console.log("totalHeight:"+C),console.log("Rows.length:"+n.length),console.log("estimatedItemSize:"+C/n.length),i.createElement("div",{className:e.className?e.className:"hiradumi",ref:s=>r=s},i.createElement(x,{width:e.width,height:e.height,itemCount:n.length,itemSize:s=>o[s],estimatedItemSize:C/n.length,onScroll:s=>{if(!r)return;const c=r.firstElementChild;s.scrollTop=c.scrollTop,s.scrollBottom=c.scrollHeight-c.clientHeight-c.scrollTop,e.onScroll(s)},style:e.innerStyle},s=>{const c=n[s.index],d=JSON.parse(JSON.stringify(s.style));return d.display="flex",d.justifyContent="space-between",typeof c.type=="undefined"?(d.top=parseInt(s.style.top)+e.padding+"px",d.left=e.padding+"px",d.width=`calc(100% - ${e.padding*2}px)`,d.boxSizing="border-box",i.createElement("div",{className:"row",style:d,key:"row"},c.map((h,y)=>i.createElement("div",{key:"item"+y,className:"item",id:h.id,style:{display:"inline-block",width:h.width+"px",height:h.height+"px",margin:e.itemMargin/2+"px"}},(()=>e.itemComponent?i.createElement(e.itemComponent,{item:h,margin:e.itemMargin,sortKey:e.sortKey}):i.createElement(K,{item:h,margin:e.itemMargin,sortKey:e.sortKey}))())))):(d.top=parseInt(s.style.top)+e.padding+"px",d.marginTop=e.itemMargin/2,i.createElement("div",{className:"row",style:d},i.createElement(c.component,null)))}))};function A(e){var t=document.createElement("div"),n=document.createElement("pre");n.style.webkitUserSelect="auto",n.style.userSelect="auto",t.appendChild(n).textContent=e;var r=t.style;r.position="fixed",r.right="200%",document.body.appendChild(t),document.getSelection().selectAllChildren(t);var l=document.execCommand("copy");return document.body.removeChild(t),l}class z extends S.exports.Component{constructor(t){super(t)}setRowHeight(){let t=[];Array.prototype.slice.call(document.querySelectorAll(".rowHeight")).forEach(n=>{n.value!==""?t.push(parseInt(n.value)):t.push(parseInt(n.placeholder))}),this.props.onChange({rowHeightList:t})}copy(){let t=[];Array.prototype.slice.call(document.querySelectorAll(".rowHeight")).forEach(n=>{n.value!==""?t.push(n.value):t.push(parseFloat(n.placeholder))}),A(t.toString())}setSortKey(t){t.checked?this.props.onChange({sortKey:"term_popular_count"}):this.props.onChange({sortKey:null})}setRowFactors(){const t=[];Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).forEach(n=>{t.push(n.value)}),this.props.onChange({rowRatios:t})}render(){return i.createElement("div",{id:"settingsUI",style:{maxWidth:"1400px",margin:"0 auto",padding:"10px"}},i.createElement("div",null,i.createElement("label",{htmlFor:"itemHeight"},"itemHeight:"),i.createElement("input",{type:"range",id:"itemHeight",name:"width",min:"10",max:"600",value:this.props.itemHeight,onChange:t=>this.props.onChange({itemHeight:parseInt(t.target.value)})}),this.props.itemHeight,"\xA0",i.createElement("label",{htmlFor:"itemMargin"},"itemMargin:"),i.createElement("input",{type:"range",id:"itemMargin",name:"width",min:"0",max:"50",value:this.props.itemMargin,onChange:t=>this.props.onChange({itemMargin:parseInt(t.target.value)})}),this.props.itemMargin,"\xA0",i.createElement("label",{htmlFor:"rowCount"},"rowCount:"),i.createElement("input",{type:"range",id:"rowCount",name:"width",min:"1",max:"30",value:this.props.rowCount,onChange:t=>this.props.onChange({rowCount:parseInt(t.target.value)})}),this.props.rowCount,"\xA0\xA0",i.createElement("label",{htmlFor:"padding"},"padding:"),i.createElement("input",{type:"range",id:"padding",name:"width",min:"0",max:"50",value:this.props.padding,onChange:t=>this.props.onChange({padding:parseInt(t.target.value)})}),this.props.padding,"\xA0",i.createElement("label",{htmlFor:"sortKey"},"sortKey:"),i.createElement("input",{type:"checkbox",id:"sortKey",name:"sortKey",defaultChecked:!0,onChange:t=>this.setSortKey(t.target)})),i.createElement("br",null),i.createElement("div",null,i.createElement("label",null,"rowRatios:"),this.props.rowRatios&&this.props.rowRatios.map((t,n)=>i.createElement("input",{type:"number",placeholder:String(t),value:String(t),step:"0.1",className:"rowHeight",key:n,onChange:this.setRowFactors.bind(this),style:{width:"3rem"}})),i.createElement("button",{onClick:this.copy.bind(this)},"Copy")))}}const F=e=>{const t=e.item,n=(e.item.width-e.margin)/14,r=e.item.height/7;return i.createElement("a",{href:"https://calil.jp/book/"+e.item.isbn,target:"_blank",style:{display:"inline-block",width:"100%",height:"100%"}},t.cover?i.createElement("img",{src:t.cover,alt:t.title,"data-aspect":t.properties.aspect}):i.createElement("div",{className:"nocover"},i.createElement("div",{className:"bg"}),i.createElement("div",{className:"textCover"},t.height>100?i.createElement(i.Fragment,null,i.createElement("div",{className:"title",style:{fontSize:n+"px"}},t.title),i.createElement("div",{className:"author",style:{fontSize:n*.7+"px"}},t.author)):null)),e.sortKey&&t[e.sortKey]>0&&t.height>100?i.createElement("span",{className:"sortKey",style:{opacity:t[e.sortKey]/2+.1,fontSize:n+"px",width:r+"px",height:r+"px",right:r/4,bottom:r/4}},t[e.sortKey]):null)};class W extends S.exports.Component{constructor(t){super(t);this.state={items:t.items,itemHeight:200,width:100,height:0,padding:10,itemMargin:10,rowCount:1/0,sortKey:"term_popular_count",rowRatios:null,scrollTo:null,showHiradumi:!0}}componentDidMount(){document.body.clientWidth>767?this.setState({rowRatios:[1,.9,.8,.7]}):this.setState({rowRatios:[.97,.75,.65,.55]}),this.setState({width:window.innerWidth,height:window.innerHeight});const t=setInterval(()=>{this.settingUI&&(this.setState({width:window.innerWidth,height:window.innerHeight-this.settingUI.clientHeight}),clearInterval(t))},100);if(window.addEventListener("resize",()=>{this.setState({width:window.innerWidth,height:window.innerHeight-this.settingUI.clientHeight})}),location.hash){const n=location.hash.substr(1);this.setState({scrollTo:{key:"isbn",value:n}})}}onChange(t){"itemHeight"in t&&this.setState({showHiradumi:!1}),this.setState(t),"itemHeight"in t&&setTimeout(()=>{this.setState({showHiradumi:!0})},100)}render(){return this.state.items?i.createElement("div",null,this.state.rowRatios?i.createElement(i.Fragment,null,i.createElement("div",{ref:t=>this.settingUI=t},i.createElement(z,{itemHeight:this.state.itemHeight,width:this.state.width,padding:this.state.padding,itemMargin:this.state.itemMargin,rowCount:this.state.rowCount,rowRatios:this.state.rowRatios,sortKey:this.state.sortKey,onChange:this.onChange.bind(this)})),i.createElement("div",{style:{width:"100%",margin:"0 auto"}},this.state.showHiradumi?i.createElement(k,{width:this.state.width,height:this.state.height,items:this.state.items,padding:this.state.padding,itemHeight:this.state.itemHeight,itemMargin:this.state.itemMargin,rowCount:this.state.rowCount,rowRatios:this.state.rowRatios,itemComponent:F,className:"hiradumi",sortKey:this.state.sortKey,onScroll:t=>{},headerComponent:O,headerHeight:50,footerComponent:U,footerHeight:50,innerStyle:{},scrollTo:this.state.scrollTo}):null)):null):null}}const O=()=>i.createElement("header",null,"header"),U=()=>i.createElement("footer",null,"footer");fetch("https://bookdata-fair.calil.dev/all.json").then(e=>e.json()).then(e=>{H.render(i.createElement(i.StrictMode,null,i.createElement(W,{items:e})),document.getElementById("root"))});
