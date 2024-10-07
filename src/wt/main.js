import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const __dirname = import.meta.dirname;

  const CPUNumber = cpus().length;
  const filePath = `${__dirname}/worker.js`;
  const initialNumber = 10;
  const threads = new Array(CPUNumber);

  for (let i = 0; i < CPUNumber; i++) {
    threads[i] = new Promise((resolve, reject) => {
      const result = {};

      const worker = new Worker(filePath, {
        workerData: initialNumber + i,
      });

      worker.on("message", (data) => {
        result.status = "resolved";
        result.data = data;

        resolve(result);
      });

      worker.on("error", () => {
        result.status = "error";
        result.data = null;

        reject(result);
      });
    });
  }

  Promise.allSettled(threads).then((results) =>
    console.log(
      results.map((result) =>
        result.status === "fulfilled" ? result.value : result.reason
      )
    )
  );
};

await performCalculations();
