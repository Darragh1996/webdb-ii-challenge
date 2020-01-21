exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("VIN");
    //make
    table
      .text("make", 128)
      .unique()
      .notNullable();
    //model
    table
      .text("model", 128)
      .unique()
      .notNullable();
    //mileage
    table.decimal("mileage").notNullable();
    //transmission
    table.text("transmission");
    //status
    table.text("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
