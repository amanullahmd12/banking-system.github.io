// eslint-disable-next-line
import './App.css';
import Customers from './components/Customers';
import First from './components/First';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Error  from './components/Error';
import Transaction from './components/Transaction';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Money from './components/Money';
import WithdrawMoney from './components/WithdrawMoney';



function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Routes>
    <Route path="/" element={<First/>}/>
     <Route path="/customers" element={<Customers/>}/>
      <Route path="/transactions" element={<Transaction/>}/>
      <Route path="/credit" element={<Money/>}/>
      <Route path="/withdraw" element={<WithdrawMoney/>}/>

      {/* <Route path="*" element={}/> */}
     </Routes>
    <Footer/>
    
     </div>
     </Router>
  );
}

export default App;
