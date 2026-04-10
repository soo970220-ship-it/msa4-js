//Try 문
try {
  //내가 실행할 처리를 작성
  console.log("아아아");
  console.log("아아아");
  User.name;
  console.log("아아아");
  console.log("아아아");
} catch (error) {
  //여기서 소괄호안에는 parameter가 들어감(함수정의시 나열되는 변수이름)
  //try문에서 에러가 발생시 처리할 로직 작성
  console.log("에러발생!!");
  console.log(error.name); //발생한 에러명
  console.log(error.message); //발생한 에러 내용
  console.log(error.stack); // 빌생한 에러 상세
  // stack은 에러에대한 상세정보, 상세정보까지 필요없을때 message나 name을 작성
} finally {
  //예외 여부와 상관없이 무조건 실행시켜야 할 로직작성
  console.log("파이널리~");
}

console.log("아아아");
console.log("아아아");

try {
  //강제 예외 발생
  console.log("트라이시작");

  if (true) {
    const error = new Error("내가 강제로 일으킨 에러");
    error.name = "커스텀 에러";
    throw error;
  }
  console.log("트라이끝");
} catch (error) {
  console.log(error.stack);
}

//에러를 상세하게 처리하는 방법
//여러 종류의 에러를  처리하고싶을때
//instanceof 연산자를 사용하를 예외를 구체적으로 처리

try {
  throw new ReferenceError();
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("싱텍스 에러");
  } else if (error instanceof ReferenceError) {
    console.log("참조참조");
  } else {
    console.log("짜장면");
  }
}
