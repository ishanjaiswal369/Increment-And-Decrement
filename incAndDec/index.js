const counter = document.querySelector('#counter');

let increase = document.querySelector('#increment');
let decrease = document.querySelector('#decrement');

increase.addEventListener('click', () => {
  let val = parseInt(counter.innerText);
  val = val + 1;
  counter.innerText = val;
});

decrease.addEventListener('click', () => {
    let val = parseInt(counter.innerText);
    val = val - 1;
    counter.innerText = val;
})