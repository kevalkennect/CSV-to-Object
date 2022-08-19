import axios from "axios";
import * as crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = Buffer.from(
  "22975a65b34aefb6227084727f27bfae234d1be463d1e2f2cc611820e5aa5772",
  "hex"
);
const iv = Buffer.from("979843777c873b5a2060c2ad968a20d9", "hex");

axios.get("http://localhost:3001/").then((res) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv, res.data);

  console.log(decipher);
});
