'use client';

import { useState } from "react";
import { CiBellOn } from "react-icons/ci";

export default function NotificationComp() {

    const [search, setSearch] = useState<boolean>(false);

  return (
    <div className="relative">
        <CiBellOn className="size-6 cursor-pointer" onClick={() => setSearch(!search)} />
        {search && (
            <div className="absolute top-8 right-0 w-40 bg-gray-200 p-5 rounded-md">
                <p>No notifications</p>
            </div>
        )}
    </div>
  )
}
