import chalk from 'chalk'
import { welcomeMessage, askQuestions, createFile } from './modules'

const app = async () => {
  // show script intro
  welcomeMessage()

  // ask questions
  const answers = await askQuestions()
  const { FILENAME, EXTENSION } = answers

  // create the file
  const filePath = createFile(FILENAME, EXTENSION)

  // show success message
  console.log(chalk.white.bgGreen.bold(`Done! File created at ${filePath}`))
}

export default app
