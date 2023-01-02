import NextImage from 'next/image';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  dime: string;
}

interface ShadowedProps {
  bgColor: string;
};


export default function BasicCard({ title, dime }: BasicCardProps) {
  return (
    <Card bgColor={dime} >
      <Title>{title}</Title>
    </Card>
  );
}



const Card = styled.div<ShadowedProps>`
  display: flex;
  padding: 2.5rem;
  background-image:  linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('${props => props.bgColor}');
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 620px;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: white;
  text-shadow: 0 1px 0 black;
`;

const Description = styled.div`
  opacity: 0.6;
`;
