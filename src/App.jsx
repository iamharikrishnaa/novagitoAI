import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-custom bg-Solitude">
      <Navbar />
      <Home />
      <Teacher />
      <Courses /> 
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
