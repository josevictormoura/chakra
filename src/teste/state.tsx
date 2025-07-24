import React from 'react';
import ButtonsComponente from './buttons';

interface product {
    nome: string
    preco: number
    descricao: string
}

const State = () => {
  const [produto, setProduto] = React.useState<product>({nome: 'mouse', preco: 20, descricao: 'bem grande'});

  React.useEffect(() => {
    console.log("produto", produto);
  },[produto])

  return (
    <div>
      <ButtonsComponente setProduto={setProduto} produto={produto}/>
      <div>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
};

export default State;
