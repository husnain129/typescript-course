import { MatchResult } from "../MatchResult";
import { dateStringToDate } from "../utils";
import { FileReader } from "./FileReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends FileReader<MatchData> {
  mapRow(item: string[]): MatchData {
    return [
      dateStringToDate(item[0]),
      item[1],
      item[2],
      parseInt(item[3]),
      parseInt(item[4]),
      item[5] as MatchResult,
      item[6],
    ];
  }
}
