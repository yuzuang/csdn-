var vueAjax = new Vue({
		el:'#content',
		data:{
			banner:[],
			blog_lists:[],
			classify_lists:[],
		},
		mounted: function(){
            this.getData();
            var mySwiper = new Swiper ('.swiper-container', {
					    direction: 'horizontal',
					    loop: true,

					     // 如果需要分页器
					    pagination: '.swiper-pagination',
					     paginationClickable: true,
					            speed: 500,
					            loop: true,
					            observer:true,
					            observeParents:true,
					            autoplayDisableOnInteraction : false,
					            autoplay:2000

					    })
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://blog.com/api/index/index",
	                type: "get",
	                dataType: "json",
	                success: function(res){
	                	that.blog_lists=res.data.blog_lists;
	                    that.banner=res.data.banner;
	                    that.classify_lists=res.data.classify_lists;   
	                },
	                error: function(res){

	                }
	            })
        	},
        }
	})