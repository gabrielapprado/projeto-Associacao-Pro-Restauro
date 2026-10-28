import { createContext, useContext, useState, ReactNode } from "react";

type UserType = "guest" | "associado" | "administrador";

interface AuthContextType {
  userType: UserType;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>("guest");

  const login = (username: string, password: string): boolean => {
    if (username === "associado" && password === "1234") {
      setUserType("associado");
      return true;
    }
    if (username === "administrador" && password === "1234") {
      setUserType("administrador");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUserType("guest");
  };

  return (
    <AuthContext.Provider
      value={{
        userType,
        isAuthenticated: userType !== "guest",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
