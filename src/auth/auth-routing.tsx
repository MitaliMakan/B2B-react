import { useRoutes } from "react-router-dom";
import { authRoutes } from "./auth-routes";

export function AuthRouting() {
  return useRoutes(authRoutes);
}
