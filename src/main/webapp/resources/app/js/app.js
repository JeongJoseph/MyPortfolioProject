////  Javascript Namespace Declaration: http://stackoverflow.com/questions/881515/javascript-namespace-declaration
////  http://appendto.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
////
////(function( skillet, $, undefined ) {
////    //Private Property
////    var isHot = true;
////
////    //Public Property
////    skillet.ingredient = "Bacon Strips";
////
////    //Public Method
////    skillet.fry = function() {
////        var oliveOil;
////
////        addItem( "\t\n Butter \n\t" );
////        addItem( oliveOil );
////        console.log( "Frying " + skillet.ingredient );
////    };
////
////    //Private Method
////    function addItem( item ) {
////        if ( item !== undefined ) {
////            console.log( "Adding " + $.trim(item) );
////        }
////    }
////}( window.skillet = window.skillet || {}, jQuery ));
//
//
///*
// @Name              -> ajax
// @Type              -> NameSpace
// @Descripción       -> NameSpace for ajax requests methods
//*/
//(function( ajax, $, undefined ) {
//
//    /*
//     @Name              -> getFormData
//     @visibility        -> Private
//     @Type              -> Method
//     @Descripción       -> Get values of form inputs.
//     @parameters        -> parameters: Array of objects, each object have two pairs, id: Id of input, name: Name of input;
//     @returns           -> Object
//     @implemented by    -> ajax.request()
//     */
//    var getFormData = function(parameters){
//        /*
//         obj = {};
//
//         var input_ids = [{"id":"a","name":"a"},{"id":"b","name":"b"},{"id":"c","name":"c"}];
//
//         $.each(input_ids,function(index,input){
//         obj[input.name] = $('#'+input.id).val();
//         });
//
//         console.log(obj)
//         */
//
//        var data = {};
//        $.each(parameters['form']['inputs'],function(index,input){
//            data[input['name']] = $('#'+input['id']).val();
//        });
//        return data;
//    };
//
//    /*
//     @Name              -> request
//     @visibility        -> Private
//     @Type              -> Method
//     @Descripción       -> make ajax request.
//     @parameters        -> parameters: JSON object with several directives.
//     @returns           -> null
//     */
//    var request = function(parameters){
//        var ajax_request_parameters = {
//            "type": parameters['type'],
//            "url": parameters['url'],
//            "contentType": "application/json; charset=UTF-8",
//            "dataType": 'json',
//            "data": JSON.stringify(parameters['data']),
//            "global": false,
//            "beforeSend":function(){
//                parameters['callbacks']['beforeSend']();
//            },
//            "success":function(response){
//                parameters['callbacks']['success'](response);
//            },
//            "error":function(response){
//                parameters['callbacks']['error'](response);
//            },
//            "complete":function(response){
//                parameters['callbacks']['complete'](response);
//            }
//        };
//
//        $.ajax(ajax_request_parameters);
//    };
//
//    /*
//     @Name              -> notification
//     @visibility        -> Public
//     @Type              -> Method
//     @Descripción       -> notifies the status of ajax request.
//     */
//    ajax.notification = function(event,notification,options){
//
//        var defaultOptions = {
//            'init' : {
//                'title':    'Processing',
//                'text' :    'Wait a moment while we process your request.',
//                'type':     'info',
//                'icon':     'fa fa-spinner fa-spin',
//                'hide':     false,
//                'closer':   false,
//                'sticker':  false,
//                'opacity':  .75,
//                'shadow':   false,
//                'history':  false
//            },
//            'success' : {
//                'title':    'Ready!',
//                'text' :    'Your request has been processed successfully.',
//                'type':     'success',
//                'hide':     true,
//                'closer':   true,
//                'sticker':  true,
//                'icon':     'glyphicon glyphicon-ok-sign',
//                'opacity':  1,
//                'shadow':   true,
//                'history':  true
//            },
//            'error': {
//                'title':    'Error!',
//                'text' :    'An error has occurred while processing your request.',
//                'type' :    'error',
//                'icon':     'glyphicon glyphicon-warning-sign',
//                'hide':     true,
//                'closer':   true,
//                'sticker':  true,
//                'opacity':  1,
//                'shadow':   true,
//                'history':  true
//            }
//        };
//
//        // beforeSend, success, error, complete
//
//        if(event == "beforeSend"){
//            var notice;
//            if ( options !== undefined ) {
//                notice = new PNotify(options);
//            }else{
//                notice = new PNotify(defaultOptions['init']);
//            }
//        }
//
//        if(event == "success"){
//            if ( options !== undefined ) {
//                notification.update(options);
//            }else{
//                notification.update(defaultOptions['success']);
//            }
//        }
//        if(event == "error"){
//            if ( options !== undefined ) {
//                notification.update(options);
//            }else{
//                notification.update(defaultOptions['error']);
//            }
//        }
//        if(event == "complete"){
//            notification.remove();
//        }
//
//        return notice;
//    };
//
//    /*
//     @Name              -> request
//     @visibility        -> Public
//     @Type              -> Method
//     @Descripción       -> define what type request is.
//     @parameters        -> parameters: JSON object; .requestType is one string, can be 'form' or 'custom', form means is need one more step before make ajax request, which is get values of form inputs; custom means it ready to make ajax request.
//     @returns           -> null
//     */
//    ajax.request = function(parameters){
//        if(parameters !== undefined){
//            if(parameters['requestType'] == 'form'){
//                parameters['data'] = getFormData(parameters);
//                request(parameters);
//            }
//            if(parameters['requestType'] == "custom"){
//                request(parameters);
//            }
//        }
//    };
//
//}( window.ajax = window.ajax || {}, jQuery ));
//
///*
// @Name              -> validate
// @Type              -> NameSpace
// @Descripción       -> NameSpace for form validation methods, more info about this check this web site: http://jqueryvalidation.org/
// */
//(function( validate, $) {
//
//    $.validator.addMethod("noSpecialChars", function(value, element) {
//        return this.optional(element) || /^[a-z0-9\x20]+$/i.test(value);
//    }, "Username must contain only letters, numbers, or underscore.");
//
//    /*
//     @Name              -> validationStates
//     @visibility        -> Private
//     @Type              -> Property
//     @Descripción       -> validation States class in bootstrap
//     */
//    var validationStates = ['has-success','has-warning','has-error'];
//
//    /*
//     @Name              -> inlineForm
//     @visibility        -> Public
//     @Type              -> Method
//     @Descripción       -> Using when is about inline form and it no show any error message.
//     @parameters        -> formId: string, id of form; options: json object, several directives.
//     @returns           -> null
//     */
//    validate.inlineForm = function(formId,options){
//
//        options.errorPlacement = function(error, element){};
//
//        options.success = function(label){};
//
//        options.highlight = function(element){
//            $(validationStates).each(function(k2,state){
//                if($(element).parents('.form-group').hasClass(state)){
//                    $(element).parents('.form-group').removeClass(state);
//                }
//            });
//            $(element).parents('.form-group').addClass('has-warning');
//        };
//
//        options.unhighlight = function(element){
//            $(validationStates).each(function(k2,state){
//                if($(element).parents('.form-group').hasClass(state)){
//                    $(element).parents('.form-group').removeClass(state);
//                }
//            });
//            $(element).parents('.form-group').addClass('has-success');
//        };
//
//        $("#"+formId).validate(options);
//
//    };
//
//    /*
//     @Name              -> form
//     @visibility        -> Public
//     @Type              -> Method
//     @Descripción       -> Using when is about regular form and it show error message.
//     @parameters        -> formId: string, id of form; options: json object, several directives.
//     @returns           -> null
//     */
//    validate.form = function(formId,options){
//
//        options.errorPlacement = function(error, element){
//            $(element).parents('.form-group').find(".help-block").fadeIn().html($(error).html());
//        };
//
//        options.success = function(label){
//        };
//
//        options.highlight = function(element){
//            $(validationStates).each(function(k2,state){
//                if($(element).parents('.form-group').hasClass(state)){
//                    $(element).parents('.form-group').removeClass(state);
//                }
//            });
//            $(element).parents('.form-group').addClass('has-warning');
//        };
//
//        options.unhighlight = function(element){
//            $(validationStates).each(function(k2,state){
//                if($(element).parents('.form-group').hasClass(state)){
//                    $(element).parents('.form-group').removeClass(state);
//                }
//            });
//            $(element).parents('.form-group').addClass('has-success');
//        };
//
//        $("#"+formId).validate(options);
//
//    };
//
//    /*
//     @Name              -> removeValidationStates
//     @visibility        -> Public
//     @Type              -> Method
//     @Descripción       -> (EN) Using for renew form; (ES) Renueva el formulario y remueve los estados de validación
//     @parameters        -> formId: string, id of form.
//     @returns           -> null
//     */
//    validate.removeValidationStates = function(formId){
//        var form = $('#'+formId);
//
//        form[0].reset();
//
//        $(':input',form)
//            .not(':button, :submit, :reset, :hidden')
//            .val('')
//            .removeAttr('checked')
//            .removeAttr('selected');
//
//        var inputs = form.find('input');
//        inputs.each(function(inputKey,_input_){
//            var input = $(_input_);
//            $(validationStates).each(function(stateKey,state){
//                if(input.parents('.form-group').hasClass(state)){
//                    input.parents('.form-group').removeClass(state);
//                    input.parents('.form-group').find(".help-block").fadeOut();
//                }
//            });
//        });
//    };
//
//
//
//}( window.validate = window.validate || {}, jQuery ));
//
///*
// @Name              -> utility
// @Type              -> NameSpace
// @Descripción       -> NameSpace for utilities methods
// */
//(function( utility){
//
//    utility.randomNumber = function(inferior,superior){
//        var numPosibilidades = superior - inferior;
//        var aleatory = Math.random() * numPosibilidades;
//        aleatory = Math.round(aleatory);
//        return parseInt(inferior) + aleatory;
//    };
//
//    utility.capitaliseFirstLetter = function(string){ return string.charAt(0).toUpperCase() + string.slice(1); };
//
//    utility.stringReplace = function(string, change_this, for_this) {
//        return string.split(change_this).join(for_this);
//    };
//
//    utility.removeCommentTag = function(data){
//        var face_1 = utility.stringReplace(data,'<!--','');
//        return utility.stringReplace(face_1,'-->','');
//    };
//
//}( window.utility = window.utility || {}, jQuery ));

var myApp = 
	angular.module('teamProject', [ 'ngMaterial', 'ngMessages', 'ngRoute', 'ngMdIcons', 'ngCookies' ])
	.config( [ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : 'concept',
			controller : 'IntroduceCtrl'
		}).when('/index', {
			templateUrl : 'index',
			controller : 'IntroduceCtrl'
		}).when('/concept', {
			templateUrl : 'concept',
			controller : 'IntroduceCtrl'
		}).when('/teamIntroduce', {
			templateUrl : 'teamIntroduce',
			controller : 'IntroduceCtrl'
		}).when('/teamProjectOverview', {
			templateUrl : 'teamProjectOverview',
			controller : 'IntroduceCtrl'
		}).when('/tp_network', {
			templateUrl : 'tp_network',
			controller : 'IntroduceCtrl'
		}).when('/tp_server', {
			templateUrl : 'tp_server',
			controller : 'IntroduceCtrl'
		}).when('/tp_database', {
			templateUrl : 'tp_database',
			controller : 'IntroduceCtrl'
		}).when('/tp_web', {
			templateUrl : 'tp_web',
			controller : 'IntroduceCtrl',
			controller : 'IntroduceCtrl'
		}).when('/signIn', {
			templateUrl : 'signIn',
			controller : 'IntroduceCtrl'
		}).when('/signUp', {
			templateUrl : 'signUp',
			controller : 'IntroduceCtrl'
		}).when('/signOut', {
			templateUrl : 'signOut',
			controller : 'IntroduceCtrl'
		}).when('/welcome', {
			templateUrl : 'welcome',
			controller : 'IntroduceCtrl'
		}).when('/boardList', {
			templateUrl : 'boardList',
			controller : 'IntroduceCtrl'
		}).when('/boardInsert', {
			templateUrl : 'boardInsert',
			controller : 'IntroduceCtrl'
		}).when('/boardUpdate', {
			templateUrl : 'boardUpdate',
			controller : 'IntroduceCtrl'
		}).when('/boardDelete', {
			templateUrl : 'boardDelete',
			controller : 'IntroduceCtrl'
		}).when('/main_introduce', {
			templateUrl : 'main_introduce',
			controller : 'IntroduceCtrl'
		}).when('/site_introduce', {
			templateUrl : 'site_introduce',
			controller : 'IntroduceCtrl'
		}).when('/devloper_introduce', {
			templateUrl : 'devloper_introduce',
			controller : 'IntroduceCtrl'
		}).when('/boardDetail', {
			templateUrl : 'boardDetail',
			controller : 'IntroduceCtrl'
		}).when('/boardDetail/:boardId', {
			templateUrl : 'boardDetail',
			controller : 'IntroduceCtrl'
		})
		.otherwise({
			redirectTo : '/concept'
		}); 
	}])
	.controller( 'IntroduceCtrl',[ '$scope', '$http', '$mdToast', 
	                          '$location', '$mdSidenav', '$mdDialog','$cookieStore','$routeParams',
	function($scope, $http, $mdToast, $location,$mdSidenav,$mdDialog, $cookieStore,$routeParams) {
		// 변수 선언 및 초기화
		$scope.menus = 
			[ {	"name" : "Main Introduce",				"link" : "/main_introduce"		},
			  {	"name" : "Site Introduce",				"link" : "/site_introduce"		},
			  {	"name" : "Devloper Introduce",			"link" : "/devloper_introduce"		},
			];
		$scope.teamProjectIndividualMenu = 
			[ {	"name" : "Introduce",				"link" : "/introduce"		},
			  {	"name" : "Network",					"link" : "/tp_network"		},
			  {	"name" : "Server",					"link" : "/tp_server"		},
			  {	"name" : "Database",				"link" : "/tp_database"		},
			  {	"name" : "Web Page",				"link" : "/tp_web"		}
			];
		$scope.IntroduceTabs = [
		     { title: "Main",			img:"Introduce/1.png"},
		     { title: "Overview", 		img:"Introduce/2.png"},
		     { title: "Contents", img:"Introduce/3.png"},
		     { title: "Team Introduce", img:"Introduce/4.png"}
		];
		$scope.Networktabs = [	
		   { title: 'Content', 						img:"Network/1.png"},
		   { title: "Captain's View", 				img:"Network/2.png"},
		   { title: "Captain's View", 				img:"Network/3.png"},
		   { title: "Captain's View", 				img:"Network/4.png"},
		   { title: 'ISP', 							img:"Network/5.png"},
		   { title: 'ISP', 							img:"Network/6.png"},
		   { title: 'ISP-iBGP', 					img:"Network/7.png"},
		   { title: 'ISP-eBGP,Frame-Relay,PPP', 	img:"Network/8.png"},
		   { title: 'ISP-BGP정책',					img:"Network/9.png"},
		   { title: 'ISP-VPN', 						img:"Network/10.png"},
		   { title: 'ISP-VPN', 						img:"Network/11.png"},
		   { title: '백화점', 							img:"Network/12.png"},
		   { title: '백화점-캡틴백화점서울지점', 				img:"Network/13.png"},
		   { title: '서울지점-존기반방화벽', 				img:"Network/14.png"},
		   { title: '서울지점-이더체널', 					img:"Network/15.png"},
		   { title: '서울지점-DACL+AAA서버', 				img:"Network/16.png"},
		   { title: '서울지점-DACL+AAA서버', 				img:"Network/17.png"},
		   { title: '서울지점-AAA서버', 					img:"Network/18.png"},
		   { title: '백화점-캡틴백화점울산지점', 				img:"Network/19.png"},
		   { title: '울산지점-NAT', 					img:"Network/20.png"},
		   { title: '울산지점-NAT이중화', 					img:"Network/21.png"},
		   { title: '울산지점-NAT이중화', 					img:"Network/22.png"},
		   { title: '백업망', 							img:"Network/23.png"},
		   { title: '백업망-전용백업망', 					img:"Network/24.png"},
		   { title: '백업망-RACL', 					img:"Network/25.png"},
		   { title: '백업망-RACL(ACL설정, static route)',img:"Network/26.png"},
		   { title: '백업망-OSPF인증', 					img:"Network/27.png"},
		   { title: 'IDC', 							img:"Network/28.png"},
		   { title: 'IDC', 							img:"Network/29.png"},
		   { title: 'IDC1-IDC1구성도', 				img:"Network/30.png"},
		   { title: 'IDC1-MHSRP 이중화', 				img:"Network/31.png"},
		   { title: 'IDC1-MHSRP 이중화', 				img:"Network/32.png"},
		   { title: 'IDC1-MHSRP 이중화', 				img:"Network/33.png"},
		   { title: 'IDC1-MHSRP 이중화', 				img:"Network/34.png"},
		   { title: 'IDC1-ASA 방화벽', 				img:"Network/35.png"},
		   { title: 'IDC2-IDC2구성도', 				img:"Network/36.png"},
		   { title: 'IDC2-방화벽이중화', 					img:"Network/37.png"},
		   { title: 'IDC2-방화벽이중화', 					img:"Network/38.png"},
		   { title: 'IDC2-방화벽이중화', 					img:"Network/39.png"},
		   { title: 'IDC2-방화벽이중화', 					img:"Network/40.png"},
		   { title: 'IDC2-GLBP', 					img:"Network/41.png"},
		   { title: 'IDC2-GLBP', 					img:"Network/42.png"},
		   { title: 'IDC2-GLBP', 					img:"Network/43.png"},
		   
		   { title: '본사', 							img:"Network/44.png"},
		   { title: '본사-구성도', 						img:"Network/45.png"},
		   { title: '본사-NAT', 						img:"Network/46.png"},
		   { title: '본사-VTP', 						img:"Network/47.png"},
		   { title: '본사-PortSecurity', 				img:"Network/48.png"},
		   
		   { title: '본사-RIP', 						img:"Network/49.png"},
		  
		   
		   { title: '아울렛', 							img:"Network/50.png"},
		   { title: '아울렛-부산 아울렛 구성도', 				img:"Network/51.png"},
		   { title: '아울렛-ASA', 						img:"Network/52.png"},
		   { title: '아울렛-CBAC,DHCP', 				img:"Network/53.png"},
		   { title: '아울렛-STP', 						img:"Network/54.png"},
		   { title: '아울렛-대전 아울렛 구성도', 				img:"Network/55.png"},
		   { title: '아울렛-VRRP이중화', 					img:"Network/56.png"},
		   { title: '아울렛-VRRP이중화', 					img:"Network/57.png"},
		   { title: '아울렛-IPV6V4터널링', 				img:"Network/58.png"},
		   { title: '아울렛-IPV6V4터널링', 				img:"Network/59.png"},
		   { title: '아울렛-NAT', 						img:"Network/60.png"}
		  
		   ];		
		$scope.DBtabs = [
		    { title: '1. 데이터베이스 Content', 	img:"DB/1.png"},
		    { title: '1. 데이터베이스 디자인', 		img:"DB/2.png"},
		    { title: '2. 데이터베이스 저장영역 구성', 	img:"DB/3.png"},
		    { title: '3. 데이터베이스 유저 관리 및 보안',	img:"DB/4.png"},
		    
		    { title: '4. 테이블 정책 스키마', 		img:"DB/5.png"},
		   
		    { title: '4. 테이블 정책 암호화', 		img:"DB/6.png"},
		    { title: '5. 백업 정책 전체 주기',		img:"DB/7.png"},
		    { title: '5. 백업 정책 백업 결과',		img:"DB/8.png"},
		    { title: '5. 백업 정책 스케줄', 		img:"DB/9.png"},
		    { title: '5. 백업 정책 스케줄', 		img:"DB/10.png"},
		    { title: '5. 백업 정책 스케줄', 		img:"DB/11.png"},
		    { title: '6. 모니터링', 			img:"DB/12.png"},
		    { title: '6. 모니터링', 			img:"DB/13.png"},
		    { title: '6. 모니터링', 			img:"DB/14.png"},
		    { title: '6. 모니터링', 			img:"DB/15.png"},
		    { title: '6. 모니터링', 			img:"DB/17.png"},
		    { title: '6. 모니터링', 			img:"DB/18.png"},
		    { title: '6. 모니터링', 			img:"DB/19.png"},
		    { title: '7. 스크립트파일생성', 		img:"DB/20.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/21.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/22.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/23.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/24.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/25.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/26.png"},
		    { title: '별첨-체크리스트관련', 		img:"DB/27.png"},
		    { title: '별첨-테이블차트', 			img:"DB/28.png"},
		    { title: '별첨-테이블차트', 			img:"DB/29.png"},
		    { title: '별첨-테이블차트', 			img:"DB/30.png"},
		    { title: '별첨-테이블차트', 			img:"DB/31.png"},
		    { title: '별첨-테이블차트', 			img:"DB/32.png"},
		    { title: '별첨-테이블차트', 			img:"DB/33.png"},
		    { title: '별첨-테이블차트', 			img:"DB/34.png"},
		    { title: '별첨-테이블차트', 			img:"DB/35.png"}
		    
		    ];	
		
		$scope.serverTabs = [
		    { title: 'Contents', 	img:"Server/1.png"},
		    { title: 'Overview',	img:"Server/2.png"},
		    { title: 'Linux', 	img:"Server/3.png"},
		    { title: 'Linux', 	img:"Server/4.png"},
		    { title: 'Linux', 	img:"Server/5.png"},
		    { title: 'Linux', 	img:"Server/6.png"},
		    { title: 'Linux', 	img:"Server/7.png"},
		    { title: 'Linux', 	img:"Server/8.png"},
		    { title: 'Linux', 	img:"Server/9.png"},
		    { title: 'Linux', 	img:"Server/10.png"},
		    { title: 'Linux', 	img:"Server/11.png"},
		    
		    { title: 'Linux', 	img:"Server/11.png"},
		    { title: 'Linux', 	img:"Server/12.png"},
		    { title: 'Linux', 	img:"Server/13.png"},
		    { title: 'Linux', 	img:"Server/14.png"},
		    { title: 'Linux', 	img:"Server/15.png"},
		    { title: 'Linux', 	img:"Server/16.png"},
		    
		    { title: 'Window', 	img:"Server/17.png"},
		    { title: 'Window', 	img:"Server/18.png"},
		    { title: 'Window', 	img:"Server/19.png"},
		    { title: 'Window', 	img:"Server/20.png"},
		    { title: 'Window', 	img:"Server/21.png"},
		    { title: 'Window', 	img:"Server/22.png"},
		    { title: 'Window', 	img:"Server/23.png"},
		    { title: 'Window', 	img:"Server/24.png"},
		    { title: 'Window', 	img:"Server/25.png"},
		    { title: 'Window', 	img:"Server/26.png"},
		    
		    
		    { title: 'CheckList', 	img:"Server/27.png"},
		    { title: 'CheckList', 	img:"Server/28.png"},
		    { title: 'CheckList', 	img:"Server/29.png"},
		    { title: 'CheckList', 	img:"Server/30.png"},
		    { title: 'CheckList', 	img:"Server/31.png"},
		    { title: 'CheckList', 	img:"Server/32.png"},
		    { title: 'CheckList', 	img:"Server/33.png"},
		    { title: 'CheckList', 	img:"Server/34.png"},
		    { title: 'CheckList', 	img:"Server/35.png"},
		    { title: 'CheckList', 	img:"Server/36.png"},
		    { title: 'CheckList', 	img:"Server/37.png"},
		    { title: 'CheckList', 	img:"Server/38.png"},
		    { title: 'CheckList', 	img:"Server/39.png"},
		    { title: 'CheckList', 	img:"Server/40.png"},
		    { title: 'CheckList', 	img:"Server/41.png"},
		    { title: '발생 가능한 장애 유형별 대처 방안', 	img:"Server/42.png"}
		    
		    ];
		
		
		$scope.WebServerTabs = [
		    { title: '웹서버', 	img:"WebServer/1.png"},
		    { title: 'Q & A',	img:"WebServer/2.png"},
		    { title: 'End', 	img:"WebServer/3.png"} ];
		$scope.nextPage = function() {
			$cookieStore.put('selectedIndex',0);
			
			var url= $location.$$url;
			
			$scope.selectedIndex++;
			console.log($scope.selectedIndex)
			console.log(url)
			if ((url == '/concept'  || url == '/' )&& $scope.selectedIndex >= 4) {
				$location.path('/tp_network');
			} else if (url == '/tp_network' && $scope.selectedIndex >= 59) {
				$location.path('/tp_server');
			} else if (url == '/tp_server' && $scope.selectedIndex >= 40) {
				$location.path('/tp_database');
			} else if (url == '/tp_database' && $scope.selectedIndex >= 34) {
				$location.path('/tp_web');
			} 
		};
		$scope.tebInit = function () {
			var selectedIndex = $cookieStore.get('selectedIndex');
			if (selectedIndex !=0 && selectedIndex !=undefined 
					&& selectedIndex != null){
				$scope.selectedIndex = selectedIndex;
				$cookieStore.put('selectedIndex',0);
			}	
			
			//$cookieStore.put('selectedIndex',4);
		};
		
		
		$scope.privPage = function() {
		
			if ($scope.selectedIndex > 0) {
				$scope.selectedIndex--;
			} else {
				var url = $location.$$url;
				if (url == '/concept' || url == '/') {
					// $location.path('/tp_database');
				} else if (url == '/tp_network') {
					$location.path('/concept');
					$cookieStore.put('selectedIndex',5);
					$scope.selectedIndex = 4;
				} else if (url == '/tp_server') {
					$location.path('/tp_network');
					$cookieStore.put('selectedIndex',60);
					$scope.selectedIndex = 55;
				} else if (url == '/tp_database') {
					$location.path('/tp_server');
					$cookieStore.put('selectedIndex',42);
					$scope.selectedIndex = 42;
				} else if (url == '/tp_web') {
					$location.path('/tp_database');
					$cookieStore.put('selectedIndex',37);
					$scope.selectedIndex = 37;
				}
			}
		};

		
		// 함수 선언
		$scope.simpleToast = function(string) {
			$mdToast.show($mdToast.simple().content(string).hideDelay(1000));
		};
		$scope.movePage = function(url) {
			$location.path(url);
		};
//		$scope.test();
		$scope.HomepInfo=null;
		
		
		$scope.showConfirm = function(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.confirm()
		          .title('삭제 확인')
		          .textContent('이 게시물을 삭제하시겠습니까?')
		          .targetEvent(ev)
		          .ok('삭제')
		          .cancel('취소');
		    $mdDialog.show(confirm).then(function() {
		    	$scope.boardDelete();
		    });
		  };
		
		$scope.boardDelete = function () {
			$http.post('boardDelete',$scope.boardDetail).success(function(data) {
				$scope.simpleToast("게시물을 삭제하였습니다.");
				$scope.movePage('/boardList');
			});	
		};
		$scope.boardInsert = function () {
			
			if ($cookieStore.get('loginCheck') == true) {
				$scope.boardDetail.userId= $cookieStore.get('userStatus').id
				$http.post('boardInsert',$scope.boardDetail).success(function(data) {
					$scope.simpleToast("게시물을  추가하였습니다.");
					$scope.movePage('boardList');
				});
			} else {
				// no login
				$scope.simpleToast("로그인 되지 않았습니다.");
			}
			
			
			
			
				
		}; 
		$scope.dateConvert = function (date) {
			var conDate = new Date(date);
			return (conDate.getFullYear() + "-" + (conDate.getMonth() + 1) + "-" + conDate.getDate());
			
		}
		$scope.getBoardList = function () {
			$scope.page=1;
//			listNum = { "startNum" : startNum , "endNum" : endNum };
			$http.post('getBoardList',$scope.page).success(function(data) {
				$scope.board=data;
				angular.forEach($scope.board, function(value, key) {
					value.writeDate = $scope.dateConvert(value.writeDate);
					value.updateDate = $scope.dateConvert(value.updateDate);
				});
			});	
		};
		
		function replaceAll(str, target, replacement) {
		    return str.split(target).join(replacement);
		};
		// 예제
		
		
		
		$scope.getBoardDetail = function () {
			if ($routeParams.boardId != undefined) {
				$http.post('getBoardDetail',$routeParams.boardId).success(function(data) {
					data.writeDate = $scope.dateConvert(data.writeDate);
					data.updateDate = $scope.dateConvert(data.updateDate);					
					$scope.boardDetail= data;
				});	
			} else {
				$scope.boardDetail= null;
			}
			

			
			//$http.post('getBoardDetail',$routeParams.boardId).success(function(data) {
			$http.post('getBoardDetail',$routeParams.boardId).success(function(data) {
				console.log(data);
			});	
		};
		$scope.boardUpdate = function () {
			
		};
		
		$scope.boardDetailPage = function (boardId) {
			$scope.movePage('/boardDetail/'+boardId);
		}
//		$scope.boarddetailinit = function () {
//			if ($routeParams.boardId != undefined) {
//				$http.post('getBoardDetail',$routeParams.boardId).success(function(data) {
//					$scope.boardDetail= data;
//				});	
//			} else {
//				$scope.boardDetail= null;
//			}
//			
//		}

//		$scope.boardInsert = function () {
//			$scope.boardDetail.passwd ='1234';
//			$scope.boardDetail.userId ='test';
//			$http.post('boardInsert',$scope.boardDetail).success(function(data) {
//				console.log(data)
//			});	
//		};
		
		$scope.init = function () {
			var HomepageInfo = $cookieStore.get('HomepageInfo');
			if (HomepageInfo == undefined) {
				$http.post('HomepageInfo').success(function(data) {
					$scope.HomepInfo = data;
					$cookieStore.put('HomepageInfo',data);
				});
			} else {
				
				$http.post('HomepageInfo').success(function(data) {
					$scope.HomepInfo = data;
					$cookieStore.put('HomepageInfo',data);
				});
				
				$scope.HomepInfo = $cookieStore.get('HomepageInfo');
			}
			
			$scope.loginCheck = $cookieStore.get('loginCheck');
			if ($scope.loginCheck != undefined && $scope.loginCheck != false) {
				$scope.user = $cookieStore.get('userStatus');
			} else {
				$scope.loginCheck = false;
			}
		} 

		$scope.userInit = function () { 
			$scope.user = 
				{	"id": null,
					"passwd": null,
					"name": null,
					"email": null,
					"companyId": null	};
		};
		
		//userCheckId
		$scope.userIdCheck = false;
		$scope.userIdCheckMsg = "ID 를 입력해 주세요.";
		
		$scope.userCheckId = function () {
			if ( $scope.user.id != null && $scope.user.id != "") {
				$http.post('checkUserID',$scope.user).success(function(data) {
					if (data == 1) {
						$scope.userIdCheckMsg = "사용 중인 ID입니다."
						$scope.userIdCheck = false;
					} else {
						$scope.userIdCheckMsg = "사용 가능한 ID입니다."
						$scope.userIdCheck = true;
					}
				});	
			} else {
				$scope.userIdCheckMsg = "ID 를 입력하지 않았습니다."
				$scope.userIdCheck = false;
			}
		};
		
	
		$scope.backMain = function () {
			$location.path("/");
		};
		
		$scope.userSignUp = function () {
//			if ($scope.userIdCheck == true) {
				$http.post('userSignUp',$scope.user).success(function(data) {
					$scope.simpleToast("회원가입이 완료되었습니다.");
					$location.path("/");
				});
//			} else {
//				$scope.simpleToast("아이디가 존재하는지 확인 해 주시기 바랍니다.");
//			}
//				
			
			// $scope.user = { id : "testId",passwd : "testId", name : "name", email : "email" };
		}
		
		$scope.userSignIn = function () {
			if ($scope.user.id != null && $scope.user.passwd != null) {
				$http.post('userSignIn',$scope.user).success(function(data) {
					console.log(data);
					if (data == 1) {
						$scope.simpleToast("로그인을 성공하였습니다.");
						
						$http.post('getUserInfo',$scope.user).success(function(data) {
							$cookieStore.put('loginCheck',true);
							$cookieStore.put('userStatus',data);
							$location.path("/");	
							location.reload(); 
						});
					} else if ( data == 2 ){
						$scope.simpleToast("패스워드를 확인 해 주세요");
					} else if ( data == 0 ){
						$scope.simpleToast("ID를 확인 해 주세요");
					}
				});
			} else {
				$scope.simpleToast("ID와 패스워드를 입력하지 않았습니다.");
			}
		}
		
		$scope.getUserInfo = function () {
			$scope.user = { id : "testId",passwd : "testId", name : "name", email : "email" };
			$http.post('getUserInfo',$scope.user).success(function(data) {});
		};
		$scope.userLogoout = function () {
			$cookieStore.put('loginCheck',false);
			$cookieStore.put('userStatus',null);
			$scope.simpleToast("로그아웃에 성공하였습니다.");
			$location.url("/");
			location.reload(); 
		};
		$scope.userSignOut = function () {
			$scope.user = { id : "testsdaf",passwd : "testId", name : "name", email : "email" };
		
			$http.post('userSignOut',$scope.user).success(function(data) {
				$scope.userLogoout();
				$scope.simpleToast("회원 탈퇴에 성공하였습니다.");
			});
			
			
			
		};
		
		$scope.checkUserList = function (startNum , endNum) {
//			listNum = { "startNum" : startNum , "endNum" : endNum };
			listNum = { "startNum" : 0 , "endNum" : 10 };
			
			$http.post('checkUserList', listNum).success(function(data) {
				console.log(data);
			});
		}
		
		
		
		
		
		
//		
//		$scope.boardList = function () {
//			$http.post('getBoardList').success(function(data) {
//				$scope.board=data;
//				console.log(data);
//			});
//			
//		};
/*		// 유저 정보 확인을 위한 다이어로그 불러오는 함수
		$scope.showUserDetail = function(user, ev) {
			var str = 
			  "<p> user Name : "		+ user.first_name +  user.last_name + "</p>"+
			  "<p> user grade : "		+ user.grade 						+ "</p>"+
			  "<p> user id : "			+ user.id 							+ "</p>"+
			  "<p> user password : "	+ user.passwd 						+ "</p>"+
			  "<p> user loginState : "	+ user.loginState 					+ "</p>"+
			  "<p> user verification : "+ user.verification 				+ "</p>"
			$mdDialog.show(
			   $mdDialog.alert()
			    		.parent(angular.element
			    					(document.querySelector('#popupContainer')))
			    		.clickOutsideToClose(true)
			    		.title('User Detail Info')
			    		.content(str)
			    		.ariaLabel('Alert Dialog Demo')
			    		.ok('OK!')
			    		.targetEvent(ev) );
		};*/

		/*$scope.checkUseableId = function() {
			var msg = null; 
			var id = $scope.user.id;
			if (id=="") { msg="아이디를 입력하지 않았습니다."; 
			} else if (id.indexOf(" ")>=0) {
				msg = "아이디에 공백을 사용할 수 없습니다.";
			} else if (id.length<6 || id.length>12) {
				msg = "아이디를 6~12자까지 입력해주세요.";
			} else {
				for (var i=0; i < id.length; i++ ) {
					ch=id.charAt(i);
					if (!(ch>='0' && ch<='9') && !(ch>='a' && ch<='z')) {
						msg = "아이디는 소문자, 숫자만 입력가능합니다.";
					}
				}
			}
			if ( msg == null ) {
				$http.post('checkUser', $scope.user).success(function(data) {
						var msg = ""; 
					if (data) { msg = '이미 존재하는 아이디입니다';
					} else { msg = '사용 가능한 아이디입니다'; }
					$scope.chkIdMsg = msg;
				});
			} else {
				$scope.chkIdMsg = msg;
			}
		};*/

		/*$scope.checkPassword = function () {
			var msg = null;
			if ($scope.user.passwd=="") {
				msg = ""; 
			} else if ($scope.user.passwd.length<4 || $scope.passwd2.length>8) {
				msg = "비밀번호를 4~8자까지 입력해주세요.";
			} else if ($scope.user.passwd !=$scope.passwd2) {
				msg = "비밀번호가 일치하지 않습니다";
			} else {
				msg = "사용 가능한 비밀번호 입니다.";
			}
			$scope.chkPwMsg = msg;
		};*/
		
		// RestFul API 불러오기
//		$scope.getUserList = function () {
//			$http.post('getUserList').success(function(data) {
//				var userList = data.result_list;
//				
//
//				for (var i=0  ; i<userList.length ; i++) {
//					var cnt=1;
//					for (var j=i+1;i<userList.length;j++) {
//						console.log(i,j);
//						if (userList[j].rootOrganizationInfoNo==userList[i].organInfoNo) {
//							
//						}
//					}
//					
//				}
//				$scope.userList = userList; 
//				console.log($scope.userList)
//			});
//		};
		

/*		$scope.addUser = function() {
			$http.post('addUser', $scope.user).success(function(data) {
				$scope.userInit();
				$scope.simpleToast('회원 가입이 완료되었습니다.');
				$scope.movePage('/login');
			}).error(function(data, status, headers, config) {
				$scope.simpleToast('회원 가입에 실패하였습니다.');
				$scope.movePage('/login');
			});
		};
		
		$scope.updateUserInfo = function() {
			$http.post('updateUserInfo', $scope.user).success(function() {
				$scope.simpleToast('회원 정보가 변경되었습니다.');
				$scope.movePage('/login');
			});
		};



		$scope.dropUser = function() {
			var msg ="";
			$http.post('dropUser', $scope.user.id).success(function(data) {
				if (data == 1)
					msg = $scope.user.id + "이(가) 성공적으로 삭제되었습니다.";
				else {
					msg = $scope.user.id + "이(가) 존재하지 않는 유저이거나 이미 삭제 되었습니다. ";
				}
				$scope.simpleToast(msg);
			});
		};

		$scope.getUser = function() {
			$http.post('getUser', $scope.user).success(function(data) {
				$scope.user = data;
			});
		}

		$scope.checkUser = function() {
			$http.post('checkUser', $scope.user).success(function(data) {
				var msg = ""; 
				if (data) { msg = '사용 할 수 없는 아이디입니다';
				} else { msg = '사용 가능한 아이디입니다'; }
				$scope.simpleToast(msg);
			});
		};*/
}]);
