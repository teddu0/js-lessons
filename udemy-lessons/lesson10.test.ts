const customerFirstName: string = "Konstantin";
const customerLastName: string = "Volkov";
let isActive: boolean = true;

type User = {
  firstName: string;
  lastName: string;
  age: number;
  toys: string[];
};

const son: User = {
  firstName: "Alex",
  lastName: "Volkov",
  age: 4,
  toys: ["Iron man", "Spider man"],
};
