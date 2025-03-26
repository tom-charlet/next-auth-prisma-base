'use client'

import { signIn } from "next-auth/react"

const Login = () => {
    return (
        <div>
            <button onClick={() => signIn("github", { redirectTo: "/dashboard" })}>Sign In with Github</button>
            <button onClick={() => signIn("goggle", { redirectTo: "/dashboard" })}>Sign In with Goggle</button>
        </div>
    )
}

export default Login