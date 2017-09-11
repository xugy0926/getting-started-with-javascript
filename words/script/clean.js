import { cleanDir } from './fs';

function clean() {
  return Promise.all([
    cleanDir('output/*', {
      nosort: true,
      dot: true,
      ignore: ['output/readme.md'],
    }),
  ]);
}

export default clean;
