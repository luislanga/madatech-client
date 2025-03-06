
import { WidthContainer } from "../WidthContainer/WidthContainer";
import {
  HeaderBg,
  HeaderWrapper,
  Logo,
} from "./styles";


export const Header = () => {
  return (
    <HeaderBg>
      <WidthContainer>
        <HeaderWrapper>
          <Logo>
            madatech-challenge
          </Logo>
        </HeaderWrapper>
      </WidthContainer>
    </HeaderBg>
  );
};
