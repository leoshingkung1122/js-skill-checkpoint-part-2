const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const scoreFilterArray = students.filter((student) => student.score > 50);
const addTenPercentScore = scoreFilterArray.map((student) => student.score + ((student.score*10)/100));
let sumTotal = addTenPercentScore.reduce((acc,curr) => acc + curr,0);
console.log(`Total score is ${sumTotal}`)
