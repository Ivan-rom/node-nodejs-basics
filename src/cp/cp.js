import cp from "node:child_process";

const DIRNAME = `${import.meta.dirname}/files/script.js`;

const spawnChildProcess = async (args = []) => {
  const childProcess = cp.spawn("node", [DIRNAME, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
