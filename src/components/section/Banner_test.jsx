import React, { useEffect, useState, useRef, useCallback } from 'react';

const sliders = ['s1', 's2', 's3'];
const bgColor = ['#B197F6', '#699CEE', '#E6B162'];

const Slider = ({ slider, setSliderWidth }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (setSliderWidth) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, [setSliderWidth]);

  return (
    <div ref={sliderRef} className={`slider ${slider}`}>
      <a href="/"> </a>
    </div>
  );
};

const Banner = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const bannerWrap = useRef(null);
  const bannerSlider = useRef(null);
  const sliderIntervalRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const sliderTime = 2000;

  // 기존 슬라이드 배열에 첫 번째 슬라이드 추가
  const sliderComponents = sliders
    .map((slider, index) => (
      <Slider
        key={index}
        slider={slider}
        setSliderWidth={index === 0 ? setSliderWidth : undefined}
      />
    ))
    .concat(
      <Slider
        key={sliders.length}
        slider={sliders[0]}
        setSliderWidth={undefined}
      />
    );

  // 트랜지션 중에 변경 불가
  const resetSlider = useCallback(() => {
    if (sliderIndex >= sliders.length) {
      setSliderIndex(0);
      bannerSlider.current.style.transform = `translateX(0)`;
      bannerSlider.current.style.transition = `0s`;
    }
  }, [sliderIndex]);

  useEffect(() => {
    const bannerSliderCurrent = bannerSlider.current;

    if (bannerSliderCurrent) {
      bannerSliderCurrent.addEventListener('transitionend', () => {
        setIsTransition(false);
        resetSlider();
      });

      return () => {
        bannerSliderCurrent.removeEventListener('transitionend', () => {
          setIsTransition(false);
          resetSlider();
        });
      };
    }
  }, [resetSlider]);

  // 첫 슬라이드 업데이트
  useEffect(() => {
    setIsTransition(true);
    bannerWrap.current.style.background = `${
      bgColor[sliderIndex % bgColor.length]
    }`;
    bannerWrap.current.style.transition = `all 1s`;
    bannerSlider.current.style.transform = `translateX(-${
      sliderIndex * sliderWidth
    }px)`;
    bannerSlider.current.style.transition = `all 1s`;
  }, [sliderIndex, sliderWidth]);

  // 슬라이드 효과
  const goSlider = useCallback(() => {
    sliderIntervalRef.current = setInterval(() => {
      if (isTransition) return;
      setSliderIndex(
        (sliderIndex) => (sliderIndex + 1) % sliderComponents.length
      );
    }, sliderTime);
  }, [isTransition, sliderComponents.length, sliderTime]);

  useEffect(() => {
    goSlider();
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, [goSlider, sliderIndex]);

  return (
    <section id="banner">
      <h2 className="blind">배너 리스트</h2>
      <div className="banner__wrap" ref={bannerWrap}>
        <div className="banner__inner container">
          <div className="banner__slider" ref={bannerSlider}>
            {/* <div className="slider s1">
              <a href="/"> </a>
            </div>
            <div className="slider s2">
              <a href="/"> </a>
            </div>
            <div className="slider s3">
              <a href="/"> </a>
            </div> */}
            {/* {sliders.map((slider, index) => (
              <Slider
                key={index}
                slider={slider}
                setSliderWidth={index === 0 ? setSliderWidth : undefined}
              />
            ))} */}
            {sliderComponents}
          </div>
        </div>
        <div className="prev">
          <span className="ir">이전 슬라이드</span>
        </div>
        <div className="next">
          <span className="ir">다음 슬라이드</span>
        </div>
        <div className="progress__wrap">
          <span className="current">{(sliderIndex % sliders.length) + 1}</span>
          <div className="progress__bar">
            <div className="progress"></div>
          </div>
          <span className="total">{sliders.length}</span>
          <div className="stop">
            <span className="ir">슬라이드 정지</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
