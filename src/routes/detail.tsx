import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router';

const MotionNav = motion.create(NavLink);

const DetailPage = () => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col h-dvh w-full relative">
      <header className="flex items-center flex-col fixed top-0 z-[2]">
        <img src="/status.webp" alt="bg" className="w-full object-cover z-[1]" />

        <div className="px-4 h-14 w-full flex items-center justify-between">
          <button type="button" onClick={() => navigation(-1)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>뒤로가기</title>
              <path
                d="M18.6673 23.3337L9.33398 14.0003L18.6673 4.66699"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>저장하기</title>
              <path
                d="M14.3449 4.93241L16.3808 11.499H22.9649C23.3198 11.499 23.4693 11.9807 23.1797 12.1969L17.8564 16.2568L19.8924 22.8234C20.0044 23.1773 19.6122 23.482 19.3227 23.2559L13.9993 19.1961L8.67603 23.2559C8.38651 23.4722 7.99427 23.1773 8.10634 22.8234L10.1423 16.2568L4.81895 12.1969C4.52944 11.9807 4.67887 11.499 5.03375 11.499H11.6179L13.6538 4.93241C13.7659 4.57852 14.2328 4.57852 14.3449 4.93241Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="fixed top-0 left-0 aspect-square w-dvw flex items-end p-5 pb-8">
        <img src="/banner.webp" alt="banner" className="w-full object-cover absolute top-0 left-0" />
        <div className="w-full backdrop-blur-lg bg-white/20 rounded-2xl text-white p-5 flex flex-col">
          <div className="flex justify-between">
            <span className="text-[16px]">박말자님 가옥</span>
            <span className="text-[14px]">총 201,600원/1달</span>
          </div>
          <p className="text-[12px] inline-flex items-center gap-1">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>주소</title>
              <path
                d="M9.71094 2.4375C12.5405 2.4375 14.7733 4.87301 14.7734 7.7998C14.7734 9.2925 14.138 10.6082 13.2607 11.8232C12.3897 13.0296 11.2283 14.2037 10.1211 15.3848C10.0148 15.4981 9.86636 15.5625 9.71094 15.5625C9.55552 15.5625 9.40711 15.4981 9.30078 15.3848C8.19357 14.2037 7.03214 13.0296 6.16113 11.8232C5.28387 10.6082 4.64844 9.2925 4.64844 7.7998C4.64854 4.87301 6.88141 2.4375 9.71094 2.4375ZM9.71094 6C8.88251 6 8.21094 6.67157 8.21094 7.5C8.21094 8.32843 8.88251 9 9.71094 9C10.5394 9 11.2109 8.32843 11.2109 7.5C11.2109 6.67157 10.5394 6 9.71094 6Z"
                fill="white"
              />
            </svg>
            경북 경주시 원화로 181번길
          </p>
          <p className="text-[12px] inline-flex items-center gap-1 mt-1">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>평점</title>
              <path
                d="M9.93308 3.17062L11.2419 7.392H15.4745C15.7027 7.392 15.7987 7.70165 15.6126 7.84068L12.1905 10.4506L13.4993 14.672C13.5713 14.8995 13.3192 15.0954 13.1331 14.95L9.71094 12.3401L6.2888 14.95C6.10269 15.0891 5.85053 14.8995 5.92257 14.672L7.23139 10.4506L3.80925 7.84068C3.62314 7.70165 3.7192 7.392 3.94734 7.392H8.17998L9.4888 3.17062C9.56084 2.94313 9.86103 2.94313 9.93308 3.17062Z"
                fill="white"
                stroke="white"
                strokeWidth="1.125"
                strokeLinejoin="round"
              />
            </svg>
            5.0(564)
          </p>
        </div>
      </div>
      <div className="h-[95dvw] aspect-square" />
      <div className="rounded-t-3xl bg-white pt-7 z-[1] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="pl-5 mb-[50px]">
          <h3 className="text-xl font-semibold mb-4">하루 체험</h3>
          <div className="rounded-l-2xl bg-[#F5F4F1] h-[120px] flex items-center justify-between px-8">
            <div>
              <p className="font-semibold text-xl mb-1">원데이 서예 체험</p>
              <p className="text-[14px] font-light text-[#505050]">붓 끝에서 피어나는 선비의 멋</p>
            </div>
            <img src="/typo-icon.webp" alt="typo" className="w-[100px] h-auto" />
          </div>
        </div>

        <div className="mb-8">
          <ul className="grid grid-cols-4 text-[14px] mb-10">
            <li className="text-center px-4 py-[14px] border-b-[1px] border-black">소개</li>
            <li className="text-center px-4 py-[14px] border-b-[1px] border-[#E5E5EC] text-[#767676]">리뷰</li>
            <li className="text-center px-4 py-[14px] border-b-[1px] border-[#E5E5EC] text-[#767676]">정보</li>
            <li className="text-center px-4 py-[14px] border-b-[1px] border-[#E5E5EC] text-[#767676]">안내사항</li>
          </ul>
          <div className="px-5 flex flex-col space-y-10">
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-3">
                서예는 제 일기예요.
                <br />
                먹향처럼 고요한 일상을 함께 나눠요.
              </h3>
              <p className="text-[16px] font-normal leading-[24px]">
                박말자 할머니는 경주 토박이로, 20년째 서예를 취미로 즐기며 조용한 한옥에서 살아오신 분입니다.
                <br />
                외국 손님에게 한글의 멋과 한국의 전통 삶을 소개하고 싶다는 마음으로 빈방을 열어주셨습니다.
                <br />
                말이 통하지 않아도, 글씨를 쓰는 시간처럼 조용하고 따뜻한 하루를 나눌 수 있다고 믿고 계십니다.
                <br />
                <br />
                "제가 글씨 쓰는 동안, 당신은 차 한잔 마시면 어때요?"
              </p>
            </div>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-3">가옥</h3>
              <p className="text-[16px] font-normal leading-[24px]">
                박말자 할머니의 집은 경주 황남동에 위치한 전통 한옥 구조의 가정집으로, 마당이 있고 햇살이 잘 드는 작은
                별채 방 한 칸을 장기 체류 손님에게 제공합니다.
                <br />
                <br />
                "밤에는 어둡고 조용해서, 책을 읽거나 글을 쓰기에 참 좋은 곳이에요."
              </p>
            </div>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-3">주변 정보</h3>
              <p className="text-[16px] font-normal leading-[24px]">
                가옥은 경주 시내에서도 관광지와 가까운 '황리단길' 안쪽 조용한 골목에 위치해 있습니다.
                <br />
                <br />
                <ul className="list-disc list-inside">
                  <li>첨성대 도보 7분</li>
                  <li>대릉원 돌담길 도보 5분</li>
                  <li>전통시장 도보 10분</li>
                </ul>
              </p>
            </div>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-3">생활 정보</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="px-4 py-3 border border-[#E5E5EC] rounded-md flex items-center gap-x-3 ">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>와이파이</title>
                    <g clip-path="url(#clip0_79_16630)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.125 19.125C13.125 19.7463 12.6213 20.25 12 20.25C11.3787 20.25 10.875 19.7463 10.875 19.125C10.875 18.5037 11.3787 18 12 18C12.6213 18 13.125 18.5037 13.125 19.125ZM22.2262 8.15625C16.2808 3.27963 7.71918 3.27963 1.77375 8.15625C1.45351 8.41928 1.40713 8.89211 1.67016 9.21234C1.93318 9.53258 2.40601 9.57896 2.72625 9.31594C8.11817 4.89429 15.8818 4.89429 21.2738 9.31594C21.594 9.57896 22.0668 9.53258 22.3298 9.21234C22.5929 8.89211 22.5465 8.41928 22.2262 8.15625ZM19.2188 11.5097C14.9905 8.16212 9.01513 8.16212 4.78687 11.5097C4.46223 11.767 4.40767 12.2388 4.665 12.5634C4.92233 12.8881 5.39411 12.9426 5.71875 12.6853C9.40113 9.77052 14.6045 9.77052 18.2869 12.6853C18.4428 12.8089 18.6414 12.8655 18.839 12.8426C19.0366 12.8198 19.2171 12.7194 19.3406 12.5634C19.4642 12.4075 19.5208 12.2089 19.498 12.0113C19.4751 11.8137 19.3747 11.6332 19.2188 11.5097ZM16.1944 14.8622C13.6952 13.0458 10.3105 13.0458 7.81125 14.8622C7.47625 15.1061 7.40238 15.5753 7.64625 15.9103C7.89012 16.2453 8.35938 16.3192 8.69438 16.0753C10.6668 14.6409 13.3389 14.6409 15.3112 16.0753C15.6462 16.3192 16.1155 16.2453 16.3594 15.9103C16.6032 15.5753 16.5294 15.1061 16.1944 14.8622Z"
                        fill="#7A4C1E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_79_16630">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  와이파이
                </div>
                <div className="px-4 py-3 border border-[#E5E5EC] rounded-md flex items-center gap-x-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>취사 가능</title>
                    <g clip-path="url(#clip0_79_16637)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25 4.5V1.5C8.25 1.08579 8.58579 0.75 9 0.75C9.41421 0.75 9.75 1.08579 9.75 1.5V4.5C9.75 4.91421 9.41421 5.25 9 5.25C8.58579 5.25 8.25 4.91421 8.25 4.5ZM12 5.25C12.4142 5.25 12.75 4.91421 12.75 4.5V1.5C12.75 1.08579 12.4142 0.75 12 0.75C11.5858 0.75 11.25 1.08579 11.25 1.5V4.5C11.25 4.91421 11.5858 5.25 12 5.25ZM15 5.25C15.4142 5.25 15.75 4.91421 15.75 4.5V1.5C15.75 1.08579 15.4142 0.75 15 0.75C14.5858 0.75 14.25 1.08579 14.25 1.5V4.5C14.25 4.91421 14.5858 5.25 15 5.25ZM23.7 9.6L21 11.625V17.25C21 18.9069 19.6569 20.25 18 20.25H6C4.34315 20.25 3 18.9069 3 17.25V11.625L0.3 9.6C-0.0313708 9.35147 -0.0985281 8.88137 0.15 8.55C0.398528 8.21863 0.868629 8.15147 1.2 8.4L3 9.75V8.25C3 7.42157 3.67157 6.75 4.5 6.75H19.5C20.3284 6.75 21 7.42157 21 8.25V9.75L22.8 8.4C23.1314 8.15147 23.6015 8.21863 23.85 8.55C24.0985 8.88137 24.0314 9.35147 23.7 9.6ZM19.5 8.25H4.5V17.25C4.5 18.0784 5.17157 18.75 6 18.75H18C18.8284 18.75 19.5 18.0784 19.5 17.25V8.25Z"
                        fill="#7A4C1E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_79_16637">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  취사 가능
                </div>
                <div className="px-4 py-3 border border-[#E5E5EC] rounded-md flex items-center gap-x-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>무료 주차</title>
                    <g clip-path="url(#clip0_79_16644)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.5 18H21.75V9.25031C21.75 8.74896 21.4995 8.28075 21.0825 8.0025L12.8325 2.50219C12.3287 2.16631 11.6723 2.16631 11.1684 2.50219L2.91844 8.0025C2.50103 8.28053 2.2502 8.74878 2.25 9.25031V18H1.5C1.08579 18 0.75 18.3358 0.75 18.75C0.75 19.1642 1.08579 19.5 1.5 19.5H22.5C22.9142 19.5 23.25 19.1642 23.25 18.75C23.25 18.3358 22.9142 18 22.5 18ZM3.75 9.25031L12 3.75L20.25 9.24938V18H18V12.75C18 12.3358 17.6642 12 17.25 12H6.75C6.33579 12 6 12.3358 6 12.75V18H3.75V9.25031ZM16.5 13.5V15H12.75V13.5H16.5ZM11.25 15H7.5V13.5H11.25V15ZM7.5 16.5H11.25V18H7.5V16.5ZM12.75 16.5H16.5V18H12.75V16.5Z"
                        fill="#7A4C1E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_79_16644">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  무료 주차
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 py-[10px] gap-x-2 bg-white">
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          type="button"
          className="w-full h-12 bg-white rounded-[6px] text-[16px] font-semibold border-[1px] border-[#E5E5EC]">
          문의하기
        </motion.button>
        <MotionNav
          whileTap={{
            scale: 0.95,
          }}
          to="/chat"
          className="w-full h-12 bg-[#7A4C1E] text-white rounded-[6px] text-[16px] font-semibold flex items-center justify-center">
          예약하기
        </MotionNav>
      </div>
    </div>
  );
};

export default DetailPage;
