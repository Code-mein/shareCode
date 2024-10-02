import { Editor } from '@monaco-editor/react'
import React, { useEffect, useRef, useState } from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { useCurrentMainCode } from '../store/useCurrentMainCode'
import { Copy, Delete, Edit, LucideSquareSplitHorizontal, Send, Trash, X } from 'lucide-react'
import { EnterIcon, ExitIcon } from '@radix-ui/react-icons'
export default function Captured({lines, catureNumber}) {
  // const navigator = window.navigator
  const editorref = useRef(null)
  const {currentModel,
    addValue} = useCurrentMainCode()
  const onMount = (editor) => {
    console.log('Editor 2 mounted')
    // editor.focus()
    editorref.current = editor
  }
  const [enableEdit, setEnableEdit] = React.useState(false)
  const saveEdit = () => {
      setEnableEdit(false)
      
   
  }

  const onChange = (value, e) => {
    console.log(value)
    console.log(e)
  }

  const copyCode = () => {
    const editor = editorref.current
    if (editor) {
      const model = editor.getModel()
      const value = model.getValue()
      navigator.clipboard.writeText(value)
    }
  }
  return (
    <div className='p-3 text-white flex flex-col gap-3'>
      <p>Capture {catureNumber}</p>
      <div className='flex justify-between w-full '>
        <div className='flex gap-2 flex-wrap '>
          
        <Button
          onClick={() =>{
            setEnableEdit(true)
          }
            }
        >
          <Edit width={14}/>
        </Button>
        <Button onClick={() => {
          addValue(lines.line,currentModel)
        }}>
          <EnterIcon/>
        </Button>

        <Button onClick={copyCode}>
          <Copy width={14}/>
        </Button>

        </div>
        <Button className="align-self-end bg-red-600 ">
          <Trash width={14}/>
        </Button>
      </div>
      <p className='text-xs text-[#252525] '>Highlited Code :</p>
      <Editor
      key="editor for captured code vanvas"
      theme='vs-dark'
      onChange={onChange}
      value={lines.line}
      onMount={onMount}
      options={{
        readOnly: !enableEdit,
        wordWrap: 'on',
        minimap: {
          enabled: false
        },
      }}
      height={"10vh"}
       />
       { enableEdit && <Button className="bg-green-600"
        onClick={saveEdit}
       >Save</Button>}
      <p className='text-xs text-[#252525] '>comment :</p>
      <div className='flex gap-2'>
        <Input placeholder="Add a comment"
          className="w-full bg-[#252525] text-white"
        />
        <button>
          <Send width={14}/>
        </button>
      </div>
      <div>
        <div>
          <p className='text-xs text-[#252525] '>Comment History :</p>
        </div>
        <div className='pt-3 text-sx'>
          {["dsadsadsa","Helloworld","JUst a trip"].map((comment,index) => (
            <div key={index} className='flex gap-2 border-t py-3 border-gray-500'>
              <div>
                C{index+1} -
              </div>
              <div className='flex-1  break-all'>
                sdsaeeeeeeeeeeeeeeeeeeeewerewrewrwrwerwerewccccccccccccccxvxcvcvrwerewrd
              </div>
              </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}
