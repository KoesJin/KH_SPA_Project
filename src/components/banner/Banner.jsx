import React from 'react';
import { BannerContainer, BannerContent, BookButton } from '../styled/Banner';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>지금 상영 중!</h1>
        <p>IMAX로 즐기는 최고의 영화들</p>
        <BookButton>예매하기</BookButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
