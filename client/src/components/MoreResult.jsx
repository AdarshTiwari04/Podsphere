import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Results = styled(Link)`
  background-color: ${({ theme }) => theme.bgLight};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  gap: 20px;
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
`;
const PodcastImage = styled.img`
  height: 80px;
  border-radius: 8px;
  width: 150px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 60px;
    width: 100px;
  }
`;
const PodcastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const PodcastName = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text_primary};
`;
const Creator = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Time = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Desciption = styled.div`
  display: flex;
  gap: 8px;
`;

const MoreResult = ({ podcast }) => {
  return (
    <Results to={`/podcast/gfzxchfzfjgh`} style={{ textDecoration: "none" }}>
      <PodcastImage src="https://media.istockphoto.com/id/1283532997/vector/podcast-concept-thin-line-icon-abstract-icon-abstract-gradient-background-modern-sound-wave.jpg?s=612x612&w=0&k=20&c=YLg7rHeSuYqeIuGRAcvf2a7J8X8Sx-IkmqYHXIJGPYQ=" />
      <PodcastInfo>
        <PodcastName>The Tim Ferriss Show</PodcastName>
        <Desciption>
          <Creator style={{ marginRight: "12px" }}>Adarsh</Creator>
          <Time>• 12 Views</Time>
          <Time>• 12 days ago</Time>
        </Desciption>
      </PodcastInfo>
    </Results>
  );
};

export default MoreResult;
