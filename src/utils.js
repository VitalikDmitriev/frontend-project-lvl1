const generateRandomNumber = (min = 0, max = 100) => {
  const mn = Math.ceil(min);
  const mx = Math.floor(max);
  return Math.floor(Math.random() * (mx - mn) + mn);
};

export default generateRandomNumber;
