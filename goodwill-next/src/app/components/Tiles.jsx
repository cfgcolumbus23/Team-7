
const Tile = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-300 shadow-lg rounded-lg p-3 m-4">
            <div className="w-72 h-72 bg-cover bg-center">
            <img src="/announcements.jpeg" alt="picture"></img>
            </div>
        </div>
        <div className="bg-gray-300 shadow-lg rounded-lg p-3 m-4">
            <div className="w-72 h-72 bg-cover bg-center">
            <img src="/chat.webp" alt="picture"></img>
            </div>
        </div>
        <div className="bg-gray-300 shadow-lg rounded-lg p-3 m-4">
            <div className="w-72 h-72 bg-cover bg-center">
            <img src="/job-opportunity.jpeg" alt="picture"></img>
            </div>
        </div>
        </div>
    )
}
export default Tile
