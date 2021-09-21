const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20
  }
];

//Write a function which filter users who has scoresGreaterThan85,
const scoresGreaterThan85 = (array) => {
  const result = array.filter((x) => x.scores >= 85);
  return result;
};

console.log(scoresGreaterThan85(users));

const newUser = {
  name: "Ankita",
  scores: 134,
  skills: ["HTML", "CSS", "JS", "REACT"],
  age: 22
};

const existUser = {
  name: "Brook",
  scores: 75,
  skills: ["HTM", "CSS", "JS"],
  age: 16
};

//Write a function which addUser to the user array only if the user does not exist.
const addUser = (user) => {
  let User = users.find((User) => User.name === user.name);
  if (!User) {
    users.push(user);
    console.log(users);
  } else {
    console.log("user  exists");
  }
};
addUser(existUser);

// Write a function which addUserSkill which can add skill to a user only if the user exist.
const addUserSkill = (user) => {
  let User = users.find((User) => User.name === user.name);
  if (User) {
    User.skills.push(...user.skills);
    console.log("added");
    console.log(users);
  } else {
    console.log("user not found");
  }
};
addUserSkill(existUser);

//  Write a function which editUser if the user exist in the users array.
const editUser = (user) => {
  let User = users.find((User) => User.name === user.name);
  if (User) {
    User.age = user.age;
    User.scores = user.scores;
    User.skills.push(...user.skills);
    console.log("updated");
    console.log(users);
  } else {
    console.log("user not found");
  }
};

editUser(existUser);
