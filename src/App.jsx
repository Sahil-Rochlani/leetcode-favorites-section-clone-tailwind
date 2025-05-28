import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-dark-layer-bg">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;