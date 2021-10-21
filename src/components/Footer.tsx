import styled from '@emotion/styled';
import React from 'react';

export default () => {
  return (
    <FooterContainer>
      <Contents>
        <strong>주식회사 비티오개러지(BTO GARAGE Corp.)</strong>
        <InfoWrap>
          <span>대표: 박도경</span>
          <span>
            주소: 경기도 안산시 상록구 능앞길 45-5, 주식회사 비티오개러지
          </span>
          <span>
            연락처: <a href="tel:+8207086930393">070-8693-0393</a>
          </span>
          <span>
            이메일: <a href="mailto:garage@b420ld.com">garage@b420ld.com</a>
          </span>
          <span>법인등록번호: 131411-0505316</span>
          <span>사업자등록번호: 438-81-02731</span>
        </InfoWrap>
      </Contents>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #17181a;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  padding: 32px 50px;
  box-sizing: border-box;
  & > strong {
    color: #9ca8b6;
    font-weight: 900;
    font-size: 16px;
    line-height: 3;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;

  & > span,
  & a {
    color: #8b95a1;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
  }
`;
