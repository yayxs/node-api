import { readFile } from 'node:fs/promises';
try {
  console.log('meta url', import.meta.url); // file:///D:/gh-code/node-api/readFile.ts
  const filePath = new URL('./package.json', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
