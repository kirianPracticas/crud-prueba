import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const [changePage, setChangePage] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsLogged = () => {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString); 
        const { rol } = userData; 
        if (rol !== undefined && rol !== null) { // Verifica si el rol está definido
          return true;
        } else {
          navigate("/");
          return false;
        }
      } else {
        navigate("/");
        return false;
      }
    };

    const accessGranted = checkIsLogged();
    setChangePage(accessGranted);
  }, [navigate]);

  if (changePage) {
    return <Outlet />;
  } else {
    return null;
  }
}
