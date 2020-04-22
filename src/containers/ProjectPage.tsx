import React from 'react'
import SnsLinks from '../components/SnsLinks'
import NextLink from "../components/NextLink";
import Anchor from '../components/Anchor';

interface Props {

}

export default function ProjectPage({ }: Props) {
    return (
        <div className="project-page page-top-padding">
            <section className="top container">
                <h1 className="page-title">Project</h1>
                <h2 className="page-subtitle only-pc">
                    이노베이션 아카데미는 대한민국의 미래를 위해<br />다양한 프로젝트를 진행하고 있습니다.
                </h2>
                <h2 className="page-subtitle only-mobile">
                    이노베이션 아카데미는<br />대한민국의 미래를 위해 다양한<br />프로젝트를 진행하고 있습니다.
                </h2>
                <div className="arr-down only-mobile" />
            </section>
            <section className="business _42seoul">
                <Anchor id="_42seoul" />
                <div className="container">
                    <div className="business-name">
                        <h1>42 SEOUL</h1>
                        <p>소프트웨어 교육 프로그램</p>
                        <a className="service-link" href="https://42seoul.kr" target="_blank" rel="noopener noreferrer">
                            42 SEOUL 바로가기
                        </a>
                        <SnsLinks />
                    </div>
                    <div className="business-description">
                        <h2>새로운 소프트웨어 <br className="only-mobile" />교육 프로그램, 42 SEOUL</h2>
                        <p>
                            42 SEOUL은 가르치는 교수도, 정해진 교재도, 비싼 학비도 없습니다. 심지어 학위도 없습니다. <br />
                            <br />
                            42 SEOUL은 단순 지식을 가르치는 곳이 아닙니다. 소프트웨어에 대한 경험을 나누는 방법, 멋진 동료와 협업하는 방법, 누군가를 위해 본인의 경험을 공유하는 방법을 배웁니다. 그리고 배우는 방법을 배웁니다.<br />
                            <br />
                            최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다.
                        </p>
                    </div>
                </div>
            </section>
            <section className="business _projectx">
                <Anchor id="projectx" />
                <div className="container">
                    <div className="business-name">
                        <h1>PROJECT-X</h1>
                        <p>오픈소스기반 교육 시스템</p>
                    </div>
                    <div className="business-description">
                        <h2>오픈소스로 구현되는<br className="only-mobile" /> 지속가능한 혁신 교육 시스템, PROJECT-X</h2>
                        <p>
                            PROJECT-X는 교육 현장과 산업계, 커뮤니티 등 생태계 구성원 모두가 함께 만들고 함께 사용하는 시스템입니다.<br />
                            <br />
                            지금 소프트웨어 교육은 비용 관점의 예측 가능성이 낮습니다. 또 교육이 강의에 의존하는데 따른 확장성의 한계도 있습니다. 그래서 교육 투자에 머뭇거림이 생기거나, 단기적 투자에 머물게 되며, 결과적으로 국가적 소프트웨어 인력 수요를 감당하지 못하고 있습니다.<br />
                            <br />
                            이러한 문제를 해결하기 위해, 이노베이션 아카데미는 42 SEOUL 등에서 얻은 경험과 데이터, 그리고 IT 기술을 활용하여 예측 가능하고, 지속적이며, 다양한 분야로 확장될 수 있는 오픈소스기반 교육 시스템 PROJECT-X를 준비하고 있습니다.
                        </p>
                    </div>
                </div>
            </section>
            <section className="business _software">
                <Anchor id="software" />
                <div className="container">
                    <div className="business-name">
                        <h1>소프트웨어<br />생태계 지원 사업</h1>
                    </div>
                    <div className="business-description">
                        <h2>변화된 미래를 위한 소프트웨어 생태계 지원 사업</h2>
                        <p>
                            우리는 세상 모든 곳에 소프트웨어가 사용되는 시대에 살고 있습니다. 사회 모든 분야에서 소프트웨어가 사용되고 있고, 많은 사람과 기업이 소프트웨어로 일을 하고 있습니다.<br />
                            <br />
                            이노베이션 아카데미는 세상의 모든 기업들이 소프트웨어로 예측하고, 협력하고, 결정하며, 성장하는 미래를 생각합니다. 그리고 이를 위해 교육 현장과 개발자 생태계 그리고 기업을 잇는 소프트웨어 생태계 구축을 위해 다양한 활동을 준비하고 있습니다.<br />
                            <br />
                            훌륭한 소프트웨어 개발자가 꿈을 펼칠 수 있는 건강한 소프트웨어 생태계를 위해 이노베이션 아카데미가 함께 합니다.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <NextLink title="Notice" description={"이노베이션 아카데미가 제공하는 정보"} link={"/notice"} />
                </div>
            </section>
        </div>
    )
}
