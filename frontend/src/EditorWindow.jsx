import { Editor } from "@monaco-editor/react";
import { useState, useRef, useEffect } from "react";
import { useCapturedLines } from "./store/useCapturedLines";
import { useCurrentMainCode } from "./store/useCurrentMainCode";
import {
  Copy,
  Download,
  Info,
  LucideShare,
  PenLine,
  Plus,
  RefreshCcw,
} from "lucide-react";
import { useGetSheetByURL } from "./query/sheet";
import { useMutateCode } from "./query/code";
import short from "short-uuid";

export default function EditorWindow() {

  const {sheet, isLoading, error, refetch} = useGetSheetByURL();
  const {mutation} = useMutateCode(); // Get the mutation object  

  const editorRef = useRef(null);
  const [editorValue, setEditorValue] = useState("");
  const addLine = useCapturedLines((state) => state.addLine);
  const setCurrentModel = useCurrentMainCode((state) => state.setCurrentModel);
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();

    
  };
  const getSelectedText = () => {
    const editor = editorRef.current;
    if (editor) {
      const selection = editor.getSelection();
      if (selection.isEmpty()) return;
      const model = editor.getModel();
      const selectedText = model.getValueInRange(selection);
      addLine({ line: selectedText, comment: "no comment Yet" });
    }
  };

  useEffect(() => {
    const handler = setTimeout( () => {
        const data = {
          id: sheet?.code?.id,
          updatedData:{
            code: editorValue
          }
        }
      if(data.id == undefined || editorValue == undefined) return
        mutation.mutate(data)
    }, 1000); 

    return () => {
      clearTimeout(handler);
    };
  }, [editorValue]);

  const onChange = (value) => {
    const editor = editorRef.current;
    if (editor) {
      setCurrentModel(editor.getModel());
      setEditorValue(value);
    }
  };
  return (
    <div>
      <div className="flex   pt-5">
        <div className="px-4 pb-[6rem] flex justify-between flex-col">
          <div className="flex flex-col gap-4">
            <button onClick={getSelectedText}>
              <PenLine />
            </button>
            <button onClick={refetch} >
              <RefreshCcw />
            </button>
            <a href={`http://localhost:5173/code/`+short.generate()} target="blank">
              <Plus />
            </a>
            {/* <button>
              <Download />
            </button>
            <button>
              <LucideShare />
            </button>
            <button>
              <Copy />
            </button> */}
          </div>
          <button className="">
            <Info />
          </button>
        </div>
        <div className="flex w-full gap-4">
          <Editor
            key="editor 1"
            height="100vh"
            width={"100%"}
            language="javascript"
            theme="vs-dark"
            onMount={onMount}
            value={sheet?.code?.code}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
