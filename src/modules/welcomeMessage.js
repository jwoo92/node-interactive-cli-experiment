import chalk from 'chalk'
import figlet from 'figlet'

const welcomeMessage = () => {
  console.log(
    chalk.green(
      figlet.textSync('Node f*cking JS', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  )
}

export default welcomeMessage
