"use client";

import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { submitCode } from '../actions';
import { Button } from '@/components/ui/button';
import SelectLanguage from '@/components/ui/select-language';

export default function Page() {


  const handleChange = (value: string | undefined) => {
    setCode(value || "");
  }

  const [language, setLanguage] = useState<"py" | "java" | "cpp" | "c">("py");

  const languages = [
    { value: "py", label: "Python" },
    { value: "java", label: "Java" },
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
  ];

  const boilerPlate = {
    'java' : "public class Main {\n" +
    "\tpublic static void main(String[] args) {\n" +
    "\t\t\n\t}\n" +
    "}",
    'c' : "#include <stdio.h>\n" +
    "\n" +
    "int main() {\n" + 
    "\t\n" + 
    "\treturn 0;\n" +
    "}",
    "py": "def main():\n" +
    "\t\n\n" +
    "if __name__ == '__main__':\n" +
    "\tmain()",
    "cpp": "#include <iostream>\n" +
    "\n" +
    "using namespace std;\n" +
    "\n" +
    "int main() {\n" +
    "\t\n" +
    "\treturn 0;\n" +
    "}"
  }

  const [code, setCode] = useState<string>(boilerPlate[language]);
  const setBoilerPlateCode = (newCode: string) => setCode(newCode);

  return <>
    <SelectLanguage languages={languages} setNewLanguage={setLanguage} setBoilerPlateCode={setBoilerPlateCode} boilerPlate={boilerPlate}/>
    <Editor 
      className='m-4'
      height={"70vh"} 
      value={code}
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