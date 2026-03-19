import { useState } from "react";
import { api } from "../services/api";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  async function login(name: string, password: string) {
    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        name,
        password,
      });

      console.log("TOKEN:", response.data);

      return response.data;
    } catch (error) {
      console.log("Erro no login:", error);
    } finally {
      setLoading(false);
    }
  }

  return { login, loading };
}