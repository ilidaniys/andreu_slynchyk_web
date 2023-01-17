import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth, { NextAuthOptions, User } from 'next-auth'


interface userDTO extends User {
    id: string,
    email: string,
    password: string,
}


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            type: 'credentials',
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: 'Credentials',
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {},

            authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const { userEmail, userPassword } = credentials as { userEmail: string, userPassword: string }
                const user1 = { id: '1', email: 'test@test.com', password: '123' }
                const users: userDTO[] = [
                    { id: '1', email: 'test@test.com', password: '123' },
                    { id: '2', email: 'test1@test.com', password: '1234' },
                ]
                const currentUser = users.find(user => {
                    if (user.email === userEmail && user.password === userPassword) {
                        return user
                    } else return null
                })

                if (currentUser != null) {
                    // Any object returned will be saved in `user` property of the JWT
                    console.log('confirm')
                    return currentUser
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    secret: 'test',
}

export default NextAuth(authOptions)
