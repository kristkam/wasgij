import { ReactNode, memo } from "react";
import styled from "styled-components";

interface OwnProps {
  isError: boolean;
  error: ReactNode;
};

const StyledSpan = styled.span`
  color: ${props => props.theme.colors.status.error};
`;

const ErrorMessage = ({ isError, error }: OwnProps) => {

  const errorMessage = (
    <StyledSpan>
      Error: Something went wrong when fetching data... {error}
    </StyledSpan>
  )

  return isError ? errorMessage : null
};

export default memo(ErrorMessage);