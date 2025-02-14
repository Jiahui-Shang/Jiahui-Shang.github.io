var posts=["2025/02/10/Deekseek生成/","2025/02/09/如何使用Hexo写文章？/","2025/02/08/hello-world/","2025/02/11/用星空解锁地理坐标的开源魔法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };