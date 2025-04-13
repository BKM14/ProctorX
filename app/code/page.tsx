"use client";

import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { submitCode } from '../actions';

export default function Page() {

  const [code, setCode] = useState<string>("");

  const handleChange = (value: string | undefined) => {
    setCode(value || "");
  }
  
  return <>
    <Editor 
      className='m-4'
      height={"70vh"} 
      defaultValue={code}
      theme="vs-dark"
      options={{
        fontSize: 16,
        lineHeight: 24,
        tabSize: 4,
        autoIndent: "full",
      }}
      language='python'
      onChange={handleChange}
    />
    <button className='p-3 bg-amber-400 cursor-pointer mx-4 rounded-md' onClick={() => {
      submitCode({
        lang: "py",
        code: code
      })
    }}>
      Run Code
    </button>
  </>
}