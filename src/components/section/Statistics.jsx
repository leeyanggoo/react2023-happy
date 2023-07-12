import React from 'react';

const Statistics = () => {
  return (
    <section id="statistics">
      <div className="statistics__wrap container">
        <div className="statistics__title">
          <h3>오늘의 참여현황</h3>
          <span>여러분의 응원이 이만큼 모였어요</span>
        </div>
        <div className="statistics__list">
          <div className="join__donation">
            <div>
              <span>기부 참여</span>
              <div>
                <strong className="today__people">7142</strong>
                <em>명</em>
              </div>
            </div>
            <div>
              <span>기부 금액</span>
              <div>
                <strong className="today__money">30974000</strong>
                <em>원</em>
              </div>
            </div>
          </div>
          <div className="join__funding">
            <div>
              <span>펀딩 참여</span>
              <div>
                <strong className="today__people">246</strong>
                <em>명</em>
              </div>
            </div>
            <div>
              <span>참여 금액</span>
              <div>
                <strong className="today__money">9358100</strong>
                <em>원</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
