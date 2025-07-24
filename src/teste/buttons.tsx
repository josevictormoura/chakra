import React from 'react'

interface product {
    nome: string
    preco: number
    descricao: string
}

interface ButtonsComponenteProps {
    produto: product
    setProduto: React.Dispatch<React.SetStateAction<product>>
}

const ButtonsComponente: React.FC<ButtonsComponenteProps> = ({setProduto, produto}) => {

    function alterarNome() {
        setProduto(prev => ({...prev, nome: 'teclado'}))
    }
    function alterarPreco() {
        setProduto({...produto, preco: produto.preco + 10})
    }
    function alterarDescricao() {
        setProduto({...produto, descricao: 'modelo gamer'})
    }


  return (
    <div>
      <button onClick={alterarNome}>Alterar Nome</button>
      <button onClick={alterarPreco}>Alterar preco</button>
      <button onClick={alterarDescricao}>Alterar descicao</button>
    </div>
  )
}

export default ButtonsComponente
