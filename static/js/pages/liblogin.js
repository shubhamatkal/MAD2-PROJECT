import router from '../utils/router.js';
import headerNonLogin from './header-nonlogin.js';

const Lib_Login = {
	data() {
	  return {
		username: '',
		password: '',
		messages: [],  // This will hold any flash messages or alerts
	  };
	},
	methods: {
		async submitInfo() {
			console.log("inside the submitinfo function");
			console.log('Username:', this.username);
			const origin = window.location.origin;
			const url = `${origin}/lib_login`;
			console.log(url, "this is url");
			const res = await fetch(url, {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({ username: this.username, password: this.password }),
			  credentials: "same-origin", // Include credentials (cookies) with the request

			});
	  
			if (res.ok) {
				console.log("Logged in ok res, now in frontend");
			  const data = await res.json();
			  console.log(data);

			  // Handle successful login, e.g., redirect or store token
			  router.push("/lib_dash");
			} else {
			  const errorData = await res.json();
			  console.error("Login failed:", errorData);
			  // Handle login error
			  router.push("/lib_login");
			}
		},
	},
	template: `
	  <div class="backgroundimage">
		<header-nonlogin></header-nonlogin>
		<div class="mainbody">
		  <br>
		  <h2 style="text-align: center; font-size:xx-large;">Welcome, Back!</h2> 
		  <h3 style="text-align: center; font-size: large;">Login with your credentials</h3>
		  <div>
			<br>
			<div v-if="messages.length" class="alert alert-warning">
			  <div v-for="message in messages" :key="message">{{ message }}</div>
			</div>
		  </div>
		  <div id="form-body">
			<h1>Librarian Login</h1>
			<form @submit.prevent="submitInfo">
			  <div class="mb-3">
				<label for="username" class="form-label">Username<span style="color: red;">*</span></label>
				<input type="text" class="form-control" id="username" placeholder="eg. ganeshlibrary123" 
				  v-model="username" 
				  pattern="[a-z0-9]{4,20}" 
				  title="Username should only contain lowercase alphabets and numbers, and length should be between 4 and 20 characters" 
				  required>
			  </div>
			  <div class="mb-3">
				<label for="pwd" class="form-label">Password<span style="color: red;">*</span></label>
				<input type="password" class="form-control" id="pwd" 
				  v-model="password" 
				  pattern="^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,50}$" 
				  title="Password should be between 5 and 50 characters long, and should contain at least one special character" 
				  required>
			  </div>
			  <button type="submit" class="btn btn-primary" @click="submitInfo">Login</button>
			</form>
			<div style="text-align: center;">
			  Forgot Password? <a href="/forgot_password">Reset Password</a>
			</div>
		  </div>
		</div>
	  </div>
	`,
	components: {
	  'header-nonlogin': headerNonLogin,  // Ensure this component is imported
	}
  };

export default Lib_Login;