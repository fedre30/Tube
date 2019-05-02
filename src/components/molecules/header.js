import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { colors } from "styles/const";
import { Title, SubTitle, Icon, Input } from "components/atoms";

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(14)} ${rem(40)};
  border-bottom: 1px black solid;
  background: ${props => (props.background ? props.background : colors.primary)};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
`;

const RightContainer = styled.div`
  width: ${rem(355)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ subTitle, background }) => (
  <WrapperHeader background={background}>
    <div>
      <Title size={24}>Tube.</Title>
      {subTitle && <SubTitle italic>Transport urbains pour les besoins environnementaux </SubTitle>}
    </div>
    <RightContainer>
      <div style={{ position: "relative" }}>
        <Input placeholder="Auber, Châtelet..." />
        <span style={{ position: "absolute", right: "20px", top: "11px" }}>
          <Icon icon="search" size={20} />
        </span>
      </div>
      <Icon icon="ratp" color="#fff" style={{ width: rem(40), height: rem(50) }} />
    </RightContainer>
  </WrapperHeader>
);

export default Header;
