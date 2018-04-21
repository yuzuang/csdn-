var login = new Vue({
	el: "#main",
	data:{
			user_id: '',
			list: [],
		},
		mounted: function(){
          this.login();
        },
        methods:{
        	login: function(){
        		var that = this;
        		var userId = localStorage.getItem("userid")
        		$.ajax({
        			type:"post",
        			url:"http://blog.com/api/collect/lists",
        			data: {
        				user_id: window.localStorage.user_id,
        			},
        			dataType: "json",
        			success: function(res){
                       that.list = res.data.blog_lists;
        			}
        		});
        	},   	
        }
})
