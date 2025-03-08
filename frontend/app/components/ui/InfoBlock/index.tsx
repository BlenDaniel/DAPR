import React from "react";

import Icon, { IconProps } from "../Icon";

import * as Styled from "./styles";

interface Props extends Styled.InfoBlockProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  center?: boolean;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center }) => (
  <Styled.InfoBlock center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
