import React from 'react';
import { useData } from '../Context/DataContext';
import VendaItem from '../Components/VendaItem';

const Vendas = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((m) => (
        <li key={m.id}>
          <VendaItem venda={m} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
