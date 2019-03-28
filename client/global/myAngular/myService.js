define(['app'],function(myApp){
	/**
	 * 请求返回码处理service
	 */
	myApp.factory('responseCodeService', function($location,$rootScope){
		return {
			handleCode: function(code){
				if(!code || typeof code != 'string'){
					return false;
				}
				
				if(code === "000000"){//0000000返回true
                    console.log("数据返回正常");
					return true
				}
				return false;
			}
		};
	});
	
	/**
	 * 请求服务：系统内统一
	 */
	myApp.factory('httpService', function ($http, $q, responseCodeService) {
		var _options = {
			method: "GET",//默认get
			params: null,//get方式请求使用：对象格式
			data: null,//post方式请求使用: 对象格式
			url: "",
			onSuccess: null,//成功回调(得到理想数据)：function
			onError: null,//失败回调(未得到理想数据)： function
			onRequestFail: null,//请求失败回调： function
			extraConfig: {}//额外的配置信息:请求头/transformRequest.....headers: { "Content-Type": "application/x-www-form-urlencoded" }
		};
		
		//GET请求拼接url参数字符串
		var _appendParams = function(params){
			if(!params || typeof params != "object"){
				return "";
			}
			var paramsAttrs = Object.getOwnPropertyNames(params);
			
			var _append = "";
			
			angular.forEach(paramsAttrs, function(v, index){
				if(index === 0){
					_append += "?" + v + "=" + params[v];
				}
				else{
					_append += "&" + v + "=" + params[v];
				}
				
			});
			return _append;
		};

		var _extendParam = function(params){
            if(!params || typeof params != "object"){
                return {
                	params: {}
				};
            }
            return {params: params}
		};
		
		var _request = function(type, options){
			if(!options || !angular.isObject(options)){
                options = {};
			}
            options.method = type;

            //使用promise处理请求
			var def = $q.defer();
			_http(def, options).then(function(data){//成功回调
				if(responseCodeService.handleCode(data.code)){
					if(options.onSuccess && angular.isFunction(options.onSuccess)){
						options.onSuccess(data.content);
					}
				}
				else{
					if(options.onError && angular.isFunction(options.onError)){
						options.onError(data);
					}
				}
			}, function(data){//错误回调
				if(options.onRequestFail && angular.isFunction(options.onRequestFail)){
					options.onRequestFail(data);
				}
			});
		};

        var _appendToken = function(url){
            if(!url || url === ""){
                return "";
            }
            else{
                return url;
            }
        };
		
		var _http = function(def, options){
			var _finalOptions = angular.extend(angular.copy(_options), options);
			if(_finalOptions.method === "GET"){
				//_finalOptions.url += _appendParams(_finalOptions.params);//拼接get请求url
                _finalOptions.url = _appendToken(_finalOptions.url);
				var _getConfig = angular.extend(_extendParam(_finalOptions.params), _finalOptions.extraConfig);
				
				$http.get(_finalOptions.url, _getConfig)
					.success(function (response) {
						def.resolve(response);
					})
					.error(function(data, header, config, status){
						def.reject(data); 
					});
			}
			else if(_finalOptions.method === "POST"){
                _finalOptions.url = _appendToken(_finalOptions.url);
				$http.post(_finalOptions.url, _finalOptions.data, _finalOptions.extraConfig)
	            	.success(function (response) {
	            		def.resolve(response); 
	            	}).error(function(data, header, config, status){
	            		def.reject(data); 
					});
			}
			
			return def.promise;
		};

		var _get = function(options){
            _request("GET", options);
		};

		var _post = function(options){
            _request("POST", options);
		};
		return {
			get: _get,
			post: _post,
		}
	});
});
