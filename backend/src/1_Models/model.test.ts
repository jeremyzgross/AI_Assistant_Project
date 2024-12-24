import db from '../0_Config/config'

// export const _test = async () => {
//   try {
//     await db.raw('SELECT 1')
//   } catch (error) {
//     // Type assertion to ensure error is of type Error
//     if (error === '404') {
//       console.log('db connection error')
//     } else {
//       console.error('Database connection established')
//       console.log('db connected')
//     }
//   }
// }

// export const _test = async (userId: string, sessionNumber: number) => {
//   try {
//     const result = await db.raw(
//       `INSERT INTO user_sessions(user_id, session_date, session_number) VALUES('${userId}', NOW(), ${sessionNumber}) RETURNING session_date`
//     )
//     console.log('User session added:', result)
//     return result
//   } catch (error) {
//     console.error('Error adding user session', error)
//     throw error;  
//   } 
//     }
  
