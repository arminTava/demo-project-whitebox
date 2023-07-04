module.exports = {
  databaseOptions: {
    host: "localhost",
    port: 3308,
    user: "prisma",
    password: "prisma",
    database: "installion_db",
  },
  createDatabase: true,
  dbSchema: "./fixtures/installion_api_db_schema.sql",
  truncateDatabase: false,
};
