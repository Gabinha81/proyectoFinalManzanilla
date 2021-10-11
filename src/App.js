import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import {CustomProvider} from './Context/CartContext';
import {BrowserRouter} from "react-router-dom";
import './app.css';



function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
            
              <NavBar/>
              <Main/>
              <Footer/>
            
      </CustomProvider>
    </BrowserRouter>
    
  );

  
}

export default App;


