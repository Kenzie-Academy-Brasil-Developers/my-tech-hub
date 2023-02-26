import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext.jsx";

export function ProtectedRoute() {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
}
