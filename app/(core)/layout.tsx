import Navbar from "@/components/layout/Navbar";
import LeftNavbar from "@/components/layout/LeftNavbar";

export default async function CoreGroupLayout({children}: {children: React.ReactNode}) {
    return(
        <>
            <Navbar/>
            <div>
                <LeftNavbar/>
            </div>
            {children}
        </>
    )
}