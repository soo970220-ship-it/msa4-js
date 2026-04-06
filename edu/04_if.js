//IF 문
// 조건에 따라서 서로 다른 처리(분기처리)를 하는 문법
// 조건이 true면 해당 처리를 진행하고, 그렇지 않으면 다음 조건 체크 넘어감

// 1등이면 우승, 2등이면 준우승, 3등이면 3등, 나머지는 '순위 외'
//소괄호 = 조건식, 중괄호 = 조건식이 참일 때 실행하고 싶은 코드를 작성
//위에서 체크한 조건에 모두 false 일 경우, 나머지 조건은 else가 실행
let rank = 6;

if (rank === 1) {
  console.log("우승");
} else if (rank === 2) {
  console.log("준우승");
} else if (rank === 3) {
  console.log("3등");
} else {
  if (rank !== 5 && rank !== 7) {
    console.log("순위 외");
  } else {
    console.log("특별상");
  }
}
