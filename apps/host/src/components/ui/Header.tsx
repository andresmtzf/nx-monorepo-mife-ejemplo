import { useStore } from '@amf/store';

export const Header = () => {
  const { setUsuario } = useStore();

  return (
    <div className="header">
      <div className="section">
        <h1>Header</h1>
      </div>
      <div className="section" style={{ textAlign: 'right' }}>
        <button onClick={() => setUsuario(null)}>Cerrar Sesión</button>
      </div>
    </div>
  );
};
