import { useKeycloak } from "keycloak-react-web"
import { useEffect } from "react";
import { useKeycloakContext } from "../../context/KeycloakContext";

const SecureRoute = ({ component }) => {
  const { keycloak, initialized } = useKeycloak();
  const { setToken, withToken } = useKeycloakContext();

  useEffect(() => {
    const init = async () => {
      if (initialized && keycloak) {
        if (!keycloak.authenticated) {
          await keycloak.login();
        }
        setToken(keycloak.token);
      }
    }
    init()
  }, [keycloak, initialized, setToken]);


  if (!initialized) {
    return <p>Loading...</p>;
  }

  if (!keycloak.authenticated) {
    return <p>Authenticating...</p>;
  }

  return component;
}

export default SecureRoute;