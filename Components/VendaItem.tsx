import React from 'react';
import { Ivendas } from '../Context/DataContext';

const VendaItem = ({ venda }: { venda: Ivendas }) => {
  return (
    <div className="venda box">
      <a href="" style={{ fontFamily: 'monospace', fontSize: '1rem' }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default VendaItem;
