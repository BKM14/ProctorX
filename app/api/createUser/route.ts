import { prisma } from "@/packages/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json()

    if (!email || !password) return NextResponse.json({
        message: "Email or Password is missing"
    })

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: await bcrypt.hash(password, 4)
        }
    })

    if (!newUser) return NextResponse.json({
        message: "Error creating new user"
    })

    return NextResponse.json(newUser);
}