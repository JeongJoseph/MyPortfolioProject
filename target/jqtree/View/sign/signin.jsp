<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<md-content layout-gt-sm="row" layout-padding layout-margin layout-align="center center">
	<div flex="60">
		<!-- <form action="./j_spring_security_check" method="post"> -->
			<md-card layout-padding ng-init="userInit()">
				<md-card-title>
					<md-card-title-text>
					<span class="md-headline">Sign In</span>
					</md-card-title-text>
				</md-card-title>
				<md-input-container>
					<label>id</label> 
					<input id = "userId" name ="userId" ng-model="user.id">
				</md-input-container>
				<md-input-container>
					<label>Password</label> 
					<input id = "password" name ="password" ng-model="user.passwd" type="password">
				</md-input-container>
				<md-card-actions layout="row" layout-align="end center">
					<md-button ng-click="userSignIn()">Sign In</md-button>
					<md-button ng-click="backMain()" >Cencel</md-button>
				</md-card-actions>
			</md-card>
		<!-- </form> -->
	</div>	
</md-content>
