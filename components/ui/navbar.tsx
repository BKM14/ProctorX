"use client";

import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {

    const {data: session} = useSession();
    let initials = "";

    if (!session || !session.user || !session.user.name) {
        initials = "U";
    } else {
        const nameArray = session.user.name?.split(" ");
        nameArray.forEach(name => {
            initials += name[0].toUpperCase();
        })
    }

    return (
        <div className="flex justify-between bg-slate-100">
            <div className="text-4xl font-bold ml-4 my-4">ProctorX</div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="border-4 p-4 border-black mr-16 my-4 cursor-pointer">
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mx-2">
                    <DropdownMenuItem className="cursor-pointer" onClick={async () => {
                        await signOut({ callbackUrl: 'http://localhost:3000/code' });
                    }}>
                    <LogOut />
                    <span>Log out</span>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}