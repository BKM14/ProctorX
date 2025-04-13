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

export default function SelectLanguage({languages, setNewLanguage}: {
    languages: LanguageProps[]
    setNewLanguage: (newLanguage: string) => void}) {

    return (
    <Select onValueChange={(newLanguage: string | undefined) => {
        setNewLanguage(newLanguage || "py")
    }}>
        <SelectTrigger className="w-1/6 m-4">
            <SelectValue placeholder="Python" />
        </SelectTrigger>
        <SelectContent>
            {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                    {language.label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
    )
}