let count = 0;
const debounce = function (callback, time) {
  let timer = null;

  return function (...args) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        callback(...args);
        count++;
      }, time);
  };
};

let printData = (value) => {
  console.log("It is debounce example..", value);
};

const letDoMagic = debounce(printData, 250);

function debounceMagic(event) {
  letDoMagic(event.target.value);
}
