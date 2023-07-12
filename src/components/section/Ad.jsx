import React from 'react';

const Ad = () => {
  return (
    <section id="ad" className="m70 container">
      <h3>
        <a href="/">소상공인을 돕는 공감가게</a>
      </h3>
      <div className="ad__card__wrap col3">
        <div className="ad__card">
          <a href="/">
            <div className="ad__img__wrap">
              <img
                src="assets/img/ad01.png"
                alt="좋은 일상을 만드는 사소한 기술"
              />
            </div>
            <div className="ad__cont">
              <p className="ad__cont__funder">일상기술연구소</p>
              <strong className="ad__cont__title">
                좋은 일상을 만드는 사소한 기술
              </strong>
              <img
                src="assets/img/ad01_1.png"
                alt="목넓은 노브라 탄탄한 부들부들 안에입는 팔뚝커버 자켓안에 순면 비침없는 힙커버 반팔티"
                className="ad__brand"
              />
            </div>
          </a>
        </div>
        <div className="ad__card">
          <a href="/">
            <div className="ad__img__wrap">
              <img
                src="assets/img/ad02.png"
                alt="집에서 간편하게 맛보는 해물탕"
              />
            </div>
            <div className="ad__cont">
              <p className="ad__cont__funder">갓해물</p>
              <strong className="ad__cont__title">
                집에서 간편하게 맛보는 해물탕
              </strong>
              <img
                src="assets/img/ad02_1.jpg"
                alt="꼬치 캠핑 해물 어묵탕 오뎅탕 2인"
                className="ad__brand"
              />
            </div>
          </a>
        </div>
        <div className="ad__card">
          <a href="/">
            <div className="ad__img__wrap">
              <img
                src="assets/img/ad03.png"
                alt="건강한 피부를 위한 클린뷰티"
              />
            </div>
            <div className="ad__cont">
              <p className="ad__cont__funder">그린아뜰리에</p>
              <strong className="ad__cont__title">
                건강한 피부를 위한 클린뷰티
              </strong>
              <img
                src="assets/img/ad03_1.png"
                alt="그린아뜰리에 고농축 천연 중성 세제1+섬유유연제1 세트"
                className="ad__brand"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ad;
