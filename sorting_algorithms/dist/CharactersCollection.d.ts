import { Sorter } from "./Sorter";
export declare class CharactersCollection extends Sorter {
    data: string;
    constructor(data: string);
    get length(): number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}
