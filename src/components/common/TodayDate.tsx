"use client";
import React from 'react';

export const TodayDate: React.FC = () => {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();

  const dayIndex: number = today.getDay();
  const weekdays: string[] = [
    "Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"
  ];
  const weekday: string = weekdays[dayIndex];

  return (
    <div className="flex flex-col items-end py-2 px-3 rounded mx-2">
      <span>Өнөөдөр: {year}-{month.toString().padStart(2, '0')}-{day.toString().padStart(2, '0')}</span>
      <span>{weekday} гараг</span>
    </div>
  );
};
