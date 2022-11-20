function extractFile(path) {
  let pathExtracted = path.split("\\");
  let template = pathExtracted[pathExtracted.length - 1].split(".");
  let extension = template.pop();
  let fileName = template.join(".");

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\template.bak.pptx");
