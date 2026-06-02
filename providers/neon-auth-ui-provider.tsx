"use client";
import {createAuthClient} from "@neondatabase/auth/next";
import {ReactNode} from "react";
import {NeonAuthUIProvider} from "@neondatabase/auth-ui";

const authClient = createAuthClient();
export function NeonAuthProvider({children}: {children: ReactNode}) {
    return(
        <NeonAuthUIProvider authClient={authClient}>
            {children}
        </NeonAuthUIProvider>
    )
}