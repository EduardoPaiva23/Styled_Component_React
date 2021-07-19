import React, {useState} from 'react';
import './App.css';
import S from './Styles';


function App(props) {

  const [ cep, setCep ] = useState({})
  const [buscaCep, setbuscaCep] = useState(0);

  function handleTextChange(e) {
    e.preventDefault()
    setbuscaCep(e.target.value);
    
    if (buscaCep.length >= 7) {
      document.getElementById("InsertCep").disabled = false
    } else {
      document.getElementById("InsertCep").disabled = true
    }
  }

  function handleSearch(){
    
    console.log("clicou")
    fetch(`https://viacep.com.br/ws/${buscaCep}/json/`)
      .then(res => res.json())
      .then(res => setCep(res));
  }

  return (
    <div>
        <div>
          <S.Titulo>Perquisa Cep</S.Titulo>
          <S.Divmae>
              <S.Input placeholder="Insira o cep" onChange={handleTextChange} type="text"/>
              <S.Button id="InsertCep"  onClick={handleSearch} >Pesquisar</S.Button>
              <S.Divdados>
                <div>
                  <S.P>Cidade</S.P>
                  <S.InputDivdados value={cep.localidade} readOnly/>
                  <S.P>Endereço</S.P>
                  <S.InputDivdados  value={cep.logradouro} readOnly/>
                  <S.P>Complemento</S.P>
                  <S.InputDivdados  value={cep.complemento} readOnly/>
                </div>
                <div>
                  <S.P>Bairro</S.P>
                  <S.InputMedium  value={cep.bairro} readOnly/>
                  <S.P>UF</S.P>
                  <S.InputSmall  value={cep.uf} readOnly/>
                </div>
              </S.Divdados>
            </S.Divmae>
        </div>
    </div>
  );
}
export default App;