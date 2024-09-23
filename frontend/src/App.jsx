
import React from 'react'
import EditorWindow from './EditorWindow'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import CapturedLines from './Group/CapturedLines'
import Header from './Group/Header'
import {Button} from "@/components/ui/button"
import { DoorClosed, LucideSunSnow, Minimize, Minimize2, Minus, ShieldClose, X } from 'lucide-react'

export default function App() {
  const [display, setDisplay] = React.useState("block")
  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        console.log("click");
        break;
      case 2:
        display === "hidden" ? setDisplay("block") : setDisplay("hidden")
        
        break;
      case 3:
        console.log("triple click");
        break;
    }
  };
  return (
    <div className=' h-[100vh]'>
      <div className='w-full py-4'>
        <Header/>
      </div>
     <ResizablePanelGroup direction="horizontal" 

     >
  <ResizablePanel className="h-full bg-[#09090B]"  title="dfdf">
    <EditorWindow/>
  </ResizablePanel>
  <ResizableHandle withHandle onClick={handleClick}/>
  <ResizablePanel className={display} title="Captured Lines"
  >
    <div className='flex justify-between px-5 flex-wrap items-center w-full'>
        <p className='text-center'>Captured Lines</p>
    </div>
    <div>
      <CapturedLines/>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>

    </div>
  )
}
