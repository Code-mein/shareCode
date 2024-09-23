import React, { useRef } from 'react';
import { useCapturedLines } from '../store/useCapturedLines';
import Captured from '../bits/Captured';

export default function CapturedLines() {
  const capturedLines = useCapturedLines(state => state.capturedLines);
  const containerRef = useRef(null); // Create a ref for the container


  return (
    <div className='overflow-auto h-[100vh] pb-20' ref={containerRef}>
      {capturedLines.map((lines, index) => (
        <div key={lines + index} className='rounded-md p-2 bg-[#09090B] m-2'>
          
          <Captured lines={lines} catureNumber={index+1} />
        </div>
      ))}
    </div>
  );
}
