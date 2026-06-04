import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.setHeader("content-type", "text/html; charset=utf-8").status(200).send("Estamos On-line!! É isso aí!!");
}

export default status;
