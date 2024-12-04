import { create } from 'zustand';

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

const useAuthStore = create<AuthStore>((set) => ({
  user: null, // Default to null before checking localStorage
  login: (user: User) => {
    // Set the user in the store and localStorage
    set({ user });
    if (typeof window !== "undefined") {
      // Store the user object in localStorage
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
  logout: () => {
    // Clear the user from the store and localStorage
    set({ user: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem('user');
    }
  },
}));

// Retrieve user from localStorage when the component mounts
if (typeof window !== "undefined") {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    useAuthStore.setState({ user: JSON.parse(storedUser) });
  }
}

export default useAuthStore;

