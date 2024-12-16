<font color="#00bc12">截止到我写下这篇文章，我的Alist服务已经持续运行了`181`天。</font>
## 下面是我的Alist服务地址：
- [第一个，比较稳定](https://myalist.cpolar.top/)这个使用`cpolar内网穿透`，带宽很小，但可以保证稳定访问，穿透服务买了一年，和下面的到期时间差不多
- [第二个，带宽大点](https://alist.everett.fun)自己买的域名，大概到`2025.7月`到期，不能保证所有地区可以访问。

---

> **网站预览**
> ![Screenshot_2024-12-16-19-05-01-03_40deb401b9ffe8e1df2f1cc5ba480b12.jpg](https://github.com/user-attachments/assets/9d32afe1-abf3-410a-908c-330ea19193d5)

---


## 关于我的Alist美化方案

```自定义内容
<style>
#runtime_span {
  display: block;
  text-align: center;
}
</style>
<script type="text/javascript">
function show_runtime() {
  window.setTimeout("show_runtime()", 1000);
  X = new Date("6/15/2024 10:28:00");
  Y = new Date();
  T = (Y.getTime() - X.getTime());
  M = 24 * 60 * 60 * 1000;
  a = T / M;
  A = Math.floor(a);
  b = (a - A) * 24;
  B = Math.floor(b);
  c = (b - B) * 60;
  C = Math.floor((b - B) * 60);
  D = Math.floor((c - C) * 60);
  runtime_span.innerHTML = "本站已运行 " + A + "天" + B + "小时" + C + "分" + D + "秒";
  }
  show_runtime();
  </script>

  <span id="runtime_span"></span>

  <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

  <div style="text-align: center;">
  本站总访问量 <span id="busuanzi_value_site_pv"></span> 次  
  </div>

```

```自定义头部
/*白天背景图*/
.hope-ui-light {
  background-image: url("https://api.nguaduot.cn/glutton/today") !important;
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment:fixed;
  background-position-x:center;
}
/*夜间背景图*/
.hope-ui-dark {
  background-image: url("https://api.nguaduot.cn/glutton/today") !important;
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment:fixed;
  background-position-x:center;
}
/*主列表白天模式透明*/
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
  background-color: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(7px)!important;
}
/*主列表夜间模式透明*/
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {
  background-color:rgb(0 0 0 / 75%) !important;
  backdrop-filter: blur(5px)!important;
}
/*readme白天模式透明*/
.hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {
  background-color: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(7px)!important;
}
/*readme夜间模式透明*/
.hope-c-PJLV.hope-c-PJLV-iiuDLME-css {
  background-color:rgb(0 0 0 / 70%) !important;
  backdrop-filter: blur(7px)!important;
}

/*顶部右上角切换按钮透明*/
.hope-ui-light .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
  background-color: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(7px)!important;
}
.hope-ui-dark .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
  background-color:rgb(0 0 0 / 70%) !important;
  backdrop-filter: blur(7px)!important;
}

/*右下角侧边栏按钮透明 第一个是白天 第二个是夜间*/
.hope-ui-light .hope-c-PJLV-ijgzmFG-css {
  background-color: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(7px)!important;
}
.hope-ui-dark .hope-c-PJLV-ijgzmFG-css {
  background-color:rgb(0 0 0 / 70%) !important;
  backdrop-filter: blur(7px)!important;
}

/*白天模式代码块透明*/
.hope-ui-light pre {
  background-color: rgba(255, 255, 255, 0.4)!important;
  backdrop-filter: blur(10px)!important;
}
/*夜间模式代码块透明*/
.hope-ui-dark pre {
  background-color: rgba(255, 255, 255, 0)!important;
  backdrop-filter: blur(10px)!important;
}

/*左侧侧边栏目录*/
/*白天模式*/
.hope-ui-light .hope-c-PJLV-ieGWMbI-css {
  background: rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(7px)!important;
}
/*夜间模式*/
.hope-ui-dark .hope-c-PJLV-ieGWMbI-css {
  background-color:rgb(0 0 0 / 60%)!important;
  backdrop-filter: blur(7px)!important;
}
/* 返回顶部 */
.hope-c-PJLV-ihVEsOa-css {
  background: rgba(255, 255, 255, 0.5) !important;
}
.hope-ui-dark .hope-c-PJLV-ihVEsOa-css {
  background-color:rgb(0 0 0 / 70%)!important;
}

/*正常情况未使用吸附功能*/
/*导航条*/
/*白天模式*/
.hope-ui-light .hope-c-PJLV-idaeksS-css {
  background-color: rgba(255, 255, 255, 0.5)!important;
  border-radius: 10px !important;
  backdrop-filter: blur(7px)!important;
}
/*夜间模式*/
.hope-ui-dark .hope-c-PJLV-idaeksS-css {
  background-color:rgb(0 0 0 / 60%)!important;
  border-radius: 10px !important;
  backdrop-filter: blur(7px)!important;
}
/*顶栏*/
.hope-c-PJLV-ikaMhsQ-css {
    background: rgba(255, 255, 255, 0) !important;
}


/* 吸附到页面顶部 */
/*顶部*/
 .hope-c-PJLV-icWrYmg-css {
    background: rgba(255, 255, 255, 0) !important;
}
/*导航条*/
 .hope-c-PJLV-icKsjdm-css::after {
    background: rgba(255, 255, 255, 0) !important;
    
}
/*白天模式*/
 .hope-ui-light .hope-c-PJLV-icKsjdm-css {
    background-color: rgba(255, 255, 255, 0.5)!important;
    border-radius: 10px !important;
}
/*夜间模式*/
 .hope-ui-dark .hope-c-PJLV-icKsjdm-css {
    background-color:rgb(0 0 0 / 50%)!important;
    border-radius: 10px !important;
}

/*仅吸附导航栏*/
/*导航条*/
<style>
/*白天模式 搜索主体+毛玻璃*/
.hope-ui-light .hope-c-PJLV-iiBaxsN-css{
   background-color: rgba(255,255,255,0.2)!important;
   backdrop-filter: blur(20px)!important;
   border: 2px solid rgba(0, 119, 187, 0.4); /* 40%透明度的青蓝色边框，宽度为2px */
}

/*白天模式 搜索栏输入框+毛玻璃*/
.hope-ui-light .hope-c-kvTTWD-hYRNAb-variant-filled{
   background-color: rgba(255,255,255,0.6)!important;
   backdrop-filter: blur(10px)!important;
}

/*白天模式 搜索按钮+毛玻璃*/
.hope-ui-light .hope-c-PJLV-ikEIIxw-css{
   background-color: rgba(255,255,255,0.2)!important;
   backdrop-filter: blur(10px)!important;
   padding: var(--hope-space-1)!important;
    border: 2px solid rgba(0, 119, 187, 0.4); /* 40%透明度的青蓝色边框，宽度为2px */
}

/*夜间模式搜索主体+毛玻璃*/
.hope-ui-dark .hope-c-PJLV-iiBaxsN-css{
    background-color: rgb(0 0 0 / 10%)!important;
    backdrop-filter: blur(20px)!important;
    border: 2px solid rgba(0, 119, 187, 0.4); /* 40%透明度的青蓝色边框，宽度为2px */
}

/*夜间模式搜索栏+毛玻璃*/
.hope-ui-dark .hope-c-kvTTWD-hYRNAb-variant-filled{
    background-color: rgb(0 0 0 / 60%)!important;
    backdrop-filter: blur(10px)!important;
}

/*夜间模式 搜索按钮+毛玻璃*/
.hope-ui-dark .hope-c-PJLV-ikEIIxw-css{
    background-color: rgb(0 0 0 / 10%)!important;
    backdrop-filter: blur(10px)!important;
    padding: var(--hope-space-1)!important;
    border: 2px solid rgba(0, 119, 187, 0.4); /* 40%透明度的青蓝色边框，宽度为2px */
}
</style>
```