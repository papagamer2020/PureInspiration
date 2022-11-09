const router = require("express").Router();
const { User } = require("../../models");

//getting all users
router.get("/", (req, res) => {
    User.findAll({ attributes: { exclude: ["password"] } })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    //find one user by its 'id' value
    User.findOne({
        where: {
            id: req.params.id,
        },
        attributes: {exclude: ["password"]},
    })
    .then((dbUserData) =>
    dbUserData
        ? res.json(dbUserData)
        : res.json({message: "User not fount"})
    )
    .catch((err) => {
        console.log (err);
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    //create a new user
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    })

    .then((dbUserData) => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
})