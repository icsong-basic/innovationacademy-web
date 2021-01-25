import React, { useState } from "react";
import SnsLinks from "./SnsLinks";
import PrivacyPolicy from "./PrivacyPolicy";

interface Props {}

export default function Footer({}: Props) {
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-logo" />
          </div>
          <div className="row only-pc">
            <div className="col md-3">
              <a className="privacy-policy cursor-pointer" href="https://innovationacademy.kr/notice/4?board=4&post=129">
                개인정보처리방침
              </a>
              <p className="copyright">
                2019 Innovation Academy.<span className="only-pc"> All Rights reserved.</span>
              </p>
            </div>
            <div className="col md-6">
              <p className="contact">연락처</p>
              <div className="row contact-info">
                {/* 
                            <div className="col md-2">
                                <a href="tel:02-6203-3005">Tel. 02-6203-3002~3005</a>
                            </div>
                             */}
                <div className="col md-3">
                  <a href="mailto:qna@innovationacademy.kr">qna@innovationacademy.kr</a>
                </div>
              </div>
              {/*<ul className="navs">*/}
              {/*    {*/}
              {/*        routes.filter(({ showInNav }) => (showInNav)).map(({ name, path }, key) => (*/}
              {/*            <li key={key}>*/}
              {/*                <NavLink className="nav-item" to={path}>{name}</NavLink>*/}
              {/*            </li>*/}
              {/*        ))*/}
              {/*    }*/}
              {/*</ul>*/}
            </div>
            <div className="col md-3 link-container">
              <div className="site-select">
                <LinkSelectBox text="프로젝트" links={programLinks}></LinkSelectBox>
                <LinkSelectBox text="관련 사이트" links={relatedSiteLinks}></LinkSelectBox>
              </div>
              <SnsLinks size="footer" />
            </div>
          </div>
          <div className="only-mobile">
            <div className="row">
              <div className="col sm-6">
                <p
                  className="privacy-policy"
                  onClick={() => {
                    setOpenPrivacyPolicy(true);
                  }}
                >
                  개인정보처리방침
                </p>
                <p className="copyright">
                  2019 Innovation Academy.<span className="only-pc"> All Rights reserved.</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col sm-6">
                <p className="contact">연락처</p>
                <div className="row contact-info">
                  {/*                                 
                                <div className="col sm-3">
                                    <a href="tel:02-6203-3005">Tel. 02-6203-3002~3005</a>
                                </div>
                                 */}
                  <div className="col sm-3">
                    <a href="mailto:qna@innovationacademy.kr">qna@innovationacademy.kr</a>
                  </div>
                </div>
                {/*<ul className="navs">*/}
                {/*    {*/}
                {/*        routes.filter(({ showInNav }) => (showInNav)).map(({ name, path }, key) => (*/}
                {/*            <li key={key}>*/}
                {/*                <NavLink className="nav-item" to={path}>{name}</NavLink>*/}
                {/*            </li>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</ul>*/}
              </div>
            </div>
            <div className="row">
              <div className="col sm-6 link-container">
                <div className="site-select">
                  <LinkSelectBox text="프로젝트" links={programLinks}></LinkSelectBox>
                  <LinkSelectBox text="관련 사이트" links={relatedSiteLinks}></LinkSelectBox>
                </div>
              </div>
            </div>
            <SnsLinks size="footer" />
          </div>
        </div>
      </footer>
      {openPrivacyPolicy ? (
        <PrivacyPolicy
          onCloseRequest={() => {
            setOpenPrivacyPolicy(false);
          }}
        />
      ) : undefined}
    </>
  );
}

function LinkSelectBox({ text, links, children }: { text: string; links: { name: string; url: string }[]; children?: any }) {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div>
      <p
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
        className={menuOpened ? "minus" : "plus"}
      >
        {text}
        <i />
      </p>
      <ul className={"menu " + (menuOpened ? "" : "hidden")}>
        {links.map(({ name, url }, key) => (
          <li key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

const programLinks = [{ name: "42 Seoul", url: "https://42seoul.kr/" }];
const relatedSiteLinks = [
  { name: "과학기술정보통신부", url: "https://www.msit.go.kr/" },
  { name: "서울특별시", url: "https://www.seoul.go.kr/" },
  { name: "정보통신기획평가원", url: "https://www.iitp.kr/" },
];
