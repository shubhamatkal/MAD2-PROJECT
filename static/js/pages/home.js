import headerNonLogin from './header-nonlogin.js';

const Home = {
	template: `
	  <div class="backgroundimage">
		<header-component></header-component>
		<div class="mainbody">
		  <h1>Welcome to E-Library Management System</h1>
		  <br>
		  <p>
			Welcome to the E-Library Management System! This software provides a
			convenient way to manage and organize your library resources digitally.
			With this system, you can easily keep track of books, manage user
			accounts, and streamline library operations.
		  </p>
		  <p>
			To navigate through the website, please use the appropriate buttons on
			the header:
		  </p>
		  <ul>
			<li>Click on "Home" to go to the home page.</li>
			<li>Click on "Library Login" to access the librarian login page.</li>
			<li>Click on "Student Login" to access the student login page.</li>
			<li>Click on "About" to learn more about our library management system.</li>
			<li>Click on "Contact" to reach out</li>
		  </ul>
		  <p>Thank you, happy reading!</p>
		</div>
	  </div>
	`,
	components: {
	  'header-component': headerNonLogin,
	}
};

export default Home;
