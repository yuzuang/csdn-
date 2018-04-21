var vueAjax = new Vue({
		el:'#content',
		data:{
			blog_info:{},
			related_blog:[],
		},
		mounted: function(){
            this.getData();
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://blog.com/api/blog/info",
	                type: "get",
	                data: {
	            		id: window.location.search.split("=")[1],
	                },
	                dataType: "json",
	                success: function(res){
	                	that.blog_info=res.data.blog_info; 
	                	that.related_blog=res.data.related_blog;   
	                },
	                error: function(res){

	                }
	            })
        	},
        	collect: function(){
        		var that = this;
	        	 $.ajax({
                        url: "http://blog.com/api/collect/add",
                        type: "post",
                        dataType: "json",
                        data: {
                            "user_id": localStorage.getItem("user_id"),
                            "blog_id":that.blog_info.id,
                        },
                        success:function(res){
                            if(res.error_code == 0){
                                alert("收藏成功了");
                                window.location.href="./我的收藏.html"
                            }else {
                                alert(res.message);
                            }
                        }
                    })
        	},
        }
	})
