let food = "김밥";
//switch(검증대상)
switch (food) {
  //case 일치 검증 값
  case "김밥":
    // 실행할 처리
    console.log("분식");
    break;
  case "돈까스":
    console.log("양식");
    break;
  default:
    console.log("이상한음식");
    break;
}

//case함수 뒤에는 :를 꼭 해야하며, switch와 break
//각 조건의 처리에 break 해주지않으면 바로 다음조건으로 넘어감
