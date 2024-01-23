import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '@amf/store';

export const PublicRoute = () => {
  const { usuario } = useStore();

  if (usuario) {
    return <Navigate to="/home" />;
  }

  return (
    <Suspense fallback={<i>Cargando...</i>}>
      <Outlet />
    </Suspense>
  );
};
