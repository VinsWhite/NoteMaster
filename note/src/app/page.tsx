import CardNote from "@/components/recent-notes/card-note";
import HeaderRecentNotes from "@/components/recent-notes/header";
import Link from "next/link";
import { IoTrashBinOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div className="h-screen">
      <HeaderRecentNotes />
      <div className="grid lg:grid-col-5 md:grid-cols-3 sm:grid-cols-1">
        <CardNote notes={[]} />
      </div>
      <Link href='/bin'>
      <IoTrashBinOutline
        title="Recycle Bin" 
        className="cursor-pointer fixed bottom-2 right-1 text-secondary 
                bg-white rounded-full size-10 p-1 border-2 border-gray-700" 
      />
      </Link>
    </div>
  );
}
