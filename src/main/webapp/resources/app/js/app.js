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
		}).when('/boardList/:boardId', {
			templateUrl : 'boardDetail',
			controller : 'IntroduceCtrl'
		}).when('/getBoardSize', {
			templateUrl : 'getBoardSize',
			controller : 'IntroduceCtrl'
		}).when('/boardList/:page', {
		    templateUrl: 'boardList',
		    controller: 'IntroduceCtrl'
		})
		
		
		.otherwise({
			redirectTo : '/concept'
		}); 
	}])
	.controller( 'IntroduceCtrl',[ '$scope', '$http', '$mdToast', 
	                          '$location', '$mdSidenav', '$mdDialog','$cookieStore','$routeParams',
	function($scope, $http, $mdToast, $location,$mdSidenav,$mdDialog, $cookieStore,$routeParams) {
		
		
		$scope.nextPage = function() {
			$cookieStore.put('selectedIndex',0);
			var url= $location.$$url;
			$scope.selectedIndex++;
			if ((url == '/concept'  || url == '/' )&& $scope.selectedIndex >= ($scope.mainTabVars.introduce.length)) {
				$location.path('/tp_network');
			} else if (url == '/tp_network' && $scope.selectedIndex >= ($scope.mainTabVars.networks.length)) {
				$location.path('/tp_server');
			} else if (url == '/tp_server' && $scope.selectedIndex >= ($scope.mainTabVars.servers.length)) {
				$location.path('/tp_database');
			} else if (url == '/tp_database' && $scope.selectedIndex >= ($scope.mainTabVars.dbTabs.length)) {
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
					$scope.selectedIndex = $scope.mainTabVars.introduce.length;
					$cookieStore.put('selectedIndex',$scope.selectedIndex);
				} else if (url == '/tp_server') {
					$location.path('/tp_network');
					$scope.selectedIndex = $scope.mainTabVars.networks.length;
					$cookieStore.put('selectedIndex',$scope.selectedIndex);
				} else if (url == '/tp_database') {
					$location.path('/tp_server');
					$scope.selectedIndex = $scope.mainTabVars.servers.length;
					$cookieStore.put('selectedIndex',$scope.selectedIndex);
				} else if (url == '/tp_web') {
					$location.path('/tp_database');
					$scope.selectedIndex = $scope.mainTabVars.dbTabs.length;
					$cookieStore.put('selectedIndex',$scope.selectedIndex);
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
					$scope.getBoardList();
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
		
		
		
		
		$scope.range = function() {
		    var input = [];
		    for (var i = 1; i <= $scope.maxSize; i += 1) {
		        input.push(i);
		    }
		    return input;
		};
		
		$scope.maxsizeCheck = function (n) {
			var returnVar =n >=$scope.maxSize ? false : true;
			return returnVar;
		}
		$scope.pageSize = 10;
		$scope.maxSize = 1;
		$scope.getBoardList = function () {
			var page = 0;
			if ($routeParams.page == undefined) {
				page = 1;
			} else {
				page = $routeParams.page;
			}
//			$scope.page=1;
//			listNum = { "startNum" : startNum , "endNum" : endNum };
			$http.post('getBoardSize').success(function(data) {
				$scope.maxSize = parseInt(data/10);
				if (data%10 > 0) {
					$scope.maxSize = $scope.maxSize + 1;
				}
				$http.post('getBoardList',page).success(function(data) {
					$scope.board=data;
					angular.forEach($scope.board, function(value, key) {
						value.writeDate = $scope.dateConvert(value.writeDate);
						value.updateDate = $scope.dateConvert(value.updateDate);
					});
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
		$scope.boardListPage = function (n) {
			$scope.movePage('/boardList/'+n);
		}
		$scope.boardDetailPage = function (boardId) {
			alert(boardId)
			$scope.movePage('/boardDetail/'+boardId);
		}
		
		$scope.init = function () {
			var HomepageInfo = $cookieStore.get('HomepageInfo');
			console.log(HomepageInfo);
			if (HomepageInfo == undefined || HomepageInfo =="") {
				$http.post('HomepageInfo').success(function(data) {
					$scope.HomepInfo = data;
					$cookieStore.put('HomepageInfo',data);
					
					$http.post('getMenusBar').success(function(data) {
						console.log(data);
					});
				});
			} else {
				
				$http.post('HomepageInfo').success(function(data) {
					$scope.HomepInfo = data;
					$cookieStore.put('HomepageInfo',data);
					
					$http.post('getMenusBar').success(function(data) {
						console.log(data);
						
						
						$scope.mainTabVars = data;
					});
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
		
}]);
