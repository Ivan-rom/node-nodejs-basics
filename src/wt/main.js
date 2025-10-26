import os from "node:os";
import worker_threads from "node:worker_threads";

const START_NUMBER = 10;
const CPUS = os.cpus().length;
const DIRNAME = `${import.meta.dirname}/worker.js`;

const performCalculations = async () => {
  const threads = new Array(CPUS);

  for (let i = 0; i < CPUS; i++) {
    threads[i] = new Promise((resolve) => {
      const worker = new worker_threads.Worker(DIRNAME, {
        workerData: START_NUMBER + i,
      });

      worker.on("message", (data) => {
        resolve({ status: "resolved", data: data });
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  }

  Promise.allSettled(threads).then((res) => {
    console.log(res.map((item) => item.value));
  });
};

await performCalculations();
