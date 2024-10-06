"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Switch } from "@/components/ui/switch"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from 'next/navigation'

const Navbar = () => {


    const pathname = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

  return (
    <header className='py-4 bg-blue-800 text-white transition-colors duration-300 shadow-md'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
            {/* logo */}
            <div>
                <Link href="/" className='text-xl font-bold'>Daily Dose Of Internet</Link>
            </div>

            {/* desktop navigation */}
            <div>
            <NavigationMenu className='hidden lg:flex'>
                <NavigationMenuList className='flex space-x-7'>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='/news' className={`${pathname === '/news' ? 'text-green-500 font-semibold' : ''} hover: text-white`}>
                        News
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        
                        <NavigationMenuTrigger className='text-white bg-blue-800'>
                            Services
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                            <NavigationMenuLink>
                             <ul className='text-gray-900 shadow-md rounded-md py-5 px-6 space-x-1'>
                                <li>
                                    <NavigationMenuLink href='/services/web-development' className='hover: text-gray-600'>Web Development</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href='/services/app' className='hover: text-gray-600'>Mobile App</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href='/services/seo' className='hover: text-gray-600'>SEO</NavigationMenuLink>
                                </li>
                             </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href='/contact' className={`${pathname === '/contact' ? 'text-green-500 font-semibold' : ''} hover: text-white`}>
                        Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href='/about' className={`${pathname === '/about' ? 'text-green-500 font-semibold' : ''} hover: text-white`}>
                        About
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            

            </div>
            {/* color switcher and login buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
                <div className='flex items-center'>
                    <span className='mr-2'>Dark Mode</span>
                    <Switch />
                </div>
                <Button variant='default' className='px-6'>Login</Button>
            </div>

            {/* hamburger menu for mobile */}
            <div className='lg:hidden'>
                <Button onClick={toggleMobileMenu}>
                    {
                        isMobileMenuOpen ? (<AiOutlineClose size={20}/>) : (<AiOutlineMenu size={20}/>) 
                    }
                </Button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar


/*
    you need to use "use client" when 
    1. any type of button click events
    2. useState or useEffect
*/

// last : https://youtu.be/RJ0lkR3wX80?t=4046