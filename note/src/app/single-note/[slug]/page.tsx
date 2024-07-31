interface SingleNotePageProps {
    params: {
        slug: string;
    };
}

export default function SingleNotePage({params: {slug}}: SingleNotePageProps) {
    return (
        <div>
            <h2 className="capitalize">{slug}</h2>
            <p>description</p>
            <p className="text-gray-700 text-end pt-4">#tag</p>
        </div>
    )
}