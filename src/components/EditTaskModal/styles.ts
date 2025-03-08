import styled from "styled-components";


export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.input_bg};
  width: 100%;
  height: 54px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.input_bg};
  width: 100%;
  height: 54px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};

  option {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

