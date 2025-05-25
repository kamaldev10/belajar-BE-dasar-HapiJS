const path = require("path");
const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

const pathWoi = path.resolve(__dirname, "notes.txt");
fs.readFile(pathWoi, "UTF-8", fileReadCallback);
