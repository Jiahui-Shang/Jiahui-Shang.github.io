> [!NOTE]
> HTML（超文本标记语言）的语法基于一系列的元素，这些元素告诉浏览器如何显示网页内容。以下是HTML语法的一些基本规则和组成部分：


## 元素和标签：

• HTML元素由标签包围，比如`<p>`、`<div>`、`<a>`等。

• 标签通常成对出现，一个开始标签（如`<p>`）和一个结束标签（如`</p>`）。

• 某些HTML元素是空的，意味着它们不包含任何内容，例如`<img>`和`<br>`，这些元素不需要结束标签。


## 属性：

• 属性提供了元素的额外信息，它们被包含在开始标签中。

• 属性总是以名称-值对的形式出现，比如`href="url"`或`src="image.jpg"`。

• 属性值应该被引号包围，可以是单引号或双引号。


## 元素嵌套：

• 元素可以嵌套在其他元素内部，形成父子关系。

• 嵌套必须正确闭合，以避免结构错误。


## 注释：

• HTML注释不会显示在浏览器中，用于向其他开发者解释代码或临时隐藏代码段。

• 注释以`<!--`开始，以`-->`结束。


## 文本内容：

• 元素之间的文本内容是元素的直接内容，会被浏览器显示。


## CSS和JavaScript：

• HTML可以通过`<link>`标签链接外部CSS文件，用于控制页面样式。

• HTML可以通过`<script>`标签嵌入或链接外部JavaScript文件，用于添加页面的交互功能。


## 文档结构：

• HTML文档通常以`<!DOCTYPE html>`开始，声明文档类型。

• `<html>`元素是文档的根元素。

• `<head>`元素包含了文档的元数据和链接外部资源。

• `<body>`元素包含了文档的可见内容。


## 语义化标签：

• HTML5引入了许多新的语义化标签，如`<header>`、`<footer>`、`<article>`等，这些标签有助于描述页面结构，对搜索引擎优化（SEO）和无障碍访问（Accessibility）非常重要。


## 字符实体：

• HTML使用字符实体来表示特殊字符，比如`&amp;`代表`&`符号，`&lt;`代表`<`符号。


## 表单和输入：

• HTML表单使用`<form>`元素，包含输入字段如`<input>`、`<textarea>`、`<select>`等。

---

# 一个简单的HTML语法示例：


```html
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first paragraph.</p>
    <a href="https://www.example.com">Visit Example.com</a>
    <img src="image.jpg" alt="Description of image">
    <form action="/submit-form" method="post">
        <input type="text" name="username" placeholder="Enter username">
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```


> [!TIP]
> 这个示例包含了HTML文档的基本结构和一些常见的元素。