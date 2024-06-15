import { type FC, memo } from "react";
import type { TypeTemplateContext } from "./TemplateContext";
import { TemplateContext } from "./TemplateContext";

const ContextProvider: FC<
  TypeTemplateContext & {
    children: React.ReactNode;
  }
> = ({ children, template, setTemplate, selectElement, setSelectElement }) => {
  return (
    <TemplateContext.Provider
      value={{
        template,
        setTemplate,
        selectElement,
        setSelectElement,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export default memo(ContextProvider);
