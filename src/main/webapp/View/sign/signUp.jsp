<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<md-content 
			layout-gt-sm="row" 
			layout-padding 
			layout-margin 
			layout-align="center center">
	<div flex="60">
		<form >
			<md-card layout-padding >
				<md-card-title>
					<md-card-title-text>
					<span class="md-headline">Sign Up</span>
					</md-card-title-text>
				</md-card-title>
				
				<md-input-container>
					<label>id</label> 
					<input id = "userId" name ="userId" ng-model="user.id">
				</md-input-container>
				<md-button ng-click="userCheckId()">아이디 체크</md-button>
				<div> {{ userIdCheckMsg }}</div>
				
				<md-input-container>
					<label>Password</label> 
					<input id = "password" name ="password" ng-model="user.passwd" type="password">
				</md-input-container>
				<md-input-container>
					<label>name</label> 
					<input id = "name" name ="name" ng-model="user.name">
				</md-input-container>
				<md-input-container>
					<label>email</label> 
					<input id = "email" type="email" ng-model="user.email">
				</md-input-container>
				<md-card-actions layout="row" layout-align="end center">
					<md-button type="submit" ng-click="userSignUp()">Sign Up</md-button>
				<!-- 	<md-button ng-click="signIn()">Sign In</md-button> -->
					<md-button>Cencel</md-button>
				</md-card-actions>
			</md-card>
		</form>
	</div>	
</md-content>
