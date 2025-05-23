import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Header from '../components/layout/header';
import { useEffect, useState, type ReactNode } from 'react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { Link } from 'react-router';

const colors = ['#EDD1DF', '#D8C760', '#E5D1ED', '#8A96D5', '#86C19A'];
const blurColors = ['#F1B06A', '#7FC095', '#F1B06A', '#936262', '#E9C297'];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (!swiper) return;
    swiper?.on('realIndexChange', api => {
      setActiveIndex(api.realIndex);
    });
  }, [swiper]);

  return (
    <div
      className="flex flex-col h-dvh w-full relative overflow-hidden transition-[background-color] duration-500"
      style={{
        backgroundColor: colors[activeIndex],
      }}>
      <img src="/status.webp" alt="bg" className="w-full object-cover" />
      <Header title="LOGO" />
      <Swiper
        onSwiper={setSwiper}
        className="h-[80dvh] w-full relative"
        slidesPerView="auto"
        loop
        centeredSlides
        slideToClickedSlide
        effect="coverflow"
        spaceBetween={100}
        coverflowEffect={{
          rotate: 0,
          stretch: 60,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.95,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}>
        <SwiperSlide className="!w-[85dvw]">
          <CardItem
            avatarColor="#EDD1DF"
            image="/frame1.webp"
            name="박말자님 가옥"
            title={
              <p className="text-white text-[26px] font-bold text-center mt-[5px]">
                서예가 말자님 가옥에서
                <br />
                살아보기
              </p>
            }
            color="#EE9B3E"
            avatar="/G1.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[85dvw]">
          <CardItem
            avatarColor="#7FC095"
            image="/frame2.webp"
            name="김말순님 가옥"
            title={
              <p className="text-white text-[26px] font-bold text-center mt-[5px]">
                순이 할머니 집에서
                <br />
                된장 담그기
              </p>
            }
            color="#4C5E52"
            avatar="/G2.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[85dvw]">
          <CardItem
            avatarColor="#BD8672"
            image="/frame3.webp"
            name="박영미님 가옥"
            title={
              <p className="text-white text-[26px] font-bold text-center mt-[5px]">
                이야기꽃이 피어나는
                <br />
                천연 염색 손수건 만들기
              </p>
            }
            color="#7F3F28"
            avatar="/G3.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[85dvw]">
          <CardItem
            avatarColor="#8A96D5"
            image="/frame4.webp"
            name="남말숙님 가옥"
            title={
              <p className="text-white text-[26px] font-bold text-center mt-[5px]">
                70년 경주
                <br />
                천연 염색 손수건 만들기
              </p>
            }
            color="#603434"
            avatar="/G4.webp"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[85dvw]">
          <CardItem
            avatarColor="#E8C297"
            image="/frame5.webp"
            name="손숙희님 가옥"
            title={
              <p className="text-white text-[26px] font-bold text-center mt-[5px]">
                손길이 고운 숙희 할머니
                <br />
                집에서 한달 살기
              </p>
            }
            color="rgba(232, 194, 151, 0.7)"
            avatar="/G5.webp"
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="w-dvh h-[120dvh] absolute top-0 left-1/2 -translate-x-1/2 translate-y-[25%] blur-[100px] transition-all duration-500"
        style={{
          backgroundColor: blurColors[activeIndex],
        }}
      />
    </div>
  );
};

export default HomePage;

interface CardItemProps {
  image: string;
  name: string;
  title: ReactNode;
  color: string;
  avatar: string;
  avatarColor: string;
}

function CardItem({ image, name, title, color, avatar, avatarColor }: CardItemProps) {
  return (
    <Link to="/detail" className="relative rounded-[22px] overflow-hidden">
      <img src={image} alt="1" className="rounded-[22px]" />
      <div
        className={'w-full bg-gradient-to-t rounded-b-[22px] to-transparent h-2/5 absolute bottom-0 left-0'}
        style={{
          background: `linear-gradient(to top, ${color}, transparent)`,
        }}
      />
      <div className="absolute bottom-5 flex flex-col justify-center items-center w-full">
        <div
          className="w-[124px] aspect-square rounded-full overflow-hidden border-[1px] border-white"
          style={{ backgroundColor: avatarColor }}>
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </div>
        <p className="text-white font-semibold text-[15px] leading-[21px] mt-[11px]">{name}</p>
        {title}
      </div>
    </Link>
  );
}
