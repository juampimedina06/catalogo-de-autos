import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { supabase } from "../services/supabase-config";
import { data } from "react-router-dom";

// Definimos el tipo del contexto
interface AuthContextType {
    user: string | null;
    logout: () => Promise<void>;
}

// Creamos el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  // Escuchar cambios en la sesión
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));

    return () => {
      listener.subscription.unsubscribe();
    };
   },[]);

  // Logout

    const logout = useCallback(async ()=>{
      await supabase.auth.signOut();
      setUser(null);
    }, [])

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
