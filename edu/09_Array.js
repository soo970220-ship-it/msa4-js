//배열 (Array) 객체
// 하나의 변수에 여러개의 값을 순차적으로 정장할 수 있는 데이터구조
//데이터 타입은 (Object)
//배열의 크기가 동적으로 변화 가능
// 인덱스(Index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
//반복문을 통해서 배열의 각 요소에 쉽게 접근 가능
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[4]);

// length : 배열의 길이를 반환
console.log(arr1.length);
const obj = {
  length: 1, // 속성(Property): 객체 안에 선언한 변수
  fnc: () => {
    // 메소드(Method) : 객체 안에 선언한 함수
    console.log("함수임");
  },
};
//Array.isArray(arg):boolean
// 배열객체인지 아닌지 체크하는 메서드
console.log(Array.isArray(arr1)); // true (arr1= 배열하고싶은 객체)
console.log(Array.isArray("어레이")); //false
//이해안되면 외우면됨 나머지는 inCludes로 씀

//Array.includes(searchElement): boolean
//배열의 특정 요소의 존재 여부를 확인하고 true/false 반환
console.log(arr1.includes(5));
console.log(arr1.includes(100));

// 배열 [2,4,5,6,9]있습니다
// //여기서 특정요소가 있는지 확인하고
//  true/false를 반환하는 myIncludes함수를 만들어주세요

const myArr = [2, 4, 5, 6, 9];

let target = 9;
let result = false;
for (let i = 0; i < myArr; i++) {
  //배열객체의 랭스를 이용하지 않으면 고정된 값으로 가기때문에 다른 숫자를 넣으면 오류가 나게된다
  if (target === myArr[i]) {
    result = true;
    break;
  } // else {
  //   result = false
  // }
}
console.log(result); // 이렇게 해도되지만 사실 else와 밑의 false는 필요없음 (위에 적어놨기 때문에)

//myIncludes를 이용한 함수,
function myIncludes(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (search === arr[i]) {
      result = true; //함수는 무조건 리턴이란 값을 써줘야 실행할수있음
    }
  }
  return result;
}
console.log(`마이어레이: ${myIncludes(myArr, 100)}`);
console.log(`리터럴어레이:${myIncludes([5, 4, 3], 5)}`);

//Array.indexOf(searchElement): number ; 잘쓰진 않음
// 배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
// 없으면 `-1`을 반환

let arr = ["홍길동", "둘리", "도우너"];
console.log(arr.indexOf("둘리")); //1 반환
console.log(arr.indexOf("도우너")); // 2반환
console.log(arr.indexOf("또치")); // -1반환

// ☆ Array.push(..args) : number **원본변경**
// 원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
//야규먼트 복수 전달가능

arr = [1, 2, 3];
let arr2 = [...arr];
let resultArr = arr2.push(5);
console.log(resultArr, arr, arr2);

// Array.concat(...args):T[]
// 배열의 마지막요소를 추가한 새로운 배열을 반환

arr = [1, 2, 3];
resultArr = arr.pop();
console.log(arr, resultArr);

//Array.unshift(...args): number **원본 변경**
// 원본 배열의 첫번째 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
resultArr = arr.unshift(100, 200, 300);
console.log(arr, resultArr);

//Array.shift():T|undefined **원본 변경**
//원본 배열의 첫번째 요소를 제거하고, 변경된 length를 반환
arr = [1000, 2, 3];
resultArr = shift(1, 2, 3);
console.log(arr, resultArr);

//Arrat.splice(start, count, ...arge): T[] **원본변경**
//1. start만 전달했을 경우
//- start가 양수일경우
// > 해당 인덱스 요소 부터 모두 제거하고, 제거한 요소들을 배열로 반환
//- start가 음수일경우
//  > 끝 요소부터 start 수 만큼의 해당 인덱스 요소를모두 제거하고 제거한요소들을 배열로 반환

// 2.start와 count를 전달했을경우
//    해당 인덱스 요소 부터 count 수 만큼의 요소를 제거하고,
//    제거한 요소들을 배열로 반환

arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(-2, 1);
console.log(arr, resultArr);

// 3.start와 count와 args를 전달했을경우
//    해당 인덱스 요소 부터 count 수 만큼의 요소를 제거하고,
//    해당 위치에 args를 삽입하고, 제거한 요소들을 배열로 반환

// Array.join(separator):String
//배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//배열의 요소가 없으면 빈 문자열을 반환
//separator를 생략하면 기본 구분자가 ','로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join(",");
console.log(arr, resultArr);
