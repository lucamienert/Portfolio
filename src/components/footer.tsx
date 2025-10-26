import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy {new Date().getFullYear()} Luca Mienert. {t('rights')}</p>
            <p className="text-gray-400 dark:text-gray-300">
              Luca Mienert
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/lucamienert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 dark:hover:text-indigo-200 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/lucamienert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 dark:hover:text-indigo-200 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}