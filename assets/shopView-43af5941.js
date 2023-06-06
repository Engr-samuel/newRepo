import{_ as m,H as p,f as k,I as b,h as _,r as l,o,c as d,b as c,a as e,i as x,F as g,e as C,j as h,t as f}from"./index-d5c7bfb3.js";const w={name:"shopView",components:{HeaderComp:p,footerComp:k,Icon:b},data(){return{products:[],selectedProduct:[]}},created(){_.get("https://fakestoreapi.com/products").then(a=>{this.products=a.data}).catch(a=>{console.log("Error fecthing products",a)})},methods:{addToCart(a){this.$emit("add-to-cart",a)},showProductItem(a){this.$router.push({name:"productItem",params:{id:a}})}}},y={class:"container my-2"},D=h('<h5 data-v-84679f48>Shop</h5><nav class="bg-light rounded p-1 px-4 border my-4" style="--bs-breadcrumb-divider:url(&quot;data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;8&#39; height=&#39;8&#39;%3E%3Cpath d=&#39;M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z&#39; fill=&#39;currentColor&#39;/%3E%3C/svg%3E&quot;);" aria-label="breadcrumb" data-v-84679f48><ol class="breadcrumb" data-v-84679f48><li class="breadcrumb-item" data-v-84679f48><a href="#" class="text-success" data-v-84679f48>Home</a></li><li class="breadcrumb-item active" aria-current="page" data-v-84679f48>Library</li></ol></nav>',2),I={class:"row product"},V=h('<div class="col-lg-3" data-v-84679f48><div class="filters shadow rounded p-3" data-v-84679f48><div class="category-filter mt-5" data-v-84679f48><div class="head" data-v-84679f48><h6 class="font-semibold text-success text-sm underline-secondary-100" data-v-84679f48>Categories</h6><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Milk</label></div><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Beverages </label></div><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Snacks </label></div><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Egg </label></div></div></div><div class="price-filter mt-5" data-v-84679f48><div class="head" data-v-84679f48><h6 data-v-84679f48>Price Filter</h6><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Default checkbox </label></div><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Default checkbox </label></div><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Default checkbox </label></div><div class="form-check" data-v-84679f48><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" data-v-84679f48><label class="form-check-label" for="flexCheckDefault" data-v-84679f48> Default checkbox </label></div></div></div></div></div>',1),E={class:"col-lg-9"},P={class:"widget-two bg-white container rounded my-4"},$={class:""},H={class:"row row-cols-2 row-cols-md-3 row-cols-lg-4 gx-3 mx-auto mx-sm-auto"},B={class:"head"},N={class:"card mx-auto position-relative",style:{width:"15rem"}},S=["onClick"],F=["src","onClick"],L={class:"card-body"},M=["onClick"],T={class:"card-text"};function q(a,j,z,A,n,s){const v=l("HeaderComp"),i=l("Icon"),u=l("footerComp");return o(),d("main",null,[c(v),e("div",y,[D,e("div",I,[V,e("div",E,[e("section",P,[e("div",$,[e("div",H,[e("div",B,[e("h4",null,[c(i,{icon:"ri:medal-line",color:"green",width:"40"}),x(" All Products")])]),(o(!0),d(g,null,C(n.products,t=>(o(),d("div",{class:"col mx-auto",key:t.id},[e("a",null,[e("div",N,[e("button",{class:"position-absolute top-0 end-0",onClick:r=>s.addToCart(t),"data-toggle":"modal","data-target":"#exampleModal"},[c(i,{icon:"ph:shopping-cart-light",class:"icon"})],8,S),e("img",{src:t.image,class:"card-img-top mx-auto pt-4",style:{width:"200px"},alt:"...",onClick:r=>s.showProductItem(t.id)},null,8,F),e("div",L,[e("h5",{class:"card-title",onClick:r=>s.showProductItem(t.id)}," $"+f(t.price),9,M),e("p",T,f(t.title),1)])])])]))),128))])])])])])]),c(u)])}const J=m(w,[["render",q],["__scopeId","data-v-84679f48"]]);export{J as default};
