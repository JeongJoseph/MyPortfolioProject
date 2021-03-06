package com.board.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.datastore.service.DatastoreServiceFactoryInterface;

@Repository
public class BoardDAODatastore implements BoardDAO{

	DatastoreService datastoreService;
	
	@Autowired
    public BoardDAODatastore(DatastoreServiceFactoryInterface datastoreServiceFactory){
        this.datastoreService = datastoreServiceFactory.getDatastoreService();
    }
	public PreparedQuery getBoardQuery(){ 
//		DESCENDING ASCENDING
		Query q = new Query("Board").addSort("id", SortDirection.DESCENDING);
		return datastoreService.prepare(q);
	}
	
	public int getBoardSize(){
		Query q = new Query("Board");
		PreparedQuery pq = datastoreService.prepare(q);
		return pq.countEntities();
	}
	
    @Override
//    public List<Board> getBoardList(ListNum lNum){
	public List<Board> getBoardList(int page){
    	
		PreparedQuery pq = getBoardQuery();
		int listSize = getBoardSize();
		int startNum = page * 10 - 10;
    	int endNum = page * 10 ;

		if (listSize <= startNum) {
			return null;
			
		} else if (listSize < endNum) {
			endNum = listSize;
		}
		
		
    	List<Board> returnList = new ArrayList<Board>();
    	List<Entity> list =  pq.asList(FetchOptions.Builder.withDefaults());
    	
    	for (int i=startNum;i<endNum;i++) {
    		Board br = new Board(list.get(i));
    		returnList.add(br);
    	}
    	return returnList;
    }
    @Override
	public Board getBoardDetail(int boardId) {
    	Filter keyFilter = new FilterPredicate("id", FilterOperator.EQUAL, Long.parseLong(String.valueOf(boardId)));
		Query q =  new Query("Board").setFilter(keyFilter);
		PreparedQuery pq = datastoreService.prepare(q);
		Entity result = pq.asSingleEntity();
		Board br = new Board(result);
    	return br;
	}
    
    @Override
    public void insertBoard (Board board) {
		PreparedQuery pq = getBoardQuery(); 
		int listSize = getBoardSize() + 1;
		
    	board.setWriteDate(new Date(System.currentTimeMillis()));
    	board.setUpdateDate(new Date(System.currentTimeMillis()));
    	board.setId(listSize);
    	datastoreService.put(board.convertEntity());
    }
    
    @Override
    public void deleteBoard (Board board) {
    	
//    	sqlSessionTemplate.update("deleteBoard", board);
    }
//    getBoardList LVO
//    getBoardDetail int
//    insertBoard boardVO
//    deleteBoard boardVO
    
    /*@Override
    public List<User> list(User user){
    	return sqlSessionTemplate.selectList("list",user);
    }*/
}
