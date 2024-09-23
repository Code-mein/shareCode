import { Editor } from '@monaco-editor/react';
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { useCapturedLines } from './store/useCapturedLines';
import {useCurrentMainCode} from './store/useCurrentMainCode';
import { ArrowBigLeft, Copy, CopyCheck, Download, DownloadCloud, DownloadIcon, FileDown, GitCommit, Highlighter, Info, LucideShare, MoveDown, PenBox, PenLine, Plus, ScreenShare, Share, Share2, ShareIcon, SwitchCamera, Upload } from 'lucide-react';
import { ShadowInnerIcon, Share1Icon, Share2Icon } from '@radix-ui/react-icons';

export default function EditorWindow() {
  const editorRef = useRef(null);
  const [editorValue, setEditorValue] = useState('');
  const addLine = useCapturedLines(state => state.addLine);
  const setCurrentModel = useCurrentMainCode(
    state => state.setCurrentModel
  )
  const currentModel = useCurrentMainCode(
    state => state.currentModel
  )
  const addValue = useCurrentMainCode(
    state => state.addValue
  )
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    setCurrentModel(editor.getModel());
  };
  const getSelectedText = () => {
    const editor = editorRef.current;
    if (editor) {
      const selection = editor.getSelection();
      if (selection.isEmpty()) return;
      const model = editor.getModel();
      const selectedText = model.getValueInRange(selection);
      addLine({line: selectedText, comment: 'no comment Yet'});
      }
  };
  const onChange = (value) => {
    const editor = editorRef.current;
    if(editor){
      setCurrentModel(editor.getModel());
    }

  }
  return (
    <div >
      <div  className='flex   pt-5'>
      <div className='px-4 pb-[6rem] flex justify-between flex-col'>
        <div className='flex flex-col gap-4'>
          
      <button onClick={getSelectedText}>
        <PenLine/>
      </button>
      <button>
        <Plus/>
      </button>
      <button>
        <Download/>
      </button>
      <button>
        <LucideShare/>
      </button>
      <button>
        <Copy/>
      </button>
      </div>
      <button className=''>
        <Info/>
      </button>
      </div>
      <div className='flex w-full gap-4'>
        <Editor
          height="100vh"
          width={"100%"}
          language="javascript"
          theme='vs-dark'
          onMount={onMount}
          value={currentModel?.getValue() ?? ""}
          onChange={onChange}
        />
      </div>
      </div>
     
    </div>
  );
}
