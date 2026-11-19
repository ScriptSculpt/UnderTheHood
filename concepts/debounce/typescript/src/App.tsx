import { useEffect, useState } from 'react'

const useDebounce = (text: string) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(text);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  return value;
}

function App() {
  const [input, setInput] = useState('');


  const text = useDebounce(input);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Value: {text}</p>
      <p>Input: {input}</p>
    </>
  )
}

export default App;
