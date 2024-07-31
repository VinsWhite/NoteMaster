'use client';

import React, { useState, useRef, useEffect } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import * as actions from '@/actions';
import { CiLogout } from "react-icons/ci";

interface DropdownMobileProps {
    image?: string | null;
}

// to do: when logging out view app logo

export default function DropdownMobile({ image }: DropdownMobileProps) {
    const [actionDropdown, setActionDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // gestione click esterni al dropwdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActionDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onClick={() => setActionDropdown(!actionDropdown)}
                className="flex items-center cursor-pointer"
            >
                {image ? (
                    <img
                        src={image}
                        alt="User Profile"
                        className="w-8 h-8 rounded-full border-[0.1em] border-black"
                    />
                ) : (
                    <IoPersonCircleOutline className="text-2xl" />
                )}
            </div>
            {actionDropdown && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <form action={actions.signOut} className="cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100 flex gap-2 items-center w-[10em]">
                        <CiLogout className="text-red-600" />
                        <button type="submit">Sign out</button>
                    </form>
                </div>
            )}
        </div>
    );
}
