import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

export default db
