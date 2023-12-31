## 一、构建 DOM

- **浏览器渲染页面前需要先构建 DOM 树 和 CSSOM 树**
- 构建流程：字节(Bytes) → 字符(Characters) → 令牌(Tokens) → 节点(Nodes) → 对象模型(Dom)
- DOM 和 CSSOM 是相互独立的数据结构

## 二、渲染树构建

渲染树用于计算每个可见元素的几何信息，然后根据这些元素的几何信息绘制出屏幕上的实际像素

1. DOM 树和 CSSOM 树合并生成渲染树
2. 渲染树只包含渲染网页所需的节点(可见节点)

## 三、回流与重绘

回流：根据生成的渲染树，从渲染树的根节点开始进行遍历，计算每个节点的几何信息(在设备视口内的确切位置和大小)

重绘：经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素

![git命令](assets/git命令-1695996833342.jpg)

