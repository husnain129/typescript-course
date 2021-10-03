import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public syns: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
