import{d as u,c as o,a as l,t as p,F as h,r as d,b as _,o as i,_ as g}from"./index-Ix10iPPi.js";const f={class:"container-fluid",ref:"gallery"},y={class:"row"},w=["src"],v=u({name:"ImageGallery",data(){return{images:[],photo_ids:[],show:!0}},async mounted(){this.showLoading(),await this.postRequest()},computed:{columns(){const s=[[],[],[]],t=[0,0,0];return this.photo_ids.forEach(e=>{this.images.push({src:"https://lh3.google.com/u/7/d/"+e.id,height:1})}),this.images.forEach(e=>{const a=t.reduce((n,r,c,m)=>r<m[n]?c:n,0);s[a].push(e),t[a]+=e.height}),this.show=!1,s}},methods:{postRequest(){this.show=!0,_.get("https://script.google.com/macros/s/AKfycbyrG720TP1U9rnoyny_5ZUJQXj8BwZ5G-pl0o4CHUS5i3XA5wEW1Kdn7Nnm5lNdqDAv/exec?id="+this.id).then(s=>{s=JSON.stringify(s.data),s=JSON.parse(s),this.photo_ids=s}).catch(s=>{s.request.status==503&&setTimeout(()=>{console.error(s)},.1)})},showLoading(){let s=this.$loading.show({container:this.$refs.gallery});setTimeout(()=>{s.hide()},3e3)}}}),N=u({...v,props:{title:{},id:{}},setup(s){return(t,e)=>(i(),o("div",null,[l("h1",null,p(t.title),1),l("div",f,[l("div",y,[(i(!0),o(h,null,d(t.columns,(a,n)=>(i(),o("div",{key:n,class:"column"},[(i(!0),o(h,null,d(a,(r,c)=>(i(),o("img",{key:c,src:r.src,class:"img-fluid"},null,8,w))),128))]))),128))])],512)]))}}),q=g(N,[["__scopeId","data-v-4df1a175"]]);export{q as default};