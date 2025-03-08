import React from "react";
import * as Styled from "./styles";

interface Props extends Styled.ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ section, children, ...rest }) => {
  return (
    <Styled.Container {...rest} data-section={section?.toString()}>
      {children}
    </Styled.Container>
  );
};

export default Container;
