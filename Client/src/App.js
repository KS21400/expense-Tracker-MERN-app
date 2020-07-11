import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Incomeexpenses from './components/Incomeexpenses';
import Transactionlist from './components/Transactionlist';
import Addtransaction  from './components/Addtransaction';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className = 'container'>
      <Balance/>
      <Incomeexpenses/>
      <Transactionlist/>
      <Addtransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
