import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="notice__wrap">
        <div className="notice__inner container">
          <h4 className="notice__title">공지사항</h4>
          <a href="/" className="notice__text">
            네이버 블로그 글 발행 시 콩 지급 변경 안내{' '}
            <i
              className="fa-sharp fa-solid fa-n fa-2xs"
              style={{ color: '#2DB400' }}
            ></i>
          </a>
        </div>
      </div>
      <div className="service__wrap">
        <div className="service__inner container">
          <div className="service">
            <h4 className="service__title">해피빈 안내</h4>
            <ul className="service__list">
              <li>
                <a href="/">해피빈 소개</a>
              </li>
              <li>
                <a href="/">콩받기 안내</a>
              </li>
              <li>
                <a href="/">해피빈 현황</a>
              </li>
              <li>
                <a href="/">콩쿠폰 입력</a>
              </li>
            </ul>
          </div>
          <div className="service">
            <h4 className="service__title">제휴∙단체 안내</h4>
            <ul className="service__list">
              <li>
                <a href="/">해피로그 가입</a>
              </li>
              <li>
                <a href="/">기업제휴 문의</a>
              </li>
              <li>
                <a href="/">펀딩 개설 신청</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info__wrap container">
        <div className="info__list">
          <ul>
            <li>
              <a href="/">해피빈 이용약관</a>
            </li>
            <li>
              <a href="/">개인정보처리방침</a>
            </li>
            <li>
              <a href="/">책임의 한계와 법적고지</a>
            </li>
            <li>
              <a href="/">고객센터</a>
            </li>
            <li>
              <a href="/">공익제보(행정안전부)</a>
            </li>
          </ul>
        </div>
        <div className="info__inner col2">
          <div className="info left">
            <ul>
              <li>
                <span>재단법인 해피빈</span>
              </li>
              <li>
                <span>대표자 유봉석</span>
              </li>
              <li>
                <span>경기도 성남시 분당구 황새울로 246, 5층</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>대표전화 : 1588-3820</span>
              </li>
              <li>
                <span>이메일 : happybean@navercorp.com</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>사업자등록번호 : 129-82-10367</span>
              </li>
              <li>
                <span>통신판매업신고 : 제2015-경기성남-1190호</span>
              </li>
            </ul>
          </div>
          <div className="info right">
            <ul>
              <li>
                <span>네이버 주식회사</span>
              </li>
              <li>
                <span>대표이사 최수연</span>
              </li>
              <li>
                <span>경기도 성남시 분당구 정자일로 95 NAVER 1784</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>대표전화 : 1588-3819</span>
              </li>
              <li>
                <span>이메일 : helpcustomer@naver.com</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>사업자등록번호 : 220-81-62517</span>
              </li>
              <li>
                <span>통신판매업신고 : 제2006-경기성남-0692호</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="info__notice">
          <p>
            (재)해피빈과 네이버(주)는 펀딩, 공감가게, 가볼까 프로젝트의 당사자가
            아닙니다. 프로젝트 진행 및 거래 등에 대한 책임은 해당 프로젝트의
            개설자에게 있습니다.
          </p>
        </div>
        <div className="info__copyright">
          <a href="/">
            <img src="assets/img/naver_logo.png" alt="NAVER" />
          </a>
          <span>Copyright © NAVER Corp. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
