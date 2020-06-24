import styled from "styled-components";
import defaultImg from '../images/room-2.jpeg';

const Styledhero = styled.header `

min-height: calc(100vh - 66px);
background: url(${props=>props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;


`




export default Styledhero; 