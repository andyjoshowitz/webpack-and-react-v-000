function reveal(person, realIdentity) {
  person.identity = realIdentity
}

const gutMensch = {
  name: "Andrew Cohn",
  identity: "Friendly Neighborhood Flatiron Teacher",
}

reveal(gutMensch, "Chrome Boi")
