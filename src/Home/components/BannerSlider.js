import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import React from 'react';
import client from '../../lib/api/client';
import { useQuery } from '@tanstack/react-query';
import { applyFontStyles } from '../../styles/fontStyle';

const SliderWrapper = styled.div`
  box-shadow: var(--drop-shadow);
  left: 0;
  position: relative;
  width: 100%;
  height: 118px;

  // '1/5' 와 같은 페이징 표시
  & > div > .custom_paging {
    position: absolute;
    top: 84px;
    left: 326px;
    margin: 0;
    padding: 0;

    & > li {
      display: none;
      background-color: #00000099;
      border-radius: 12px;
      justify-content: center;
      padding: 2px 8px;
      width: fit-content;

      & > div {
        ${applyFontStyles({ font: 'caption-02', color: '#ffffff' })}
      }
    }
    & > .slick-active {
      display: block;
    }
  }
`;

const BannerSlider = () => {
  const { data, error } = useQuery({
    queryKey: ['homeBanner'],
    queryFn: async () => {
      const { data } = await client.get('home/banner/list');
      return data.banners;
    },
  });

  if (!data || error) {
    return <div style={{ height: '118px' }}></div>;
  }

  const settings = {
    dots: true, // Page Indicator Dot
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'custom_paging',
    customPaging: function (slider) {
      return <div>{slider + 1}/5</div>;
    },
    lazyLoad: true,
  };

  return (
    <>
      {data && (
        <SliderWrapper>
          <Slider {...settings}>
            {data.map(({ imageUrl, linkedPageUrl }, idx) => (
              <div key={idx}>
                <a href={linkedPageUrl}>
                  <img
                    alt="banner"
                    src={imageUrl}
                    style={{ height: '118px', margin: '0px auto' }}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      )}
    </>
  );
};

export default React.memo(BannerSlider);
