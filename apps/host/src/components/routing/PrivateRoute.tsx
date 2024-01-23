import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../ui/Header';
import { useStore } from '@amf/store';

export const PrivateRoute = () => {
  const { usuario } = useStore();

  if (!usuario) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <Header />
      <Suspense fallback={<i>Cargando...</i>}>
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
