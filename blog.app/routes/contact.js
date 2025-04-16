const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router()
const contactLayout = "../views/layouts/contact";

router.get('/contact', async (req, res) => {
    try {
        const locals = {
            title:'Nodejs Blog App',
            description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
        };
        res.render("contact", {locals, layout: contactLayout})
    } catch (error) {
        console.log(error);
    }
})

router.post('/contact', async (req, res) => {
    try{
        try{
           const newContact = new Contact({
             name: req.body.name,
             email: req.body.email,
             phone: req.body.phone,
             subject: req.body.subject,
           });
           await Contact.create(newContact);
           res.status(201).json({ message: "sent successfully", newContact });
        }catch(error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
});

router.get("/contact/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const contact = await Contact.findById({ _id: id });
      const locals = {
        title: contact.name,
        description: "A Nodejs Blog App built with Nodejs, Express and MongoDB",
      };
      res.render("request", { locals, contact });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router