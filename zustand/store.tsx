import { create } from 'zustand'

interface Permission {
  delete: boolean;
  view: boolean;
  edit: boolean;
}

interface User {
  username: string;
  password: string;
  fullName: string;
  profilePic?: string;
  role: 'admin' | 'analyst' | 'inventory manager';
  permissions: Permission;
  status: 'active' | 'inactive';
}

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set:any) => ({
  user: null,
  login: (user:User) =>
    set(() => ({
      user: {
        ...user,
        permissions: {
          delete: user.role === 'admin',
          view: true, // All users have view permission
          edit: user.role === 'admin' || user.role === 'analyst',
        },
      },
    })),
  logout: () => set(() => ({ user: null })),
}));

export default useAuthStore;
