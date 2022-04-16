import { ButtonContainer } from './styled';

interface prop {
  name: string;
}
export default function Button({ name }: prop) {
  console.log(name);
  return <ButtonContainer>{name}</ButtonContainer>;
}
