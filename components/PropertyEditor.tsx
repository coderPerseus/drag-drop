import { cn } from "@/lib/utils";
import { type FC, memo, useContext } from "react";
import { TemplateContext } from "./ContextProvider/TemplateContext";
import { Slider } from "./ui/slider";

const PropertyEditor: FC = () => {
  const templateContext = useContext(TemplateContext);
  const { template, selectElement, setTemplate, setSelectElement } =
    templateContext ?? {};
  const selectElementData = template?.children?.filter(
    (ele: Data) => ele.id === selectElement
  )?.[0];

  return (
    <div className="PropertyEditor">
      <div className="flex w-full">
        <span>宽度：</span>
        <Slider
          max={700}
          step={1}
          className={cn("w-[80%]")}
          onValueChange={(value: number[]) => {
            setTemplate?.({
              ...template,
              children: template?.children?.map((ele: Data) => {
                if (ele.id === selectElement) {
                  return {
                    ...ele,
                    css: {
                      ...ele.css,
                      width: `${value[0]}px`,
                    },
                  };
                } else {
                  return ele;
                }
              }),
            });
          }}
          value={[
            +(
              selectElementData?.css?.width?.toString()?.replace("px", "") ?? 0
            ),
          ]}
        />
      </div>
      <div className="flex w-full">
        <span>高度：</span>
        <Slider
          max={1000}
          step={1}
          className={cn("w-[80%]")}
          onValueChange={(value: number[]) => {
            setTemplate?.({
              ...template,
              children: template?.children?.map((ele: Data) => {
                if (ele.id === selectElement) {
                  return {
                    ...ele,
                    css: {
                      ...ele.css,
                      height: `${value[0]}px`,
                    },
                  };
                } else {
                  return ele;
                }
              }),
            });
          }}
          value={[
            +(
              selectElementData?.css?.height?.toString()?.replace("px", "") ?? 0
            ),
          ]}
        />
      </div>
    </div>
  );
};

export default memo(PropertyEditor);
