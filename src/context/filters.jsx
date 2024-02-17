import { createContext, useState } from "react";

// Esto es lo que se consume
export const FiltersContext = createContext();

// Esto es lo que provee el acceso al contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    });

    return (
        <FiltersContext.Provider value={{
            filters, setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    );
};