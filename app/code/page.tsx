"use client";

import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { submitCode } from '../actions';
import { Button } from '@/components/ui/button';
import SelectLanguage from '@/components/ui/select-language';
import { Loader2 } from 'lucide-react';

export default function Page() {

  const handleChange = (value: string | undefined) => {
    setCode(value || "");
  }

  const [result, setResult] = useState<string[]>([]);

  const [language, setLanguage] = useState<"py" | "java" | "cpp" | "c">("py");

  const [codeExecuting, setCodeExecuting] = useState(false);

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
    
    <div className='grid grid-cols-2 mx-4'>
      <Editor 
        height={"70vh"}
        value={code}
        theme="vs-dark"
        options={{
          fontSize: 16,
          lineHeight: 24,
          tabSize: 4,
          autoIndent: "full",
        }}
        language={language == "py" ? "python" : language}
        defaultLanguage='python'
        onChange={handleChange}
      />

      <div className=' bg-gray-300'>
        <div className='font-bold text-4xl text-center'>Your output</div>
        {result.map((output, index) => (
          <div key={index}>{output}</div>
        ))}
      </div>
    </div>

    <Button className={`bg-green-600 hover:bg-green-700 duration-350 p-3 cursor-pointer m-4 rounded-md w-1/12 ${codeExecuting ? "disabled" : ""} font-bold`} onClick={async () => {
      setResult([]);
      setCodeExecuting(true);
      const result = await submitCode({
        lang: language,
        code: code
      })
      setResult(result.split("\n"));
      setCodeExecuting(false);
    }}>
      {codeExecuting ? <Loader2 className='animate-spin' /> : "Run"}
    </Button>

  </>
}