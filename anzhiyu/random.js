var posts=["2025/02/09/如何使用Hexo写文章？/","2025/02/10/Deekseek生成/","2025/02/11/用星空解锁地理坐标的开源魔法/","2025/02/15/地质笔记/","2025/02/15/怎么写文章/","2025/02/18/记录魔改/","2025/02/16/步入正轨/","2025/02/17/自用Alist美化/","2025/02/19/anzhiyu主题的一些用法/","2025/02/19/anzhiyu主题标签/","2025/02/22/学习笔记之Js-1/","2025/02/23/一篇随记/","2025/02/19/文章加密/","2025/03/02/2025-3-2/","2025/03/08/2025-3-8/","2025/03/08/hexo迁移电脑编辑方法/","2025/03/14/一次刷机的记录/","2025/03/16/一些地理笔记/","2025/03/22/无人机考证/","2025/03/28/节拍器/","2025/02/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };