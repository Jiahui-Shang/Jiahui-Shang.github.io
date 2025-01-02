> [!NOTE]
> HTML（HyperText Markup Language，超文本标记语言）是一种用于创建网页的标准标记语言。一个标准的HTML文档包含一系列的元素，这些元素告诉浏览器如何展示内容。HTML文档的基本结构通常包括以下几个部分：


• 文档类型声明（DOCTYPE）：位于HTML文档的第一行，声明文档类型和HTML版本。对于HTML5，DOCTYPE声明非常简单：

```html
   <!DOCTYPE html>
   ```



• `<html>`元素：这是页面的根元素，所有的其他元素都包含在这个元素内。


• `<head>`元素：包含了所有的头部信息，比如文档的标题、样式表链接、脚本链接、元数据等，这些内容不直接显示在页面上，但对页面的展示和功能至关重要。

• `<title>`元素：定义文档的标题，显示在浏览器的标签页上。

• `<meta>`元素：提供关于HTML文档的元数据，比如字符集声明。

• `<link>`元素：用于链接外部资源，比如CSS样式表。

• `<script>`元素：用于嵌入或引用JavaScript代码。


• `<body>`元素：包含了可见的页面内容，比如文本、图片、视频、表格等。

一个简单的HTML文档结构示例如下：


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <!-- 更多内容 -->
</body>
</html>
```


这个结构是所有HTML页面的基础，可以根据需要添加更多的元素和属性来丰富页面内容和功能。