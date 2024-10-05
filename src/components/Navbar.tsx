import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Switch } from "@/components/ui/switch"


const Navbar = () => {
  return (
    <header className='py-4 bg-white text-gray-900 transition-colors duration-300 shadow-md'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
            {/* logo */}
            <div>
                <Link href="/" className='text-xl font-bold'>Daily Dose Of Internet</Link>
            </div>

            {/* desktop navigation */}
            <div>
            <NavigationMenu className='hidden lg:flex'>
                <NavigationMenuList className='flex space-x-8'>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='/news' className='hover: text-gray-600'>
                        News
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        
                        <NavigationMenuTrigger className='dark:bg-gray-900 dark:text-white'>
                            Services
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                            <NavigationMenuLink>
                             <ul className='text-gray-600 shadow-md rounded-md py-4 px-5 space-x-2'>
                                <li>
                                    <NavigationMenuLink href='/services/web-development' className='hover: text-gray-600'>Web Development</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href='/services/app' className='hover: text-gray-600'>Mobile Apps</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href='/services/seo' className='hover: text-gray-600'>SEO</NavigationMenuLink>
                                </li>
                             </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href='/contact' className='hover: text-gray-600'>
                        Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href='/about' className='hover: text-gray-600'>
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
        </nav>
    </header>
  )
}

export default Navbar