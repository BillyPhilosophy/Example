interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
// console.log(mySquare)

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src:string,sub:string): boolean {
  let result = src.search(sub);
  return result > -1;
}

console.log(mySearch('123','11223')); 



class Animal {
	name: string;
}
class Dog extends Animal {
	breed: string;
}

let dog = new Dog();
console.log(dog);


