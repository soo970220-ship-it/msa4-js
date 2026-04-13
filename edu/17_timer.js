// 타이머 함수
// 비동기적으로 코드를 실행

// setTimeout(cd, ms[, ...args]): number // []: 생략 가능 하다.
// 설정한 일정 시간 후에 cb(콜백)함수를 실행
// 콜백 함수에 파라미터가 필요한 경우 ...args를 추가
// 리턴값은 timeoutID 0이 아닌 정수값 (해당 타이머의 고유한 식별값)

const timeoutID1 = setTimeout(() => {
  console.log("1초");
}, 1000);

const timeoutID2 = setTimeout(() => {
  console.log("2초");
}, 2000);

const timeoutID3 = setTimeout(() => {
  console.log("3초");
}, 3000);

console.log(timeoutID1);

//clearTimeout(timeoutID);
// clearTimeout(timeoutID1);

//setInterval(cb, ms[, ...args]): number
//설정한 일정 시간마다 콜백 함수를 실행
//반환값은 IntervalID로 0이아닌 정수값(해당 인터벌의 고유한 식별값)
const setIntervalId1 = setInterval(() => {
  console.log("인터벌");
}, 1000);

setTimeout(() => {
  clearInterval(setIntervalId1);
}, 8000);
