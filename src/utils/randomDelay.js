function randomDelay(data) {
  const randomTime = Math.round(Math.random() * 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      console.log('resolve', data)
    }, randomTime);
  });
}

export default randomDelay;
