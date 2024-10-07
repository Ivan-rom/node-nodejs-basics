import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const filePath = `${__dirname}/files/script.js`;

  const childProcess = spawn("node", [filePath, ...args]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
