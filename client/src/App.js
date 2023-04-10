import Background from "./components/Background";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";


function App() {
  return (
    <div className="min-h-screen bg-blue-200 relative">
      <div className="sticky top-0"><Header /></div>
      
      <Background />
      <Gallery/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
