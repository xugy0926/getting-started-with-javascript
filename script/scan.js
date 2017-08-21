import fse from 'fs-extra';

async function scan(path) {
  let files = await fse.readdir(path);
  return files;
}

export default scan;