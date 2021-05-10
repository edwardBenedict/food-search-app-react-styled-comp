import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;

  @media (max-width: 1250) {
    display: flex;
    flex-direction: column;
    background-color: red;
  }
`;

export const DetailPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 5vh;
  border: 1px solid white;
  /* height: calc(100vh - 300px); */
`;

export const ImgContainer = styled.div`
  border: 1px solid white;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;

  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
  font-size: 3rem;
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
