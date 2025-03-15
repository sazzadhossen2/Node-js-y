const path =require("path");

console.log("Directory name:",path.dirname(__filename));
console.log("File name",path.basename(__filename));
console.log("File extension", path.extname(__filename));

const joinPath =path.join("/user","document","node","project");
console.log("Joined path", joinPath);

const resolvepath =path.resolve("user","document","node","project");
console.log("Resolve:", resolvepath);

const normalizePath= path.normalize("/user/.document/../node/projects");
console.log(normalizePath);
