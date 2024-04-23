let score: number | string;

score = "lalala";
score = 23;
// score=true

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Darshan: User | Admin = { name: "darshan", id: 23 };

Darshan = { username: "Darshan@flame", id: 2323 };

getDbId(33);
getDbId("hello");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id.toFixed();
  }
}

const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
// const data2:string[] |number[]=[1,2,3,"4"]   here in this case we can have either string array or a number array we cant have both mixed at ones
const data2: (string | number)[] = ["hello", "batman", 23, 24];

let seatallotment: "aisle" | "middle" | "window";
seatallotment = "middle";
// seatallotment = "crew";

export {};
