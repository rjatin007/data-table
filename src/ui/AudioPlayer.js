import styled from "styled-components";

const Audio = styled.audio`
  width: 100px;
  height: 100px;
  padding: 8px;
  margin: 8px;
`;

const AudioPlayer = ({ source, url }) => {
  return (
    <Audio controls src={source}>
      <a href={url}>Download audio</a>
    </Audio>
  );
};

export default AudioPlayer;
