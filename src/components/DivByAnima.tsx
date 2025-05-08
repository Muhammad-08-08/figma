import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const DivByAnima = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shahzod Xoliqulov",
      title: "Everest Industriese asoschisi",
      image: "https://c.animaapp.com/madvybnqLmC56e/img/image-16.png",
      text: "Market already key food nor. Roll fured eager back-end helicopter club office design. Incentivization tomorrow tiger donuts one blue net supervisor. Assassin cost interim crank diarize. Moving crack keep in productive. Reinvent language.",
    },
    {
      id: 2,
      name: "Umid Nurillayev",
      title: "Import building asoschisi",
      image: "https://c.animaapp.com/madvybnqLmC56e/img/image-12.png",
      text: "Мы стремимся к увеличению ресурсов и возможностей нашей компании, стремимся предоставлять самые современные услуги и качественные cтpeмимcя предоставлять самые современные услуги и качественные",
    },
    {
      id: 3,
      name: "Xasan Kamolov",
      title: "Coding mode asoschisi",
      image: "https://c.animaapp.com/madvybnqLmC56e/img/image-13.png",
      text: "Initiative no-brainer leverage individual bake shoot they price design. Explore clean idea metal discussions. I'm mifflin inclusion line ground food enable shower incompetent. Awareness ladder roll do crystallize asserts air. Do reinvent.",
    },
    {
      id: 4,
      name: "Zuhriddin Ergashev",
      title: "Xazana asoschisi",
      image: "https://c.animaapp.com/madvybnqLmC56e/img/image-14.png",
      text: "Resources can own intersection plan container bells. Big just silently before tiger points. Follow responsible individual drive buy-in muted interim management new. Manager organic break vendor turn pants responsible.",
    },
    {
      id: 5,
      name: "Aliyor Berkinov",
      title: "Shaqqox asoschisi",
      image: "https://c.animaapp.com/madvybnqLmC56e/img/image-15.png",
      text: "Banner reference all pollination cadence look expectations activities product. Meaningful up corporate close for able competitors needed. Shelf-ware circle explore we've t-shaped. Old just net a we lift an squad stakeholders. Every.",
    },
    {
      id: 6,
      name: "Shahzod Xoliqulov",
      title: "Everest Industriese asoschisi",
      image: "https://c.animaapp.com/madvybnqLmC56e/img/image-16.png",
      text: "Market already key food nor. Roll fured eager back-end helicopter club office design. Incentivization tomorrow tiger donuts one blue net supervisor. Assassin cost interim crank diarize. Moving crack keep in productive. Reinvent language.",
    },
  ];

  return (
    <section className="relative w-full h-[230px] overflow-hidden">
      <div className="w-full h-full">
        <Carousel className="w-full">
          <CarouselContent className="h-[230px]">
            {testimonials.map(({ id, name, title, image, text }) => (
              <CarouselItem key={id} className="basis-[388px] px-4">
                <Card className="h-full bg-white rounded-2xl border border-[#f0f1f5] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-[54px] h-[54px] rounded-full border border-[#f0f1f5] shrink-0">
                        <AvatarImage
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover rounded-full"
                        />
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-neutral-900 font-semibold text-base">
                          {name}
                        </div>
                        <div className="text-neutral-500 text-sm mt-1">
                          {title}
                        </div>
                      </div>
                    </div>
                    <div className="text-neutral-800 text-sm mt-4 line-clamp-5">
                      {text}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Left Gradient */}
        <div className="absolute w-40 h-full top-0 left-0 z-10 pointer-events-none bg-gradient-to-r from-white via-white to-transparent" />

        {/* Right Gradient */}
        <div className="absolute w-40 h-full top-0 right-0 z-10 pointer-events-none bg-gradient-to-l from-white via-white to-transparent" />
      </div>
    </section>
  );
};
