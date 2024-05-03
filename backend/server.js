const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Define the upload directory

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cs251_project",
});

var app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/register", (req, res) => {
  const { fname, lname, email, uid, password } = req.body;
  // สร้าง userId ที่ unique
  const userId = String(
    Date.now().toString(32) + Math.random().toString(16)
  ).replace(/\./g, "");
  // ตรวจสอบว่า uid ไม่ซ้ำกัน
  connection.query(
    "SELECT * FROM `user` WHERE `userName` = ?",
    [uid],
    function (err, results, fields) {
      if (err) {
        // เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "เกิดข้อผิดพลาดในการสมัครสมาชิก",
        });
      } else {
        // ถ้ามีผู้ใช้งาน uid ในฐานข้อมูลแล้ว
        if (results.length > 0) {
          res.status(400).json({
            success: false,
            message: "UserID นี้ถูกใช้ไปแล้ว",
          });
        } else {
          // ถ้ายังไม่มีผู้ใช้งาน uid นี้ในฐานข้อมูล
          // ทำการเพิ่มข้อมูลผู้ใช้งานใหม่ลงในฐานข้อมูล
          connection.query(
            "INSERT INTO `user` (`UserID`, `fName`, `lName`, `email`, `userName`, `password`) VALUES (?, ?, ?, ?, ?, ?)",
            [userId, fname, lname, email, uid, password],
            function (err, results, fields) {
              if (err) {
                // เกิดข้อผิดพลาดในการเพิ่มข้อมูลผู้ใช้งาน
                console.error("Error:", err);
                res.status(500).json({
                  success: false,
                  message: "เกิดข้อผิดพลาดในการสมัครสมาชิก",
                });
              } else {
                // สมัครสมาชิกสำเร็จ
                res.status(201).json({
                  success: true,
                  message: "สมัครสมาชิกสำเร็จ",
                });
              }
            }
          );
        }
      }
    }
  );
});

app.post("/api/login", (req, res) => {
  const { uid, password } = req.body;
  // ตรวจสอบว่ามีผู้ใช้งานที่ตรงกับข้อมูลที่รับมาหรือไม่
  connection.query(
    "SELECT UserID, userName, fname, lname, gender, email, Tel, uPic, address FROM `user` WHERE `userName` = ? AND `password` = ?",
    [uid, password],
    function (err, results, fields) {
      if (uid === "admin" && password === "00000000") {
        res.status(200).json({
          success: true,
          message: "Admin เข้าสู่ระบบสำเร็จ",
          accessToken: "admin",
          userId: uid,
          user: results,
        });
      } else if (err) {
        // เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "เกิดข้อผิดพลาดในการสมัครสมาชิก",
        });
      } else if (results.length > 0) {
        res.status(200).json({
          success: true,
          message: "เข้าสู่ระบบสำเร็จ",
          accessToken: "user",
          userId: uid,
          user: results,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "ข้อมูลการเข้าสู่ระบบไม่ถูกต้อง",
          accessToken: "",
        });
      }
    }
  );
});

// Endpoint to handle adding a new product
app.post(
  "/api/addProduct",
  upload.single("bPicture"),
  (req, res) => {
    const bId = String(
      Date.now().toString(32) + Math.random().toString(16)
    ).replace(/\./g, "");
    // Retrieve data from the request body
    const { bookName, tNo, price } = req.body;
    let bPicture = null;
    if (req.file) {
      bPicture = req.file.path;
    }

    // Prepare SQL query to insert the new product into the database
    const sql =
      "INSERT INTO book (bID, tNo, bName, price, bPicture) VALUES (?, ?, ?, ?, ?)";
    const values = [bId, tNo, bookName, price, bPicture];

    // Execute the SQL query
    connection.query(
      sql,
      values,
      (err, results, fields) => {
        if (err) {
          // เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล
          console.error("Error:", err);
          res.status(500).json({
            success: false,
            message: "เกิดข้อผิดพลาดในการเพิ่มสินค้า",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Product added successfully",
          });
        }
      }
    );
  }
);

app.get("/api/getProduct", (req, res) => {
  // Query to get products from database
  connection.query("SELECT * FROM book", (err, results) => {
    if (err) {
      console.error("Error:", err);
      res.status(500).json({
        success: false,
        message: "Failed to get products from database",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Products retrieved successfully",
        books: results,
      });
    }
  });
});

app.get("/api/getNovel", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%1%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getFinance", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%2%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getDevelopment", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%3%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getMagazine", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%4%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getHistory", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%5%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getPhilosophy", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%6%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getScience", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%7%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.get("/api/getOther", (req, res) => {
  connection.query(
    'SELECT * FROM book WHERE tNo LIKE "%8%" ',
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          books: results,
        });
      }
    }
  );
});

app.post("/api/addToCart", (req, res) => {
  const { userId, bName, price } = req.body;
  const sql =
    "INSERT INTO buket (UserID, bName, price) VALUES (?, ?, ?)";
  const values = [userId, bName, price];

  // Execute the SQL query
  connection.query(sql, values, (err, results, fields) => {
    if (err) {
      // เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล
      console.error("Error:", err);
      res.status(500).json({
        success: false,
        message: "เกิดข้อผิดพลาดในการเพิ่มสินค้า",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product added successfully",
      });
    }
  });
});

app.post("/api/getCart", (req, res) => {
  const { userId } = req.body;
  connection.query(
    "SELECT * FROM `buket` WHERE `UserID` = ?",
    [userId],
    function (err, results, fields) {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get products from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          bucket: results,
        });
      }
    }
  );
});

app.post("/api/deleteCartItem", (req, res) => {
  const { userId } = req.body;
  connection.query(
    "DELETE FROM `buket` WHERE `UserID` = ?",
    [userId],
    function (err, results, fields) {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "ลบสินค้าออกจากตะกร้าไม่สำเร็จ",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "ลบสินค้าออกจากตะกร้าสำเร็จ",
          bucket: results,
        });
      }
    }
  );
});

app.post("/api/getProfile", (req, res) => {
  const { userKey } = req.body;
  connection.query(
    "SELECT UserID, userName, fname, lname, gender, email, Tel, uPic, address FROM `user` WHERE `UserID` = ?",
    [userKey],
    function (err, results, fields) {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to get profile from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Profile retrieved successfully",
          profile: results,
        });
      }
    }
  );
});

app.put("/api/updateProfile", (req, res) => {
  const {
    username,
    firstName,
    lastName,
    gender,
    tel,
    email,
    address,
    userKey,
  } = req.body;
  connection.query(
    "UPDATE user SET userName = ?, fName = ?, lName = ?, gender = ?, email = ?, Tel = ?, address = ? WHERE `UserID` = ?",
    [
      username,
      firstName,
      lastName,
      gender,
      email,
      tel,
      address,
      userKey,
    ],
    function (err, results, fields) {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({
          success: false,
          message: "Failed to update profile from database",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "update profile successfully",
          bucket: results,
        });
      }
    }
  );
});

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
