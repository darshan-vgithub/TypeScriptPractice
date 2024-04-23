interface User {
  dbId: number;
  name: string;
  email: string;
  googleId?: string;
  startTrail(): string;
  getCoupon(getcouponName:string,value:number):number
}

let Darshan: User = {
  name: "darshan",
  email: "darshanv487@gmail.com",
  dbId: 23,
  startTrail: () => {
    return "the trail is started";
  },
  getCoupon(name:"offer",off:10){
    return off
  }
};

console.log(Darshan);
