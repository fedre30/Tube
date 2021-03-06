import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";

import { colors } from "styles/const";
import { Title, SubTitle, Icon } from "components/atoms";
import { Search } from "components/molecules";

import stations from "scripts/stations.json";

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(14)} ${rem(40)};
  border-bottom: 1px black solid;
  background: ${props => (props.noBackground ? "none" : colors.primary)};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
`;

const RightContainer = styled.div`
  width: ${rem(355)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Header = ({ subTitle, background }) => (
  <WrapperHeader background={background}>
    <div>
      <CustomLink to="/">
        <Title size={24} italic>
          Tube.
        </Title>
      </CustomLink>

      {subTitle && <SubTitle italic>Transport urbains pour les besoins environnementaux </SubTitle>}
    </div>
    <RightContainer>
      <div style={{ position: "relative" }}>
        <Search
          suggestions={stations.objects.stations.geometries.map(v => v.properties.nom_gare)}
        />
        <span style={{ position: "absolute", right: "20px", top: "11px" }}>
          <Icon icon="search" size={20} />
        </span>
      </div>
      <Icon icon="ratp" color="#fff" style={{ width: rem(40), height: rem(50) }} />
    </RightContainer>
  </WrapperHeader>
);

export default Header;
