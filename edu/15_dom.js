//요소선택

//document.getElementById() : 요소의 ID로 선택
const titleEle = document.getElementById("title");
titleEle.style.color = "blue";

//const tagEle = document.getElementsByTagName: 요소의 태그명으로 선택
//해당요소들을 HTMLCollction 객체로 획득
const tagEle = document.getElementsByTagName("h1");

for (let i = 0; i < tagEle.length; i++) {
  tagEle[i].style.color = "red";
}

//document.getElementsByClassName(className):클래스로 요소를 선택
//해당 요소들을 HTMLCollction 객체로 획득
const classEle = document.getElementsByClassName("title2");

//***매우중요*(현업사용)**/
//document.querySelector(selector): CSS 선택자를 사용해 요소를 찾는 메소드
//복수일 경우 가장 첫번째 요소만 선택
const queryId = document.querySelector("#title");
//id선택자는 #아이디(타이틀앞에 샵 넣은이유)
queryId.style.color = "skyblue";
const queryType = document.querySelector("h1");
queryType.style.color = "green";

//document.querySelectorA11(selector): CSS 선택자를 사용해 요소를 찾는 메소드
//복수일 경우 전체 선택
//해당 요소들을 NodeList 객체로 획득
const queryAll = document.querySelectorAll("h1");
queryAll.forEach((item) => {
  item.style.fontSize = "5rem";
});

// Element.textContent : 요소의 텍스트 콘텐츠를 가져오거나 설정
//순수한 텍스트 데이터 전달

const title1 = document.querySelector("#title");

title1.textContent; //콘텐츠 접근
title1.textContent = "테스트"; //콘텐츠변경
title1.textContent = "<p>피태그</p>";
//element.innerHTML:컨텐츠를 획득 및 변경
//태그는 태그로 인식해서 전달
title1.innerHTML = "<p>피태그</p>";
//Element.setAttribute(attibuteName, value)
//요소에 속성과 속성 값을 추가
const setAttrInput = document.querySelector(".set-attr");
setAttrInput.setAttribute("placeholder", "js에서 추가");
setAttrInput.setAttribute("style", "color:red;");

//Element.remiveAttribute(AttributeName)
// 요소의 특정 속성을 제거
// setAttrInput.removeAttribute("placeholder");

//------------
//요소 스타일링
//------------
//Element.style: 요소에 인라인 스타일 추가
title1.style.color = "red";

//Element.classList: DOMTokenList 객체로 클래스를 제어
title1.classList.add("display-none"); // 클래스 추가
title1.classList.remove("display-none"); //클래스 제거
title1.classList.toggle("display-none"); // 클래스 토글

//-------
//새로운 요소 생성
//---------
//document.createElement(tagName): 해당 tag요소 생성
const newP = document.createElement("p");
newP.textContent = "탕수육";
newP.style.color = "#b02bee";

//Node.appendChild(node)
// 해당 부모노드의 가장 마지막 노드로 추가
const parentContainer = document.querySelector(".container");
parentContainer.appendChild(newP);

const newSpan = document.createElement("span");
newSpan.textContent = "크림새우";
parentContainer.appendChild(newSpan);

//Node.insertBefore(newNode, referencNode);
const newH3 = document.createElement("h3");
newH3.textContent = "짬뽕";
parentContainer.insertBefore(newH3, newSpan);

// Node.removeChild(node)
//해당부모노드의 특정 자식 노드를 제거
parentContainer.removeChild(newH3);
