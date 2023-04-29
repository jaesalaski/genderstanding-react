module.exports = {

  getIndex: (req, res) => {
    res.render("index");
  },

  getAbout: (req, res) => {
    res.render("about");
  },

  getFAQ: (req, res) => {
    res.render("faq");
  },

  getContact: (req, res) => {
    res.render("contact");
  },
  
  getProfile: (req,res) => {
    res.render("profile");
  },
};
