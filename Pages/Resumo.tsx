import React from 'react';
import { useData } from '../Context/DataContext';
import GraficoVendas from '../Components/GraficoVendas';

const styleData: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'var(--color-02)',
  width: '20rem',
};

const Resumo = () => {
  const { data } = useData();

  if (data === null) return;
  return (
    <section>
      <div className="mb flex">
        <div style={styleData} className="mb box">
          <h1>Vendas</h1>
          <span>
            {data
              .filter((f) => f.status !== 'falha')
              .reduce((r, rr) => r + rr.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div style={styleData} className="mb box">
          <h1>Recebido</h1>
          <span>
            {data
              .filter((f) => f.status === 'pago')
              .reduce((r, rr) => r + rr.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div style={styleData} className="mb box">
          <h1>Processando</h1>
          <span>
            {data
              .filter((f) => f.status === 'processando')
              .reduce((r, rr) => r + rr.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="box">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

export default Resumo;
