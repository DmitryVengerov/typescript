function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
// in node we take undefined
printName({ label: "Joe" });
