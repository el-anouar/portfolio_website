import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: 0;
  margin: ${(props) => props.about?"100px 5% 100px 5%":props.hero ? "100px 5% 0 5%" :"0"} ;

  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  width:${(props) => props.hero ? "90%" :"100%"};
  height:${(props) => props.main && "100vh"};
  max-height:${(props) => props.main && "900px"};
  align-items: ${(props) => props.main ? "center" : "baseline"};
  .ssqq{
    margin-left: 10px;
    margin-left: 10px;
    letter-spacing: 2px;
    font-weight: 100;
  }


  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => props.hero ? "0" :"0"};
    margin: ${(props) => props.hero ? "100px 4% 0 4%" :"0"};
    width: ${(props) => props.hero ? "92%" :"100%"};
    height:${(props) => !props.hero && "100vh"};
    align-items: ${(props) => props.main ? "center" : "baseline"}; 

    flex-direction: column;
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.hero ? "0" :"0"};
    
    
    margin: ${(props) => props.hss?0:props.hero ? "0 5% 0 5%" :"0"};
    ${(props) => props.about?"margin-bottom:100px;":""};
    width: ${(props) => props.hss?"100%":props.hero ? "90%" :"100%"};
    height:${(props) => !props.hero && "100vh"};
    align-items:${(props) => props.main ? "center" : "baseline"};
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  display: inline-block;
  width: calc(100% - 200px);
  //font-weight: 800;
  //font-size: ${(props) => props.main ? '50px' : '40px'};
  //line-height: ${(props) => props.main ? '50px' : '40px'};
  line-height: 40px;
  color: white;
  margin-bottom: ${(props) => props.heroT ? '0' : '50px'};
  padding: ${(props) => props.main ? '16px 0 16px' : '16px 0 16px'};
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 30px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '40px' : '30px'};
    line-height: ${(props) => props.main ? '40px' : '30px'};
    margin-bottom: ${(props) => props.heroT ? '0' : '40px'};
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
    width: calc(100% - 150px);
  }

  @media ${props => props.theme.breakpoints.sm}{
    //font-size: ${(props) => props.main ? '25px' : '25px'};
    //line-height: ${(props) => props.main ? '25px' : '25px'};
    margin-bottom: ${(props) => props.heroT ? '0' : '30px'};
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    width: 100% ;
    margin-top: 20px;
    text-align: ${(props) =>props.hss?"start":"center"};
    ${(props) =>props.hss&&"margin-left:5%"};
    line-height: 35px;
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 25px;
  }
`

export const SectionText = styled.p`
  width:100%;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.91);
  margin-top: ${(props) => props.heroP ? "50px": "0px"};
  text-align: start;
  letter-spacing: 2px;
    font-weight: 100;
    font-size: 25px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    margin-top: 20px;
    text-align: center;
    ${(props) => props.about&&"text-align: start;"}
    ${(props) => props.about&&"margin:5%;"}
    ${(props) => props.about&&"width:90%;"}
    letter-spacing: 2px;
    font-weight: 100;
    font-size: 20px;
}

  
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const Button = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  background: ${({ alt }) => alt ? '#3A9D49' : '#3A9D49'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  color: white;
  letter-spacing: 2px;
    font-weight: 100;
    font-size: 20px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${({ alt }) => alt ? '100%' : '100%'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
    margin-top: 20px;
  }
  &:hover {
    background-color: white;
    color: #3A9D49;
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? '#13ADC7' : '#13ADC7'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
