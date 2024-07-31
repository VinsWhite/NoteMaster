'use client';

import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

// TO DO: form server component and smaller components

export default function HeaderRecentNotes() {
    const [modal, setModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tag, setTag] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, description, tag });
        setTitle('');
        setDescription('');
        setTag('');
        setModal(false);
    };

    return (
        <div className="py-3 flex justify-between items-center">
            <h2>Recent Notes</h2>
            <CiCirclePlus className="size-10 cursor-pointer" onClick={() => setModal(!modal)} />
        
            {modal && (
                <>
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded-md shadow-lg">
                            <h3 className="text-lg font-semibold mb-4">Add Note</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="resize-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="tag">Tag</label>
                                    <input
                                        type="text"
                                        id="tag"
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        placeholder="#work #school"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setModal(false)}
                                        className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 text-gray-700 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
