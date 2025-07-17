import { useState } from 'react';
import Cidade from './Cidade.jsx';

function App() {
  const [cidade, setCidade] = useState('São Paulo'); // Estado inicial da cidade

  return (
    <div>
      <Cidade cidade={cidade} onCidadeChange={setCidade} />
    </div>
  );
}
export default App;
