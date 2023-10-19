const imsi = Array.from({
    length: 12000
},(_, i) => `${i}번째 상품`)

// console.log(imsi)

const set = new Set('');

const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getId = () => {
  const name =
    String.fromCharCode(randomRange(65, 90)) +
    String.fromCharCode(randomRange(65, 90)) +
    String.fromCharCode(randomRange(65, 90));

  return set.has(name) ? getId() : name;
};

const tmp = Array.from(
  {
    length: 20000,
  },
  () => getId()
);

const size = 200;

console.log(tmp)

