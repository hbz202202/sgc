(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dac188b8"],{"1a7b":function(t,e,n){t.exports=n.p+"img/copys.fd67e332.svg"},"2b49":function(t,e,n){},"38db":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navPage iBg"},[a("navbar"),a("div",{staticClass:"row pt-5"},[a("div",{staticClass:"col-22 offset-1 radius bg-white shadow row p-4"},[a("div",{staticClass:"col-24 pb-3 bb-solid"},[t._v(t._s(t.$t("Consensus")))]),a("div",{staticClass:"col-24 left pb-1 pt-3 row align-center"},[a("div",{staticClass:"right left-tit"},[t._v(t._s(t.$t("MyAddress"))+"：")]),a("div",{staticClass:"flex-1 right-con",staticStyle:{overflow:"hidden"}},[t._v(" "+t._s(t.islice(t.myAddress))+" ")]),a("div",{staticClass:"center ml-2"},[a("img",{attrs:{src:n("1a7b")},on:{click:function(e){return t.copyShareLink(t.myAddress)}}})])]),a("div",{staticClass:"col-24 left row py-2 align-center"},[a("div",{staticClass:"right left-tit"},[t._v(t._s(t.$t("PromoteAddress"))+"：")]),a("div",{staticClass:"flex-1 right-con"},[t._v(" "+t._s(t.inviteCount)+" ")])]),a("div",{staticClass:"col-24 left row py-2 align-center"},[a("div",{staticClass:"right left-tit"},[t._v(t._s(t.$t("ValidPromotion"))+"：")]),a("div",{staticClass:"flex-1 right-con"},[t._v(" "+t._s(t.effectiveInviteCount)+" ")])]),a("div",{staticClass:"col-24 left row py-2 align-center"},[a("div",{staticClass:"right left-tit"},[t._v(t._s(t.$t("teamlp"))+"：")]),a("div",{staticClass:"flex-1 right-con"},[t._v(" "+t._s(t.tdLP.toFixed(3))+" LP ")])]),a("div",{staticClass:"col-24 left row py-2 align-center"},[a("div",{staticClass:"right left-tit"},[t._v(t._s(t.$t("Zone"))+"：")]),a("div",{staticClass:"flex-1 right-con"},[t._v(" "+t._s(t.bigLP.toFixed(3))+" LP ")])]),a("div",{staticClass:"col-24 left row py-2 align-center"},[a("div",{staticClass:"right left-tit"},[t._v(t._s(t.$t("Community"))+"：")]),a("div",{staticClass:"flex-1 right-con"},[t._v(" "+t._s(t.smallLP.toFixed(3))+" LP ")])])]),a("div",{staticClass:"col-22 offset-1 radius bg-white shadow row p-4 mt-3"},[a("div",{staticClass:"col-24 left py-1"},[t._v(t._s(t.$t("MyPromotion"))+"：")]),t._l(t.ztAddress,(function(e,n){return a("div",{key:n,staticClass:"col-24 left py-2"},[t._v(t._s(n+1)+" - "+t._s(e))])}))],2)])],1)},s=[],i=n("3835"),u=n("1da1"),o=(n("d3b7"),n("ac1f"),n("1276"),n("5319"),n("96cf"),n("fa7d")),r=n("c030"),p=n("780e"),c=n("d399"),d=n("403a"),l=n("9d8d"),y={components:{navbar:l["a"]},data:function(){return{myAddress:"",contractAddress:"0x51849c35ec82b07652E9720940715C5cd46cA22F",masTokenAddress:"0xDd64b20a34a08fc199801F8b43E0a4247088b124",uTokenAddress:"0xF00e73d5040eB143AAc23E5bE515F89073706f8E",decimals:18,config:d["a"],tdLP:0,teamLP:0,bigLP:0,bigLPAddress:"",smallLP:0,level:0,gasLimit:382040,inviteCount:0,effectiveInviteCount:0,inviteAddress:[],stakeRewards:[],ztAddress:[],min_gasprice:3}},mixins:[o["b"],o["c"],o["d"],o["e"],o["a"]],created:function(){this.init()},methods:{init:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,a,s,u,o,c,d,l,y,m,b,f,v,g,h,w,_,x,C,M,A,k,L;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=t.signer){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.provider.getGasPrice();case 4:return n=e.sent,n=r["a"].utils.formatUnits(n,"gwei"),n>t.min_gasprice&&(t.min_gasprice=n),a=new r["a"].Contract(t.contractAddress,p["a"],t.signer),t.contract=a,e.next=11,t.to(t.contract.inviteCount(t.myAddress));case 11:if(s=e.sent,u=Object(i["a"])(s,2),o=u[0],c=u[1],!t.doResponse(o,c)){e.next=29;break}t.inviteCount=c,d=0;case 18:if(!(d<c)){e.next=29;break}return e.next=21,t.to(t.contract.myInvite(t.myAddress,d));case 21:l=e.sent,y=Object(i["a"])(l,2),m=y[0],b=y[1],t.doResponse(m,b)&&t.ztAddress.push(t.islice(b));case 26:d++,e.next=18;break;case 29:return e.next=31,t.to(t.contract._teamLP(t.myAddress));case 31:return f=e.sent,v=Object(i["a"])(f,2),g=v[0],h=v[1],t.doResponse(g,h,"tdLP"),e.next=38,t.to(t.contract.getEffectiveInviteCount(t.myAddress));case 38:return w=e.sent,_=Object(i["a"])(w,2),x=_[0],C=_[1],t.doResponse(x,C)&&(t.effectiveInviteCount=C),e.next=45,t.to(t.contract.getBig(t.myAddress));case 45:M=e.sent,A=Object(i["a"])(M,2),k=A[0],L=A[1],t.doResponse(k,L)&&(k||(t.teamLP=t.fixNumber(L[0]),t.bigLP=t.fixNumber(L[1]),t.smallLP=t.teamLP-t.bigLP,t.bigLPAddress=L[2]));case 50:case"end":return e.stop()}}),e)})))()},queryTransation:function(t,e,n){var a=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.provider.waitForTransaction(t).then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(c["a"])(a.$t("blockSuccess"),e),console.log(e),n&&n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()},fixNumber:function(t){if(0==t)return 0;var e=r["a"].utils.hexValue(t);return this.hex2int(e)/r["a"].BigNumber.from(10).pow(this.decimals)},hex2int:function(t){t.indexOf("0x")>=0&&(t=t.substring("2"));for(var e,n=t.length,a=new Array(n),s=0;s<n;s++)e=t.charCodeAt(s),48<=e&&e<58?e-=48:e=(223&e)-65+10,a[s]=e;return a.reduce((function(t,e){return t=16*t+e,t}),0)},doResponse:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:18;if(null==t){if(n){var s=r["a"].utils.hexValue(e),i=this.hex2int(s)/r["a"].BigNumber.from(10).pow(a);this[n]=i}return!0}try{"UNPREDICTABLE_GAS_LIMIT"===t.code?Object(c["a"])(this.$t("Error")+t.error):"INSUFFICIENT_FUNDS"===t.code?Object(c["a"])(this.$t("InsufficientMinerFee")):4001===t.code||"cancelled"===t?Object(c["a"])(this.$t("Transactioncancelled")):t.data.message.indexOf("gas")>0?Object(c["a"])(this.$t("InsufficientMinerFee")):t.data.message.indexOf("RPC")>0?Object(c["a"])(this.$t("Anerroroccurredonthisnodepleaseswitchtoanothernode")):t.data.message.indexOf("reverted")>0&&Object(c["a"])(this.$t("Error")+t.data.message)}catch(u){}return!1},getEstimateGas:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var a,s,u,p,c,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.to(t());case 2:if(a=n.sent,s=Object(i["a"])(a,2),u=s[0],p=s[1],!e.doResponse(u,p)){n.next=13;break}return c=r["a"].utils.hexValue(p),d=e.hex2int(c),console.log("getEstimateGas========",d),n.abrupt("return",String(o["a"].mul(d,1.5)).split(".")[0]);case 13:return n.abrupt("return",0);case 14:case"end":return n.stop()}}),n)})))()},copyShareLink:function(t){var e=(window.location.href||"").split("#")[0],n=e.replace("?utm_source=tokenpocket","")+"#/home?address="+t;this.h5Copy(n)},changeEx:function(t){this.Expand=t},tabSelect:function(t){this.tabCur=t},modal:function(t){this.page1=t},hide:function(){this.page1="NaN"},lock:function(t){this.sel=t}}},m=y,b=(n("3e4f"),n("2877")),f=Object(b["a"])(m,a,s,!1,null,null,null);e["default"]=f.exports},"3e4f":function(t,e,n){"use strict";n("2b49")},"780e":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_upgradedAddress",type:"address"}],name:"deprecate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"deprecated",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_evilUser",type:"address"}],name:"addBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"upgradedAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maximumFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_maker",type:"address"}],name:"getBlackListStatus",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_subtractedValue",type:"uint256"}],name:"decreaseApproval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_value",type:"uint256"}],name:"calcFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"oldBalanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newBasisPoints",type:"uint256"},{name:"newMaxFee",type:"uint256"}],name:"setParams",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"issue",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_addedValue",type:"uint256"}],name:"increaseApproval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"redeem",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"basisPointsRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isBlackListed",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"MAX_UINT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_initialSupply",type:"uint256"},{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint8"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_blackListedUser",type:"address"},{indexed:!1,name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Issue",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Redeem",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"newAddress",type:"address"}],name:"Deprecate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"feeBasisPoints",type:"uint256"},{indexed:!1,name:"maxFee",type:"uint256"}],name:"Params",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}]}}]);