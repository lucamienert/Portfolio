import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'

const Navbar: React.FC = () => {
  return (
    <NavigationMenu className="p-4 shadow w-full">
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

}

export default Navbar