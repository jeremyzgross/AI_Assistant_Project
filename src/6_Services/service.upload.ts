import multer from 'multer'

export const upload = multer({
  dest: '/Users/jeremyzgross/AI Projects/AI_Assistant_Project/src/upload/',
  limits: { fileSize: 1000 * 1024 * 1024 },
})
