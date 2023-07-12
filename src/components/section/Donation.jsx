import React, { useEffect, useRef, useCallback } from 'react';

const donationTitle = [
  {
    title: '꿈 많은 예준아, 엄마 아빠가 꼭 걷게 해줄게',
    org: '대한적십자사',
    percent: 70,
    money: 15291400,
    src: 'assets/img/donation01.jpg',
  },
  {
    title: '정전 70주년, 나는 아직도 가난과 전쟁 중입니다',
    org: '굿피플',
    percent: 15,
    money: 3187500,
    src: 'assets/img/donation02.jpg',
  },
  {
    title: '똑똑, 이웃들에게 여름 김치를 들고 안부를 전합니다',
    org: '반석종합사회복지관',
    percent: 30,
    money: 2454200,
    src: 'assets/img/donation03.png',
  },
  {
    title: '최악의 열차 참사, 인도는 떨고 있습니다',
    org: '사단법인 따뜻한하루',
    percent: 2,
    money: 225500,
    src: 'assets/img/donation04.jpg',
  },
];

function DonationCard({ title, org, percent, money, src }) {
  return (
    <div className="donation__card">
      <a href="/">
        <div className="donation__img__wrap">
          <img src={src} alt={title} />
        </div>
        <div className="donation__cont">
          <strong className="donation__cont__title">{title}</strong>
          <p className="donation__cont__organization">{org}</p>
          <div className="donation__cont__bar">
            {/* <span className="donation__cont__bar__progress"></span> */}
            <DonationProgress percent={percent} />
          </div>
          <div className="donation__cont__desc">
            <span>
              <em className="donation__cont__percent">{percent}</em>%
            </span>
            <p>
              {/* <em className="donation__cont__money">{money}</em> */}
              <DonationMoney money={money} />원
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

const DonationProgress = ({ percent }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    progressBarRef.current.style.transition = 'width 3s';
    progressBarRef.current.style.width = `${percent}%`;
  }, [percent]);

  return (
    <span ref={progressBarRef} className="donation__cont__bar__progress"></span>
  );
};

const DonationMoney = ({ money }) => {
  const moneyRef = useRef(null);
  // const maxNum = parseInt(money.replace(/,/g, ''), 10);
  const totalTime = 3000;

  const increaseNum = useCallback(
    (startTime, currentNum, money, moneyRef, totalTime) => {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / totalTime, 1);
      const currentDisplayNum = Math.round(money * progress);

      moneyRef.current.innerText = currentDisplayNum
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      if (progress < 1) {
        requestAnimationFrame(() =>
          increaseNum(startTime, currentNum, money, moneyRef, totalTime)
        );
      }
    },
    []
  );

  useEffect(() => {
    const start = performance.now();
    increaseNum(start, 0, money, moneyRef, totalTime);
  }, [increaseNum, money]);

  return (
    <em ref={moneyRef} className="donation__cont__money">
      {money}
    </em>
  );
};

const Donation = () => {
  return (
    <section id="donation" className="m70 container">
      <h3>
        <a href="/">100% 전달하는 기부</a>
      </h3>
      <div className="donation__card__wrap col4">
        {donationTitle.map((item, index) => (
          <DonationCard
            key={index}
            title={item.title}
            org={item.org}
            percent={item.percent}
            money={item.money}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Donation;
