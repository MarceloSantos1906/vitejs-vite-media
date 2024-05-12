import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const soma = (valor: number) => {
    setCount(count + valor);
  };

  const media = () => {
    const result = (Number(numero1) + Number(numero2)) / 2;
    setResultado(result);
  };

  const changeNum1 = (event: any) => {
    setNumero1(event.target.value);
  };

  const changeNum2 = (event: any) => {
    setNumero2(event.target.value);
  };

  useEffect(() => {
    media();
  }, [numero1, numero2]);

  return (
    <>
      <h2>Média</h2>
      <div>
        <div>
          <input type="number" defaultValue={numero1} onChange={changeNum1} />
        </div>
        <div>
          <input type="number" defaultValue={numero1} onChange={changeNum2} />
        </div>
      </div>
      <div>
        <p id="valor_media">Média: {resultado}</p>
      </div>
    </>
  );
}

export default App;
