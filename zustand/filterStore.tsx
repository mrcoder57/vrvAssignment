import { create } from 'zustand';
interface FilterStore {
    filters: string[];  // Array of filters
    search: string;     // Search string
    setFilters: (filters: string[]) => void; // Set new filters
    addFilter: (filter: string) => void;    // Add a new filter
    removeFilter: (filter: string) => void; // Remove a filter
    setSearch: (search: string) => void;    // Set search string
  }
  
  const useFilterStore = create<FilterStore>((set) => ({
    filters: [],     // Initial state is an empty array of filters
    search: '',      // Initial search string is empty
    setFilters: (filters) => set({ filters }), // Set filters
    addFilter: (filter) => set((state) => ({
      filters: [...state.filters, filter], // Add a new filter to the list
    })),
    removeFilter: (filter) => set((state) => ({
      filters: state.filters.filter(f => f !== filter), // Remove the filter from the list
    })),
    setSearch: (search) => set({ search }), // Set the search string
  }));
  
  export default useFilterStore;
  