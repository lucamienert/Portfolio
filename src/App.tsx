import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export const Navbar = () => (
  <NavigationMenu className="p-4 shadow w-full w-100">
    <NavigationMenuList className="flex gap-4">
      <NavigationMenuItem><a href="#hero">Home</a></NavigationMenuItem>
      <NavigationMenuItem><a href="#about">About</a></NavigationMenuItem>
      <NavigationMenuItem><a href="#projects">Projects</a></NavigationMenuItem>
      <NavigationMenuItem><a href="#contact">Contact</a></NavigationMenuItem>
    </NavigationMenuList>
    <Popover>
      <PopoverTrigger><Button variant="outline">More</Button></PopoverTrigger>
      <PopoverContent>Extra Links or Settings</PopoverContent>
    </Popover>
  </NavigationMenu>
)

export const Hero = () => (
  <section id="hero" className="text-center py-20">
    <h1 className="text-4xl font-bold">Hi, I'm Luca 👋</h1>
    <p className="mt-4 text-gray-600">I build modern web apps.</p>
    <Badge className="mt-2">Open to work</Badge>
    <div className="mt-6">
      <Button>See My Work</Button>
    </div>
  </section>
)

export const About = () => (
  <section id="about" className="py-16 max-w-3xl mx-auto">
    <Card>
      <CardContent className="p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Background</AccordionTrigger>
            <AccordionContent>
              I’m a full-stack developer with a love for modern tools and clean UI.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Tech Stack</AccordionTrigger>
            <AccordionContent>
              React, TypeScript, Node.js, PostgreSQL, Tailwind CSS, and more.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </section>
)

export const Projects = () => (
  <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
    <Tabs defaultValue="project1" className="w-full">
      <TabsList>
        <TabsTrigger value="project1">Project 1</TabsTrigger>
        <TabsTrigger value="project2">Project 2</TabsTrigger>
      </TabsList>
      <TabsContent value="project1">
        <Card className="mt-4">
          <CardContent className="p-4">Details about Project 1</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="project2">
        <Card className="mt-4">
          <CardContent className="p-4">Details about Project 2</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-6">More Info</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About My Projects</DialogTitle>
        </DialogHeader>
        Detailed overview of each project with tech used, challenges, and results.
      </DialogContent>
    </Dialog>
  </section>
)

export const Contact = () => (
  <section id="contact" className="py-16 max-w-xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
    <form className="space-y-4">
      <Input placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Your message" rows={4} />
      <Button type="submit">Send</Button>
    </form>
  </section>
)

export const Footer = () => (
  <footer className="text-center py-6 text-sm text-gray-500 border-t mt-12">
    <Separator className="mb-4" />
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><span>&copy; {new Date().getFullYear()} Alex Dev</span></TooltipTrigger>
        <TooltipContent>Built with React, Tailwind, shadcn/ui</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <Popover>
      <PopoverTrigger className="block mt-2 text-blue-600 underline">More Info</PopoverTrigger>
      <PopoverContent className="text-sm">This portfolio is open source. Star it on GitHub!</PopoverContent>
    </Popover>
  </footer>
)


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
