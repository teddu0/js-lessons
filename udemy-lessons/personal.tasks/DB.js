const { Pool } = require("pg");

// Параметры подключения к PostgreSQL
const pool = new Pool({
  user: "user",
  host: "host",
  database: "name",
  password: "pass",
  port: 5432,
});

// Пример выполнения запроса
async function queryExample() {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT name FROM cities WHERE name = 'Москва'"
    );
    console.log(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    client.release(); // Важно освободить клиента после использования
  }
}

// Пример использования
queryExample();
