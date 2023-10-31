import { useState } from 'react';

function ComprobarMailBis() {
  const [errorMessage, setErrorMessage] = useState('');
  function evaluateEmail(event) {
    const enteredEmail = event.target.value;
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('Invalid email address entered!.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <input placeholder="Your email" type="email" />
      <button onClick={evaluateEmail}>Submit</button>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ComprobarMailBis;