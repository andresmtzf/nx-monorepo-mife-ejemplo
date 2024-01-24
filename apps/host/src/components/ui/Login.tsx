import { useStore } from '@amf/store';
import { useState } from 'react';

export const Login = () => {
  const { setUsuario } = useStore();
  const [inputName, setInputName] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsuario(inputName);
  };

  return (
    <div style={{ height: '100dvh', display: 'grid', placeContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div
          style={{ marginBottom: '6px', display: 'grid', gridColumn: 'auto' }}
        >
          <label htmlFor="text-input">Nombre</label>
          <input
            className="input"
            id="text-input"
            type="text"
            name="nombre"
            onChange={handleInput}
          />
        </div>
        <button
          style={{ width: '100%' }}
          type="submit" /* onClick={() => setUsuario('Andres')} */
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};
