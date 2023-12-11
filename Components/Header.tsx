import React from 'react';
import DataRange from './DateRange';
import Meses from './Meses';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [title, setTitle] = React.useState('Resumo');
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Resumo');
      document.title = 'Fintech | Resumo';
    } else if (location.pathname === '/vendas') {
      setTitle('Vendas');
      document.title = 'Fintech | Vendas';
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DataRange />
        <h1 className="box">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
