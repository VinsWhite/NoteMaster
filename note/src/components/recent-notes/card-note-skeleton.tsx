import React from 'react';

const CardNoteSkeleton: React.FC = () => {
    return (
        <div className="p-4 space-y-4">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="border rounded-lg p-3 bg-gray-200 h-[10em] shadow-lg animate-pulse">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="flex flex-col justify-end items-end text-gray-600 mt-2">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardNoteSkeleton;