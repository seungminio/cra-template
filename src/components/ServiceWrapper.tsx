import styled from '@emotion/styled';
import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import useWindowSize from '../hooks/useWindowSize';

const ServiceWrapper: React.FC = ({ children }) => {
  const history = useHistory();
  const size = useWindowSize();

  console.log(size);

  return (
    <Container>
      {(size?.width || 0) > 1000 ? (
        <>
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
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 900,
              lineHeight: 1.5,
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            BTO GARAGE Corp.
          </span>
          <span
            style={{
              fontSize: 16,
              lineHeight: 1.5,
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            모바일 기기 지원 준비중입니다.
            <br />
            데스크탑이나 노트북으로 접속해주세요.
          </span>

          <span
            style={{
              fontSize: 16,
              lineHeight: 1.5,
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            We are preparing to support mobile devices.
            <br />
            Please access the website on your desktop or laptop.
          </span>
          <a
            href="tel:+8207086930393"
            style={{
              fontSize: 18,
              lineHeight: 1.5,
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            +82 070-8693-0393
          </a>
          <a
            style={{
              fontSize: 18,
              lineHeight: 1.5,
              textAlign: 'center',
              textDecoration: 'none',
            }}
            href="mailto:garage@b420ld.com"
          >
            garage@b420ld.com
          </a>
        </div>
      )}
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
