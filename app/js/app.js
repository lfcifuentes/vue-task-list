var app = new Vue({
	
	el:"#main",
	data:{
		lists:[ 
		],
		newKeep: ''
	},
	methods:{
		addKeep:function(){
			this.lists.push({keep: this.newKeep, completed: false});
			this.newKeep = '';
		},
		deleteKeep:function(keep) {
		  	this.lists.splice(this.lists.indexOf(keep), 1);
		}
	}

});