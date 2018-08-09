import inquirer from 'inquirer'

const askQuestions = () => {
  const questions = [
    {
      name: 'FILENAME',
      type: 'input',
      message: 'What is the name of the file without extension?',
    },
    {
      type: 'list',
      name: 'EXTENSION',
      message: 'What is the file extension?',
      choices: ['.rb', '.js', '.php', '.css'],
      filter: (val) => val.split('.')[1],
    },
  ]

  return inquirer.prompt(questions)
}

export default askQuestions
