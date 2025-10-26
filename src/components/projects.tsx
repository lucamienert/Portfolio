"use client"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { githubUrl, repositories } from "@/lib/github"

export default function ProjectsSection() {
  const t = useTranslations("ProjectsSection")

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(githubUrl)

        if (!response.ok)
          throw new Error("Failed to fetch GitHub repositories")

        const data = await response.json()

        setProjects(data)
        setLoading(false)
      } catch (err: any) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section
      id="projects"
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

        {loading && (
          <div className="text-center text-gray-400 dark:text-gray-300">
            <p>{t("loading")}</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-400 dark:text-red-300">
            <p>{t("error", { message: error })}</p>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center text-gray-400 dark:text-gray-300">
            <p>{t("noProjects")}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <Card
              key={project.id}
              className={cn(
                "bg-gray-800 dark:bg-gray-700 border-gray-700 dark:border-gray-600",
                "hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50",
                "transition-all duration-300 transform hover:-translate-y-1"
              )}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-200 dark:text-indigo-100">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-gray-400 dark:text-gray-300">
                  {project.description || t("noProjects")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-300 dark:text-gray-200">
                  <span>
                    Language: {project.language || "N/A"}
                  </span>
                  <span>⭐ {project.stargazers_count}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={cn(
                    "w-full bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white",
                    "transition-colors duration-300"
                  )}
                >
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("viewOnGitHub")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!loading && !error && projects.length > 0 && (
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white",
                "transition-all duration-300 transform hover:scale-105"
              )}
            >
              <a
                href={repositories}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("showAll")}
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
