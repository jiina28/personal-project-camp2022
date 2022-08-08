import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faUserLarge, faStar, faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

export default function Info() {
    let today = dayjs();
    let birth = dayjs("1999.08.28");
    let d_day = today.diff(birth, "day", true);
    d_day = Math.floor(d_day);
    let years = d_day / 365;
    years = Math.ceil(years);

    return (
        <div className="flex h-full flex-col justify-center items-center m-40">
            <h1 className="text-3xl mb-5 font-bold">About me</h1>
            <div className='text-left'>
                <p className="text-2xl my-3 mb-5 bg-pink-200/40"><FontAwesomeIcon icon={faUserLarge} size='xs' /> Who am I?</p>
                <div className='text-center'>
                    <p className="text-xl my-2 hover:bg-gray-200/40">최진아, 崔眞雅</p>
                    <p className="text-xl my-2">태어난 지 <div style={{ display: 'inline' }} className="hover:bg-gray-200/40">{d_day}일, {years}살</div></p>
                    <p className="text-xl my-2 hover:bg-gray-200/40">8월 28일</p>
                    <p className="text-xl my-2 hover:bg-gray-200/40">한동대학교 컴퓨터공학심화</p>
                    <p className="text-xl my-2 mb-5 hover:bg-gray-200/40">ENFJ</p>
                </div>

                {/*
            2. 프로젝트 이력 (논문 포함)
            3. 대내외 활동 (수상, 자격증 포함)
            4. skill set
            */}
                <p className="text-2xl my-3 mb-5 bg-pink-200/40"><FontAwesomeIcon icon={faListCheck} size='xs' /> Project</p>
                <div className='text-center'>
                    <div className='mt-5 hover:bg-gray-200/40'>
                        <p className="text-xl font-bold">i-taxi 2019 리뉴얼</p>
                        <p className="text-xm">(2019.07 ~ 2019.08)</p>
                        <p className="text-xm">한동대 학생들을 위한 택시팟, 카풀팟 매칭 앱인 i-taxi를 React Native를 사용하여 리뉴얼</p>
                        <p className="text-xm">React Native</p>
                    </div>

                    <div className='mt-5 hover:bg-gray-200/40'>
                        <p className="text-xl font-bold">i-taxi 3.0 리뉴얼</p>
                        <p className="text-xm">(2021.01 ~ 2021.02)</p>
                        <p className="text-xm">한동대 학생들을 위한 택시팟, 카풀팟 매칭 앱인 i-taxi를 Flutter를 사용하여 리뉴얼</p>
                        <p className="text-xm">Flutter</p>
                        <Link href='https://github.com/JangJuMan/iTaxi3.0' passHref><FontAwesomeIcon icon={faGithub} size='xl' /></Link>
                    </div>

                    <div className='mt-5 hover:bg-gray-200/40'>
                        <p className="text-xl font-bold">AR 서비스를 위한 MPEG-DASH 기반 포인트 클라우드 스트리밍 시스템</p>
                        <p className="text-xm">(2021.03 ~ 2021.12)</p>
                        <p className="text-xm">여러 오픈소스를 활용하여 포인트 클라우드 스트리밍 시스템 개발</p>
                        <p className="text-xm">C++, C, Linux, MPEG-DASH, Libdash, Open3D, Multi-Thread</p>
                        <p className='space-x-3'>
                            <Link href='https://github.com/rudals0215/AR-streaming-with-MPEG-DASH' passHref><FontAwesomeIcon icon={faGithub} size='xl' /></Link>
                            <Link href='https://drive.google.com/file/d/1UVG35gHxOXi2hosHiYko2qZ7wllOz_hf/view?usp=sharing' passHref><FontAwesomeIcon icon={faCopy} size='xl' /></Link>
                        </p>
                    </div>

                    <div className='my-5 hover:bg-gray-200/40'>
                        <p className="text-xl font-bold">Smapp</p>
                        <p className="text-xm">(2022.01 ~ 2022.02)</p>
                        <p className="text-xm">전공에 관계없이 다양한 사람들과 원하는 과목의 스터디를 할 수 있도록 매칭해주는 ios 앱</p>
                        <p className="text-xm">Swift, SwiftUI, Firebase</p>
                        <Link href='https://github.com/MASEOKJAE/Smapp' passHref><FontAwesomeIcon icon={faGithub} size='xl' /></Link>
                    </div>

                    <div className='my-5 hover:bg-gray-200/40'>
                        <p className="text-xl font-bold">TriPlanit</p>
                        <p className="text-xm">(2022.08 ~ ing)</p>
                        <p className="text-xm">사용자 기반 여행 플래너 및 여행지 추천 웹사이트</p>
                        <p className="text-xm">Nextjs, Django, HTML, CSS</p>
                        <Link href='https://github.com/soo24/triplanit' passHref><FontAwesomeIcon icon={faGithub} size='xl' /></Link>

                    </div>
                </div>
                <p className="text-2xl my-3 mb-5 bg-pink-200/40"><FontAwesomeIcon icon={faStar} size='xs' /> Activity</p>
                <div className='text-center'>
                    <div className='mt-5 hover:bg-gray-200/40'>
                    <p className="text-xl font-bold">2018</p>
                        <p className="text-xm">2018.02 한동대학교 입학</p>
                        <p className="text-xm">2018.09 ~ 2018.12 한동대학교 자치회 소통국</p>
                    </div>

                    <div className='mt-5 hover:bg-gray-200/40'>
                    <p className="text-xl font-bold">2019</p>
                    <p className="text-xm">2019.03 ~ ing CRA 전산 동아리</p>
                    <p className="text-xm">2019.03 ~ 2018.06 기숙사 RC RA</p>
                        <p className="text-xm">제 12회 사랑의 마라톤 총무팀</p>
                        <p className="text-xm">SW Festival 소프트웨어 부문 - 최우수상</p>
                    </div>

                    <div className='mt-5 hover:bg-gray-200/40'>
                    <p className="text-xl font-bold">2020</p>
                    <p className="text-xm">2020.11 ~ ing 경북 SW미래채움 코딩 교육 강사</p>
                    </div>

                    <div className='mt-5 hover:bg-gray-200/40'>
                    <p className="text-xl font-bold">2021</p>
                    <p className="text-xm">MCNL 랩실 소속 연구 (캡스톤, RA)</p>
                    </div>

                    <div className='mt-5 hover:bg-gray-200/40'>
                    <p className="text-xl font-bold">2022</p>
                    <p className="text-xm">캡스톤 연구 논문 - 김낙현, 차경민, 최진아, 고윤민*, 『AR 서비스를 위한 MPEG-DASH 기반 포인트 클라우드 스트리밍 시스템』 </p>
                    <p className="text-xm">한국통신학회 2022 동계 학술 발표회</p>
                    <p className="text-xm">2022.07.16 ~ 07.24 인도네시아 IT 단기 교육 선교 봉사</p>
                    </div>
                </div>
                <p className="text-2xl my-3 mb-5 bg-pink-200/40"><FontAwesomeIcon icon={faCode} size='xs' /> Language Skill</p>
                <div className="grid grid-cols-5 grid-flow-row gap-4">
                <Image
                            src="/c++.png"
                            alt="c++"
                            width={100}
                            height={100}
                            
                        />
                <Image
                            src="/c language.png"
                            alt="c"
                            width={100}
                            height={100}
                            
                        />
                        <Image
                            src="/Swift_logo.png"
                            alt="swift"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="/react.png"
                            alt="react"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="/flutter.png"
                            alt="flutter"
                            width={100}
                            height={100}
                        />
                        </div>
            </div>

        </div>
    );
}
