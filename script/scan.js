import fse from 'fs-extra';

async function scan(path) {
  let files = await fse.readdir(path);
  console.log(files);
  return files;
}

export default scan;