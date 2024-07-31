import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import SearchComp from "./search-comp";
import NotificationComp from "./notification-comp";
import * as actions from '@/actions'
import { auth } from '@/auth'
import DropdownMobile from './dropdownMB-comp'

export default async function NavBarComp() {
    const session = await auth();

    return (
        <div className="flex justify-between py-2 px-4 items-center">
            <div className="flex items-center gap-2">
                <Link href='/'><IoHomeOutline className="text-2xl" /></Link>
                {
                    session?.user ? 
                    <>
                        <div className="hidden sm:flex gap-2 items-center">
                            <DropdownMobile image={session.user.image} />
                            <p className="text-gray-600 drop-shadow-lg"> Welcome back 
                                <span className="font-semibold text-black"> {session.user.name}</span>!
                            </p>
                        </div>
                        <div className="flex sm:hidden gap-2 items-center">
                            <DropdownMobile image={session.user.image} />
                            <p className="font-semibold text-black"> {session.user.name}</p>
                        </div>
                    </>
                    : 
                    <form action={actions.signIn}>
                        <button className="bg-white border-2 border-black p-1 rounded-md" type='submit'>Sign in</button>
                    </form>
                }
            </div>
            <div className="flex gap-2">
                <SearchComp />
                <NotificationComp />
            </div>
        </div>
    );
}
