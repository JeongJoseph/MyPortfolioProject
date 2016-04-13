<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<md-tabs md-selected="selectedIndex" md-autoselect layout-margin style="min-height:600px" >
	<md-tab ng-repeat="tab in Networktabs" label="{{tab.title}}" layout-margin >
		<img style="margin: auto;width:900px;height:500px;" 
				src="${pageContext.request.contextPath}/resources/app/img/Network/{{tab.img}}">
	</md-tab>
</md-tabs>
<md-button ng-click="privPage()" >이전</md-button>
<md-button ng-click="nextPage()" >다음</md-button>