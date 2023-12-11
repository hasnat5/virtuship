'use client'
import { Navbar as NavbarNextUI, Button, Link as LinkNextUI, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    return (
        <NavbarNextUI
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            className="fixed"
            isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
                <NavbarBrand as={Link} href={'/'} className='flex gap-x-1 items-center'>
                    <Image
                        src={'/assets/images/logo/virtuship-white.png'}
                        alt="Virtuship logo"
                        width={24}
                        height={24}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                    <h3 className="text-xl">Virtuship</h3>

                </NavbarBrand>
            </NavbarContent>


            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <Link href={'/'}>
                        <Image
                            src={'/assets/images/logo/virtuship-white.png'}
                            alt="Virtuship logo"
                            width={24}
                            height={24}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                        <p className="font-bold text-inherit">ACME</p>
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <LinkNextUI color="foreground" href="#">
                        Features
                    </LinkNextUI>
                </NavbarItem>
                <NavbarItem isActive>
                    <LinkNextUI href="#" aria-current="page" color="warning">
                        Customers
                    </LinkNextUI>
                </NavbarItem>
                <NavbarItem>
                    <LinkNextUI color="foreground" href="#">
                        Integrations
                    </LinkNextUI>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className="capitalize" color="secondary" href="/michelle" variant="flat">
                        <span className='text-transparent bg-clip-text bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end'>try demo</span>
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <Link href={'/'} onClick={() => setIsMenuOpen(false)} className={`${pathname === '/' && window.location.hash != '#create' ? 'text-secondary' : 'text-white'}`}>Home</Link>
                <Link href={'/#create'} onClick={() => setIsMenuOpen(false)} className={`${window.location.hash === '#create' ? 'text-secondary' : 'text-white'}`}>Create</Link>
                <Link href={'/about'} onClick={() => setIsMenuOpen(false)} className={`${pathname === '/about' ? 'text-secondary' : 'text-white'}`}>About us</Link>
            </NavbarMenu>
        </NavbarNextUI >
    )
}

export default Navbar