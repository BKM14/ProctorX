import { getUserFromDB } from "@/app/actions"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Credentials({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {

            if (!credentials) return null;
            const user = await getUserFromDB({
              email: credentials?.email,
              password: credentials?.password
            })

            if (user) return user;
            return null;
          }
        }),
  ],
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string}) {
      return `${baseUrl}/code`
    }
  }
}

export default NextAuth(authOptions)