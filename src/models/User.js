// src/models/User.js


var m = require("mithril")

var User = {
	list: [],
	loadList: function(){
		return m.request({
			method: "GET", 
			url: "htpps://rem-rest-api.herokuapp.com/api/users", 
			withCredentials: true,
		)}.then(function(result){
			User.list = result.data})
	}
}

module.exports = User
