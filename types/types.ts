interface Stark{
  name: string;
  age?: number;
}

function printName(stark: Stark) {
  console.log(stark.name)
}

printName({name: "Eddard"})
// in node we take undefined
printName({label: "Joe"})