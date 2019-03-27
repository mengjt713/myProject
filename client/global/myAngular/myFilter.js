define(['app'],function(myApp){

	/**
	 * 日期过滤器
	 */
	myApp.filter("str2DateTimes",function(){
	    return function(input){
	    	if(!input){
	    		return -1;
	    	}
	    	var arr = input.split("-");
	        return new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2])).getTime();
	    }
	});
	
	/**
	 * 数组转字符串： 拼接,连接
	 */
	myApp.filter("array2String",function(){
	    return function(input){
	    	if(!angular.isArray(input)){
	    		return "";
	    	}
	        return input.join(",");
	    }
	});
	
	/**
	 * 后台返回null前台展示'无'
	 * 
	 */
	myApp.filter("nullToString",function(){
	    return function(value){
	    	   if(value == null || value =='null' || value =='undefined' || value==undefined){
	    		   return '无';
	    	   }else{
	    		   return value;
	    	   }
	    	   
	    }
	});
})
