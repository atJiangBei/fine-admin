"use strict";(self["webpackChunkfine_admin"]=self["webpackChunkfine_admin"]||[]).push([[464],{9464:function(e,a,n){n.r(a),n.d(a,{default:function(){return w}});var l=n(3396),s=n(4870);function u(){return new Promise((e=>{e({code:0,data:{token:"test-token-asdasfdasfdgs"}})}))}var o=n(9845),t=n(6940);const r={class:"login-container"},d=(0,l._)("div",{class:"login-bg"},null,-1),i={class:"login-content"},m={class:"flex flex-jc-end"},c=(0,l.Uk)("重置"),f=(0,l.Uk)(" 登录 ");var p=(0,l.aZ)({setup(e){const a=(0,s.iH)(),n=(0,s.qj)({username:{required:!0,message:"用户名为必填"},password:{required:!0,message:"密码为必填"}}),p=(0,s.qj)({username:"admin",password:"123456"}),v=()=>{a.value.resetFields()},w=()=>{console.log(p),a.value.validate().then((()=>{u().then((e=>{console.log(e);const{data:{token:a}}=e;(0,o.o4)(a),t.Z.push("/")})).catch((e=>{console.log(e)}))}))};return(e,u)=>{const o=(0,l.up)("a-input"),t=(0,l.up)("a-form-item"),g=(0,l.up)("a-button"),k=(0,l.up)("a-form");return(0,l.wg)(),(0,l.iD)("div",r,[d,(0,l._)("div",i,[(0,l.Wm)(k,{rules:(0,s.SU)(n),model:(0,s.SU)(p),labelCol:{span:8},ref_key:"loginFormRef",ref:a},{default:(0,l.w5)((()=>[(0,l.Wm)(t,{name:"username",label:"用户名"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{value:(0,s.SU)(p).username,"onUpdate:value":u[0]||(u[0]=e=>(0,s.SU)(p).username=e)},null,8,["value"])])),_:1}),(0,l.Wm)(t,{name:"password",label:"密码"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{type:"password",value:(0,s.SU)(p).password,"onUpdate:value":u[1]||(u[1]=e=>(0,s.SU)(p).password=e)},null,8,["value"])])),_:1}),(0,l.Wm)(t,null,{default:(0,l.w5)((()=>[(0,l._)("div",m,[(0,l.Wm)(g,{onClick:v},{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(g,{type:"primary",onClick:w},{default:(0,l.w5)((()=>[f])),_:1})])])),_:1})])),_:1},8,["rules","model"])])])}}});const v=p;var w=v}}]);
//# sourceMappingURL=464.6c4594c7.js.map