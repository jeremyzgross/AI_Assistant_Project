import multer from 'multer'
import fs from 'fs'

const uploadPath = '/Users/jeremyzgross/AI Projects/AI_Assistant_Project/src/upload/'
export const upload = multer({
  dest: uploadPath,
  limits: { fileSize: 1000 * 1024 * 1024 },
})


export const deleteFile = (uploadPath: string) => {
  fs.unlinkSync(uploadPath)
}
