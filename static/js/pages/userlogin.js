import headerNonLogin from './header-nonlogin.js';

const User_LoginForm = {
	data() {
	  return {
		username: '',
		password: '',
		messages: [], // Assuming you'll handle flash messages as an array
	  };
	},
	methods: {
		async submitInfo() {
			console.log("inside the submitinfo function");
			console.log('Username:', this.username);
			const origin = window.location.origin;
			const url = `${origin}/user_login`;
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
				console.log("User Logged in ok res, now in frontend");
			  const data = await res.json();
			  console.log(data);

			  // Handle successful login, e.g., redirect or store token
			  router.push("/user_dash");
			} else {
			  const errorData = await res.json();
			  console.error("Login failed:", errorData);
			  // Handle login error
			  router.push("/user_login");
			}
		},
	  getFlashedMessages() {
		// This method should retrieve flashed messages if you're handling them
		// You might replace this with actual logic to fetch messages.
		return [];
	  },
	},
	mounted() {
	  this.messages = this.getFlashedMessages();
	},
	template: `
	  <div class="backgroundimage">
		<header-nonlogin />
		<div class="mainbody">
		  <h2 style="text-align: center; font-size:xx-large;">Welcome, Back!</h2> 
		  <h3 style="text-align: center; font-size: large;">Login with your credentials</h3>
		  <br>
		  <div v-if="messages.length">
			<div class="alert alert-warning">
			  <div v-for="message in messages" :key="message">{{ message }}</div>
			</div>
		  </div>
		  <div id="form-body">
			<h1>Login Form</h1>
			<form @submit.prevent="submitForm">
			  <div class="mb-3">
				<label for="username" class="form-label">Username<span style="color: red;">*</span></label>
				<input v-model="username" type="text" class="form-control" id="username" placeholder="Shubham03" 
				  name="u_name" pattern="[a-z0-9]{4,20}" 
				  title="Username should only contain lowercase alphabets and numbers, and length should be between 4 and 20 characters" 
				  required>
			  </div>
			  <div class="mb-3">
				<label for="pwd" class="form-label">Password<span style="color: red;">*</span></label>
				<input v-model="password" type="password" class="form-control" id="pwd" name="pwd" 
				  pattern="^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,50}$" 
				  title="Password should be between 5 and 50 characters long, and should contain at least one special character" 
				  required>
			  </div>
			  <button type="submit" class="btn btn-primary" @click="submitInfo">Login</button>
			</form>
			<div style="text-align: center;">
			  Are you a new user? <router-link to="/user_register">register.</router-link>
			  <br>
			  Forgot Password? <router-link to="/forgot_password">Reset Password</router-link>
			</div>
			<div style="text-align: center;">
			  Looking for Library Login? <router-link to="/lib_login">Library Login</router-link>
			</div>
		  </div>
		</div>
	  </div>
	`,
	components: {
		'header-nonlogin': headerNonLogin,
	  }
  };
  
  export default User_LoginForm;
  