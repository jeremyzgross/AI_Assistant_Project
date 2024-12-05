import pdf from 'pdf-parse'
import fs from 'fs'

//PDF Parser
export const pdfParseService = async (filePath: string) => {
  console.log('Checking file path:', filePath)
  try {
    if (fs.existsSync(filePath)) {
      console.log('File exists, reading...')
      try {
        const dataBuffer = await fs.promises.readFile(filePath)
        console.log('Buffer loaded, parsing PDF...')
        const data = await pdf(dataBuffer)
        console.log('Parsed PDF Text:', data.text)
        return data.text
      } catch (error) {
        console.error('Error reading file:', error)
      }
    } else {
      console.error('File does not exist at:', filePath)
    }
  } catch (error) {
    console.error('Error accessing file:', error)
  }
}
