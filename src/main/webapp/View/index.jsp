<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-messages.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-cookies.js"></script>
	
	<script src="//ajax.googleapis.com/ajax/libs/angular_material/0.11.2/angular-material.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/js/app.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.6.0/angular-material-icons.min.js"></script>
	
	<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/angular_material/0.11.2/angular-material.min.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/app/css/default.css">
	<title>ITWILL 3 Team Project Presentation</title>
	
	 
</head>
<body>
	<div ng-app="teamProject">
		<div ng-controller="IntroduceCtrl" layout="column" ng-cloak id="popupContainer" ng-init="init()">
			<!-- <div class="md-body-2 layout-padding">
				Back : Java(Spring)<br>
				Front : AngularJs<br>
				Design : Angular Mamerial Design<br>
				ETC : Mybatis + SpringSecurity
		    </div> -->
		    
		    <div layout="row" layout-align="end center"  layout-margin ng-if="!loginCheck">
		    	<md-button  ng-click="movePage('/signIn')">Sign in</md-button>   
		    	<div class="md-caption" layout-margin > | </div>
		    	<md-button  ng-click="movePage('/signUp')">Sign Up</md-button>   
		    </div>
		    <div layout="row" layout-align="end center"  layout-margin ng-if="loginCheck">
		    	<div class="md-caption" layout-margin > {{user.name}} 님 환영합니다 </div>
		    	<div class="md-caption" layout-margin > | </div>
		    	<md-button  ng-click="userSignOut()">SignOut</md-button> 
		    	<div class="md-caption" layout-margin > | </div>
		    	<md-button  ng-click="userLogoout()">LogOut</md-button>  
		    </div>
		    
				<md-toolbar id="toolbarMain">
					<div layout="row"  layout-align="none center">
						<div ng-repeat="menu in mainTabVars.main | orderBy:'no'" ng-click="movePage(menu.link)">
						  <md-button md-no-ink>{{ menu.name }}</md-button>
					    </div>
						<div>
							<md-menu>
								<md-button ng-click="$mdOpenMenu($event)">
									Part Introduce
								</md-button>
								<md-menu-content width="3">
									<md-menu-item ng-repeat="item in mainTabVars.teamProjectIndividualMenu | orderBy:'no'">
										<md-button ng-click="movePage(item.link)">
										{{item.name}}
										</md-button>
									</md-menu-item>
								</md-menu-content>
							</md-menu>
						</div>
						
						<div ng-click="movePage('boardList')">
						  <md-button md-no-ink> BOARD </md-button>
					    </div>
					</div>
				</md-toolbar>
				<md-card layout-padding layout-margin>
					<div ng-view></div>
				</md-card>
				
<!-- 				 <md-button ng-click="boardDelete()">boardDelete</md-button> -->
<!-- 				 <md-button ng-click="boardInsert()">boardInsert</md-button> -->
<!-- 				 <md-button ng-click="getBoardList(2,3)">getBoardList</md-button> -->
<!-- 				 <md-button ng-click="getBoardDetail()">getBoardDetail</md-button> -->
				 
				<md-content layout="column" layout-align="center center" flex layout-padding class="md-caption" >
				    <div> 주소 : {{HomepInfo.address}}  지점 :{{HomepInfo.branch}}</div>
				    <div> 사업자 등록번호 : {{HomepInfo.coRegNum}}  회사명 : {{HomepInfo.companyID}} </div>
				    <div> 근무시간 : 평일 {{HomepInfo.dutyHours}}  사업자 대표 : {{HomepInfo.representative}} </div>
				</md-content>

		</div>	
	</div>
</body>
</html>

