import styled from '@emotion/styled';
import React from 'react';
import ServiceWrapper from '../components/ServiceWrapper';

export default () => {
  return (
    <ServiceWrapper>
      <Container>
        {/* <LogoWrap>
          <Logo src={require('../assets/logo.png')} />
        </LogoWrap> */}
        <Title>최적의 금융 상품 셋팅 서비스</Title>
        <Description>
          비티오개러지는 고객님의 금융 데이터를 기반으로
          <br />
          암호화된 기 심사 내역 <span>빅데이터 분석</span>을 통해
          <br />
          차량 구매시 <span>최적의 금융 상품으로 구매</span>하실 수 있도록
          도와드리고 있습니다.
        </Description>
        <Title>모바일 애플리케이션 서비스</Title>
        <Description>
          클라우드 컴퓨팅(Cloud Computing)과 스크래핑 기술(Scraping
          Technology)의 결합으로,
          <br />
          <span>
            자동차 금융 상품 계약시 필요한 모든 서류를 공인인증서 인증 한번으로
            제출
          </span>
          할 수 있는 앱서비스를 개발하고 있습니다.
          <br />
          <small>
            *모바일 애플리케이션 서비스는 출시 준비중으로, 2022년 상반기에 베타
            서비스 출시 예정입니다.
          </small>
        </Description>
        <Title>Business Partners.</Title>
        <LogoWrap>
          <Logo src={require('../assets/1.png')} />
          <Logo src={require('../assets/4.png')} />
          <Logo src={require('../assets/2.png')} />
          <Logo src={require('../assets/3.png')} />
        </LogoWrap>
        <Title>Contact</Title>
        <Description>+82 070-8693-0393</Description>
      </Container>
    </ServiceWrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  justify-content: center;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

const Logo = styled.img`
  height: 100px;
  margin-bottom: 32px;
  margin-right: 32px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 24px;
`;

const Description = styled.span`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 4px;
  margin-bottom: 80px;
  & > span {
    padding: 0 0 2px 0;
    border-bottom: 1px solid white;
  }
  & > small {
    line-height: 2;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;
