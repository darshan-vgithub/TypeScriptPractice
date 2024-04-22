const user = {
  name: "Darshan",
  email: "darshanv487@gmail.com",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

let newUser = {
  name: "darshan",
  isActive: false,
  email: "darshanv487@gmail.com",
};

createUser(newUser);

function createCourse(): { name: string; age: number; work: string } {
  return { name: "darshan", age: 23, work: "Developer" };
}

export {};
