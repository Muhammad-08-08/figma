import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const ComponentWrapperByAnima = () => {
  return (
    <Card
      className="relative w-full max-w-[792px] h-[500px] rounded-xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/madvybnqLmC56e/img/image-10.png)",
      }}
    >
      <div className="absolute inset-0 bg-neutralblack-1 backdrop-blur-xl opacity-40" />

      <CardContent className="relative h-full flex flex-col justify-between p-6">
        <div className="space-y-6">
          <h2 className="text-white text-2xl font-semibold whitespace-nowrap">
            Региональный аэропорт Фарах
          </h2>

          <div className="flex items-center gap-2 text-white text-base">
            <span>Общественная инфраструктура</span>
            <img
              className="w-1.5 h-1.5"
              alt="Separator"
              src="https://c.animaapp.com/madvybnqLmC56e/img/-.svg"
            />
            <span>2014-2016</span>
          </div>
        </div>

        <Button className="w-fit bg-white text-neutralblack-1 hover:bg-white/90 px-4 py-3 rounded-xl flex items-center">
          <span className="text-base font-medium">О проекты</span>
          <ArrowRightIcon className="ml-2.5 w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
