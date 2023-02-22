import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext.jsx";

export function ProtectedRoute() {
  const { user } = useContext(UserContext);

  return <>{user ? <Outlet /> : null}</>;
}
