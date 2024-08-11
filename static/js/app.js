// import components
import router from "./utils/router.js";

new Vue({
	el: "#app",
	router,
  template: `
    <div>
	<router-view></router-view>
	</div>
	`,
});
