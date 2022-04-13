import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  background: #fff;
  padding: 20px;

  border-radius: 10px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;

    border-radius: 20px;
  }

  margin-top: 30px;

  height: 85vh;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 150px;
  }

  border-bottom: 1px solid #eee;
  border-radius: 5px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Describe = styled.div`
  margin-left: 10px;
  gap: 10px;

  display: flex;
  flex-direction: column;

  strong {
    width: 400px;
  }
  @media (max-width: 500px) {
    strong {
      width: 250px;
      text-align: center;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  padding: 0 20px;

  align-items: center;

  justify-content: space-around;

  @media (max-width: 500px) {
    gap: 25px;
  }
`;

export const Button = styled.button`
  background-color: var(--color-red);

  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  padding: 4px 8px;

  border-radius: 5px;
`;

export const Close = styled.button`
  position: sticky;

  width: 30px;
  height: 30px;

  top: 0;
  left: 550px;

  border-radius: 50px;
  background-color: var(--color-red);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 0;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const ButtonFinally = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  color: #fff;

  background-color: #68d391;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerButtons = styled.div`
  background-color: #eee;

  display: flex;
  gap: 8px;

  border-radius: 5px;

  button {
    padding: 5px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    &.minus {
      background-color: var(--color-red);
      color: #fff;
    }
    &.plus {
      background-color: #68d391;
      color: #fff;
    }
  }
`;
