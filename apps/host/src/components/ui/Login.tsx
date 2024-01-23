import { useStore } from '@amf/store';

export const Login = () => {
  const { setUsuario } = useStore();

  return (
    <div style={{ height: '100dvh', display: 'grid', placeContent: 'center' }}>
      <button onClick={() => setUsuario('Andres')}>Iniciar Sesion</button>
    </div>
  );
};
