export const componentList: Data[] = [
  {
    id: "",
    name: "容器",
    type: "root", // 类型：根容器 ｜ 容器 ｜ 元素
    screenShot: {
      src: "container_1.png",
      css: {
        width: "80px",
        height: "80px",
      },
    }, // 组件快照
    css: {
      width: "100px",
      height: "100px",
      backgroundColor: "#ccc",
    }, // 样式配置
    data: {
      type: "container",
    },
  },
  {
    id: "",
    name: "描述",
    type: "element", // 类型：根容器 ｜ 容器 ｜ 元素
    css: {
      width: "100px",
      height: "100px",
      backgroundColor: "#ccc",
    }, // 样式配置
    screenShot: {
      src: "text_1.png",
      css: {
        width: "80px",
        height: "80px",
        borderRadius: "4px",
      },
    }, // 组件快照
    data: {
      type: "text",
      label: "描述", // 展示的 key
      value: "这是一个描述", // 值
    },
  },
  {
    id: "",
    name: "标题",
    type: "element", // 类型：根容器 ｜ 容器 ｜ 元素
    screenShot: {
      src: "text_1.png",
      css: {
        width: "80px",
        height: "80px",
      },
    }, // 组件快照
    data: {
      type: "text",
      label: "标题", // 展示的 key
      value: "这是一个标题", // 值
    },
    css: {
      width: "100px",
      height: "100px",
      backgroundColor: "#ccc",
    }, // 样式配置
  },
  {
    id: "",
    name: "校徽",
    type: "element", // 类型：根容器 ｜ 容器 ｜ 元素
    screenShot: {
      src: "school_logo_1.jpg",
      css: {
        width: "80px",
        height: "80px",
        borderRadius: "4px",
      },
    }, // 组件快照
    data: {
      type: "avatar",
      label: "校徽", // 展示的 key
      value:
        "https://blog-1304565468.cos.ap-shanghai.myqcloud.com/blog%2F311718435103_.pic.jpg",
    },
    css: {
      width: "100px",
      height: "100px",
    }, // 样式配置
  },
];
