import React from 'react'
import { Box, Button, Input, Flex } from '@chakra-ui/react'

const Cep = () => {
    const [formDataPrazo, setformDataPrazo] = React.useState({
        codProduto: '',
        cepOrigem: '',
        idLogistic: '',
        tokenApi: ''
    })

     const [formDataPreco, setformDataPreco] = React.useState({
        codProduto: '',
        cepOrigem: '',
        idLogistic: '',
        tokenApi: ''
    })

    function handleChengePreco(e: any) {
        const name = e.target.name
        const value = e.target.value

        setformDataPrazo({
            ...formDataPrazo,
            [name]: value
        })
    }

     function handleSubmitPreco(e: any) {
        e.preventDefault()
    }
     

    function handleChengePrazo(e: any) {
        const name = e.target.name
        const value = e.target.value

        setformDataPrazo({
            ...formDataPrazo,
            [name]: value
        })
    }

    function handleSubmitPrazo(e: any) {
        e.preventDefault()
    }

  return (
    <Flex>
      <Box w={'50%'} border={'solid'} borderWidth={'1px'} borderColor={'gray.300'} p={4} m={4}>
        <h1>Prazo</h1>
        <form onSubmit={handleSubmitPrazo}>
        <Box mb={4}>
            <label htmlFor="codProduto">Codigo Produto</label>
            <Input borderColor={'black'} name='codProduto' value={formDataPrazo.codProduto} onChange={handleChengePrazo}/>
        </Box>
        <Box mb={4}>
            <label htmlFor="CepOrigem">Cep Origem</label>
            <Input borderColor={'black'} name='cepOrigem' value={formDataPrazo.cepOrigem} onChange={handleChengePrazo}/>
        </Box>
        <Box mb={4}>
            <label htmlFor="IdLogistic">Id Logistic</label>
            <Input borderColor={'black'} name='idLogistic' value={formDataPrazo.idLogistic} onChange={handleChengePrazo}/>
        </Box>
        <Box mb={4}><label htmlFor="tokenapi">Token Api</label>
            <Input borderColor={'black'} name='tokenApi' value={formDataPrazo.tokenApi} placeholder='token' onChange={handleChengePrazo}/>
        </Box>
        <Button type='submit' colorScheme='blue' mt={'2'}>Enviar</Button>
      </form>
      </Box>
      <Box w={'50%'} border={'solid'} borderWidth={'1px'} borderColor={'gray.300'} p={4} m={4}>
        <h1>Preco</h1>
        <form onSubmit={handleChengePreco}>
        <Box mb={4}>
            <label htmlFor="codProduto">Codigo Produto</label>
            <Input borderColor={'black'} name='codProduto' value={formDataPreco.codProduto} onChange={handleSubmitPreco}/>
        </Box>
        <Box mb={4}>
            <label htmlFor="CepOrigem">Cep Origem</label>
            <Input borderColor={'black'} name='cepOrigem' value={formDataPreco.cepOrigem} onChange={handleSubmitPreco}/>
        </Box>
        <Box mb={4}>
            <label htmlFor="IdLogistic">Id Logistic</label>
            <Input borderColor={'black'} name='idLogistic' value={formDataPreco.idLogistic} onChange={handleSubmitPreco}/>
        </Box>
        <p><label htmlFor="tokenapi">Token Api</label>
            <Input borderColor={'black'} name='tokenApi' value={formDataPreco.tokenApi} placeholder='token' onChange={handleSubmitPreco}/>
        </p>
        <Button type='submit' colorScheme='blue' mt={'2'}>Enviar</Button>
      </form>
      </Box>
    </Flex>
  )
}

export default Cep
