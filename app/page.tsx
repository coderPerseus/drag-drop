"use client";

// import ComponentPanel from "@/components/ComponentPanel";
import ContextProvider from "@/components/ContextProvider";
import DraggableComponent from "@/components/DraggableComponent";
import PropertyEditor from "@/components/PropertyEditor";
import { useLocalStorageState } from "ahooks";
import dynamic from "next/dynamic";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Data } from "./type";

const ComponentPanel = dynamic(() => import("@/components/ComponentPanel"), {
  ssr: false,
});

export default function Home() {
  const [selectElement, setSelectElement] = useState<string | null | undefined>(
    null
  );
  const [template, setTemplate] = useLocalStorageState<Data | null>(
    "style-maker-resume",
    {
      defaultValue: null,
    }
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-4 max-w-7xl mx-auto my-0">
      <h1 className="text-4xl font-bold text-left w-full mt-12">拖拽 demo</h1>
      {/* 共用数据 */}
      <ContextProvider
        setSelectElement={setSelectElement}
        selectElement={selectElement}
        template={template}
        setTemplate={setTemplate}
      >
        <DndProvider backend={HTML5Backend}>
          <div className="flex w-full min-h-96">
            <div className="flex flex-col w-1/5">
              <DraggableComponent />
            </div>
            <div className="flex flex-col w-3/5">
              <ComponentPanel />
            </div>
            <div className="flex flex-col w-1/5">
              <PropertyEditor />
            </div>
          </div>
        </DndProvider>
      </ContextProvider>
    </main>
  );
}
