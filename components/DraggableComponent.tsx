import { componentList } from "@/lib/component";
import { genUniqueId } from "@/lib/utils";
import { type FC, memo } from "react";
import DragWrapper from "./DragWrapper";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

/**
 * 左侧可拖拽组件列表
 * @constructor snailRun
 */
const DraggableComponent: FC = () => {
  const renderList = componentList.map((ele) => {
    return {
      ...ele,
      id: genUniqueId(),
    };
  });

  return (
    <div className="DraggableComponent flex flex-wrap  border-r-2 border-gray-300">
      {renderList.map((ele) => (
        <Tooltip key={ele.id}>
          <TooltipTrigger className=" w-1/2 p-2 flex justify-center items-center">
            <DragWrapper item={ele}>
              <img
                className="shadow-lg rounded"
                alt={ele.name ?? ""}
                src={"/screenShot/" + ele.screenShot?.src ?? ""}
                style={{
                  width: +(ele.screenShot?.css.width + "").replace("px", ""),
                  height: +(ele.screenShot?.css.height + "").replace("px", ""),
                }}
              />
            </DragWrapper>
          </TooltipTrigger>
          <TooltipContent>
            <p>{ele.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default memo(DraggableComponent);
