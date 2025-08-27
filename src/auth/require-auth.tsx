import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ScreenLoader } from "@/components/common/screen-loader";
import { useAuth } from "@/auth/auth-provider";

export const RequireAuth = () => {
  const { token, isLoading } = useAuth();
  const location = useLocation();

  // While loading from localStorage
  if (isLoading) {
    return <ScreenLoader />;
  }

  // Redirect if not authenticated
  if (!token) {
    return (
      <Navigate
        to={`/auth/signin?next=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  // Authenticated → render child routes
  return <Outlet />;
};
