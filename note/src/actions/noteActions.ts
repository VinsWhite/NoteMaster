'use server';

import { db } from '@/db'  
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from '@/auth'

export async function createNote({ title, description, tag }: { title: string; description: string; tag: string }) {
    const session = await auth();
    
    try {
        const userId = 'logged-in-user-id';  // to do: replace this with actual logic to get the logged-in user's ID

        const note = await db.note.create({
            data: {
                description,
                tags: tag,
                userId,
            },
        });

        revalidatePath('/');  
        redirect('/');
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error('Something went wrong...');
        }
    }
}

export async function getNotes() {
    const notes = await db.note.findMany({
        where: {
            deletedAt: null, // Optional: exclude deleted notes
        },
        orderBy: {
            createdAt: 'desc', // Order by creation date
        },
    });

    return notes.map(note => ({
        ...note,
        createdAt: note.createdAt.toISOString(),
        updatedAt: note.updatedAt.toISOString(),
        deletedAt: note.deletedAt ? note.deletedAt.toISOString() : null,
    }));
}

export async function getDeletedNotes() {
    const notes = await db.note.findMany({
        where: {
            deletedAt: {
                not: null, 
            },
        },
        orderBy: {
            createdAt: 'desc', 
        },
    });

    return notes.map(note => ({
        ...note,
        createdAt: note.createdAt.toISOString(),
        updatedAt: note.updatedAt.toISOString(),
        deletedAt: note.deletedAt ? note.deletedAt.toISOString() : null,
    }));
}