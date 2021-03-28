let firstName = ['Lebron', 'Angelina', 'Al', 'Megan', 'Cristiano'];
let lastName = ['James', 'Jolie', 'Pacino', 'Fox', 'Ronaldo'];
let fullName = [];


function result() {
  for (let n = 0; n < firstName.length; n++) {
    fullName.push(`${n + 1}. ${firstName[n]} ${lastName[n]}`);
  }
  console.log(fullName);
}


result();

