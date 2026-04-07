//아래처럼 별을 찍어주세요.
//예시)

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i == 5) {
//     console.log("*****");
//   } else if (i == 4) {
//     console.log("****");
//   } else if (i == 3) {
//     console.log("***");
//   } else if (i == 2) {
//     console.log("**");
//   } else if (i == 1) {
//     console.log("*");
//   }
// }

// let star = "";
// for (let i = 1; i <= 5; i++) {
//   star += "*";
// }
// console.log(star);
// for (let i = 1; i <= 0; i) {
//   star += "*";
// }
// console.log(star);
// for (let i = 1; i <= 0; i) {
//   star += "*";
// }
// console.log(star);
// for (let i = 1; i <= 0; i) {
//   star += "*";
// }
// console.log(star);
// for (let i = 1; i <= 0; i) {
//   star += "*";
// }
// console.log(star);

// for (let i = 0; i < 5; i++) {
//   let star = "";
//   for (let z = 0; z <= i; z++) {
//     star += "*";
//   }
//   console.log(star);
// }

for (let i = 0; i < 6; i++) {
  let space = "";
  for (let z = 5; z > i; z--) {
    space += "";
  }
  let star = "";
  for (let y = 0; y < i; y++) {
    star += "*";
  }
  console.log(`${space}${star}`);
}
