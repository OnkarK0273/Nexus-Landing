import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import { Box } from '@chakra-ui/react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Navbar2 from './components/common/Nav';

function App() {
  return (
    <Box backgroundColor={"black"}  minH={'100vh'} color={"white"} >
      {/* <Navbar/> */}
      <Navbar2/>
      <MainRoutes/>
      <Footer/>
    </Box  >
  );
}

export default App;
