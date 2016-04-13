package com.user.dao;

import java.util.ArrayList;
import java.util.List;








import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.board.dao.ListNum;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.datastore.service.DatastoreServiceFactoryInterface;
import com.google.appengine.api.datastore.Query.FilterPredicate;

@Repository
public class UserDAODatastore implements UserDAO{
//	private SqlSessionTemplate sqlSessionTemplate;
//    
//    @Autowired
//    public void setSqlMapClient(SqlSessionTemplate sqlSessionTemplate) {
//        this.sqlSessionTemplate = sqlSessionTemplate;
//    }
	
	DatastoreService datastoreService;
	
	@Autowired
    public UserDAODatastore(DatastoreServiceFactoryInterface datastoreServiceFactory){
        this.datastoreService = datastoreServiceFactory.getDatastoreService();
    }
	
//    @Override
//    public int signIn(User user){
//    	System.out.println("dao");
//    	System.out.println(user);
//    	/*sqlSessionTemplate.selectList("userInsert",user);*/
//    	return 0;
//    }
    
//	Entity HomePageInfo = new Entity("HomePageInfo");
//	HomePageInfo.setProperty("address", "173, Gwajeong-ro, Yeonje-gu, Busan, Korea");
//	HomePageInfo.setProperty("branch", "Busan");
//	HomePageInfo.setProperty("coRegNum", "12345-67-890");
//	HomePageInfo.setProperty("companyID", "Captain's Company");
//	HomePageInfo.setProperty("dutyHours", "Mon~Fri 13:00~20:00");
//	HomePageInfo.setProperty("representative", "Joseph Jeong");
//	Key tomKey = tom.getKey();
//	datastoreService.put(en);
    
    
    @Override
    public User checkUserID(User user) {
    	Filter keyFilter = new FilterPredicate("id", FilterOperator.EQUAL, user.getId());
		Query q =  new Query("User").setFilter(keyFilter);
		PreparedQuery pq = datastoreService.prepare(q);
		Entity result = pq.asSingleEntity();
		if (result == null) {
			return null;
		} else {
			user = new User(result);
	    	return user;	
			
		}
		
    }
    
    
    @Override
    public List<User> checkUserList( ListNum lNum) {
		Query q = new Query("User");
		PreparedQuery pq = datastoreService.prepare(q);
		List<Entity> list =  pq.asList(FetchOptions.Builder.withDefaults());
    	List<User> returnList = new ArrayList<User>();
    	for (int i=lNum.getStartNum() ; i<lNum.getEndNum() ; i++) {
    		User us = new User(list.get(i));
    		returnList.add(us);
    	}
    	return returnList;
    }
    @Override
	public int signUp(User user) {
    	datastoreService.put(user.convertEntity());
		return 0;
	}
    
    @Override
	public void signOut(User user) {
    	Filter keyFilter = new FilterPredicate("id", FilterOperator.EQUAL, user.getId());
		Query q =  new Query("User").setFilter(keyFilter);
		PreparedQuery pq = datastoreService.prepare(q);
		Entity result = pq.asSingleEntity();
		datastoreService.delete(result.getKey());
	}
	
    
    
    
    
	    
	    
	
//    @Override
//    public List<User> list(User user){
//    	return sqlSessionTemplate.selectList("list",user);
//    }
}
