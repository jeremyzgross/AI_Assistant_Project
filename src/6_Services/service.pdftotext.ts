import pdf from 'pdf-parse'
import path from 'path'
import os from 'os'
import fs from 'fs'
// export const pdfToTextService = async () => {
//   try {
//     const filePath = path.join(
//       os.homedir(),
//       'AI Projects',
//       'AI_Assistant_Project',
//       'src',
//       'upload',
//       'JeremyGross_DI_UNI_CV.pdf'
//     );

//     const text = await pdfToText(filePath, {
//       popplerFullPath: '/usr/local/Cellar/poppler/21.12.0/bin/pdftocairo'
//     });
//     console.log('PDF text:', text);
//     // return text
//   } catch (error) {
//     console.error('Error converting PDF to text:', error)
//   }
// }

export const pdfParseService = async () => {
  // const filePath = path.join(
  //   os.homedir(),
  //   'Downloads',
  //   'JeremyGross_DI_UNI_CV.pdf'
  // )
  const filePath = '/Users/jeremygross/Downloads/JeremyGross_DI_UNI_CV.pdf'
  console.log(filePath)

  try {
    // Check if the file exists. Currently not finding file with path.join
    if (fs.existsSync(filePath)) {
      console.log('File exists')
      const dataBuffer = await fs.promises.readFile(filePath) 
      const data = await pdf(dataBuffer)
      console.log(data.text)
    } else {
      console.log('File does not exist')
      throw new Error('PDF file not found or could not be read.')
    }
  } catch (error) {
    console.error('Error converting PDF to text:', error)
  }
}
