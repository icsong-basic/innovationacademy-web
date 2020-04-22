import React, { useState } from 'react'
import MapImg from '../assets/images/69@2x.jpg';
import Anchor from '../components/Anchor';
import API from '../apis';

interface Props {

}

export default function ContactPage({ }: Props) {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');


    const clickNewsLetter = () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);
        API.accountController.registerMailing(email.trim())
            .then(function (response) {
                alert('메일링 등록 성공');
                setEmail('');

            })
            .catch(function (error) {
                alert('메일링 등록 실패');

            })
            .finally(function () {
                setIsLoading(false);
            });
    };

    const onChangeEmailInput = (e: any) => {
        console.log((e.target as HTMLInputElement).value);
        setEmail((e.target as HTMLInputElement).value);

    };

    return (
        <div className="contact-page page-top-padding">
            <div className="container">
                <div className="row">
                    <div className="col md-3 side-container">
                        <h2>Contact<i /></h2>
                        <p>
                            {/*                             
                            Tel<br />
                            <a href="tel:02-6203-3005">02-6203-3002~3005</a><br />
                            <br />
                             */}
                            Email<br />
                            <a href="mailto:qna@innovationacademy.kr">qna@innovationacademy.kr</a>
                        </p>
                    </div>
                    <div className="col md-9 content-container">
                        <Anchor id="location" />
                        <p>
                            Location
                        </p>
                        <p className="address bold">서울특별시 강남구 개포로 416<br className="only-mobile" /> 개포디지털혁신파크</p>
                        <img className="map-img" src={MapImg} />
                    </div>
                </div>
                <div className="row">
                    <div className="col md-3 side-container">
                        <h2>뉴스레터<i /></h2>
                        <p className="only-pc">
                            Newsletter<br />
                            <span className="bold">Innovation Academy</span>
                        </p>
                    </div>
                    <div className="col md-9 content-container">
                        <Anchor id="newsletter" />
                        <p className="newsletter-description">이메일 주소로 뉴스레터를 신청하면,<br className="only-pc" /> 이노베이션 <br className="only-mobile" />아카데미가 제작한 뉴스레터를 보내드립니다.</p>
                        <i className="arrow-down" />
                        <div className="newsletter-form row">
                            <div className="col md-4">
                                <input placeholder="이메일 주소를 입력해주세요" value={email} onChange={onChangeEmailInput} />
                            </div>
                            <div className="col md-2">
                                <button onClick={clickNewsLetter} disabled={isLoading}>뉴스레터 신청하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
