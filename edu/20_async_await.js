//async/await 프로미스근간으로 처리를하기때문에 프로미스의 대체는 아님

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

async function test() {
  try {
    await timePromise("A", 1000);
    await timePromise("B", 1000);
    await timePromise("C", 1000);
    await timePromise(1, 1000);
  } catch (error) {
    console.log(error);
  }
}

test();
//파라미트- 필요한거 받는 변수.아규먼트- 전달될 값

// 인수 함수를 호출할때 실제로 건내주는 값
// 인자 함수정의부에서 외부로 부터 입력값을 받기위해 선언된 변수 (매개변수)
