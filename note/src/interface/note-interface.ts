
export interface Note {
    id: number;
    description: string;
    tags: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null; 
    userId: string;
}