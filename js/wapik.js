const App = {
	data(){
		return {
			isActive: false
		}
	},
	methods:{
		headerActive(){
			return this.isActive === false ? this.isActive = true : this.isActive = false
		}
	}
	// computed: {
		
	// },
	// watch: {
		
	// }
}

Vue.createApp(App).mount('.header')







































