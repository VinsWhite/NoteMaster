interface CategoryPageProps {
    params: {
        slug: string;
    };
}

export default function CategoryPage({ params: { slug } }: CategoryPageProps) {
    return (
        <div>
            This page contains <b>{slug}</b>
        </div>
    );
}