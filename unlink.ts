import { unlink } from 'node:fs/promises';

/**
 * @description 删除文件
 */
try {
  await unlink('./delete.txt');
  console.log('successfully deleted ./delete.txt');
} catch (error) {
  console.log(222222);
  console.error('===========', JSON.stringify(error));
}
