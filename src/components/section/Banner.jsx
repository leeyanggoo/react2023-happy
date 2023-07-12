// import React, { useEffect } from 'react';
// import happybinSlider from '../../assets/js/happybin_slider';

const Banner = () => {
  // useEffect(() => {
  //   happybinSlider();
  // }, []);
  return (
    <section id="banner">
      <h2 className="blind">배너 리스트</h2>
      <div className="banner__wrap">
        <div className="banner__inner container">
          <div className="banner__slider">
            <div className="slider s1">
              <a href="/"> </a>
            </div>
            <div className="slider s2">
              <a href="/"> </a>
            </div>
            <div className="slider s3">
              <a href="/"> </a>
            </div>
            {/* {sliders.map((slider, index) => (
              <Slider
                key={index}
                slider={slider}
                setSliderWidth={index === 0 ? setSliderWidth : undefined}
              />
            ))} */}
            {/* {sliderComponents} */}
          </div>
        </div>
        <div className="prev">
          <span className="ir">이전 슬라이드</span>
        </div>
        <div className="next">
          <span className="ir">다음 슬라이드</span>
        </div>
        <div className="progress__wrap">
          <span className="current"></span>
          <div className="progress__bar">
            <div className="progress"></div>
          </div>
          <span className="total"></span>
          <div className="stop">
            <span className="ir">슬라이드 정지</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
