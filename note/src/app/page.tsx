import CardNote from "@/components/recent-notes/card-note";
import HeaderRecentNotes from "@/components/recent-notes/header";


export default function Home() {
  return (
    <div className="h-screen">
      <HeaderRecentNotes />
      <div className="grid lg:grid-col-5 md:grid-cols-3 sm:grid-cols-1">
        <CardNote notes={[]} />
      </div>
    </div>
  );
}
