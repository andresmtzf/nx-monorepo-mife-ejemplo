import { useEffect } from 'react';
import { useStore } from '@amf/store';

export const Logout = () => {
  const { setUsuario } = useStore();

  useEffect(() => setUsuario(null));

  return null;
};
