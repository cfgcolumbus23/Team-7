
const Tile = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="bg-gray-200 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
            <div className="w-72 h-72 bg-cover bg-center">
            <img src="/announcements_image.jpeg" alt="picture" className="h-2/3 w-full rounded-md"/>
            <p className="text-black mt-1">Click here for the announcements page.</p>
            </div>
        </div>
        <div className="bg-gray-200 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
            <div className="w-72 h-72 bg-cover bg-center">
            <img src="/chat.webp" alt="picture" className="h-2/3 w-full rounded-md"/>
            <p className="text-black mt-1">Click here to chat with a professional.</p>
            </div>
        </div>
        <div className="bg-gray-200 shadow-lg rounded-lg p-3 m-4 hover:bg-gray-300 hover:cursor-pointer">
            <div className="w-72 h-72 bg-cover bg-center">
            <img src="/job-opportunity.jpeg" alt="picture" className="h-2/3 w-full rounded-md"/>
            <p className="text-black mt-1">Click here for job oppurtunities.</p>
            </div>
        </div>
        </div>
    )
}
export default Tile
