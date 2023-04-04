const number = 12;

const checkIfGreaterThan10 = (number) =>
  new Promise((resolve, reject) => {
    if (number > 10) return resolve(number);
    else reject(new Error(`${number} is less or equal to 10`));
  });

const generateGreaterPromise = (callback, number) => {
  callback(number)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
    .finally(() => console.log("process is finished."));
};

generateGreaterPromise(checkIfGreaterThan10, number);


