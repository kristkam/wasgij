import { FormEvent, memo, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${(props) => props.theme.colors.background.secondary};;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
`;

const LoginForm = memo(({ children, onSubmit }: PropsWithChildren<{ onSubmit: (event: FormEvent) => void }>) => {
  return (
    <StyledLoginForm onSubmit={onSubmit}>
      {children}
    </StyledLoginForm>
  );
});

export default LoginForm;