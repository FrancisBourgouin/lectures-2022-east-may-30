// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", quantity: 5 },
  { name: "Cookie", icon: "🍪", quantity: 10 },
  { name: "Tuna", icon: "🎣", quantity: 50 },
  { name: "Pasta", icon: "🍝", quantity: 5 },
  { name: "Potato", icon: "🥔", quantity: 9001 },
];

const calvinsRun = [{ name: "Cookie", icon: "🍪", quantity: 2 }];

const calvinsRun2 = ["🍪"];
console.log(calvinsRun2);

const runReport = (run) => {
  const output = [...run];
  for (const icon of run) {
    const itemIndex = pantry.findIndex((item) => item.icon === icon);
    output[0] = pantry[itemIndex];
    // console.log("There is one " + pantry[itemIndex].name);
  }
  console.log(output);
};

runReport(calvinsRun2);
runReport(calvinsRun2);

// category_id
