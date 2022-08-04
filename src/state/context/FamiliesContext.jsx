import { createContext, useReducer } from 'react';

export const FamiliesContext = createContext();

function reducer(families, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...families, payload];
    case 'update':
      return families.map((family) => (family.id === payload.id ? payload : family));
    case 'remove':
      return families.filter((family) => family.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FamiliesProvider({ children }) {
  const [families, dispatch] = useReducer(reducer, null);

  const value = { families, dispatch };

  return (
    <FamiliesContext.Provider value={value}>
      {children}
    </FamiliesContext.Provider>
  );
}
