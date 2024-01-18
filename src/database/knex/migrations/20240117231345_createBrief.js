exports.up = knex => knex.schema.createTable("brief", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("course").notNullable();
    table.text("feedback").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("brief");