"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    DropdownTrigger,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu
} from "@nextui-org/react";
import Image from 'next/image'

import SoundCloudLogoBigWhite from "../images/powered_white.png"
import Link from "next/link";


function TopNavbar() {
    return (
        <Navbar className="bg-slate-950" isBlurred={true} isBordered={true}>
            <Link href={"/"}>
                <NavbarBrand className="grid grid-flow-col gap-2">
                    <Image
                        alt="SoundCloud logo"
                        src={SoundCloudLogoBigWhite} />
                    <p>SoundCloud evolved</p>
                </NavbarBrand>
            </Link>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href={"/library"}>
                        <Button variant="ghost" color="primary">Library</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/feed"}>
                        <Button variant="ghost" color="primary">Feed</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/login"}>
                        <Button variant="ghost" color="primary">Login</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Avatar
                        showFallback
                        size="md"
                        src="https://avatars.githubusercontent.com/u/2065881?v=4"
                    />
                </NavbarItem>

            </NavbarContent>

        </Navbar>
    )
}
export default TopNavbar;