package com.main.dao;

//import java.util.Date;

import com.google.appengine.api.datastore.Entity;


public class Menu {
	String name;
	String link;
	int No;
	String menuName;
	
	public Menu(Entity menu) {
		super();
		this.name = (String) menu.getProperty("name");
		this.link = (String) menu.getProperty("link");
		this.No = Integer.parseInt(String.valueOf(menu.getProperty("No")));
		this.menuName = (String) menu.getProperty("menuName");
	}
	
	public Menu(String name, String link, int no, String menuName) {
		super();
		this.name = name;
		this.link = link;
		this.No = no;
		this.menuName = menuName;
	}
	
	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public Menu(String name, String link, String menuName) {
		super();
		this.name = name;
		this.link = link;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public int getNo() {
		return No;
	}
	public void setNo(int no) {
		No = no;
	}

	@Override
	public String toString() {
		return "Menu [name=" + name + ", link=" + link + ", No=" + No
				+ ", menuName=" + menuName + "]";
	}
	
	
	
	
	
}
