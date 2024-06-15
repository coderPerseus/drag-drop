"use client";
import { deepClone } from "@/lib/utils";
import {
  type FC,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Moveable from "react-moveable";
import { TemplateContext } from "./ContextProvider/TemplateContext";

const MoveableWrapper: FC<{
  boundsDom: React.ReactElement | null;
}> = ({ boundsDom }) => {
  const templateContext = useContext(TemplateContext);
  const { selectElement, setTemplate, template }: any = templateContext ?? {};
  const moveableRef = useRef<Moveable>(null);
  const [target, setTarget] = useState<React.ReactElement | null>(null);
  const moveAreaRef = useRef<any>(null);
  useEffect(() => {
    setTarget(document.querySelector(`[data-id="${selectElement}"]`) as any);
  }, [selectElement]);
  useEffect(() => {
    if (boundsDom) {
      moveAreaRef.current = boundsDom;
    }
  }, [boundsDom]);
  const updateItem = (id?: string, data?: Data) => {
    const cloneTemplate = deepClone(template);

    setTemplate?.({
      ...cloneTemplate,
      children: cloneTemplate?.children?.map((item: Data) => {
        if (item.id === id) {
          const i = {
            ...item,
            css: data?.css ?? item.css ?? {},
          };
          console.log(i, "iiii");
          // setSelectElement?.(i.id);
          return i;
        }
        return item;
      }),
    } as Data);
  };

  const selectElementData = useMemo(
    () =>
      template?.children?.filter((ele: Data) => ele.id === selectElement)?.[0],
    [selectElement, template]
  );
  console.log(selectElementData, "selectElementData");

  return selectElementData?.id ? (
    <Moveable
      ref={moveableRef}
      // @ts-ignore
      target={target}
      draggable={true}
      resizable={true}
      snappable={true}
      className="moveable-item"
      bounds={{
        left: 0,
        top: 0,
        right: moveAreaRef.current?.clientWidth || 0,
        bottom: moveAreaRef.current?.clientHeight || 0,
      }}
      onDrag={({ target, left, top }) => {
        updateItem(selectElementData?.id, {
          css: {
            ...selectElementData.css,
            left: left,
            top: top,
          },
        });
      }}
      onResize={({ target, width, height, delta, direction }) => {
        // 直接修改目标元素的样式
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        updateItem(selectElementData?.id, {
          css: {
            ...selectElementData.css,
            width,
            height,
          },
        });
      }}
      onRender={({ target }) => {
        target.style.border = "1px solid blue";
      }}
      onRenderEnd={({ target }) => {
        target.style.border = ""; // 清除边框样式
      }}
      snapThreshold={5}
      elementGuidelines={template?.children?.map((ele: Data) => ({
        element: document.querySelector(`[data-id="${ele.id}"]`),
      }))}
      snapCenter={true}
      snapElement={true}
      snapVertical={true}
      snapHorizontal={true}
    />
  ) : null;
};

export default MoveableWrapper;
