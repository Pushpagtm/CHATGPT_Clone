import './App.css';
import OptionSelection from './Components/OptionSelection';
import Translation from './Components/Translation';
import { arrayItems } from './AIOptions';
import { useState } from 'react';
function App() {
  
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const selectOption = (option) => {
    setOption(option);
  };
  const doStuff = async () => {
    let object = { ...option, prompt: input };

    // const response = await openai.createCompletion(object);

    // setResult(response.data.choices[0].text);
  };
  return (
    <div className='App'>
       {Object.values(option).length === 0 ? (
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
    ) : (
      <Translation doStuff={doStuff} setInput={setInput} result={result} />
    )}

    </div>
   
  );
}

export default App;
