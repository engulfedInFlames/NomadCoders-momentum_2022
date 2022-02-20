const clock = document.querySelector("h2.clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //const milisecconds = String(parseInt(date.getMilliseconds() / 10));
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//call immediately
setInterval(getClock, 1000);
//처음 설정한 Interval 만큼의 공백이 있다.
//1 => 01로 보이게 하려면 padStrat(element)를 사용한다;
