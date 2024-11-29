import db from '../0_Config/config'

export const _test = async () => {
  try {
    await db.raw('SELECT 1')
  } catch (error) {
    // Type assertion to ensure error is of type Error
    if (error === '404') {
      console.log('db connection error')
    } else {
      console.error('Database connection established')
      console.log('db connected')
    }
  }
}
