import Lib_Login from "../pages/liblogin.js";
import Home from "../pages/home.js";
import About from "../pages/about.js";
import ForgotPassword from "../pages/forgot_password.js";
import User_LoginForm from "../pages/userlogin.js";
import User_register from "../pages/register_user.js";
import Lib_dash from "../pages/libdash.js";

import Test from "../pages/test.js";

// import Profile from "../pages/Profile.js";
// import Signup from "../pages/Signup.js";
// import DashboardAdmin from "../pages/DashboardAdmin.js";
// import DashboardInst from "../pages/DashboardInst.js";
// import DashboardStud from "../pages/DashboardStud.js";

const routes = [
  { path: "/", component: Home },
  {path: "/about", component: About},
  { path: "/lib_login", component: Lib_Login },
  {path: "/lib_dash", component: Lib_dash },
  {path: "/forgot_password", component: ForgotPassword},
  {path: "/user_login", component: User_LoginForm},
  {path: "/user_register", component: User_register},
  // { path: "/profile", component: Profile },
  // { path: "/signup", component: Signup },
  // { path: "/inst-dashboard", component: DashboardInst },
  // { path: "/stud-dashboard", component: DashboardStud },
];

const router = new VueRouter({
  routes,
});

export default router;