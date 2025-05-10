import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const navItems = [
  "О компании",
  "Команда",
  "Услуги",
  "Проекты",
  "Партнеры",
  "Карьера",
  "Контакты",
];

const projectCards = [
  {
    id: 1,
    title: "Cheghcheran",
    subtitle: "International Airport",
    image: "https://c.animaapp.com/madvybnqLmC56e/img/image-5.png",
    isActive: true,
  },
  {
    id: 2,
    title: "Farah",
    subtitle: "Regional airport",
    image: "https://c.animaapp.com/madvybnqLmC56e/img/image-2.png",
    isActive: false,
  },
  {
    id: 3,
    title: "Deh Yak ANA Garrison",
    subtitle: "Post Office",
    image: "https://c.animaapp.com/madvybnqLmC56e/img/image-3.png",
    isActive: false,
  },
  {
    id: 4,
    title: "Kabul Utility HQ",
    subtitle: "Building",
    image: "https://c.animaapp.com/madvybnqLmC56e/img/image-8.png",
    isActive: false,
  },
];

const socialIcons = [
  "https://c.animaapp.com/madvybnqLmC56e/img/component-11.svg",
  "https://c.animaapp.com/madvybnqLmC56e/img/component-12.svg",
  "https://c.animaapp.com/madvybnqLmC56e/img/component-14.svg",
  "https://c.animaapp.com/madvybnqLmC56e/img/component-13.svg",
];

export const FrameByAnima = () => {
  return (
    <section className="relative w-full h-[950px] text-white overflow-hidden">
      <header className="relative w-full h-[89px] bg-neutralwhite border-b border-[#f0f1f5] shadow-[0px_0px_30px_#1c1c1c0d] flex items-center justify-between px-40">
        <div className="flex items-center">
          <div className=" w-[150px] h-[50px] bg-neutralwhite rounded-[5px] mr-10">
            <img
              className="absolute w-[140px] h-[140px] object-contain z-10 border-4 border-white bg-white"
              alt="Logo ru"
              src="https://c.animaapp.com/madvybnqLmC56e/img/logo-ru-1.svg"
            />
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6 text-black">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-neutralblack-1 text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
                    {item}
                  </div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex flex-col text-black">
            <div className="font-subtitle-4 font-bold text-[20px] tracking-[var(--subtitle-4-letter-spacing)] leading-[var(--subtitle-4-line-height)] whitespace-nowrap [font-style:var(--subtitle-4-font-style)]">
              +998 88 009 19 00
            </div>
            <div className="opacity-60 font-body-5 font-[number:var(--body-5-font-weight)] text-[length:var(--body-5-font-size)] tracking-[var(--body-5-letter-spacing)] leading-[var(--body-5-line-height)] whitespace-nowrap [font-style:var(--body-5-font-style)]">
              Ответим на все вопросы
            </div>
          </div>

          <select
            className="p-3 bg-neutralwhite text-black rounded-xl border border-solid border-[#dee1eb] text-neutralblack-1 font-body-1"
            defaultValue="ru"
          >
            <option value="ru">🇷🇺 RU</option>
            <option value="uz">🇺🇿 UZ</option>
          </select>

          <Button className="bg-[#F14747] hover:bg-amber-600 transition-all duration-700 cursor-pointer">
            Консультация
          </Button>
        </div>
      </header>

      <div className="relative w-full h-[861px]">
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            alt="Airport background"
            src="https://c.animaapp.com/madvybnqLmC56e/img/image-5.png"
          />
          <div className="absolute inset-0 bg-neutralblack-1 opacity-20" />

          <img
            className="absolute w-[680px] h-[861px] top-0 left-0"
            alt="Vector"
            src="https://c.animaapp.com/madvybnqLmC56e/img/vector-1.svg"
          />
          <img
            className="absolute w-[505px] h-[462px] bottom-0 left-0"
            alt="Union"
            src="https://c.animaapp.com/madvybnqLmC56e/img/union.svg"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-40">
          <h1 className="font-extrabold mb-0 text-[80px] text-neutralwhite tracking-[var(--headline-1-letter-spacing)] leading-[var(--headline-1-line-height)] whitespace-nowrap [font-style:var(--headline-1-font-style)]">
            CHEGHCHERAN
          </h1>
          <h2 className="font-headline-1 mt-0 text-[56px] font-[number:var(--headline-2-font-weight)] text-neutralwhite tracking-[var(--headline-2-letter-spacing)] leading-[var(--headline-2-line-height)] whitespace-nowrap [font-style:var(--headline-2-font-style)">
            INTERNATIOANAL AIRPORT
          </h2>
          <p className="max-w-[772px] mb-8 text-[18px] font-body-2 font-[number:var(--body-2-font-weight)] text-neutralwhite tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)] mt-6">
            Design and construction of all the facilities at Ceghcheran Airport
            in Ghor Province, Afghanistan.
          </p>

          <Button className="bg-[#F14747] hover:bg-orange-600 transition-all duration-700 w-fit cursor-pointer">
            <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-neutralwhite text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
              Подробнее о проекте
            </span>
            <img
              className="w-5 h-5"
              alt="Arrow small right"
              src="https://c.animaapp.com/madvybnqLmC56e/img/arrow-small-right--2--1.svg"
            />
          </Button>
        </div>

        <div className="absolute top-[263px] left-[59px] flex flex-col items-center gap-3">
          <img
            className="w-px h-[60px]"
            alt="Vector"
            src="https://c.animaapp.com/madvybnqLmC56e/img/vector-9.svg"
          />
          <div className="flex flex-col items-start gap-2">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-[42px] h-[42px]"
                alt={`Social icon ${index + 1}`}
                src={icon}
              />
            ))}
          </div>
          <img
            className="w-px h-[60px]"
            alt="Vector"
            src="https://c.animaapp.com/madvybnqLmC56e/img/vector-9.svg"
          />
        </div>

        <div className="absolute bottom-[80px] -right-[645px] w-full px-40 flex gap-4 overflow-hidden">
          {projectCards.map((card) => (
            <Card
              key={card.id}
              className="w-[318px] h-[220px] bg-neutralwhite rounded-xl overflow-hidden border border-solid border-[#ffffff33] backdrop-blur-[10px]"
            >
              <CardContent className="p-0 h-full">
                <div
                  className="relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="absolute w-full h-[74px] bottom-0 left-0 border-t border-[#ffffff33] backdrop-blur-[10px] [background:linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(28,28,28,0.4)_100%)]" />
                  <div className="absolute bottom-[31px] left-3.5 font-subtitle-3 font-[number:var(--subtitle-3-font-weight)] text-neutralwhite text-[length:var(--subtitle-3-font-size)] tracking-[var(--subtitle-3-letter-spacing)] leading-[var(--subtitle-3-line-height)] whitespace-nowrap [font-style:var(--subtitle-3-font-style)]">
                    {card.title}
                  </div>
                  <div className="absolute bottom-[5px] left-3.5 opacity-80 font-body-4 font-[number:var(--body-4-font-weight)] text-neutralwhite text-[length:var(--body-4-font-size)] tracking-[var(--body-4-letter-spacing)] leading-[var(--body-4-line-height)] whitespace-nowrap [font-style:var(--body-4-font-style)]">
                    {card.subtitle}
                  </div>
                  {card.isActive && (
                    <div className="absolute w-[60px] h-1 bottom-0 left-0 bg-colorred-2 rounded-md" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute bottom-[116px] left-40 flex items-center gap-2.5">
          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 bg-[#ffffff0d] rounded-lg border border-solid border-[#ffffff26]"
          >
            <ChevronLeftIcon className="w-6 h-6 text-neutralwhite" />
          </Button>

          <div className="flex items-baseline gap-2 p-3 bg-[#ffffff0d] rounded-lg border border-solid border-[#ffffff26]">
            <div className="[font-family:'Giga_Sans-Medium',Helvetica] font-medium text-neutralwhite text-[32px] tracking-[-0.64px] leading-8 whitespace-nowrap">
              2
            </div>
            <div className="[font-family:'Giga_Sans-Regular',Helvetica] font-normal text-neutralwhite text-lg tracking-[-0.36px] leading-[18px] whitespace-nowrap">
              / 8
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 bg-[#ffffff0d] rounded-lg border border-solid border-[#ffffff26]"
          >
            <ChevronRightIcon className="w-6 h-6 text-neutralwhite" />
          </Button>
        </div>
      </div>
    </section>
  );
};
