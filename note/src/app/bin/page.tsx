// To do: implement a recycle bin system

export default function RecycleBinPage() {
    return (
        <div className="py-3 h-screen">
            <div className="flex justify-between items-center">
                <h2>Recycle bin</h2>
                <p className="text-gray-400 hidden md:block">Notes will be permanently deleted after 30 days</p>
            </div>
        </div>
    )
    
}