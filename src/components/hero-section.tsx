import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" 
import { useTranslations } from "next-intl"

export default function HeroSection() {
  const t = useTranslations('HeroSection')

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 dark:from-gray-800 dark:via-indigo-800 dark:to-purple-800",
        "text-white dark:text-gray-100"
      )}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 animate-pulse-slow bg-[url('/noise.png')] opacity-10 dark:opacity-5" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className={cn(
            "text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight",
            "bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-100 dark:via-purple-100 dark:to-pink-100",
            "animate-fade-in-up"
          )}
        >
          {t('title')}
        </h1>
        <p
          className={cn(
            "mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto",
            "text-gray-200 dark:text-gray-300",
            "animate-fade-in-up animation-delay-200"
          )}
        >
          {t('subtitle')}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className={cn(
              "bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white",
              "transition-all duration-300 ease-in-out transform hover:scale-105",
              "shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/50"
            )}
          >
            {t('viewWork')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={cn(
              "border-indigo-200 text-indigo-100 hover:bg-indigo-800 hover:text-white",
              "dark:border-indigo-100 dark:text-indigo-50 dark:hover:bg-indigo-700",
              "transition-all duration-300 ease-in-out transform hover:scale-105"
            )}
          >
            {t('contactMe')}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent dark:from-gray-800" />
    </section>
  )
}