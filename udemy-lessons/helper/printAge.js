export function printAge(age) {
  console.log(age);
}

export class CustomerDetails {
  printFirstName(name) {
    console.log(name);
  }

  /**
   * This method prints the last name
   * @param {string} prints last
   */
  printLastName(name) {
    console.log(name);
  }
}

class PetDetails {
  printName(name) {
    console.log(name);
  }
}

export const pet = new PetDetails(); // Создание экземпляра класса PetDetails
