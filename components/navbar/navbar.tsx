import { redirect } from "next/navigation";
import ThemeToggle from "../theme-toggle";
import prismadb from "@/lib/prismadb";
import { MainNav } from "./main-nav";
const Navbar = async () => {

    return (
        <div className=" border-b">
            <div className="w-full mx-auto max-w-[1800px] px-4 md:px-12 flex justify-between h-16 items-center">
                <MainNav className="" />
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;