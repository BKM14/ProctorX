"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    })
})

export default function LoginForm() {

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-full w-full">
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem className="m-4">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="jsmith@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem className="m-4">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="**********" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <Button type="submit" className="my-4 w-fit  bg-purple-800 hover:bg-purple-900">Submit</Button>
            </form>
        </Form>
    )

}