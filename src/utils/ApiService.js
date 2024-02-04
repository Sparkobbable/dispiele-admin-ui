import axios from "axios";

export class ApiService {
	API_URL = process.env.REACT_APP_API_URL;

	// getLatestItem() {
	// 	return axios({
	// 		method: "get",
	// 		url: this.BASE_URL + "/items/latest",
	// 	});
	// }

	authenticate() {
		return (
			this.API_URL +
			"/oauth/authorize?client_id=dispiele_admin_site&response_type=code&scope=administration&redirect_uri=" +
			process.env.REACT_APP_BASE_URL +
			"/home"
		);
	}

	getAccessToken(code) {
		return axios({
			method: "get",
			url:
				this.API_URL +
				`/authproxy/token?code=${code}&redirect_uri=${
					process.env.REACT_APP_BASE_URL + "/home"
				}`,
		});
	}
}
