export const checkIfWellWatered = (lastWateredDate, wateringInterval) => {
  const lastWatered = new Date(lastWateredDate);
  const today = new Date();

  const lastWateredMs = lastWatered.getTime();
  const todayMs = today.getTime();

  const diffInSeconds = (todayMs - lastWateredMs) / 1000;

  const diffInDays = diffInSeconds / 86400;

  return diffInDays < wateringInterval;
};
