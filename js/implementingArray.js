// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//   }

//   shiftItems(index) {
//     for (let i = index; 1 < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//   }
// }

// const newArr = new MyArray();
// newArr.push("hi");
// newArr.push("eee");
// newArr.pop();
// console.log(newArr);

function reverse(str) {
  let arr = str.split("");
  let reverseArr = arr.reverse();
  let joinArr = reverseArr.join("");
  return joinArr;
}

console.log(reverse("he my name is ssssa"));
