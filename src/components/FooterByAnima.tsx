"use client";

import { Separator } from "@radix-ui/react-separator";
import React from "react";

export const FooterByAnima = () => {
  const contactData = {
    phones: ["+7 932 440 07 11", "+7 993 340 57 11"],
    email: "info@fayz-group.com",
    russiaAddress:
      "Москва, Пресненская набережная 12, 28 этаж, Башня федерация Восток",
    afghanistanAddress:
      "Дом 22, улица № 10, Вазир Акбар Хан, Кабул, Афганистан",
  };

  const socialIcons = [
    {
      src: "https://c.animaapp.com/madvybnqLmC56e/img/frame-1.svg",
      alt: "Frame",
    },
    {
      src: "https://c.animaapp.com/madvybnqLmC56e/img/frame-3.svg",
      alt: "Frame",
    },
    {
      src: "https://c.animaapp.com/madvybnqLmC56e/img/frame.svg",
      alt: "Frame",
    },
    {
      src: "https://c.animaapp.com/madvybnqLmC56e/img/frame-2.svg",
      alt: "Frame",
    },
  ];

  return (
    <footer className="w-full bg-neutralwhite py-10">
      <div className="max-w-[1600px] mx-auto px-10">
        <Separator className="w-full mb-10" />

        <div className="grid grid-cols-4 gap-8 mb-16">
          {[
            { label: "Перезвоните мне", data: contactData.phones },
            { label: "Пишите на почту", data: [contactData.email] },
            { label: "Адрес в России", data: [contactData.russiaAddress] },
            {
              label: "Адрес в Афганистане",
              data: [contactData.afghanistanAddress],
            },
          ].map(({ label, data }, idx) => (
            <div key={idx}>
              <div className="font-body-2 text-neutralblack-3 mb-4">
                {label}
              </div>
              <div className="flex flex-col gap-1.5">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="font-subtitle-2 text-neutralblack-1"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-14 bg-neutralblack-7 rounded-xl border border-[#f0f1f5] flex items-center justify-between px-4">
          <div className="font-body-2 text-neutralblack-1">
            © Fayz Construction. Все права защищены.
          </div>

          <div className="flex items-center gap-1.5">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="w-9 h-9 bg-neutralwhite rounded-xl overflow-hidden border border-[#f0f1f5] flex items-center justify-center"
              >
                <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
