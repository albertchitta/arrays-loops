const team4 = [
{
  name: "Albert",
  email: "albert.w.chittaphong@gmail.com",
  color: "red",
  id: 9,
  unique: "black belt",
  image: "https://avatars.githubusercontent.com/u/83558122?v=4",
},
{
  name: "Dario",
  email: "darioperez1415@gmail.com",
  color: "Ash Grey",
  id: 3,
  unique: "very good at football",
  image: "https://avatars.githubusercontent.com/u/83309084?v=4",
},
{
  name: "Meredith",
  email: "meredith.marcum@hotmail.com",
  color: "purple",
  id: 12,
  unique: "Worked on Roller Coaster",
  image: "https://avatars.githubusercontent.com/u/85968205?v=4",
},
{
  name: "Craig",
  email: "wellspring.craig@gmail.com",
  color: "purple",
  id: 1,
  unique: "extremely flexible",
  image: "https://avatars.githubusercontent.com/u/61626143?v=4",
}
]

team4.forEach((memberObj) => {
  console.log(memberObj.name);
})


// Filter method #1
const filterColor = (array, color) => {
  return array.filter(memberObj => memberObj.color === color);
}
console.log(filterColor(team4, "purple"));

// Filter method #2
// console.log(team4.filter(memberObj => memberObj.color === "purple"));

//Filter method #3
const filterNameAndEmail = (array, name, email) => {
  return array.filter(memberObj => memberObj.name === name && memberObj.email === email);
}
console.log(filterNameAndEmail(team4, "Dario", "darioperez1415@gmail.com"));

// Find method. Exits loop after the first element match
const findId = (array, id) => {
  return array.find(memberObj => memberObj.id === id);
}
console.log(findId(team4, 1));

const divEl = document.querySelector("#main");
divEl.innerHTML = "hello world";
