import { CopyBlock, dracula } from 'react-code-blocks';
import { CodeBoxWrapper } from './styled';

interface CodeBoxProps {
  code: string;
}

const CodeBox = ({ code }: CodeBoxProps) => {
  return (
    <CodeBoxWrapper>
      <CopyBlock theme={dracula} text={code} language="html" showLineNumbers={false} />
    </CodeBoxWrapper>
  );
};

export default CodeBox;
