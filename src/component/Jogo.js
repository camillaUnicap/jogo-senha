import React, { useState } from "react";

const palavras = ['salto']

for (let i = 0; i < palavras.length; i++) {
  const e = Math.floor(Math.random() * (i + 1));
  [palavras[i], palavras[e]] = [palavras[e], palavras[i]];
 }

 let valor = palavras[0];

function funCow(str) {
  let sumCow = 0;
  
  for(let a = 0; a < str.length; a++) {
        for(let b = 0; b <= valor.length; b++) {
          if(str[a] === valor[b]){
              sumCow += 1
          }
        }
  }
  return(
    sumCow
  )
}

function funBull(str) {
  let sumBull = 0;

  for(let a = 0; a < str.length; a++) {
        for(let b = a; b <= a; b++) {
          if(str[a] === valor[b]){
              sumBull += 1
          }
        }
  }
  return(
    sumBull
  )

}


function Jogo() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");

  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  

  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim === "" || textoTrim.length < 5) {
        return alert("Você deve informar uma palavra com 5 letras!");
      }

    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }

    if(textoTrim === palavras[0]) {
        alert("Parabéns, você acertou a senha!");
    }
  };
  return (
    <div className="App">
        <div>
        <h1>Jogo da Senha</h1>
            <p>Descubra a palavra secreta. </p>
            <p>DICA: Cow - quantidade de letra(s) na posição errada, <br/>Bull - quantidade de letra(s) na posição correta.</p>
            <p>Cow e Bull zerados - não tem essa letra na palavra secreta.</p>
            <label htmlFor="texto">Digite a palavra em minúsculo: </label>
        </div>
        
     <div id="container">
      <input
          id="texto"
          type="text"
          
          value={texto}
          onChange={handleChangeTexto}
        />{" "}
        
      <button onClick={handleClickBtInserir}>Inserir</button>
      </div> 
      <div>
      {textos.length > 0 && (
        <table>
          <thead>
          <tr>
            
            <th >Inserido</th>
            <th>Cow</th>
            <th>Bull</th>
            
          </tr>
          </thead>
          {textos.map((umTexto, index) => (
            <tr key={index}>
              <td>{umTexto}</td>
              <td>{funCow(umTexto) - funBull(umTexto)}</td>
              <td>{funBull(umTexto) }</td>
              
            </tr>
          ))}
          
        </table>
      )}</div>
    </div>
  );
}

export default Jogo;