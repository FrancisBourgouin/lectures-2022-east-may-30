const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);
const hash2 = bcrypt.hashSync("Potato", salt);

console.log(salt);
console.log(hash);
console.log(hash2);
