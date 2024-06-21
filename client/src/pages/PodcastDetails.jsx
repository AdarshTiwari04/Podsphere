import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Episodecard from "../components/Episodecard";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.text_secondary};
  object-fit: cover;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
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

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.text_secondary + 50};
  color: ${({ theme }) => theme.text_primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

const Episodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  display: flex;
  justify-content space-between;
  align-items: center;
`;

const EpisodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Favorite = styled(IconButton)`
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: ${({ theme }) => theme.text_primary} !important;
`;

const PodcastDetails = () => {
  const [podcast, setPodcast] = useState([1, 2, 3]);
  return (
    <Container>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Favorite>
          <FavoriteIcon>
            style={{ color: "#E30022", width: "16px", height: "16px" }}
          </FavoriteIcon>
        </Favorite>
      </div>
      <Top>
        <Image src="https://media.istockphoto.com/id/1283532997/vector/podcast-concept-thin-line-icon-abstract-icon-abstract-gradient-background-modern-sound-wave.jpg?s=612x612&w=0&k=20&c=YLg7rHeSuYqeIuGRAcvf2a7J8X8Sx-IkmqYHXIJGPYQ=" />
        <Details>
          <Title>The Tim Ferriss Show</Title>
          <Description>
            The Tim Ferriss Show is a podcast hosted by entrepreneur,and public
            speaker. The podcast with world-class performsfrom a variety of
            business,sports and more.
          </Description>
          <Tags>
            {podcast.map((tag) => (
              <Tag>Tag {tag}</Tag>
            ))}
          </Tags>
        </Details>
      </Top>
      <Episodes>
        <Topic>All Episodes</Topic>
        <EpisodeWrapper>
          <Episodecard />
          <Episodecard />
          <Episodecard />
        </EpisodeWrapper>
      </Episodes>
    </Container>
  );
};

export default PodcastDetails;
