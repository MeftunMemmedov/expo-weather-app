export const getFixedTemp = (temp: number) => `${temp.toFixed(0)}°`;

export const getChancheOfRain = (forecastday: any[]) => {
  return forecastday[0].day.daily_chance_of_rain;
};
