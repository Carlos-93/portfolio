import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-900">
      <Sidebar />
      <Portfolio />
    </div>
  )
}