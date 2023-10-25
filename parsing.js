//2-15 excercise 1



function parseAndDisplayName(name1) {
  let positionOfSpace = name1.indexOf(" ");

  let firstName = name1.substring(0, positionOfSpace);
  let lastName = name1.substring(positionOfSpace + 1);

  console.log(`
    Name: ${name1} 
    First Name: ${firstName} 
    Last Name: ${lastName}`);
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
