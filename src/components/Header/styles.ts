import styled from "styled-components";

export const HeaderBg = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 48px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.logo};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;


  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;