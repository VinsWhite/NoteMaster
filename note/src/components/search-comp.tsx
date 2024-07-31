'use client';

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchComp() {

    const [search, setSearch] = useState<boolean>(false);

    return (
            <div className="relative">
                <CiSearch className="size-6 cursor-pointer" onClick={() => setSearch(!search)} />
                {search && (
                    <div className="absolute top-8 right-0 w-80">
                        <input 
                            type="search" 
                            className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Search notes..." 
                            required 
                        />
                    </div>
                )}
            </div>
    )
}