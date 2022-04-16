import { ButtonContainer } from './styled';

interface Prop {
  name: string;
  src: string;
  curAnimationHandler: (param: string) => void;
}
export default function Button({ name, src, curAnimationHandler }: Prop) {
  return <ButtonContainer onClick={() => curAnimationHandler(src)}>{name}</ButtonContainer>;
}
