import { createHash } from "crypto";

const cryptoHash = (...imputs) => {
  const hash = createHash("sha256");
  hash.update(imputs.sort().join(" "));
  return hash.digest("hex");
};

export default cryptoHash;
