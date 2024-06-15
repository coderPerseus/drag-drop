import { createContext } from "react";

export interface TypeTemplateContext {
  template?: Data | null | undefined;
  setTemplate: (template: Data) => void;
  selectElement: string | null | undefined;
  setSelectElement?: (selectElement: string | null | undefined) => void;
}

export const TemplateContext = createContext<TypeTemplateContext | undefined>(
  undefined
);
