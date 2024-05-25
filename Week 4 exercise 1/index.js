function infoAboutMe() {
    // Create a sentence about yourself
    const sentence = "I am [Jonathan], [32] years old, [French], and live in [Herzliya].";
    console.log(sentence);
  }
   infoAboutMe();
  

// Part 2 of the exercise:

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  // Create the sentence using string concatenation
  const sentence = "You are " + personName + ", " + personAge + " years old, and your favorite color is " + personFavoriteColor + ".";
  console.log(sentence);
}

// Call the function twice with different arguments
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
