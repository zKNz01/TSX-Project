import React from 'react';
import styles from 'App.css';
import Resumo from '../Pages/Resumo';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import { DataContextProvider } from '../Context/DataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendas from '../Pages/Vendas';
import Venda from '../Pages/Venda';

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="mb container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/Vendas" element={<Vendas />} />
              <Route path="/Vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
