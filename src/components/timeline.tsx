import { useTranslations } from "next-intl"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const careerData = [
  {
    year: "August 2021 - June 2024",
    title: "Apprentice",
    description: "",
  },
  {
    year: "June 2024 - Present",
    title: "Software Developer",
    description: "",
  },
  {
    year: "October 2022 - Present",
    title: "Part time student of computer sience",
    description: "",
  }
]

export default function TimelineSection() {
  const t = useTranslations("TimelineSection")

  return (
    <section
      id="timeline"
      className="py-16 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-4xl sm:text-5xl font-extrabold text-center mb-12",
            "bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-100 dark:to-purple-100",
            "animate-fade-in-up"
          )}
        >
          {t("title")}
        </h2>
        {careerData.length === 0 ? (
          <div className="text-center text-gray-400 dark:text-gray-300">
            <p>{t("noEntries")}</p>
          </div>
        ) : (
          <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 ml-6">
            {careerData.map((entry, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <Card
                  className={cn(
                    "bg-gray-800 dark:bg-gray-700 border-gray-700 dark:border-gray-600",
                    "transition-all duration-300"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-indigo-200 dark:text-indigo-100">
                      {entry.year} | {entry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 dark:text-gray-200">
                      {entry.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
