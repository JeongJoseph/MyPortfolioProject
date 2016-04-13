<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div ng-init="boarddetailinit()">
<!-- <h2>{{boardDetail.title}}</h2>

<p>{{boardDetail.detail}}</p>
{{boardDetail}}
 -->
	<md-input-container class="md-block" flex-gt-sm>
		<label>제목</label>
		<input ng-model="boardDetail.title">
	</md-input-container>
  
	<md-input-container class="md-block">
		<label>내용</label>
		<textarea ng-model="boardDetail.detail" md-maxlength="800"></textarea>
	</md-input-container>
	
	<md-input-container class="md-block">
		<label>비밀번호</label>
		<input type="password" ng-model="boardDetail.passwd">
	</md-input-container>
	
	<md-button md-no-ink class="md-primary" ng-click="boardInsert()">확인</md-button>
	<md-button md-no-ink class="md-primary" ng-click="movePage('/boardList')">취소</md-button>
</div>
