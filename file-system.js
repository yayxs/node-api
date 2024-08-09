import { unlink } from 'node:fs/promises'

try {
  await unlink('./file.txt')
} catch (error) {
  console.error('error', JSON.stringify(error))
}
