import { Sorter } from "./Sorter";
declare class Node {
    data: number;
    next: Node | null;
    constructor(data: number);
}
export declare class LinkedList extends Sorter {
    head: Node | null;
    add(data: number): void;
    get length(): number;
    at(index: number): Node;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
    print(): void;
}
export {};
