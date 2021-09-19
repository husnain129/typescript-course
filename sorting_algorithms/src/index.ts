// import { NumbersCollection } from "./NumbersCollection";
// const numberCollection = new NumbersCollection([2, 31, 41, 23, 1]);
// const characterCollection = new CharactersCollection("Xascwr");
// characterCollection.sort();
// console.log(characterCollection.data);
import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(50);
linkedList.add(-50);
linkedList.add(530);
linkedList.sort();
linkedList.print();
