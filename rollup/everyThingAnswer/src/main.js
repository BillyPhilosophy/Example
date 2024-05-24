import answer from 'the-answer';
import _ from 'lodash';

export default function () {
  console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
  console.log(`the answer is  ${answer}`);
}