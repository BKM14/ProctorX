"use client";

import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { submitCode } from '../actions';
import { Button } from '@/components/ui/button';
import SelectLanguage from '@/components/ui/select-language';
import { Loader2, TerminalIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Page() {

  const {data: session} = useSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

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
    <div className='flex'>
      <SelectLanguage languages={languages} setNewLanguage={setLanguage} setBoilerPlateCode={setBoilerPlateCode} boilerPlate={boilerPlate}/>
      <Button disabled={codeExecuting} className="bg-green-600 hover:bg-green-700 duration-350 p-3 cursor-pointer m-4 rounded-md w-1/12 font-bold" onClick={async () => {
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
    </div>
    
    <div className='grid grid-cols-2 mx-4 gap-x-3'>
      <Editor 
        height={"70vh"}
        value={code}
        theme="vs-dark"
        options={{
          fontSize: 16,
          lineHeight: 24,
          tabSize: 4,
          autoIndent: "full",
          minimap: {
            enabled: false
          }
        }}
        className='custom-monaco-border'
        language={language == "py" ? "python" : language}
        defaultLanguage='python'
        onChange={handleChange}
      />
      <div className=' rounded-[7px] border-1 bg-slate-900 text-white'>
        <div className='flex ml-2'>
          <TerminalIcon color='white' className='mt-1'/>
          <div className='text-md mx-2 mt-1'>Console</div>
          <div className='w-full border-b-1 border-l-1 border-gray-800'></div>
        </div>
        <div className='mt-4'>
            {result.map((output, index) => (
              <div key={index} className='mx-2 text-md'> {'> ' + output}</div>
            ))}
        </div>
      </div>
    </div>
  </>
}