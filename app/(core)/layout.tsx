import Navbar from "@/components/layout/Navbar";
import LeftNavbar from "@/components/layout/LeftNavbar";

export default async function CoreGroupLayout({children}: {children: React.ReactNode}) {
    return(
        <>
            <Navbar/>
            <div className="mx-auto flex max-w-300 gap-8 px-4 pt-2">
                <LeftNavbar/>
                <div className="min-w-0 flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}