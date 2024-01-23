import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  usuario: string | null;
  setUsuario: (usuario: string | null) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      usuario: null,
      setUsuario: (usuario) => set(() => ({ usuario })),
    }),
    { name: 'app-store' }
  )
);

export default useStore;
