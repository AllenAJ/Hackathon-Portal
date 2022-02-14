const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator")
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

//registering
router.post("/register", validInfo, async (req, res) => {
    try {
        const {
            email,
            status,
            password,
            user_type,
            first_name,
            last_name,
            ph_no
        } = req.body;

        const user = await pool.query("SELECT * FROM tbl_Login WHERE user_name = $1", [
            email
        ]);

        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query("INSERT INTO tbl_Login (user_name,user_type,f_name,l_name,ph_no,password,status) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [
            email, user_type, first_name, last_name, ph_no, bcryptPassword, status
        ]);

        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({
            token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
})

//login route
router.post("/login", validInfo, async (req, res) => {
    try {

        const {
            email,
            password
        } = req.body;
        const user = await pool.query("SELECT * FROM tbl_Login WHERE user_name=$1", [
            email
        ]);

        if (user.rows.length === 0) {
            res.status(401).json("Password or Email is Incorrect");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status.status(401).json("email or pass is incorrect");
        }

        const token = jwtGenerator(user.rows[0].user_id);
        res.json({
            token
        });
    } catch (err) {
        console.err(err.message);
    }
});

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.err(err.message);
        res.status(500).send("Server error");

    }
});

module.exports = router;