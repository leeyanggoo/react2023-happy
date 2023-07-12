import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div className="header__wrap container">
        <h1 className="blind">해피빈</h1>
        <div className="header__title">
          {/* <a href="https://happybean.naver.com/" className="happybean_logo"> */}
          <a href="/" className="happybean_logo">
            <img src="assets/img/happybean_logo.svg" alt="happybean" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">기부</a>
            </li>
            <li>
              <a href="/">펀딩</a>
            </li>
            <li>
              <a href="/">공감가게</a>
            </li>
            <li>
              <a href="/">가볼까</a>
            </li>
            <li>
              <a href="/">굿액션</a>
            </li>
          </ul>
        </nav>
        <div className="header__btn">
          <a href="/">로그인</a>
          <span>|</span>
          <a href="/" className="saerch">
            <span className="blind">검색</span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
