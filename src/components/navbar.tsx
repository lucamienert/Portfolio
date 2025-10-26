'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { Sun, Moon, Globe } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('Navbar')
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 border-b border-gray-700 dark:border-gray-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-200">
          <Link href="/">Luca Mienert</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-200 hover:text-indigo-300 transition-colors">
            {t('home')}
          </Link>
          <Link href="#projects" className="text-gray-200 hover:text-indigo-300 transition-colors">
            {t('projects')}
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-200 hover:text-indigo-300"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-200 hover:text-indigo-300">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 dark:bg-gray-700 text-gray-200">
              <DropdownMenuItem asChild>
                <Link href="/en" className="w-full">
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/de" className="w-full">
                  Deutsch
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ru" className="w-full">
                  Русский
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}