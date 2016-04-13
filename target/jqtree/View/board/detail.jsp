<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div ng-init="getBoardDetail()" class="md-padding">

	<md-card class="md-padding">
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline">{{boardDetail.title}}</span>
          </md-card-title-text>
        </md-card-title>
        
        <md-card-content layout="column" >
        	<div class="md-padding" flex layout="row" >
				<div flex="30">글번호 : {{boardDetail.id}}</div>
				<div flex="30">수정일 : {{boardDetail.writeDate}}</div>
				<div flex="30">작성자 : {{boardDetail.userId}}</div>
			</div> 
        	<div class="md-padding" style="height:400px;white-space:pre-line;overflow-y:scroll" > 
        		{{boardDetail.detail}} 
        	</div>
        </md-card-content>
        <md-card-actions layout="row" layout-align="end center">
        	<md-button md-no-ink class="md-raised md-primary" ng-click="movePage('/boardInsert')">글쓰기</md-button>
<!-- 			<md-button md-no-ink class="md-raised md-primary" ng-click="movePage('/boardUpdate')">수정</md-button> -->
			<md-button md-no-ink class="md-raised md-primary" ng-click="boardDelete()">삭제</md-button>
			<md-button md-no-ink class="md-raised md-primary" ng-click="movePage('/boardList')">목록으로</md-button>
        </md-card-actions>
      </md-card>
</div>

