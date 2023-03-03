function _new(base,...args){
  var obj = {};
  obj.__proto__ = base.prototype;
  base.apply(obj, args);
  return obj;
}
function Student(i){
  this.name = i;
  this.hp = 100;
  this.mp = 1000;
  this.power = 100,
  this.defense = 100;
}
Student.prototype.from = "sdust";
var stuGroup = [];
for(let i=0;i<10;++i){
  stuGroup.push(_new(Student,i));
}
console.log(stuGroup);
