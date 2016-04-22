package com.main.dao;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.Query.FilterOperator;
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
		// initialization
		if (select("Menus") == null) { 
			menuInit();
		}
		List<Entity> result = select("HomePageInfo");
		// initialization
		if (select("HomePageInfo") == null) {
			homePageInfoInit();
		}
		
		HomepageInfo homeInfo = new HomepageInfo(result.get(0));		
		return homeInfo;
    }
	@Override
	public menusBar getMenusBar() {
		menusBar menubar = new menusBar(select("Menus"));
		
		return menubar;
	}
	
	public List<Entity> select(String tableName) {
		Query q = new Query(tableName);
		PreparedQuery pq = datastoreService.prepare(q);	
		return pq.asList(FetchOptions.Builder.withDefaults());
	}
	
	
	public void homePageInfoInit() { 
		Entity HomePageInfo = new Entity("HomePageInfo");
		HomePageInfo.setProperty("address", "173, Gwajeong-ro, Yeonje-gu, Busan, Korea");
		HomePageInfo.setProperty("branch", "Busan");
		HomePageInfo.setProperty("coRegNum", "12345-67-890");
		HomePageInfo.setProperty("companyID", "Captain's Company");
		HomePageInfo.setProperty("dutyHours", "Mon~Fri 13:00~20:00");
		HomePageInfo.setProperty("representative", "Joseph Jeong");
		datastoreService.put(HomePageInfo);
	}
	
	public void menuInit() {
		String menuName = "main";
		int menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Main Introduce",	"/main_introduce", 		++menuNum);
		menuAdd( menuName, "Site Introduce", 	"/site_introduce", 		++menuNum);
		menuAdd( menuName, "Devloper Introduce","/devloper_introduce", 	++menuNum);
		
		menuName = "teamProjectIndividualMenu";
		menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Introduce",	"/introduce", 		++menuNum);
		menuAdd( menuName, "Network",	"/tp_network", 		++menuNum);
		menuAdd( menuName, "Server",	"/tp_server", 		++menuNum);
		menuAdd( menuName, "Database",	"/tp_database", 	++menuNum);
		menuAdd( menuName, "Web Page",	"/tp_web", 			++menuNum);
		
		menuName = "introduce";
		menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Main",				"Introduce/1.png", 	++menuNum);
		menuAdd( menuName, "Overview",			"Introduce/2.png", 	++menuNum);
		menuAdd( menuName, "Team Introduce",	"Introduce/4.png", 	++menuNum);
		
		menuName = "networks";
		menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Content",			"Network/1.png", 	++menuNum);
		menuAdd( menuName, "Captain's View",	"Network/2.png", 	++menuNum);
		menuAdd( menuName, "Captain's View",	"Network/3.png", 	++menuNum);
		menuAdd( menuName, "Captain's View",	"Network/4.png", 	++menuNum);
		
		menuName = "servers";
		menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Content",			"Server/1.png", 	++menuNum);
		menuAdd( menuName, "Overview",			"Server/2.png", 	++menuNum);
		menuAdd( menuName, "Linux",				"Server/3.png", 	++menuNum);
		menuAdd( menuName, "Linux",				"Server/4.png", 	++menuNum);
		
		menuName = "dbTabs";
		menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Content",				"DB/1.png", 	++menuNum);
		menuAdd( menuName, "Database Design",		"DB/2.png", 	++menuNum);
		menuAdd( menuName, "Database",				"DB/3.png", 	++menuNum);
		menuAdd( menuName, "Database security",		"DB/4.png", 	++menuNum);
		menuAdd( menuName, "Table Schema",			"DB/5.png", 	++menuNum);
		
		menuName = "webServerTabs";
		menuNum = getMenusSize(menuName);
		menuAdd( menuName, "Web Server",		"WebServer/1.png", 	++menuNum);
		menuAdd( menuName, "Q & A",				"WebServer/2.png", 	++menuNum);
		menuAdd( menuName, "End",				"WebServer/3.png", 	++menuNum);
		
	}
//    @Override
//    public List<User> list(User user){
//    	return sqlSessionTemplate.selectList("list",user);
//    }
	
	
	
	@Override
    public HomepageInfo getMainInfo() {
//		System.out.println(12345);
//		Filter lastNameFilter =
//				  new FilterPredicate("lastName",
//				                      FilterOperator.EQUAL,
//				                      targetLastName);
//
//				Filter cityFilter =
//				  new FilterPredicate("city",
//				                      FilterOperator.EQUAL,
//				                      targetCity);
//
//				Filter birthYearMinFilter =
//				  new FilterPredicate("birthYear",
//				                      FilterOperator.GREATER_THAN_OR_EQUAL,
//				                      minBirthYear);
//
//				Filter birthYearMaxFilter =
//				  new FilterPredicate("birthYear",
//				                      FilterOperator.LESS_THAN_OR_EQUAL,
//				                      maxBirthYear);
//
//				Filter validFilter = CompositeFilterOperator.and(lastNameFilter,
//				                                                 cityFilter,
//				                                                 birthYearMinFilter,
//				                                                 birthYearMaxFilter);
//
//				Query q = new Query("Person").setFilter(validFilter);
		
		String menuName = "main";
		Filter menuNameFilter =
		  new FilterPredicate("menuName",
		                      FilterOperator.EQUAL,
		                      menuName);
		 
		Query q = new Query("Menus").setFilter(menuNameFilter);
		PreparedQuery pq = datastoreService.prepare(q);
		Entity result = pq.asSingleEntity();
		
		if (result == null) {
			
			Entity Menus = new Entity("Menus");
			Menus.setProperty("menuName", menuName);
			Menus.setProperty("name", "Main Introduce");
			Menus.setProperty("link", "/main_introduce");
			Menus.setProperty("No",getMenusSize(menuName));
					
					
			datastoreService.put(Menus);		
		}
		HomepageInfo homeInfo = new HomepageInfo(result);		
		return homeInfo;
    }
	
	
	@Override
    public HomepageInfo getMenuInfo(){
		return null;
	}
	
	
	
	



		
	public int getMenusSize(String menuName){
		
		Filter menuNameFilter =
		  new FilterPredicate("menuName",
		                      FilterOperator.EQUAL,
		                      menuName);
		Query q = new Query("Menus").setFilter(menuNameFilter);
		PreparedQuery pq = datastoreService.prepare(q);
		return pq.countEntities();
	}
		
	public void menuAdd(String menuName, String name, String link, int no) {
		
		Entity Menus = new Entity("Menus");
		Menus.setProperty("menuName", menuName); 	
		Menus.setProperty("name", name); 
		Menus.setProperty("link", link);	
		Menus.setProperty("No",no);
		datastoreService.put(Menus);
	}
	
}
