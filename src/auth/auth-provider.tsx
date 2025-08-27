'use client';

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
	id: string;
	email: string;
	name: string;
	avatar?: string;
}

interface AuthContextType {
	token: string | null;
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	logout: () => void;
	isLoading: boolean;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	 const [token, setToken] = useState<string | null>(null); 
	const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
	// Check for existing session on mount
	 useEffect(() => {
    const savedUser = localStorage.getItem("auth-user");
    const savedToken = localStorage.getItem("auth-token");
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
    setIsLoading(false);
  }, []);

	const login = async (email: string, password: string): Promise<boolean> => {
	
  setIsLoading(true);
  try {
    // 🔑 Call your real backend login API
    const res = await fetch("https://grimanisystems.salesleader.in/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

	


    const data = await res.json();
	if(data.ErrorCode && data.ErrorCode!==0){
    		throw new Error(data.errorMessage || "Login failed");
	}

    // Assuming your backend returns something like:
    // { user: { id, email, name, avatar }, token: "..." }
    const loggedInUser: User = {
	  id: '1',
      email: 'Mitali@gmail.com',
      name: 'Mitali',
      avatar: "/media/avatars/default.png",
    };

    // Save in state + localStorage
   setUser(loggedInUser);
      setToken(data.token);
    localStorage.setItem("auth-user", JSON.stringify(loggedInUser));
      localStorage.setItem("auth-token", data.token);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    setIsLoading(false);
  }
};


	const logout = () => {
		setUser(null);
    setToken(null);
    localStorage.removeItem("auth-user");
    localStorage.removeItem("auth-token");
    navigate("/auth/signin");
	};

	const isAuthenticated = !!token;

	return (
		<AuthContext.Provider
			value={{
				user,
				token,
				login,
				logout,
				isLoading,
				isAuthenticated,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
