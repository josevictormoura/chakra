import React from 'react';

const Interface = () => {
  interface pessoa1 {
    nome: string;
    idade: number;
    profissao: string;
  }

  interface pessoa2 {
    faculdade: boolean;
    cor: string;
    praticaSport: boolean;
  }

  interface pessoa3 {
    profissao: string;
    maiorIdade: boolean;
  }

  interface cidadao
    extends pessoa1,
      Omit<pessoa2, 'faculdade' | 'maiorIdade'>,
      Omit<pessoa3, 'maiorIdade'> {}

  const cidadao: cidadao = {
    cor: 'pardo',
    idade: 22,
    nome: 'pedro',
    praticaSport: true,
    profissao: 'programador',
  };

  return (
    <div>
      <p>{cidadao.nome}</p>
      <p>{cidadao.idade}</p>
      <p>{cidadao.profissao}</p>
      <p>{cidadao.cor}</p>
      <p>{cidadao.praticaSport}</p>
    </div>
  );
};

export default Interface;
