//산술 연산자
// +, -, *, /, %
let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
console.log(sum);
let miuns = num1 - num2;
console.log(miuns);
let multi = num1 * num2;
console.log(multi);
let divisiom = num1 / num2;
console.log(divisiom); //0.5
let remainder = num1 % num2;
console.log(remainder);

//문자열 연결

let str1 = "a" + "b";
let str2 = `test${str1}`; //리터럴 탬플릿 문법
console.log(str2);

//산술 대입 연산자
let num = 1; // '=':대입연산자
num = num + 1;
num += 1;
console.log(num);
num -= 1;
num *= 2;
num /= 3;
num %= 2;
console.log(num);
//증감 연산(++,--)
num = 0;
console.log(`전위 증감 연산자1: ${++num}`);
console.log(`전위 증감 연산자2: ${num}`);
num = 0;
console.log(`후위 증감 연산자2: ${num++}`);
console.log(`후위 증감 연산자2: ${num}`);

//num = 0;
//console.log(num++);
//console.log(num);

//비교연산자
//두값을 비교하여 true또는 false를 반환하능 연산자]
console.log(1 > 0); // true ,1이 크다 초과
console.log(1 < 0); // false,1이 작다 미만
console.log(1 >= 0); //크거나 같다 이상
console.log(1 <= 0); //작거나 같다 이하

console.log(1 == 0); //불완전 비교 : 데이터 타입은 체크하지 않고 형태만 비교
console.log(1 != 0); //불완전 비교 : 데이터 타입은 체크하지 않고 형태만 비교
console.log(1 === 0); // 변수1과 변수2는 같다(완전 비교, 데이터 타입까지 체크)
console.log(1 !== "1"); //변수1과 변수2는 같지 않다(완전 비교, 데이터 타입까지 체크)

//논리 연산자 &&
// and 연산자: 연결한 모든 조건이 트루여야 트루, 하나라도 펄스면 펄스를 반환
console.log(1 === 1 && 1 >= 0);

//or 연산자 : ||
// 연결한 조건 중 하나라도 true면 true를 반환,

console.log(1 === 1 || 1 >= 3); // false
num = 1;
console.log(1 === 1 || (1 >= 3 && typeof num === "string")); // false

//not 연산자 : `!` 연산의 결과를 역전 시켜서 반환
console.log(!(1 === 1));
let bool = true;
console.log(!bool);
