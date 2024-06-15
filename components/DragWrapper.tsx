"use client";

import { type FC, memo } from "react";
import { useDrag } from "react-dnd";

export const DragDropType = "COMPONENT";
/**
 * 可拖拽组件的包装组件
 * @constructor snailRun
 */
const DragWrapper: FC<{
  item: Data;
  children: React.ReactNode;
}> = ({ item, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragDropType,
    item: item,
    options: { dropEffect: "copy" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      key={item.id}
      className="DragWrapper"
      ref={drag as any}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {children}
    </div>
  );
};

export default memo(DragWrapper);
