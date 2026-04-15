// 위 콜백 지옥을 회피하기 위해 프로미스 기바으로 변경해보자.
//함수표현식
const timePromise = (str, ms) => {
  //resolve: 작업이 성공했을 때를 알려주는 객체
  //reject: 작업이 실패했을 때를 알려주는 객체
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === "string") {
        console.log(str);
        resolve("성공");
      } else {
        reject(new Error("실패"));
      }
    }, ms);
  });
};
timePromise("AA", 1000)
  .then(() => timePromise("BB", 1000))
  .then(() => timePromise("CC", 1000))
  .then(() => {
    timePromise("dd", 1000).then(() => timePromise("ee", 1000));
  })
  .catch((error) => {
    console.log(error);
  }) //생략은 가능한데 그럼 예외처리를 못찾을 뿐
  .finally(() => console.log("파이널리"));

console.log("ㅅㅅㅅㅅㅅ"); //then안에 작성되지 않은것은 가장 먼저 실행됨

//병렬처리 하는방법 한번에 시작한다는것, 배열,현업에선 크게 쓰지않음
Promise.all([
  timePromise("A", 1000),
  timePromise("B", 3000),
  timePromise("C", 5000),
]).then(() => console.log("모든 작업 완료"));
