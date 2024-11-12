console.log('starting copy');

import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const padDir = __dirname;
const projectDir = process.cwd();
const vueDirName = 'vue';
const padVueDirAbsolutePath = [padDir, vueDirName].join('/');
const projectDirAbsolutePath = [projectDir, vueDirName].join('/');
const dirsToCopy = ['cypress', 'src', 'public'];

console.log('creating directories');
fs.mkdirSync(projectDirAbsolutePath, { recursive: true });
dirsToCopy.forEach(eachDir => {
  fs.mkdirSync([projectDirAbsolutePath, eachDir].join('/'), { recursive: true });
});

const filesToCopy = [
  'ElementRenderer.tests.json',
  'cypress.config.js',
  'index.html',
  'jsconfig.json',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  'vitest.config.js'
];
console.log('copying root files');
filesToCopy.forEach(eachFile => {
  copyFile(eachFile);
});

const cpOptions = {
  recursive: true,
  filter: (src, dest) => {
    if (src.includes('nonrepo')) return false;
    return true;
  }
};
console.log('copying directory contents');
dirsToCopy.forEach(eachDir => {
  const source = [padVueDirAbsolutePath, eachDir].join('/');
  const target = [projectDirAbsolutePath, eachDir].join('/');
  fs.cpSync(padVueDirAbsolutePath + '/' + eachDir, projectDirAbsolutePath+ '/' + eachDir, cpOptions);
});

function copyFile(filename) {
  const source = [padVueDirAbsolutePath, filename].join('/');
  const target = [projectDirAbsolutePath, filename].join('/');
  fs.copyFileSync(source, target);
// console.log('filesToCopy', source, target);
}
