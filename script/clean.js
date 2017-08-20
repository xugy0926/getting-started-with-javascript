import { cleanDir } from './lib/fs';

function clean() {
  return Promise.all([
    cleanDir('result/*', {
      nosort: true,
      dot: true,
      ignore: ['result/readme.md'],
    }),
  ]);
}

export default clean;
