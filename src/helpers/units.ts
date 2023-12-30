export const metersToKM = (value: number) => {
  return value / 1000;
};
export const metersToKmStr = (value: number) => {
  return `${metersToKM(value).toFixed(2)} km`;
};
export const KMToMeters = (value: number) => {
  return value * 1000;
};
export const KmToMetersStr = (value: number) => {
  return `${metersToKM(value).toFixed(2)} m`;
};

export const secondsToMinutes = (value: number) => {
  return value / 60;
};
export const secondsToMinutesStr = (value: number) => {
  return `${secondsToMinutes(value).toFixed(0)} minutes`;
};

export const secondsToMinutesSecondsStr = (value: number) => {
  const minute = Math.floor(value / 60);
  const seconds = value - minute * 60;
  return `${minute} min, ${seconds.toFixed(0)} sec`;
};
