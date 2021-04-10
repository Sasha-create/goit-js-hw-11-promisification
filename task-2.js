const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return Promise.resolve(updatedUsers);
};

//async
// const toggleUserState = async (allUsers, userName) =>
//   allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

const logger = (updatedUsers) => console.table(updatedUsers);

/* Должно работать так*/

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
