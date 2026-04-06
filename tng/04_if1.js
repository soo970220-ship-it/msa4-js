let grade = 99;
rank = 'F'


// if (grade === 100) {
//   console.log(`당신의 점수는 ${grade}점 입니다. <A+>`);
// } else if (grade >= 90) {
//   console.log(`당신의점수는 ${grade}점 입니다.<A>`);
// } else if (grade >= 80) {
//   console.log(`당신의 점수는 ${grade}점 입니다.<B>`);
// } else if (grade >= 70) {
//   console.log(`당신의 점수는 ${grade}점 입니다.<C>`);
// } else if (grade >= 60) {
//   console.log(`당신의 점수는 ${grade}점 입니다.<D>`);
// } else if (grade < 60) {
//   console.log(`당신의 점수는 ${grade}점 입니다.<E>`);
// }

if (grade === 100) {
  rank = 'A+';
} else if (grade >= 90) {
  rank = 'A';}
  else if (grade >= 80) {
 rank = 'B';}
  else if (grade >= 70) {
 rank = 'C';}
  else if (grade >= 60) {
  rank = 'D';}
 else if (grade < 60){
  rank = 'F'
}
console.log(`당신의 점수는 ${grade}점 입니다.<${rank}>`)

if(grade>100 || grade < 0 || typeof grade !== 'number'){
  console.log('입력값 오류');else{

  } 
  
}