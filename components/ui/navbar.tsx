"use client";

import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"

export default function NavBar() {

    const handleLogout = () => {
        console.log("Logged out successfully");
    }

    return (
        <div className="flex justify-between bg-slate-100">
            <div className="text-4xl font-bold ml-4 my-4">ProctorX</div>
            <div className="mr-4 my-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="border-4 p-4 border-black">
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleLogout}>
                        <LogOut />
                        <span>Log out</span>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}