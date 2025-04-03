import { client } from "@/packages/redis";
import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "Hi from the backend"
    })
}

export async function POST(req: NextRequest) {
    const submission: {
        lang: string,
        code: string
    } = await req.json();

    await client.lPush("submissions", JSON.stringify(submission));
    console.log(JSON.stringify(req.body));
    return NextResponse.json({
        message: "Submitted successfully"
    })
}