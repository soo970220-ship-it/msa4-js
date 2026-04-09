//String(문자열) 객체
let str1 = "쌍따옴표";
let str2 = "홑따옴표";
let str3 = `백틱`;

//const String1 = new String('객체로생성');
//원래는 이렇게 객체로 생성함

console.log(str1.length);

// String.charAt(idx): string
// 문자열에서 해당 인덱스에 맞는 문자를 반환

let str4 = "문자열입니다.";
console.log(str4.charAt(3)); //인덱스는 0부터 시작이기 때문에 3을쓰면 입이 나옴

//string.indexOf(searchStr, idx): Number
// 문자열에서 해당 검색어를 찾아 최초의 인덱스를 반환
// 없을경우 -1를 반환

let str5 = "문자열입니다. 문자열입니다.";
console.log(str5.indexOf("열")); //2
console.log(str5.indexOf("열", 4)); //10
console.log(str5.indexOf("입니다.")); //3
console.log(str5.indexOf("아아.")); //-1

//string.replace(pattern,replacment):string
//문자열에서 해당 패턴의 첫번째 문자열을 찾아서,
//대체문자열로 변경한 문자열을 반환

let str6 = "문자열입니다. 문자열입니다.";
console.log(str6.replace("열", ""));
console.log(str6.replace("문자열", "돈까스").replace("문자열", "돈까스"));

//☆string.replace(pattern,replaceAll):string
//문자열에서 해당 패턴의 모든 문자열을 찾아서,
//대체문자열로 변경한 문자열을 반환
let str7 = "문자열입니다. 문자열입니다.";
console.log(str7.replaceAll("문자열입니다.", "돈까스"));

//String.substring(startIndex, endIndex) : String
//문자열에서 시작인덱스 부터 끝 인덱스까지 자른 문자열을 반환
//끝 인덱스 생략 시, 시작 인덱스 부터 끝까지 자른 문장열을 반환
let str8 = "문자열입니다. 문자열입니다.";
console.log(str8.substring(2, 3));

//☆string.split(separator,limit): Array
// 문자열에서 구분자를 기준으로 잘라 각 문자열을 배열요로 만들어 반환
let str9 = "짜장면, 짬뽕, 탕수육, 라조기, 크림새우";
let str9Arr = str9.split(", ");
str9Arr.forEach((val) => {
  console.log(val);
});

//☆string.trim(): String
//문자열에서 시작과 끝의 공백을 제거한 문자열을 반환
// 사이의 공백은 지우지않고 좌우의 공백만 제거함
let str10 = "     아  아아";
console.log(str10.trim());

//string.toUpperCase(), String.toLowerCase()
// 문자열을 대소문자로 변경해서 반환
let str11 = "feafTTeweffea";
console.log(str11.toUpperCase());
console.log(str11.toLowerCase());
