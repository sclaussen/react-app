import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [alertVisibile, setAlertVisible] useState(false);

  const onClick = () => {
    setAlertVisibility(true);
  };

  return (
    <div>
      {alertVisible && <Alert>Emergency</Alert>}
      <Button color="primary" onClick={onClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
