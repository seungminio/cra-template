import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import ServiceWrapper from '../components/ServiceWrapper';

// @ts-ignore
import ReactVivus from 'react-vivus';

import LogoSVG from '../assets/logo.svg';
import LogoAfterSVG from '../assets/after.svg';

export default () => {
  const [logo, setLogo] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLogo(true);
    }, 1500);
  }, []);

  return (
    <ServiceWrapper>
      <img src={LogoAfterSVG} style={{ width: 0, height: 0 }} />
      <Container>
        {/* <Logo src={require('../assets/logo.png')} />
         */}

        <LogoWrap>
          {logo ? (
            <img src={LogoAfterSVG} />
          ) : (
            <ReactVivus
              id="logo"
              option={{
                file: LogoSVG,
                animTimingFunction: 'EASE',
                type: 'sync',
              }}
              style={{ width: '100%' }}
            />
          )}
        </LogoWrap>
        <Description>
          Before Too Old: 더 늙기 전에, 너무 늦기 전에
          <br />
          자동차 금융의 시작, 비티오개러지.
        </Description>
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
  width: 500px;
  margin-bottom: 32px;
`;

const Logo = styled.img`
  width: 500px;
`;

const Description = styled.span`
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 4px;
`;
