import { type FC, memo } from "react";

const TextRender: FC<{ item: Data }> = ({ item }) => {
  return (
    <div
      className="TextRender"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {item.data?.value ?? ""}
    </div>
  );
};

export default memo(TextRender);
