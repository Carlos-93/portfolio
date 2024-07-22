import Sidebar from "../components/Sidebar"
import Home from "../components/Home"

export default function Portfolio() {
    return (
        <div className="min-h-screen flex bg-gray-900">
            <Sidebar />
            <Home />
        </div>
    )
}