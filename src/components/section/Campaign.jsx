import React from 'react';

const Campaign = () => {
  return (
    <section id="campaign" className="m70 container">
      <h3>
        <a href="/">파트너와 함께하는 캠페인</a>
      </h3>
      <div className="campaign__card__wrap col2">
        <div className="campaign__card">
          <a href="/">
            <div className="campaign__img__wrap">
              <img
                src="assets/img/campaign01.jpg"
                alt="바다를 사랑하는 워터러버가 되어주세요!"
              />
            </div>
            <div className="campaign__cont">
              <p className="campaign__cont__organization">비오템</p>
              <strong className="campaign__cont__title">
                바다를 사랑하는 워터러버가 되어주세요!
              </strong>
              <span>함께 참여하기 👉</span>
            </div>
          </a>
        </div>
        <div className="campaign__card">
          <a href="/">
            <div className="campaign__img__wrap">
              <img
                src="assets/img/campaign02.jpg"
                alt="꿀벌을 부르는 건강한 보금자리 만들기"
              />
            </div>
            <div className="campaign__cont">
              <p className="campaign__cont__organization">유한킴벌리</p>
              <strong className="campaign__cont__title">
                꿀벌을 부르는 건강한 보금자리 만들기
              </strong>
              <span>밀원숲 조성 프로젝트 함께하기 👉</span>
            </div>
          </a>
        </div>
        <div className="campaign__card">
          <a href="/">
            <div className="campaign__img__wrap">
              <img
                src="assets/img/campaign03.png"
                alt="어렵고 힘든 일상 우리가 응원할게요"
              />
            </div>
            <div className="campaign__cont">
              <p className="campaign__cont__organization">부산도시공사</p>
              <strong className="campaign__cont__title">
                어렵고 힘든 일상 우리가 응원할게요
              </strong>
              <span>더블기부 참여하기 👉</span>
            </div>
          </a>
        </div>
        <div className="campaign__card">
          <a href="/">
            <div className="campaign__img__wrap">
              <img
                src="assets/img/campaign04.jpg"
                alt="아픈 아이 옆을 지키는 0.3평 엄마의 간이침대"
              />
            </div>
            <div className="campaign__cont">
              <p className="campaign__cont__organization">한국맥도날드</p>
              <strong className="campaign__cont__title">
                아픈 아이 옆을 지키는 0.3평 엄마의 간이침대
              </strong>
              <span>RMHC하우스를 지어요 👉</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
