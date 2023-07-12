import React from 'react';

const Funding = () => {
  return (
    <section id="funding" className="m70 container">
      <h3>
        <a href="/">소셜벤처를 만나는 펀딩</a>
      </h3>
      <div className="funding__card__wrap col3">
        <div className="funding__card">
          <a href="/">
            <div className="funding__img__wrap">
              <img
                src="assets/img/funding01.png"
                alt="5분 만에 홈스토랑 완성, 미트로프&스프"
              />
            </div>
            <div className="funding__cont">
              <p className="funding__cont__funder">하이밀</p>
              <strong className="funding__cont__title">
                5분 만에 홈스토랑 완성, 미트로프&스프
              </strong>
              <span className="funding__cont__percent">
                <span className="blind">달성률</span>
                332%
              </span>
            </div>
          </a>
        </div>
        <div className="funding__card">
          <a href="/">
            <div className="funding__img__wrap">
              <img
                src="assets/img/funding02.png"
                alt="다육식물 세트로 전하는 작지만 큰 행복"
              />
            </div>
            <div className="funding__cont">
              <p className="funding__cont__funder">블러썸농원</p>
              <strong className="funding__cont__title">
                다육식물 세트로 전하는 작지만 큰 행복
              </strong>
              <span className="funding__cont__percent">
                <span className="blind">달성률</span>
                120%
              </span>
            </div>
          </a>
        </div>
        <div className="funding__card">
          <a href="/">
            <div className="funding__img__wrap">
              <img
                src="assets/img/funding03.png"
                alt="삶아 빤 듯한 뽀송함, 리네드로 누려보세요"
              />
            </div>
            <div className="funding__cont">
              <p className="funding__cont__funder">이젠바이오</p>
              <strong className="funding__cont__title">
                삶아 빤 듯한 뽀송함, 리네드로 누려보세요
              </strong>
              <span className="funding__cont__percent">
                <span className="blind">달성률</span>
                100%
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funding;
