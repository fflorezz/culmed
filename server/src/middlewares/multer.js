import multer from "multer";
import path from "path";
import { v4 as uuid4 } from "uuid";

const dtn = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dtn);
  },
  filename: (req, file, cb) => {
    cb(null, `${uuid4()}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({
  storage: storage,
  dest: dtn,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      "Error: File upload only supports the following filetypes - " + filetypes
    );
  },
});
