const data = [
  {
    id: 1,
    first_name: "Jose",
    last_name: "Lopez",
    email: "joselopez0944@slingacademy.com",
    phone: ["+1-971-533-4552x1542", "+9177777777"],
    gender: "male",
    age: 25,
    job_title: "Project Manager",
    years_of_experience: 1,
    salary: 8500,
    department: "Product",
    country: "India",
  },
  {
    id: 1,
    first_name: "Jose",
    last_name: "Lopez",
    email: "joselopez0944@slingacademy.com",
    phone: ["+1-971-533-4552x1542", "+9177777777"],
    gender: "male",
    age: 25,
    job_title: "Project Manager",
    years_of_experience: 1,
    salary: 8500,
    department: "Product",
    country: "India",
  },
  {
    id: 1,
    first_name: "Jose",
    last_name: "Lopez",
    email: "joselopez0944@slingacademy.com",
    phone: ["+1-971-533-4552x1542", "+0477777777"],
    gender: "male",
    age: 25,
    job_title: "Project Manager",
    years_of_experience: 1,
    salary: 8500,
    department: "Product",
    country: "germany",
  },
  {
    id: 1,
    first_name: "Jose",
    last_name: "Lopez",
    email: "joselopez0944@slingacademy.com",
    phone: ["+1-971-533-4552x1542", "+02777777"],
    gender: "male",
    age: 25,
    job_title: "Project Manager",
    years_of_experience: 1,
    salary: 8500,
    department: "Product",
    country: "japan",
  },
];

//   output
//   employees name,email,phonenumber,depat,country

//   filter the employees  with indian phone number?
// const news = []
// const result =  data.forEach((item)=>
// {
//     item.phone[1].startsWith("+91") ? news.push(item) : ""
// })
// let objj = []
//     for(let i in news)
//     {
//         const {first_name,email,phone,department,country} = news[i]
//         objj.push({first_name,email,phone,department,country})
//     }

// console.log(objj)
// .startsWith("+91") ? news.push(item) : ""
let objj = [];
const result = data.forEach((item) => {
  item.phone.forEach((i) => {
    if (i.startsWith("+91")) {
      const { first_name, email, phone, department, country } = item;
      objj.push({ first_name, email, phone, department, country });
    }
  });
});

console.log(objj);
