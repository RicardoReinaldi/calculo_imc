import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import tableIMC from './helpers/tableIMC';

const returnHeight = (valueHeight, setValueHeight) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-center bg-blue-400">Digite sua altura</label>
      <input
        className="border p-2 text-center"
        id="inputHeight"
        type="text"
        value={valueHeight}
        onChange={event => {
          setValueHeight(event.target.value);
        }}
        autoFocus
      />
    </div>
  );
};

const returnWeight = (valueWeight, setValueWeight) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-center bg-blue-400">Digite seu peso</label>
      <input
        className="border p-2 text-center"
        id="inputWeight"
        type="text"
        value={valueWeight}
        onChange={event => {
          setValueWeight(event.target.value);
        }}
      />
    </div>
  );
};

const calculateIMC = (valueWeight, valueHeight, setValueResult) => {
  const calculation = () => {
    setValueResult(valueWeight / (valueHeight * valueHeight));
  };
  return (
    <div className="flex flex-col my-4">
      <label className="text-center">.</label>
      <button className="border p-2 bg-green-400" onClick={calculation}>
        Calcular
      </button>
    </div>
  );
};

const resultIMC = setValueResult => {
  if (setValueResult > 0) {
    if (setValueResult < 17) {
      let element = document.getElementById('1');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('1');
      element.style.color = 'black';
    }

    if (setValueResult >= 17 && setValueResult <= 18.4) {
      let element = document.getElementById('2');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('2');
      element.style.color = 'black';
    }

    if (setValueResult >= 18.5 && setValueResult <= 24.9) {
      let element = document.getElementById('3');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('3');
      element.style.color = 'black';
    }

    if (setValueResult > 24.9) {
      let element = document.getElementById('4');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('4');
      element.style.color = 'black';
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-center bg-blue-400">Resultado</label>
      <p className="border p-2 text-center">{setValueResult.toFixed(2)}</p>
    </div>
  );
};

export default function App() {
  const [valueHeight, setValueHeight] = useState(0);
  const [valueWeight, setValueWeight] = useState(0);
  const [valueResult, setValueResult] = useState(0);

  return (
    <>
      <Header>Cálculo de IMC</Header>

      <main>
        <div className="grid grid-cols-4 gap-4 p-4">
          {returnHeight(valueHeight, setValueHeight)}
          {returnWeight(valueWeight, setValueWeight)}
          {calculateIMC(valueWeight, valueHeight, setValueResult)}
          {resultIMC(valueResult)}
        </div>
        <div className="w-full p-4">
          <h2 className="text-center text-sm my-2">
            VEJA A INTERPRETAÇÃO DO IMC
          </h2>
          {tableIMC()}
        </div>
      </main>

      <footer className="p-4">
        <div className="bg-yellow-300 mx-auto">
          <h3 className="text-center font-semibold text-xl">
            RICARDO REINALDI ANSELMO
          </h3>
        </div>
      </footer>
    </>
  );
}
