"use server";

import { prisma } from "@/packages/prisma/prisma";
import bcrypt from "bcrypt";

interface submissionInterface {
    lang: string;
    code: string;
}

export async function submitCode(submission: submissionInterface) {
    console.log(submission);
    console.log(JSON.stringify(submission));
    const response = await fetch(`${process.env.BASE_API_URL}/submission`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
    })

    const data: {
        message: string;
        channelSubscribed: string;
        output: string;
    } = await response.json();
    return data.output;
}

export async function getUserFromDB({email, password}: {
    email: string,
    password: string
}) {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if (user && await bcrypt.compare(password, user.password)) return user;

    return null;
}