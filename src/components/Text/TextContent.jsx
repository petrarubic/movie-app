import { Heading, Paragraph, TextWrapper } from "./styled";

const TextContent = ({ heading, paragraph }) => {
  return (
    <TextWrapper>
      <Heading>{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
    </TextWrapper>
  );
};

export default TextContent;
