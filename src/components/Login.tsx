import { useState } from "react";
import styled from "styled-components";
import App from "../App";
import { motion } from "motion/react";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${(props) => props.theme.colors.background.secondary};;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  background-color: ${(props) => props.theme.colors.background.surface};
  /* border-radius: 4px; */
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text.secondary};

  &::placeholder {
    color: ${(props) => props.theme.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accents.primary};
  };
`;

const Button = styled(motion.button)`
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.colors.accents.primary};
  color: white;
  padding: 0.5rem;
  border: none;
  /* border-radius: 4px; */
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accents.secondary};
  }
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
  
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isUserAuthenticated = 
      username === validCredentials.username && password === validCredentials.password

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
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!showCheckmark ? (
          <Button
            type="submit"
            animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            Login
          </Button>
        ) : (
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ rotate: [0, 720], scale: [0.2, 1.2], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            ✅
          </motion.div>
        )}
      </LoginForm>
    </Container>
  );
};

export default Login;