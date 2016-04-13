<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div ng-init="tebInit()">
	<md-tabs md-selected="selectedIndex" md-autoselect layout-margin style="min-height:600px" >
		<md-tab ng-repeat="tab in WebServerTabs" label="{{tab.title}}" layout-margin >
			<div layout="row" layout-align="space-between center">
				<md-button style="height:500px;" ng-click="privPage()"> 
					<img src="${pageContext.request.contextPath}/resources/app/icon/ic_navigate_before_black_48dp_2x.png"> 
				</md-button>
				<img style="margin: auto;width:900px;height:500px;" 
					src="${pageContext.request.contextPath}/resources/app/img/{{tab.img}}">
				<md-button style="height:500px; "ng-click="nextPage()"> 
					<img src="${pageContext.request.contextPath}/resources/app/icon/ic_navigate_next_black_48dp_2x.png"> 
				</md-button>
			</div>
		</md-tab>
	</md-tabs>
</div>
