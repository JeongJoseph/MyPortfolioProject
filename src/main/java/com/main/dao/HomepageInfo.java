package com.main.dao;

import com.google.appengine.api.datastore.Entity;

public class HomepageInfo {
	String id;
	String companyID;
	String coRegNum;
	String branch;
	String address;
	String dutyHours;
	String representative;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCompanyID() {
		return companyID;
	}
	public void setCompanyID(String companyID) {
		this.companyID = companyID;
	}
	public String getCoRegNum() {
		return coRegNum;
	}
	public void setCoRegNum(String coRegNum) {
		this.coRegNum = coRegNum;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDutyHours() {
		return dutyHours;
	}
	public void setDutyHours(String dutyHours) {
		this.dutyHours = dutyHours;
	}
	public String getRepresentative() {
		return representative;
	}
	public void setRepresentative(String representative) {
		this.representative = representative;
	}
	@Override
	public String toString() {
		return "HomepageInfo [id=" + id + ", companyID=" + companyID + ", coRegNum=" + coRegNum + ", branch=" + branch
				+ ", address=" + address + ", dutyHours=" + dutyHours + ", representative=" + representative + "]";
	}
	public HomepageInfo(String id, String companyID, String coRegNum, String branch, String address, String dutyHours,
			String representative) {
		super();
		this.id = id;
		this.companyID = companyID;
		this.coRegNum = coRegNum;
		this.branch = branch;
		this.address = address;
		this.dutyHours = dutyHours;
		this.representative = representative;
	}
	
	public HomepageInfo(Entity en) {
		
		super();
		this.id = (String) en.getProperty("address");
		this.companyID = (String) en.getProperty("companyID") ;
		this.coRegNum = (String) en.getProperty("coRegNum")  ;
		this.branch = (String) en.getProperty("branch") ;
		this.address = (String) en.getProperty("address") ;
		this.dutyHours = (String) en.getProperty("dutyHours") ;
		this.representative = (String) en.getProperty("representative") ;
	}
	
	
	public HomepageInfo() {
		super();
	}

}
