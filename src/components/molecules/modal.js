import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "styles/const";
import demoImage from "images/stations/louvre_rivoli.jpg";

const Modal = ({ title, lines, place }) => (
  <ModalContainer>
    <div>
      <h2 className="Modal-title"> {title} </h2>
    </div>
    <div className="Modal-image">
      <img src={demoImage} alt="demo" />
    </div>
    <div className="Modal-lines-label"> correspondances </div>
    <div className="Modal-lines-container">
      {lines.map(line => (
        <div className="Modal-lines" key={line}>
          <img src={require(`../../images/lines/${line}.png`)} alt={line} />
        </div>
      ))}
    </div>
    <div className="Modal-place"> {place} </div>
  </ModalContainer>
);

Modal.propTypes = {
  title: PropTypes.string,
  lines: PropTypes.array,
  place: PropTypes.string,
};

const ModalContainer = styled.div`
  width: 400px;
  height: auto;
  background: ${colors.text};
  padding: 1rem;
  position: absolute;
  left: 25%;
  top: 55vh;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  .Modal-title {
    font-size: 1.8rem;
    text-align: center;
    margin: 1rem 0;
    font-weight: 500;
    color: ${colors.primary};
  }
  .Modal-image {
    width: 100%;
    height: auto;
    display: block;
    img {
      width: 100%;
    }
  }

  .Modal-lines-label {
    text-transform: uppercase;
    color: ${colors.primary};
    font-size: 1.3rem;
    font-weight: bold;
    margin: 1.5rem 0;
  }

  .Modal-lines-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 1rem 0;
  }
  .Modal-lines {
    width: 2rem;
    margin: 0 0.5rem 0 0;
    display: block;
    img {
      width: 100%;
    }
  }
  .Modal-place {
    display: flex;
    justify-content: flex-end;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    color: ${colors.text};
    -webkit-text-stroke: 2px ${colors.primary};
    margin-bottom: 1rem;
    text-align: right;
    line-height: 3rem;
  }
`;

export default Modal;
