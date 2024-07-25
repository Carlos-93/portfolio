import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Portfolio() {
    return (
        <div className="min-h-screen flex bg-gray-900">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Outlet />
            </div>
        </div>
    );
}