import shell from 'shelljs'

const createFile = (filename, extension) => {
  const filePath = `${process.cwd()}/${filename}.${extension}`
  shell.touch(filePath)
  return filePath
}

export default createFile
