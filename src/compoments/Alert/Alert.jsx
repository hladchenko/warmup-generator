import styled, { keyframes } from "styled-components";

const Alert = ({ justAttached }) => {
  return (
      <AlertContainer $animation={justAttached}>Copied to clipboard!</AlertContainer>
  );
};

const slideIn = keyframes`
  0%{
    transform: translateX(200px) scale(0);

  }
  100%{
    transform: translateX(0) scale(1);
  }
  
`;

const slideOut = keyframes`
  0%{
    transform: translateX(0) scale(1);
  }
  100%{
    transform: translateX(200px) scale(0);
  }
  
`;

const AlertContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 100px;
  z-index: 9999;

  background-color: green;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  animation: ${slideIn} 0.5s ease;
  animation: 0.5s ${(props) => (props.$animation ? slideIn : slideOut)} ease;
`;

export default Alert;