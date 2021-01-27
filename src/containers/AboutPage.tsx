import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgVision from "../assets/images/img_about_vision.svg";
import ImgVisionMobile from "../assets/images/img-mobile-about-vision.svg";

import AboutBI1Img from "../assets/images/img-about-logo-primary.svg";
import AboutBI2Img from "../assets/images/img-about-logo-variation.svg";

import ImgTeam from "../assets/images/img_about_team.png";
import ImgTeamMobile from "../assets/images/img_mobile_about_team@2x.png";
import NextLink from "../components/NextLink";
import Anchor from "../components/Anchor";
import utils from "../utils";
import LeftSideNavigator from "../components/LeftSideNavigator";

import ImgArrow from "../assets/images/ic-arrow-large.svg";
import ImgHex from "../assets/images/ic-hexagon-16-px.svg";

interface Props {}

export default function AboutPage({}: Props) {
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const onScroll = (e: any) => {
    const appbarEl = document.getElementById("appbar") as HTMLElement;

    const sectionWrap = document.getElementById("section-wrap");
    if (!sectionWrap) {
      return;
    }

    const sections = sectionWrap.children;
    let lastSectionIndex = 0;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      if (utils.getScrollTop() + appbarEl.clientHeight + 1 >= section.offsetTop) {
        lastSectionIndex = i;
      }
    }
    setSectionIndex(lastSectionIndex);
  };

  const summarySection = (
    <section className="summary" style={{ display: "none" }}>
      <Anchor id="summary" />
      <h3 className="section-title">설립 개요</h3>
      <table className="no-border-bottom">
        <tbody>
          <tr>
            <td>
              법인명 : 재단법인 이노베이션아카데미
              <br />
              고유번호 : 757-82-00285
            </td>
            <td>
              설립년원일 : 2019. 08. 01.
              <br />
              대표 : 이민석
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );

  return (
    <div className="about-page page-top-padding" id="about-page">
      <div className="container">
        <div className="row">
          <div className="page-tilte margin-left-md-3">
            <h1>About</h1>
            <h2>Innovation Academy</h2>
          </div>
        </div>
        <div className="row">
          <div className="only-pc col md-3 position-relative">
            <LeftSideNavigator
              topStartElementId="section-wrap"
              className="about-navigator"
              pageId="about-page"
              id="about-navigator"
              nextPageButtonId="project-link"
            >
              <Link replace className={sectionIndex == 0 ? "selected" : ""} to="#purpose">
                설립 목적
              </Link>
              <br />
              {/* <Link replace className={sectionIndex == 1 ? 'selected' : ''} to="#summary">설립 개요</Link><br /> */}
              <Link replace className={sectionIndex == 1 ? "selected" : ""} to="#history">
                주요 연혁
              </Link>
              <br />
              <Link replace className={sectionIndex == 2 ? "selected" : ""} to="#bi">
                재단 BI
              </Link>
              <br />
              <Link replace className={sectionIndex == 3 ? "selected" : ""} to="#organization">
                조직도
              </Link>
              <br />
              <a target="_blank" href="https://whitepaper.innovationacademy.kr/">
                백서
              </a>
            </LeftSideNavigator>
          </div>
          <div className="col md-9 sm-6" id="section-wrap">
            <section className="purpose">
              <Anchor id="purpose" />
              <h3 className="only-mobile section-title">설립 개요</h3>
              <h3>
                이노베이션 아카데미는
                <br />
                소프트웨어로 대한민국의 <br className="only-mobile" />
                미래를 준비합니다.
              </h3>
              <p className="only-pc">
                이노베이션 아카데미는 소프트웨어 인재 양성과 소프트웨어 산업 발전에 기여함을 목적으로 2019년에 설립된 비영리 재단입니다.
                <br />
                우리는 혁신적인 소프트웨어 교육 프로그램인 42 SEOUL을 시작으로 누구나 소프트웨어 개발자에 도전할 수 있는 기회와 환경을 제공합니다.
                <br />
                이노베이션 아카데미는 대한민국 모든 곳에서 미래를 위한 교육 혁신이 이뤄지길 바라며, 이를 위해 우리의 경험과 데이터를 바탕으로 교육 시스템의
                새로운 모델을 제시하고자 합니다.
                <br />
                <br />
                소프트웨어 개발자들의 도전과 혁신이 만들어갈 변화와 미래.
                <br />
                이노베이션 아카데미는 소프트웨어로 대한민국의 미래를 준비합니다.
              </p>
              <p className="only-mobile">
                이노베이션 아카데미는 소프트웨어 인재 양성과 소프트웨어 산업 발전에 기여함을 목적으로 2019년에 설립된 비영리 재단입니다.
                <br />
                <br />
                우리는 혁신적인 소프트웨어 교육 프로그램인 42 SEOUL을 시작으로 누구나 소프트웨어 개발자에 도전할 수 있는 기회와 환경을 제공합니다.
                <br />
                <br />
                이노베이션 아카데미는 대한민국 모든 곳에서 미래를 위한 교육 혁신이 이뤄지길 바라며, 이를 위해 우리의 경험과 데이터를 바탕으로 교육 시스템의
                새로운 모델을 제시하고자 합니다.
                <br />
                <br />
                소프트웨어 개발자들의 도전과 혁신이 만들어갈 변화와 미래.
                <br />
                <br />
                이노베이션 아카데미는 소프트웨어로 대한민국의 미래를 준비합니다.
              </p>
              <img src={ImgVision} className="only-pc" style={{ marginTop: "5.37rem" }} />
              <img src={ImgVisionMobile} className="only-mobile" />
            </section>
            <section className="history">
              <Anchor id="history" />
              <h3 className="section-title">주요 연혁</h3>
              <table>
                <tbody>
                  <tr>
                    <th>18년 8월</th>
                    <td>
                      ‘혁신성장 관계장관회의’ 안건
                      <br className="only-pc" />
                      (‘혁신성장 전략 투자방향’) 상정
                      <br />
                      국무회의 안건 (이노베이션 아카데미 추진방안’) 상정
                    </td>
                  </tr>
                  <tr>
                    <th>19년 2월</th>
                    <td>과기정통부-서울시 업무협약(서울시 입지 제공) 체결</td>
                  </tr>
                  <tr>
                    <th>19년 3월-7월</th>
                    <td>이노베이션 아카데미 설립추진단 구성 및 운영</td>
                  </tr>
                  <tr>
                    <th>19년 6월</th>
                    <td>1대 학장(이민석 교수) 선발</td>
                  </tr>
                  <tr>
                    <th>19년 7월</th>
                    <td>이노베이션 아카데미 재단 창립총회 개최</td>
                  </tr>
                  <tr>
                    <th>19년 8월</th>
                    <td>
                      이노베이션 아카데미 재단 설립
                      <br />
                      이노베이션 아카데미 창립이사회 개최
                    </td>
                  </tr>
                  <tr>
                    <th>19년 11월</th>
                    <td>소프트웨어 교육프로젝트 ‘42 SEOUL’ 교육생 선발</td>
                  </tr>
                  <tr>
                    <th>19년 12월</th>
                    <td>이노베이션 아카데미 개소식</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="bi">
              <Anchor id="bi" />
              <h3 className="section-title only-pc">이노베이션 아카데미 BI</h3>
              <h3 className="section-title only-mobile">재단 BI</h3>
              <div className="bi-txt-container">
                <p>
                  이노베이션 아카데미는 창의성, 안정성, 확장성을 중요하게 생각합니다.
                  <br />
                  이노베이션 아카데미 BI는 이러한 생각을 담아 제작되었습니다.
                </p>
                <div className="button-container">
                  <a download target="_blank" rel="noopener noreferrer" href="https://innovationacademy.s3.ap-northeast-2.amazonaws.com/bi/ai.zip">
                    <button>AI 다운로드</button>
                  </a>
                  <a download target="_blank" rel="noopener noreferrer" href="https://innovationacademy.s3.ap-northeast-2.amazonaws.com/bi/jpg.zip">
                    <button>JPG 다운로드</button>
                  </a>
                </div>
              </div>
              <div className="bi-img-container">
                <div>
                  <p>Primary Signature</p>
                  <img src={AboutBI1Img} />
                </div>
                <div>
                  <p>Variation Signature</p>
                  <img src={AboutBI2Img} />
                </div>
              </div>
            </section>
            <section className="organization">
              <Anchor id="organization" />
              <h3 className="section-title only-pc">이노베이션 아카데미 조직도</h3>
              <h3 className="section-title only-mobile">조직도</h3>
              <img src={ImgTeam} className="only-pc" style={{ marginTop: "5.6rem" }} />
              <img src={ImgTeamMobile} className="only-mobile" />
            </section>
          </div>
        </div>
        <div>
          <a
            href="https://whitepaper.innovationacademy.kr/"
            target="_blank"
            className="next-link project-link only-mobile"
            id="whitepaper-link"
            style={{ display: "block" }}
          >
            <p className="title">백서</p>
            <p className="desc"></p>
            <div className="link">
              <img className="arrow" src={ImgArrow} />
              <img className="hexagon" src={ImgHex} />
            </div>
          </a>
        </div>
        <NextLink id="project-link" className="project-link" title="Project" description={"이노베이션 아카데미 진행 프로젝트"} link={"/project"} />
      </div>
    </div>
  );
}
