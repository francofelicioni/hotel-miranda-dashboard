function randomDelay(data) {
  const randomTime = Math.round(Math.random() * 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, randomTime);
  });
}

export default randomDelay;
