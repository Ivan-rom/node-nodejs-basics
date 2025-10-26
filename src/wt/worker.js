import worker_threads from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (Math.random() > 0.5) throw new Error("Artificial error");

  worker_threads.parentPort.postMessage(
    nthFibonacci(worker_threads.workerData)
  );
};

sendResult();
