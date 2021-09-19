import fs from "fs";

export abstract class FileReader<T> {
  // here <T> is generics
  data: T[] = [];
  constructor(public path: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
