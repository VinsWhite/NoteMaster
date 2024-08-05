// pages/index.tsx
import { GetServerSideProps } from 'next';
import { getNotes } from '@/actions/noteActions';
import CardNote from '@/components/recent-notes/card-note';
import { Note } from '@/interface/note-interface';

interface HomeProps {
    notes: Note[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const notes = await getNotes();

    return {
        props: {
            notes,
        },
    };
};

const Home: React.FC<HomeProps> = ({ notes }) => {
    return <CardNote notes={notes} />;
};

export default Home;
