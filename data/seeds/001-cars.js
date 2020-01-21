exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "make1",
          model: "model1",
          mileage: "50",
          transmission: "manual",
          status: "good condition"
        },
        {
          make: "make2",
          model: "model2",
          mileage: "50",
          transmission: "manual",
          status: "good condition"
        },
        {
          make: "make3",
          model: "model3",
          mileage: "50",
          transmission: "manual",
          status: "good condition"
        },
        {
          make: "make4",
          model: "model4",
          mileage: "32",
          transmission: "automatic"
        }
      ]);
    });
};
