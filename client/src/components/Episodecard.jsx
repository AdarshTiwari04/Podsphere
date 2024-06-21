import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: relative;
  top: 39%;
  left: -90.5%;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
  display: none;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 20px 30px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
  &:hover ${PlayIcon} {
    display: flex;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.text_secondary};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Episodecard = () => {
  return (
    <Card>
      <Image src="https://media.istockphoto.com/id/1283532997/vector/podcast-concept-thin-line-icon-abstract-icon-abstract-gradient-background-modern-sound-wave.jpg?s=612x612&w=0&k=20&c=YLg7rHeSuYqeIuGRAcvf2a7J8X8Sx-IkmqYHXIJGPYQ=" />
      <Details>
        <Title>The Tim Ferriss Show</Title>
        <Description>
          The Tim Ferriss Show is a podcast hosted by entrepreneur,and public
          speaker. The podcast with world-class performsfrom a variety of
          business,sports and more.
        </Description>
      </Details>
      <PlayIcon>
        {"video" === "video" ? (
          <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
        ) : (
          <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
        )}
      </PlayIcon>
    </Card>
  );
};

export default Episodecard;
