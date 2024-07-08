import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';
import { users } from './schema';
import { eq } from 'drizzle-orm';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "text", placeholder: "test@test.com" },
      password: { label: "Password", type: "password" }
    },
    // @ts-ignore
    async authorize(credentials: { email: string }) {
      // Add logic here to look up the user from the credentials supplied
      const user = await db.select({ image: users.profilePicture, name: users.firstName, email: users.email }).from(users).where(eq(users.email, credentials.email)).limit(1);

      if (user && user.length > 0) {
        // Any object returned will be saved in `user` property of the JWT
        return user[0];
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })]
});
