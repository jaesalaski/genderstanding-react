module.exports = {

  getIndex: (req, res) => {
    res.render("../frontend/src/routes/Index.jsx");
  },

  getAbout: (req, res) => {
    res.render("about");
  },

  getFAQ: (req, res) => {
    res.render("faq");
  },

  getFeed: (req, res) => {
    res.render("feed");
  },

  getContact: (req, res) => {
    res.render("contact");
  },
  
  getProfile: (req,res) => {
    res.render("profile");
  },
};
