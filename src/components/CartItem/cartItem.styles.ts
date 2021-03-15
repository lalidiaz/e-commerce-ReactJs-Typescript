import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial;
  border-bottom: 1px solid lightblue;
  padding-bottom: 30px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 100px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
