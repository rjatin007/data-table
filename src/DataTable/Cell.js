import styled from "styled-components";
import Image from "../ui/Image";
import TextCell from "../ui/TextCell";
import AudioPlayer from "../ui/AudioPlayer";
import VideoPlayer from "../ui/VideoPlayer";
import Anchor from "../ui/Anchor";
import CheckBox from "../ui/Checkbox";

const webExtensions = ["https", "www", "com"];
const isPresent = (str) =>
  webExtensions.some((element) => str.includes(element));

const componentMapper = (data) => {
  // console.log("data", data);
  if (typeof data === "boolean") return <CheckBox isChecked={data} />;
  let extension = "none";
  const isString = typeof data == "string";
  if (isString && isPresent(data)) {
    return <Anchor href={data}>Visit Url</Anchor>;
  } else if (isString) {
    const dotIndex = data.indexOf(".");
    extension = data.split(dotIndex);
  }

  switch (extension) {
    case ".jpg" || ".png" || ".jpeg" || ".webp":
      return <Image src={data} />;

    case ".wav" || ".mp3" || ".ogg":
      return <AudioPlayer source={data} url={data} />;

    case ".mp4" || ".webm":
      return <VideoPlayer src={data} url={data} />;

    default:
      console.log(data, data.length);
      return <TextCell data={data}>{data}</TextCell>;
  }
};

const Cell = ({ data }) => {
  return componentMapper(data);
};
export default Cell;
