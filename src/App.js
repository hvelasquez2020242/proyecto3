import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Productos></Productos>
      <Footer></Footer>
    </div>
  );
}

export default App;
