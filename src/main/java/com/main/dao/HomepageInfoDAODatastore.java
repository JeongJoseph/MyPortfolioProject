package com.main.dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.datastore.service.DatastoreServiceFactoryInterface;





@Repository
public class HomepageInfoDAODatastore implements HomepageInfoDAO{
//	private SqlSessionTemplate sqlSessionTemplate;
//    
//    @Autowired
//    public void setSqlMapClient(SqlSessionTemplate sqlSessionTemplate) {
//        this.sqlSessionTemplate = sqlSessionTemplate;
//    }
//    
	DatastoreService datastoreService;
	
	@Autowired
    public HomepageInfoDAODatastore(DatastoreServiceFactoryInterface datastoreServiceFactory){
        this.datastoreService = datastoreServiceFactory.getDatastoreService();
    }
	
//	Filter keyFilter =
//			  new FilterPredicate(Entity.KEY_RESERVED_PROPERTY,
//			                      FilterOperator.GREATER_THAN,
//			                      lastSeenKey)
//			Query q =  new Query("HomePageInfo");
	
	@Override
    public HomepageInfo getInfo(){
//		ArrayList<String> favoriteFruit = new ArrayList<String>();
//		favoriteFruit.add("Pear");
//		favoriteFruit.add("Apple");
//		employee.setProperty("favoriteFruit", favoriteFruit);
//		en.setProperty("HomePageInfo", HomePageInfo);
//		datastoreService.put(en);
//		datastoreService.put(HomePageInfo);


		Query q = new Query("HomePageInfo");
		PreparedQuery pq = datastoreService.prepare(q);
		Entity result = pq.asSingleEntity();
		if (result == null) {
			Entity HomePageInfo = new Entity("HomePageInfo");
			HomePageInfo.setProperty("address", "173, Gwajeong-ro, Yeonje-gu, Busan, Korea");
			HomePageInfo.setProperty("branch", "Busan");
			HomePageInfo.setProperty("coRegNum", "12345-67-890");
			HomePageInfo.setProperty("companyID", "Captain's Company");
			HomePageInfo.setProperty("dutyHours", "Mon~Fri 13:00~20:00");
			HomePageInfo.setProperty("representative", "Joseph Jeong");
			datastoreService.put(HomePageInfo);			
		}
		HomepageInfo homeInfo = new HomepageInfo(result);		
		return homeInfo;
    }
	
//    @Override
//    public List<User> list(User user){
//    	return sqlSessionTemplate.selectList("list",user);
//    }
}
