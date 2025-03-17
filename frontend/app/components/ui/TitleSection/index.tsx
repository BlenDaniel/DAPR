import React from "react";

import * as Styled from "./styles";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <Styled.TitleSection>
    <Styled.Title data-center={center?.toString()}>{title}</Styled.Title>
    {subtitle && (
      <Styled.SubTitle data-center={center?.toString()}>
        {subtitle}
      </Styled.SubTitle>
    )}
    <Styled.Separator data-center={center?.toString()} />
  </Styled.TitleSection>
);

export default TitleSection;
