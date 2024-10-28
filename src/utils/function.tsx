import path from "path";
import fs from "fs"

var filesDir = path.join(process.cwd(), "src/data");

export function getFileNames() {
  const fileNames = fs.readdirSync(filesDir);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.tsx$/, ""),
      },
    };
  });
}

export function checkFile(name: string) {
  if (!fs.existsSync(filesDir + "/" + name + ".tsx")) {
    return 0;
  } 

  return name;

}

