import React from 'react';
import { Note } from '@/interface/note-interface';

interface CardNoteProps {
    notes: Note[];
}

const CardNote: React.FC<CardNoteProps> = ({ notes }) => {
    return (
        <div className="p-4 space-y-4">
            {notes.length === 0 ? (
                <p className="text-center text-gray-500">No notes available.</p>
            ) : (
                notes.map(note => (
                    <div key={note.id} className="border rounded-lg p-3 bg-gray-200 h-[10em] shadow-lg">
                        <h2 className="font-semibold">{note.description}</h2>
                        <p>{note.tags}</p>
                        <div className="flex flex-col justify-end items-end text-gray-600 mt-2">
                            <p className="bg-gray-300 px-1 rounded-sm">#{note.tags}</p>
                            <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
                            <p>Updated at: {new Date(note.updatedAt).toLocaleString()}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CardNote;
