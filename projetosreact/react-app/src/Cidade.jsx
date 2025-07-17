import React from 'react';

function Cidade({ cidade, onCidadeChange }) {
  return (
    <div>
      <h1>Cidade: {cidade}</h1>
      <input
        type="text"
        value={cidade}
        onChange={(event) => onCidadeChange(event.target.value)}
        placeholder="Digite a cidade desejada"
      />
    </div>
  );
}

export default Cidade;