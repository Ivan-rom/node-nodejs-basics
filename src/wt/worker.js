import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const result = nthFibonacci(workerData);

  if (Math.random() < 0.5) {
    throw new Error("Artificial error");
  }

  parentPort.postMessage(result);
};

sendResult();
