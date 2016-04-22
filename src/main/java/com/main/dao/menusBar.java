package com.main.dao;

import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.Entity;

public class menusBar {

	List<Menu> main;
	List<Menu> teamProjectIndividualMenu;
	List<Menu> introduce;
	List<Menu> networks;
	List<Menu> servers;
	List<Menu> dbTabs;
	List<Menu> webServerTabs;

	public List<Menu> getMain() {
		return main;
	}

	public void setMain(List<Menu> main) {
		this.main = main;
	}

	public List<Menu> getTeamProjectIndividualMenu() {
		return teamProjectIndividualMenu;
	}

	public void setTeamProjectIndividualMenu(
			List<Menu> teamProjectIndividualMenu) {
		this.teamProjectIndividualMenu = teamProjectIndividualMenu;
	}

	public List<Menu> getIntroduce() {
		return introduce;
	}

	public void setIntroduce(List<Menu> introduce) {
		this.introduce = introduce;
	}

	public List<Menu> getNetworks() {
		return networks;
	}

	public void setNetworks(List<Menu> networks) {
		this.networks = networks;
	}

	public List<Menu> getServers() {
		return servers;
	}

	public void setServers(List<Menu> servers) {
		this.servers = servers;
	}

	public List<Menu> getDbTabs() {
		return dbTabs;
	}

	public void setDbTabs(List<Menu> dbTabs) {
		this.dbTabs = dbTabs;
	}

	public List<Menu> getWebServerTabs() {
		return webServerTabs;
	}

	public void setWebServerTabs(List<Menu> webServerTabs) {
		this.webServerTabs = webServerTabs;
	}

	@Override
	public String toString() {
		return "List<Menu>sBar [main=" + main
				+ ", teamProjectIndividualList<Menu>="
				+ teamProjectIndividualMenu + ", introduce=" + introduce
				+ ", networks=" + networks + ", servers=" + servers
				+ ", dbTabs=" + dbTabs + ", webServerTabs=" + webServerTabs
				+ "]";
	}
	
	
	
	public menusBar(List<Menu> main, List<Menu> teamProjectIndividualMenu,
			List<Menu> introduce, List<Menu> networks, List<Menu> servers,
			List<Menu> dbTabs, List<Menu> webServerTabs) {
//		super();
		menusInit();
		this.main = main;
		this.teamProjectIndividualMenu = teamProjectIndividualMenu;
		this.introduce = introduce;
		this.networks = networks;
		this.servers = servers;
		this.dbTabs = dbTabs;
		this.webServerTabs = webServerTabs;
	}

	public menusBar(List<Entity> menus) {
		menusInit();
		
		for (Entity menu : menus) {
			Menu me = new Menu(menu);
			
			
			switch (me.getMenuName()) {
			case "main":
				main.add(me);
				break;
			case "teamProjectIndividualMenu":
				teamProjectIndividualMenu.add(me);
				break;
			case "introduce":
				introduce.add(me);
				break;
			case "networks":
				networks.add(me);
				break;
			case "servers":
				servers.add(me);
				break;
			case "dbTabs":
				dbTabs.add(me);
				break;
			case "webServerTabs":
				webServerTabs.add(me);
				break;
			}

		}
		
	}

	public void menusInit() {
		main = 							new ArrayList<Menu>();
		teamProjectIndividualMenu = 	new ArrayList<Menu>();
		introduce = 					new ArrayList<Menu>();
		networks = 						new ArrayList<Menu>();
		servers = 						new ArrayList<Menu>();
		dbTabs = 						new ArrayList<Menu>();
		webServerTabs = 				new ArrayList<Menu>();
	}

}
