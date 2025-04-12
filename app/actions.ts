"use server";

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

    const data = await response.json();
    console.log(data);
}