import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const A = styled.a`
  font-size: 2rem;
  cursor: pointer;
  trasition: 0.5s ease;
  color: white;
  background-color: #112240;
  border-radius: 10px;
  &:hover {
    color: #64FFDA
  }
  padding: 2rem;
`;
