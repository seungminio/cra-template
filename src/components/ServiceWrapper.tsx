import styled from '@emotion/styled';
import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';

const ServiceWrapper: React.FC = ({ children }) => {
  const history = useHistory();
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo onClick={() => history.push('/')}>
          <b>주식회사 비티오개러지</b>
          <br />
          BTO GARAGE Corp.
        </HeaderLogo>
        <HeaderRightSection>
          <HeaderMenu onClick={() => history.push('/finance')}>
            자동차금융사업부
          </HeaderMenu>
          {/* <HeaderMenu onClick={() => history.push('/business')}>
            신사업개발부
          </HeaderMenu> */}
        </HeaderRightSection>
      </HeaderContainer>
      <Contents>{children}</Contents>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: black;

  & * {
    color: white;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 50px;

  display: flex;
  justify-content: space-between;

  height: fit-content;
`;

const HeaderLogo = styled.span`
  font-size: 24px;
  line-height: 1.5;
  cursor: pointer;

  & > b {
    font-weight: 900;
  }
`;

const HeaderRightSection = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMenu = styled.span`
  font-size: 22px;
  margin-right: 14px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const Contents = styled.div`
  display: flex;
  flex: 1;

  padding: 50px;
`;

export default ServiceWrapper;
