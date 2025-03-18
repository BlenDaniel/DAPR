import React from "react";
import * as Styled from "./styles";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "blue-500",
}) => {
  return (
    <Styled.SpinnerContainer>
      <Styled.Spinner size={size} color={color} />
    </Styled.SpinnerContainer>
  );
};

export default LoadingSpinner;
