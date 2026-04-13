// 1.`버튼` 클릭시 아래 문구 알러트로 출력
// 	안녕하세요.
// 	숨어있는 div를 찾아주세요.

// 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
// 	- 들켰다

// 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.

// 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
// 	- 숨는다

// 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근

// -- 보너스 문제 --
// 다시 숨을 때 랜덤한 위치로 이동
// 숨어있는 박스를 찾아서 초기 세팅

// [기억 장치] 알러트가 떴었는지 기억하는 변수 (처음엔 false)
let isAlerted = false; // 변수를 만들기 위해 let 필요

// [1번] 시작 버튼
function button() {
  alert("안녕하세요.\n숨어있는 div를 찾아주세요.");
  const target = document.querySelector("#hidden");
  target.style.display = "block";
  target.style.opacity = "0"; // 시작할 땐 무조건 "0"
  isAlerted = false; // 다시 시작할 때 초기화
}

// [2번] 마우스 진입 (두근두근)
document.querySelector("#hidden").addEventListener("mouseenter", function () {
  const target = document.querySelector("#hidden");

  // 투명도가 0일 때(숨어있을 때)만 두근두근!
  if (target.style.opacity === "0" && isAlerted === false) {
    alert("두근두근");
    isAlerted = true; // "방금 알러트 띄웠어!"라고 기억시킴
  }
});

// [문제 3&5 통합] 클릭했을 때
document.querySelector("#hidden").addEventListener("click", function () {
  const target = document.querySelector("#hidden");

  // A. 숨어있는 상태에서 클릭했을 때 (들켰다!)
  if (target.style.opacity === "0" || isAlerted === true) {
    alert("들켰다!");
    target.style.opacity = "0.5"; // 이제 박스가 보임
    isAlerted = false; // 다음 게임을 위해 알러트 상태 초기화
  }
  // B. 이미 들킨 상태(opacity: 1)에서 또 클릭했을 때 (다시 시작!)
  else {
    alert("다시 숨는다!");
    target.style.opacity = "0"; // 다시 투명하게

    // [랜덤 위치 이동]
    // 화면 안에서 (가로 0~500px, 세로 0~500px 사이) 랜덤하게 이동
    const randomTop = Math.floor(Math.random() * 500) + "px";
    const randomLeft = Math.floor(Math.random() * 500) + "px";

    target.style.top = randomTop;
    target.style.left = randomLeft;
  }
});

//마우스가 박스에 닿으면 isAlerted가 **false**인 걸 보고 알러트를 띄웁니다.
// 동시에 isAlerted를 **true**로 바꿔버립니다.
// '확인'을 누르면 브라우저가 다시 mouseenter를 실행하려고 하지만,
//  이번엔 isAlerted가 **true**라서 if문을 통과하지 못합니다.
// 드디어 알러트 지옥 없이 클릭을 할 수 있게 됩니다
