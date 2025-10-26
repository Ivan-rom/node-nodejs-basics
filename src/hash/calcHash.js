import fs from "node:fs";
import crypto from "node:crypto";

const calculateHash = async () => {
  fs.readFile(
    `${import.meta.dirname}/files/fileToCalculateHashFor.txt`,
    "utf8",
    (err, data) => {
      if (err) throw new Error("FS operation failed");

      const hash = crypto.createHash("sha256").update(data).digest("hex");
      console.log(hash);
    }
  );
};

await calculateHash();
