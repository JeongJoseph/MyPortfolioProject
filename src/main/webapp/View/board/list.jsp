<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div ng-init="getBoardList()">

	<md-list> 
		
		<md-subheader class="md-no-sticky">
			<div flex class="md-list-item-text" layout="row">
				<div flex="5">No</div>
				<div flex="50">Title</div>
				<div flex="20">Write Date</div>
				<div flex="20">Writer</div>
			</div>
		</md-subheader>
		
		<md-list-item  ng-repeat="item in board" ng-click="boardDetailPage(item.id)">
			<!-- <div class="md-list-item-text" layout="column" ng-click="boardDetailPage(item.id)"> -->
			<div flex class="md-list-item-text" layout="row" >
				<div flex="5">{{ item.id }}</div>
				<div flex="50">{{ item.title }}</div>
				<div flex="20">{{ item.writeDate}}</div>
				<div flex="20">{{ item.userId }}</div>
			</div> 
<!-- 			<div class="md-list-item-text" layout="row" ng-click="boardDetailPage(item.id)"> -->
<!-- 				<h3>{{ item.userId }}</h3> -->
<!-- 				<h4>{{ item.title }}</h4> -->
<!-- 				<p>{{ item.writeDate }}</p> -->
<!-- 			</div> -->
		<md-divider></md-divider>	
		</md-list-item> 
	</md-list>
	
	
	
		<div layout="row" layout-align="center center">
			<div layout="row" layout-align="center center"  ng-repeat="n in range()" >
				<div > <md-button md-no-ink ng-click="boardListPage(n)">{{n}}</md-button> </div>
				<div layout-margin ng-if="maxsizeCheck(n)" > | </div>
			</div>
		</div>
			
		

	<div layout="row" layout-align="end center">
		<md-button md-no-ink class="md-raised md-primary" ng-click="movePage('/boardInsert')">글쓰기</md-button>
	</div>
	
	
	
	
</div>
