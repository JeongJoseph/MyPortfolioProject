package com.user.dao;

import com.google.appengine.api.datastore.Entity;

public class User {
	String id;
	String passwd;
	String name;
	String email;
	String companyId;
	public User(String id, String passwd, String name, String email, String companyId) {
		super();
		this.id = id;
		this.passwd = passwd;
		this.name = name;
		this.email = email;
		this.companyId = companyId;
	}
	
	public User(Entity en) {
		super();
		this.id = (String) en.getProperty("id");
		this.passwd = (String) en.getProperty("passwd");
		this.name = (String) en.getProperty("name");
		this.email = (String) en.getProperty("email");
		this.companyId = (String) en.getProperty("companyId");		
	}
	
	public Entity convertEntity() {
		Entity en = new Entity ("User");
		en.setProperty("id",this.id);
		en.setProperty("passwd",this.passwd);
		en.setProperty("name",this.name);
		en.setProperty("email",this.email);
		en.setProperty("companyId",this.companyId);
		return en;
		
	}
	public User() {
		super();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", passwd=" + passwd + ", name=" + name + ", email=" + email + ", companyId="
				+ companyId + "]";
	}
	
	
	
}
