var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('HOME', { title: 'Express' });
});

/* GET home page. */
router.get('/ABOUT', function(req, res, next) {
  res.render('ABOUT', { title: 'Express' });
});

/* GET home page. */
router.get('/CONTACT', function(req, res, next) {
  res.render('CONTACT', { title: 'Express' });
});

/* GET home page. */
router.get('/MENU', function(req, res, next) {
  res.render('MENU', { title: 'Express' });
});

/* GET home page. */
router.get('/LOGIN', function(req, res, next) {
  res.render('LOGIN', { title: 'Express' });
});

/* GET home page. */
router.get('/MENU', function(req, res, next) {
  res.render('MENU', { title: 'Express' });
});

/* GET home page. */
router.get('/OFFERS', function(req, res, next) {
  res.render('OFFERS', { title: 'Express' });
});

/* GET home page. */
router.get('/REGISTER', function(req, res, next) {
  res.render('REGISTER', { title: 'Express' });
});

/* GET home page. */
router.get('/ORDER-NOW', function(req, res, next) {
  res.render('ORDER-NOW', { title: 'Express' });
});

router.post('/enquiry', (req, res) => {
   const output = `
   &lt;p&gt;You have a New Enquiry&lt;/p&gt;
   &lt;h3&gt;Enquiry Details&lt;/h3&gt;
   &lt;ul&gt;
   &lt;li&gt;Name: ${req.body.name}&lt;/li&gt;
   &lt;li&gt;Email: ${req.body.email}&lt;/li&gt;
   &lt;li&gt;Phone: ${req.body.number}&lt;/li&gt;
  
  
  
   &lt;/ul&gt;
   &lt;h3&gt;Message&lt;/h3&gt;
   &lt;p&gt;${req.body.message}&lt;/p&gt;
   `;
  
   // create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
   host: 'smtp.zoho.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
   user: 'vikrants78603@zoho.com', // generated ethereal user
   pass: 'Vikrant786@' // generated ethereal password
   },
   // tls:{
   // rejectUnauthorized:false
   // }
   });

   // setup email data with unicode symbols
   let mailOptions = {
   from: 'vikrants78603@zoho.com', // sender address
   to: 'shivanshu002015@gmail.com', // list of receivers
   subject: 'New Enquiry', // Subject line
   text: 'From Brandzia Website', // plain text body
   html: output // html body
  
   };
  
   // send mail with defined transport object
   transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
   return console.log(error);
   }
   console.log('Message sent: %s', info.messageId);
   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
   res.send(`&lt;body style=&quot;background-color:gray;&quot;&gt;&lt;div
  style=&quot;position:absolute; width : 100%; height:5rem; text-align:center;
  font-size:2rem;top:50%;transform:
   translateY(-50%);&quot;&gt;We Saved Your Enquiry. We will get in touch with
  you soon &lt;/div&gt;&lt;/body&gt;`);
   });
   });
  


module.exports = router;
