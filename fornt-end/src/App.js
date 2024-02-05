import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import { Box } from '@chakra-ui/react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Navbar2 from './components/common/Nav';
import { useRef } from 'react';
import Footer2 from './components/footer/Footer2';


function App() {
  const scrollRef = useRef(null)
  return (
    <Box backgroundColor={"black"}  minH={'100vh'} color={"white"}  >
      
      <Navbar2/>
      <Box ref={scrollRef}  overflow={'hidden'} >

      <MainRoutes/>
      
      <Footer2/>
      </Box>
      
    </Box  >
  );
}

export default App;
