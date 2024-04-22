type User = {
  name: string;
  email: string;
  age: number;
  phone: number;
  isActive: boolean;
};

function craeteUser(user: User) {
 console.log(user);
 
}

craeteUser({name:"darshan",email:"darshanv487@gmail.com",age:23,phone:9886849137,isActive:true})

