const nayok = {
  name: "sakib khan",
  id: 213,
  address: "move cinema",
  isSingle: true,
  friends: ["apu", "Roja", "joha", "habib"],
  movies: [
    {
      name: "number one sakib khan",
      year: 2015,
    },
    {
      name: "King khan",
      year: 2016,
    },
  ],
  act: function () {
    console.log("actinglike sakib khan ");
  },
  car: {
    brand: "tesla",
    price: 500000000,
    made: 2024,
    manufacturer: {
      name: "tesla",
      ceo: "elon mask",
      country: "usa",
    },
  },
};

// console.log(student);
// console.log(student.car);
console.log(nayok.act);
nayok.act();
