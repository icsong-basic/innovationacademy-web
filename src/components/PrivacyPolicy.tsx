import React from 'react'

interface Props {
    onCloseRequest: any
}

export default function PrivacyPolicy({ onCloseRequest }: Props) {
    return (
        <div className="dim">
            <div className="popup">
                <div className="content">
                    {text}
                </div>
                <button className="close-btn" onClick={onCloseRequest}>닫기</button>
            </div>
        </div>
    )
}

const text = <div className="privacy-policy">

    <div >

        <h2 className="align-center" ><a></a><b><span >개인정보처리방침</span></b></h2>

    </div>

    <p className="MsoNormal align-center" ><b><span >이노베이션
    아카데미(이하 '재단')은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수
있도록 다음과 같은 처리방침을 두고 있습니다.</span></b></p>

    <p className="MsoNormal align-center" ><b><span >본 방침은 2019년 11월 25일부터 시행됩니다.</span></b></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal" ><b><span >1. 개인정보의 처리 목적
및 항목</span></b></p>

    <p className="MsoNormal"><span >재단은 개인정보를 다음의 목적을
위해 처리합니다. 재단은 운영에 필요한 최소한의 개인정보 항목을 처리하고 있습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >웹진, 또는 뉴스레터 등 정보 제공 용도</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >이메일 수집</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >홈페이지 이용과정에서
아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >IP
Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량정보</span></p>

    <p className="MsoNormal"><span >재단이&nbsp; 처리하는 이용자정보의 목적과 항목이 변경될 경우에는 관련법령에 따라 사전에 동의를 요청합니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><span >재단은 각종 행사 및 프로그램 신청양식, 이벤트 응모, 문의응대, 전화, 이메일로 개인정보를 추가적으로 수집할
수 있습니다. 이러한 경우, 관련 법령에 따라 별도의 수집 동의서 등으로 사용자의 동의를 요청합니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal" ><b><span >2. 개인정보의 처리 및
보유 기간</span></b></p>

    <p className="MsoNormal" ><span >재단은 이용자로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간
    내에서 개인정보를 처리․보유합니다. 재단은 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 아래 법령에서 일정 기간 정보보관
의무를 부과하는 경우에는 해당 기간 동안 동의 내용 또는 법령의 규정의 내용 및 목적에 맞게 개인정보를 안전하게 보관합니다.</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-1"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >뉴스레터
구독자 정보</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-2"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >보존근거:
내부 관리 기준</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-2"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >보존기간:
뉴스레터 운영기간 동안 보관</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-1"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >프로그램
참가자 정보</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-2"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >보존근거:
내부 관리 기준</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-2"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >보존기간:
프로그램 운영기간 동안 보관</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-1"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >웹사이트
방문기록</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-2"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >보존근거:
통신비밀보호법</span></p>

    <p className="MsoNormal" ><span ><span className="list depth-2"></span><span >&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span >보존기간:
3개월</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal" ><b><span >3. 개인정보의 제3자 제공에
관한 사항</span></b></p>

    <div >

        <p className="MsoNormal" ><span >재단은 개인정보 제3자 제공이 필요할 경우에는 관련법령에
따라 사전에 동의를 요청합니다. 이용자의 요청시 재단은 즉각적으로 내부 절차에 따라 제공받는 자, 제공 목적, 항목 등 필요한 해당사항을 제공하겠습니다.</span></p>

        <p className="MsoNormal" ><span >&nbsp;</span></p>

        <p className="MsoNormal" ><span >요청 연락처:
qna@innovationacademy.kr</span></p>

        <p className="MsoNormal" ><span >재단은 다음의 경우 이용자의 동의 없이 제3자에게
개인정보를 제공할 수 있습니다.</span></p>

    </div>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소,
전화번호)를 알려주는 경우. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >통계작성, 학술연구, 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할
수 없는 형태로 제공하는 경우. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >관계법령에 의하여 국가기관으로부터 요구 받은 경우. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >범죄에 대한 수사상의 목적이 있거나, 정보통신 윤리위원회의 요청이 있는 경우.
</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >기타 관계법령에서 정한 절차에 따른 요청이 있는 경우. </span></p>

    <p className="MsoNormal" ><span >&nbsp;</span></p>

    <p className="MsoNormal"><span >이용자는 언제든지 재단이 가지고
있는 자신의 개인정보에 대해 열람 및 오류정정을 할 수 있습니다. </span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><span >재단으로부터 개인정보를 제공받은
제 3자는 개인정보를 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><b><span >4. 개인정보처리 위탁</span></b></p>

    <p className="MsoNormal"><span >재단은 프로그램 및 재단 운영에
    반드시 필요한 일부 업무에 대한 개인정보 처리를 사전 동의 후 외부 전문업체에 위탁 할 수 있습니다. 이용자의 요청 시 재단은 즉각적으로 내부
절차에 따라 제공받는 자, 제공 목적, 항목 등 필요한 해당사항을 제공하겠습니다. </span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><span >요청 연락처: </span><span >qna@innovationacademy.kr</span><span > </span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><span >재단은 위탁계약 체결 시 관련법령에
    따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적, 관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리 및 감독, 손해배상 등 책임에 관한
    사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체
없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><b><span >5. 이용자의 권리와 의무 및 그 행사방법</span></b></p>

    <p className="MsoNormal"><span >이용자는 개인정보주체로서 다음과
같은 권리를 행사할 수 있습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >이용자 및 법정대리인은 이용자 본인 혹은 당해 만 14세 미만자의 개인정보
관련하여, 다음과 같은 권리를 행사할 수 있습니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >이용자는 개인정보처리담당부서에 서면, 전자우편, 모사전송(FAX) 등을 통하여
개인정보에 대한 열람, 정정, 처리의 정지 및 삭제를 요구 할 수 있습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >이용자 권리 행사(열람, 정정, 처리정지, 삭제)는 이용자의 법정대리인이나
위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출해야 합니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >재단은 개인정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의
요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >이용자 및 법정대리인이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
    완료하기 전까지 당해 개인정보를 이용 또는 제3자에게 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
제3자에게 지체 없이 통지하겠습니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >이용자는 개인정보주체로서 다음과 같은 의무를 가집니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 부정확한 정보 입력으로
발생하는 문제의 책임은 이용자 자신에게 있습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >이용자는 자신의 개인정보에 대한 보안을 유지할 책임이 있으며 제3자에게 이를
양도하거나 대여할 수 없습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >타인의 개인정보를 도용하여 서비스 이용 시 자격 상실과 함께 관계법령에 의거하여
처벌될 수 있습니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal" ><b><span >6. 개인정보의 파기</span></b></p>

    <p className="MsoNormal"><span >재단은 원칙적으로 개인정보 처리목적이
달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차 및 방법은 다음과 같습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >파기절차</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >이용자가 입력한 정보는 목적 달성 후 즉시 파기됩니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >파기방법 </span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >종이에 출력된 개인정보는 파쇄기를 통하여 파기합니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><b><span >7. 개인정보 자동 수집 장치의 설치와 운영 및 거부에 관한 사항</span></b></p>

    <p className="MsoNormal"><span >재단은 이용자에게 맞춤서비스를
    제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가
이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자 PC 컴퓨터의 하드디스크에 저장되기도 합니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >쿠키의 사용목적: 이용자에게 최적화된 정보 제공을 위해 사용됩니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >Internet Explorer의 경우 : 웹브라우저 상단의 도구&gt;인터넷
옵션&gt;개인정보 메뉴의 옵션 설정</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >Microsoft Edge의 경우 : 웹브라우저 상단 메뉴 &gt; 설정
&gt; 고급 설정 보기 &gt; 쿠키 메뉴의 옵션 설정</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >Chrome의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급
&gt; 콘텐츠 설정 &gt; 쿠키 메뉴의 옵션 설정 </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><b><span >8. 개인정보보호책임자 및 담당부서 안내</span></b></p>

    <p className="MsoNormal"><span >재단은 개인정보 처리에 관한
    업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해 구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.
</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >개인정보보호 책임자</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >성명 : 이민석</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >직책 : 학장</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >연락처 : </span><span ><a href="mailto:qna@innovationacademy.kr"><span >qna@innovationacademy.kr</span></a></span></p>

    <p className="MsoNormal" >■<span >개인정보보호 담당자로 연결됩니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >이용자는 재단 서비스를 이용하면서 발생한 모든 개인정보보호 관련 문의, 불만처리,
피해구제 등에 관한 사항을 개인정보보호책임자 및 담당부서로 문의하실 수 있습니다. 재단은 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal"><b><span >9. 개인정보의 안전성 확보 조치</span></b></p>

    <p className="MsoNormal"><span >재단은 개인정보보호법 제29조에
따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다. </span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >개인정보 취급 직원의 최소화 및 교육</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를
관리하는 대책을 시행 하고 있습니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >내부관리계획의 수립 및 시행</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >해킹 등에 대비한 기술적 대책</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >재단은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기
    위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고
있습니다.</span></p>

    <p className="MsoNormal" ><span className="list depth-1"></span><span >개인정보에 대한 접근 제한</span></p>

    <p className="MsoNormal" ><span className="list depth-2"></span><span >개인정보를 처리하는 개인정보처리시스템에 대한 접근권한의 부여, 변경, 말소를
통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있습니다.</span></p>

    <p className="MsoNormal"><span >&nbsp;</span></p>

    <p className="MsoNormal" ><b><span >10. 개인정보처리방침 변경에
관한 사항</span></b></p>

    <p className="MsoNormal"><span >이 개인정보처리방침은 시행일로부터
    적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 홈페이지 공지사항을 통하여 고지할
것입니다.</span></p>

</div>