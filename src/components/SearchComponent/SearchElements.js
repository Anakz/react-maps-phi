import styled from 'styled-components'

export const SearchContainer = styled.div`
    background: transparent;
    height: 100px;
    color: blue;
    top: 5px;
    z-index: 10;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    // padding: 8px 24px;
    // max-width: 600px;
    // position: absolute;

    // padding: 0 2px;
    // display: block;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // margin-left: 480px;

    // @media screen and (max-width: 768px){
    //     margin-left: 98px;
    // }
    // @media screen and (max-width: 36px){
    //     margin-left: 0px;
    // }
`;

export const SearchWrap = styled.div`
    background: rgb(126, 146, 155, 0.8);
    color: grey;
    width: 500px;//500px
    height: 100%;
    border-radius: 7px;
    align-items: center;
    display: flex;
    flex-direction: column;

    // display: flex;
    // margin-top: -11px;
    // justify-content: center;
    // padding: 0 24px;

    @media screen and (max-width: 768px){
        
    }
    @media screen and (max-width: 480px){
        
    }    
`;

export const SearchH1 = styled.h1`
    // display: flex;
    // justify-content: center;
    // text-align: center;
    // padding: 6px;

    color: #fff;
    font-size: 20px;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        padding: 0px;
    }
`;

export const SearchMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: -40px;
    margin-top: 0;
`;

export const SearchItems = styled.li`
    display: flex;
    align-items: center;
`;

export const InputLattitude = styled.input`
  padding: 0.5em;
  margin: 0.5em;
//   color: ${props => props.inputColor || "palevioletred"};
  background: #F8F9F9;
  border: none;
  border-radius: 3px;
  transition: all 0.2s ease-in-out


  @media screen and (max-width: 768px){
    
  }
  &:hover{
      background: #e3e3e3;
      transition: all 0.2s ease-in-out
  }
`;

export const InputLongitude = styled.input`
  padding: 0.5em;
  margin: 0.5em;
//   color: ${props => props.inputColor || "palevioletred"};
  background: #F8F9F9;
  border: none;
  border-radius: 3px;
  transition: all 0.2s ease-in-out

  @media screen and (max-width: 768px){
    
  }
  &:hover{
      background: #e3e3e3;
      transition: all 0.2s ease-in-out
  }
`;

export const BtnWrapp = styled.div`
    color: #fff;
`;

export const Button = styled.button`
    margin: 0.5em;
    border-radius: 7px;
    padding: 6.5px 22px;
    white-space: nowrap;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: rgb(202, 202, 202, 0.8);
        color: #010606;
    }
`;