import { ComponentByAnima } from "@/components/ComponentByAnima";
import { ComponentWrapperByAnima } from "@/components/ComponentWrapperByAnima";
import { DivByAnima } from "@/components/DivByAnima";
import { FooterByAnima } from "@/components/FooterByAnima";
import { FrameByAnima } from "@/components/FrameByAnima";
import { OverlapGroupWrapperByAnima } from "@/components/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "@/components/OverlapWrapperByAnima";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Home = () => {
  const serviceCards = [
    {
      id: "01",
      title: "Аэропорты и транспортные сети",
      icon: "https://c.animaapp.com/madvybnqLmC56e/img/plane-alt-2.svg",
      iconAlt: "Plane alt",
    },
    {
      id: "02",
      title: "Жилая недвижимость/девелопмент недвижимости и строительство",
      icon: "https://c.animaapp.com/madvybnqLmC56e/img/building--1--1.svg",
      iconAlt: "Building",
    },
    {
      id: "03",
      title: "Военное строительство",
      isCustomIcon: true,
      iconAlt: "Military construction",
    },
    {
      id: "04",
      title: "Дороги и магистрали",
      icon: "https://c.animaapp.com/madvybnqLmC56e/img/road--1--1.svg",
      iconAlt: "Road",
    },
    {
      id: "05",
      title: "Системы водоснабжения и водоотведения",
      isGroupIcon: true,
      iconAlt: "Water systems",
    },
    {
      id: "06",
      title: "Арочные пролеты и конструкция PEB",
      icon: "https://c.animaapp.com/madvybnqLmC56e/img/train-station-building-1.svg",
      iconAlt: "Train station",
    },
    {
      id: "07",
      title: "Мосты и путепроводы",
      icon: "https://c.animaapp.com/madvybnqLmC56e/img/bridge-suspension-1.svg",
      iconAlt: "Bridge suspension",
    },
    {
      id: "08",
      title: "Все услуги",
      isLast: true,
    },
  ];

  const statCards = [
    {
      number: "28+",
      description: "Проектов успешно реализовали в Афганистане",
      image:
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--background-complete--inject-2-1.png",
      additionalImages: [
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--table--inject-2.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--shield--inject-2.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--speech-bubble--inject-2.png",
      ],
    },
    {
      number: "3,000+",
      description: "Человек в штате, только в Афганистане",
      image:
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--background--inject-2.png",
      additionalImages: [
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--floor--inject-2.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--fence--inject-2.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--briefcase--inject-2.png",
      ],
    },
    {
      number: "27+",
      description: "В сфере строительства и инфраструктуры",
      image:
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--background-complete--inject-2-2.png",
      additionalImages: [
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--floor--inject-2-1.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--crane--inject-2.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--beams--inject-2.png",
        "https://c.animaapp.com/madvybnqLmC56e/img/freepik--bridge--inject-2.png",
      ],
    },
  ];

  const partnerLogos = [
    "https://c.animaapp.com/madvybnqLmC56e/img/image-17.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-26.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-27.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-20.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-28.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-22.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-23.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-24.png",
    "https://c.animaapp.com/madvybnqLmC56e/img/image-25.png",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-neutralwhite w-full max-w-[1920px] relative">
        <FrameByAnima />

        <section className="relative px-40 mt-16">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#dee1eb]"
          >
            <img
              className="w-[18px] h-[18px]"
              alt="Info"
              src="https://c.animaapp.com/madvybnqLmC56e/img/info--2--1.svg"
            />
            <span className="font-body-3 text-neutralblack-3 text-sm tracking-wide leading-normal">
              О КОМПАНИИ
            </span>
          </Badge>

          <div className="mt-6 grid grid-cols-12 gap-8">
            <div className="col-span-7">
              <h2 className="font-headline-4 text-neutralblack-1 text-2xl tracking-tight leading-snug">
                За 20 лет работы в Афганистане FCC
                <br />
                сотрудничала с правительством Афганистана
              </h2>

              <div className="grid grid-cols-4 gap-4 mt-10 items-end">
                {statCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#FFF5F5] rounded-xl p-6 flex flex-col justify-between min-h-[300px] h-full"
                  >
                    <div>
                      <h3 className="text-[#EB5757] text-[28px] font-semibold">
                        {card.number}
                      </h3>
                      <p className="mt-2 text-[#1C1C1E] text-[15px] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="relative h-[150px] mt-4">
                      <div className="relative w-[220px] h-[150px] mx-auto">
                        <img
                          src={card.image}
                          alt="base"
                          className="w-full h-auto relative z-0"
                        />
                        {card.additionalImages?.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`decoration-${i}`}
                            className="absolute z-10"
                            style={{ top: 0, left: 0 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-xl overflow-hidden h-full min-h-[300px] flex items-end">
                  <img
                    src="https://c.animaapp.com/madvybnqLmC56e/img/image-15.png"
                    alt="Real photo"
                    className="w-full h-[230px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <p className="font-body-2 text-neutralblack-1 text-base leading-relaxed tracking-wide">
                Мы стремимся к увеличению ресурсов и возможностей нашей
                компании, стремимся предоставлять самые современные услуги и
                качественные проектные услуги в сфере проектирования и
                строительства, конкурировать на быстро развивающихся рынках
                Афганистана, Кабула и Средней Азии.
                <br />
                <br />
                Основные услуги Fayz Construction Company ориентированы на
                инфраструктуру и строительство. Мы работаем в строительном
                секторе с момента основания и с тех пор заключили контракты на
                проектирование и строительство на сумму более 100 миллионов
                долларов.
                <br />
                <br />
                Мы предоставляем решения «под ключ» от технико-экономического
                обоснования до проектирования, подготовки к строительству,
                строительства и, наконец, управления объектами, эксплуатации и
                технического обслуживания.
              </p>

              <div className="flex gap-4 mt-8">
                <Button className="bg-[#F14747] hover:bg-orange-600 transition-all duration-700 cursor-pointer">
                  <span className="font-body-1">Подробнее о нас</span>
                  <img
                    className="w-5 h-5"
                    alt="Arrow right"
                    src="https://c.animaapp.com/madvybnqLmC56e/img/arrow-small-right--2--1.svg"
                  />
                </Button>
                <Button className="bg-[#263238] hover:bg-[#171e22] transition-all duration-700 cursor-pointer">
                  <span className="font-body-1">Контакты</span>
                  <img
                    className="w-5 h-5"
                    alt="Arrow right"
                    src="https://c.animaapp.com/madvybnqLmC56e/img/arrow-small-right--2--1.svg"
                  />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-24 px-40">
          <div className="flex flex-col items-center">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#dee1eb]"
            >
              <img
                className="w-[18px] h-[18px]"
                alt="Crane"
                src="https://c.animaapp.com/madvybnqLmC56e/img/crane-1.svg"
              />
              <span className="font-body-3 text-neutralblack-3 text-sm tracking-wide leading-normal">
                УСЛУГИ
              </span>
            </Badge>

            <h2 className="mt-4 font-headline-3 text-neutralblack-1 text-3xl tracking-tight leading-snug">
              Наши услуги
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-12">
            {serviceCards.map((service, index) => (
              <Card
                key={index}
                className={`h-[206px] rounded-xl overflow-hidden shadow-[0px_0px_30px_#1c1c1c0d] border relative ${
                  index === serviceCards.length - 1
                    ? "bg-[#F1DCDC] border-[#f1dcdc]"
                    : "bg-white border-[#f0f1f5]"
                }`}
              >
                <CardContent className="p-0 relative h-full">
                  {index === serviceCards.length - 1 ? (
                    <div className="relative w-full h-full">
                      <img
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        alt="Union"
                        src="https://c.animaapp.com/madvybnqLmC56e/img/union.svg"
                      />

                      <div className="absolute inset-0 bg-[#F1DCDC] opacity-90 z-10" />

                      <div className="relative z-20 flex justify-center items-center h-full p-6">
                        <div className="flex items-center gap-2">
                          <span className="font-body-1 text-colorred-2">
                            Все услуги
                          </span>
                          <img
                            className="w-5 h-5"
                            alt="Arrow"
                            src="https://c.animaapp.com/madvybnqLmC56e/img/arrow-small-right--2--1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 flex flex-col justify-between h-full relative">
                      <span className="absolute top-3 right-3 text-lg text-neutralblack-4">
                        {service.id}
                      </span>

                      <div className="w-[50px] h-[50px] bg-colorred-4 rounded-lg border border-[#f1dcdc] flex items-center justify-center">
                        {service.isGroupIcon ? (
                          <div className="w-6 h-6 bg-[url('https://c.animaapp.com/madvybnqLmC56e/img/group-35.png')] bg-cover" />
                        ) : service.isCustomIcon ? (
                          <div className="relative w-6 h-6">
                            <img
                              className="absolute w-1.5 h-[9px] top-[15px] left-[9px]"
                              alt="Vector"
                              src="https://c.animaapp.com/madvybnqLmC56e/img/vector-270.svg"
                            />
                            <img
                              className="absolute w-6 h-6"
                              alt="Custom"
                              src="https://c.animaapp.com/madvybnqLmC56e/img/group-36.png"
                            />
                          </div>
                        ) : (
                          <img
                            className="w-6 h-6"
                            alt={service.iconAlt}
                            src={service.icon}
                          />
                        )}
                      </div>

                      <p className="font-body-2 text-neutralblack-3 mt-4">
                        {service.title}
                      </p>

                      <img
                        className="w-[14px] h-[14px] mt-2"
                        alt="Red arrow"
                        src="https://c.animaapp.com/madvybnqLmC56e/img/arrow-small-right--2--1.svg"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative mt-24 px-40">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#dee1eb]"
          >
            <img
              className="w-[18px] h-[18px]"
              alt="Folder open"
              src="https://c.animaapp.com/madvybnqLmC56e/img/folder-open-1.svg"
            />
            <span className="font-body-3 text-neutralblack-3 text-sm tracking-wide leading-normal">
              ПОРТФОЛИО
            </span>
          </Badge>

          <div className="flex justify-between items-center mt-4">
            <h2 className="font-headline-3 font-bold text-neutralblack-1 text-3xl tracking-tight leading-snug">
              Наши проекты
            </h2>

            <div className="flex items-center gap-1.5">
              <span className="font-body-1 text-neutralblack-1 text-base tracking-wide leading-normal">
                Все проекты
              </span>
              <img
                className="w-5 h-5"
                alt="Arrow small right"
                src="https://c.animaapp.com/madvybnqLmC56e/img/arrow-small-right--2--1.svg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <ComponentByAnima />
            <OverlapWrapperByAnima />
            <OverlapGroupWrapperByAnima />
            <ComponentWrapperByAnima />
          </div>
        </section>

        <section className="relative mt-24">
          <div className="flex flex-col items-center">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#dee1eb]"
            >
              <img
                className="w-[18px] h-[18px]"
                alt="Messages"
                src="https://c.animaapp.com/madvybnqLmC56e/img/messages--3--1.svg"
              />
              <span className="font-body-3 text-neutralblack-3 text-sm tracking-wide leading-normal">
                ОТЗЫВЫ
              </span>
            </Badge>

            <h2 className="mt-4 font-headline-3 text-neutralblack-1 text-3xl tracking-tight leading-snug">
              Отзывы клиентов
            </h2>
          </div>

          <DivByAnima />
        </section>

        <section className="relative mt-24 text-white">
          <div className="w-full h-[314px]">
            <div className="w-full h-[254px] bg-neutralblack-2 relative bg-[#263238]">
              <img
                className="absolute w-[505px] h-[462px] top-[60px] left-[716px]"
                alt="Frame"
                src="https://c.animaapp.com/madvybnqLmC56e/img/union.svg"
              />

              <div className="flex flex-col items-center pt-12">
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#ffffff26] opacity-60"
                >
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Heart partner"
                    src="https://c.animaapp.com/madvybnqLmC56e/img/heart-partner-handshake--2--1.svg"
                  />
                  <span className="font-body-3 text-neutralwhite text-sm tracking-wide leading-normal text-white">
                    ДОВЕРЬТЕСЬ НАМ
                  </span>
                </Badge>

                <h2 className="mt-6 font-headline-3 text-neutralwhite text-3xl tracking-tight leading-snug">
                  Партнеры
                </h2>
              </div>
            </div>

            <div className="relative z-10 bg-white py-4 -mt-16 flex gap-4 overflow-x-auto px-4">
              {partnerLogos.map((logo, index) => (
                <Card
                  key={index}
                  className="w-[186px] h-[100px] flex justify-center items-center flex-shrink-0 bg-neutralwhite rounded-xl border border-[#dee1eb] shadow-md"
                >
                  <CardContent className="flex items-center justify-center">
                    <img alt={`Partner logo ${index + 1}`} src={logo} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FooterByAnima />
      </div>
    </div>
  );
};

export default Home;
