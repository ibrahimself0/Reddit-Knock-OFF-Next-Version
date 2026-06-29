import {AuthView} from "@neondatabase/auth/react";

export default async function AuthPage(
    {
        params
    }:{params:Promise<{pathname:string}>
    }) {
    const {pathname} = await params;
    return (
        <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/5 w-full max-w-md">
                <AuthView pathname = {pathname}  />
            </div>
        </div>
    );
}