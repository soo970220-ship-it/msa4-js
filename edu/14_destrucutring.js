// dusestrucutring(구조분해)
//배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];
//let arrvall=arr[0];
//let arrval2=arr[1];

// const(varl1,val2,var3,var41,var15) = arr;
// const(varl1, , , ,var15) = arr;
// const [val1, val2] = arr;
const [, val1, , val2] = arr;

const user = {
  name: "홍길동",
  age: 20,
  gender: "M",
  addr: "서울시",
  info: {
    board: 1,
  },
};

const age = 0;
const { age: userAge, gender, addr = "없음" } = user;
console.log(addr);
