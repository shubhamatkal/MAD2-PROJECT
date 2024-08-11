import headerNonLogin from './header-nonlogin.js';

const PasswordReset = {
	data() {
	  return {
		email: '',
	  };
	},
	methods: {
	  submitForm() {
		// Handle form submission logic here, such as making an API call.
		console.log('Form submitted with email:', this.email);
		// Replace the following line with actual navigation logic if needed.
		this.$router.push('/');
	  },
	},
	template: `
	  <div class="backgroundimage">
		<header-nonlogin />
		<div class="mainbody">
		  <br>
		  <h1>Don't Panic 🙂</h1>
		  <p>Enter your email address below and we'll send you a link to reset your password.</p>
		  <form @submit.prevent="submitForm">
			<label for="email">Email:</label><br>
			<input v-model="email" type="email" id="email" name="email" required><br>
			<input style="margin-top: 5px;" type="submit" value="Submit">
		  </form>
		</div>
	  </div>
	`,
	components: {
		'header-nonlogin': headerNonLogin,  // Ensure this component is imported
	  }
  };
  
  export default PasswordReset;
  