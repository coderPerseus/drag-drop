import { type FC, memo } from "react";

const ImageRender: FC<{ item: Data }> = ({ item }) => {
  // 去除 item.css 中的 定位属性
  const { left, top, ...css } = item?.css ?? {};
  return (
    <div className="ImageRender" style={css}>
      <img
        alt={item.name ?? ""}
        src={item.data?.value ?? ""}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default memo(ImageRender);
