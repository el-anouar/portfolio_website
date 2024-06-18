import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
    display: flex;
    flex-direction: column;

    margin: 0;
    justify-content: center;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const ProfilePic = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  margin-right:20px;
  border: 5px solid white;
  overflow: hidden;

  @media ${props => props.theme.breakpoints.md}{
    width: 150px;
    height: 150px;
    margin-right:10px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 200px;
    height: 200px;
    margin-right:5px;
  }
`;
export const SectionTP = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    h1{
      width: 100%;
    }
  }
  /*@media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }*/
`;
