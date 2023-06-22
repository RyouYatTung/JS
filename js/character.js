function firstRecurc(input) {
  for (let index = 0; index < input.length; index++) {
    console.log("i", index);
    for (let j = 0; j < input.length; j++) {
      console.log("j", j);
      if (input[index] === input[j]) {
        return input[index];
      }
    }
  }
  return undefined;
}

console.log(firstRecurc([3, 4, 2, 6, 7, 8, 3, 5, 3]));
