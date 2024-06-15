// 一份数据的格式
interface Data {
  id?: string;
  name?: string;
  type?: "root" | "container" | "element"; // 类型：根容器 ｜ 容器 ｜ 元素
  screenShot?: {
    src: string;
    css: React.CSSProperties;
  }; // 组件快照
  css?: React.CSSProperties; // 样式配置
  data?: CommonObj; // 可以配置的数据值
  children?: Data[];
}
// 一个组件数据的配置
type CommonObj = Record<
  string,
  string | number | boolean | CommonObj | null | undefined
>;
