import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface LanguageProps {
    value: string
    label: string
}

export default function SelectLanguage({languages, setNewLanguage, setBoilerPlateCode, boilerPlate}: {
    languages: LanguageProps[]
    setNewLanguage: (newLanguage: "java" | "c" | "cpp" | "py") => void
    setBoilerPlateCode: (lang: string) => void
    boilerPlate: {
        "py": string, "java": string, "c": string, "cpp": string
    }
    }) {

    return (
    <Select onValueChange={(newLanguage: string | undefined) => {
        setNewLanguage((newLanguage as "java" | "c" | "cpp" | "py") || "py")
        setBoilerPlateCode(boilerPlate[newLanguage as "java" | "c" | "cpp" | "py"])
    }}>
        <SelectTrigger className="w-1/8 m-4 text-white">
            <SelectValue placeholder="Python" />
        </SelectTrigger>
        <SelectContent className="bg-[#1A1C25] text-white">
            {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                    {language.label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
    )
}