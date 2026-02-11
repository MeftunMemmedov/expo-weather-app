import axiosInstance from "..";

export const getWeather = async <Type>(
  base: string,
  q: string,
  days?: number,
) => {
  const { data } = await axiosInstance.get(`/${base}.json`, {
    params: { q, days },
  });

  return data as Type;
};
