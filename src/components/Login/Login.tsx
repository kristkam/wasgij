import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import App from "../../App";
import { Checkmark, Input, LoginButton, LoginForm } from ".."
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { firebaseApp } from "../../firebaseConfig";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.status.error};
  /* font-size: 0.875rem; */
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const validCredentials = {
  username: "admin",
  password: "huskerikke",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticatad, setIsAuthenticated] = useState(false);

  const [isShaking, setIsShaking] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const updateUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {    
    setUsername(event.target.value)
  }, [])

  const updatePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);


  // const userCredentials = getCredentials(username, password);
  // console.log(userCredentials);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const userCredentials = await getCredentials(username, password);
    // console.log(userCredentials);

    const isUserAuthenticated = username === validCredentials.username 
      && password === validCredentials.password

    if (isUserAuthenticated) {
      setShowCheckmark(true);
      
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 1500);

    } else {
      // setError("Invalid username or password");
      setError("Nope");
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }
  };

  if (isAuthenticatad) {
    return <App />;
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
       <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!showCheckmark ? (
          <LoginButton isShaking={isShaking}>Login</LoginButton>
        ) : (
          <Checkmark />
        )}
      </LoginForm>
    </Container>
  );
};

export default Login;