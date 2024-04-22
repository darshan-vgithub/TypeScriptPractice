// Readonly........................................................
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcarddetails?: number; // "?" this question mark means optional if it is not assigned also it will not throw error this is also called as options
};



type cardNumber={
    cardnumber:number
}

type cardDate={
    carddate:number
}

type cardDetails=cardNumber & cardDate &{
    cvv:number
}




let myUser: User = {
  _id: "12344",
  name: "Darshan",
  email: "darshanv487@gmail.com",
  isActive: true,
};

myUser.email = "darshan@gmail.com";
// myUser._id=""  if we have put readonly means ones we assign the value we cant change that

export {};
