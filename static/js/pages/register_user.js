import headerNonLogin from "./header-nonlogin.js";


const User_register = {
	data() {
	  return {
		username: '',
		firstName: '',
		lastName: '',
		password: '',
		confirmPassword: '',
		messages: [], // Handle flash messages as an array
	  };
	},
	methods: {
		async submitInfo() {
			console.log("inside the submitinfo of register function");
			console.log('Username:', this.username);
			const origin = window.location.origin;
			const url = `${origin}/user_register`;
			console.log(url, "this is url");
			const res = await fetch(url, {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({ username: this.username, password: this.password, first_name: this.firstName, last_name: this.lastName, confirmPassword: this.confirmPassword }),
			  credentials: "same-origin", // Include credentials (cookies) with the request

			});
	  
			if (res.ok) {
				console.log("Registered in ok res, now in frontend");
			  const data = await res.json();
			  console.log(data);

			  // Handle successful login, e.g., redirect or store token
			  router.push("/user_login");
			} else {
			  const errorData = await res.json();
			  console.error("Registration failed:", errorData);
			  // Handle login error
			  router.push("/user_register");
			}
		},
	},
	mounted() {
	  this.messages = this.getFlashedMessages();
	},
	template: `
	  <div class="backgroundimage">
		<header-nonlogin />
		<div class="mainbody">
		  <div id="canvas">
			<h2 style="text-align: center; font-size:xx-large;">Welcome, User!</h2> 
			<h3 style="text-align: center; font-size: large;">Let's Start Your Reading Journey</h3>
			<div v-if="messages.length">
			  <div class="alert alert-warning">
				<div v-for="message in messages" :key="message">{{ message }}</div>
			  </div>
			</div>
			<div id="form-body">       
			  <h1>Register Form</h1>
			  <form @submit.prevent="submitForm">
				<div class="mb-3">
				  <label for="username" class="form-label">Username<span style="color: red;">*</span></label>
				  <input v-model="username" type="text" class="form-control" id="u_name" placeholder="Eg. shubhamatkal"
					name="u_name" pattern="[a-z0-9]{4,20}" title="Username should only contain lowercase alphabets and numbers, and length should be between 4 and 20 characters" required>
				</div>
				<div class="mb-3">
				  <label for="first_name" class="form-label">First Name<span style="color: red;">*</span></label>
				  <input v-model="firstName" type="text" class="form-control" id="first_name" placeholder="Eg. Shubham"
					name="first_name" pattern="[a-zA-Z0-9\\s]{4,50}" title="First name should not contain special characters, and length should be between 4 and 50 characters" required>
				</div>
				<div class="mb-3">
				  <label for="last_name" class="form-label">Last Name</label>
				  <input v-model="lastName" type="text" class="form-control" id="last_name" placeholder="Eg. Atkal"
					name="last_name" pattern="[a-zA-Z0-9\\s]{4,50}" title="Last name should not contain special characters, and length should be between 4 and 50 characters">
				</div>
				<div class="mb-3">
				  <label for="password" class="form-label">Password<span style="color: red;">*</span></label>
				  <input v-model="password" type="password" class="form-control" id="pwd" name="password"
					pattern="^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,50}$" title="Password should be between 5 and 50 characters long, and should contain at least one special character" required>
				</div>
				<div class="mb-3">
				  <label for="confirmPassword" class="form-label">Confirm Password<span style="color: red;">*</span></label>
				  <input v-model="confirmPassword" type="password" class="form-control" id="c_pwd" name="c_password"
					pattern="^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,50}$" title="Password should be between 5 and 50 characters long, and should contain at least one special character" required>
				</div>
				<button type="submit" class="btn btn-primary" @click="submitInfo">Register</button>
				</form>
			  <div style="text-align: center;">
				Are you an old user? <router-link to="/user_login">Login.</router-link>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	`,
	components: {
	  'header-nonlogin': headerNonLogin,
  
	},
};
  
export default User_register;
  