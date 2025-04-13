"use client";

import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { submitCode } from '../actions';
import { Button } from '@/components/ui/button';
import SelectLanguage from '@/components/ui/select-language';

export default function Page() {

  const [code, setCode] = useState<string>("");

  const handleChange = (value: string | undefined) => {
    setCode(value || "");
  }

  const [language, setLanguage] = useState("py")

  const languages = [
    { value: "py", label: "Python" },
    { value: "java", label: "Java" },
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
  ];
  
  return <>
    <SelectLanguage languages={languages} setNewLanguage={setLanguage}/>
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
      language={language}
      defaultLanguage='python'
      onChange={handleChange}
    />
    <Button className='p-3 cursor-pointer mx-4 rounded-md' onClick={() => {
      submitCode({
        lang: language,
        code: code
      })
    }}>
      Run Code
    </Button>
  </>
}