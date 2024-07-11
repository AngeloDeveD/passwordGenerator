import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(256);
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const handleGenerate = () => {
    const newPassword = generatePassword(length);
    setPassword(newPassword);
    setIsCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
  };

  return (
    <div className="App">
      <h1>Генератор паролей</h1>
      <label>
        Длина пароля:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="1"
          max="256"
        />
      </label>
      <button onClick={handleGenerate}>Сгенерировать пароль</button>
      {password && (
        <div className='App__downer'>
          <p>{password}</p>
          <button onClick={handleCopy}>Копировать</button>
          {isCopied && (<p>Пароль скопирован!</p>)}
        </div>
      )}
    </div>
  );
}

export default App;
