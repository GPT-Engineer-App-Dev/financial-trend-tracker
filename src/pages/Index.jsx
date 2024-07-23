import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Index;