import headerNonLogin from './header-nonlogin.js';

const About = {
  template: `
    <div class="backgroundimage">
      <header-nonlogin></header-nonlogin>
      <div class="mainbody">
        <h1>About</h1>
        <br>
        <p>This is the Library Management website which provides e-books for students at their convenience.</p>
        <p style="color: blue;"><a href="mailto:23f1002838@ds.study.iitm.ac.in" class="nav-link">Contact</a></p>
        <p>Thank you, happy reading!</p>
      </div>
    </div>
  `,
  components: {
    'header-nonlogin': headerNonLogin,
  }
};

export default About;
