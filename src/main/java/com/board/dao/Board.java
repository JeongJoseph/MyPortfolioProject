package com.board.dao;

import com.google.appengine.api.datastore.Entity;

/**
 * @author itwill
 *
 */
public class Board {
	int id;
	String passwd;
	String userId;
	String title;
	String detail;
	String writeDate;
	String updateDate;
	boolean isSecurity;
	boolean isDelete;
	
	public Board() {
		super();
	}

	public Board(int id, String passwd, String userId, String title, String detail, String writeDate,
			String updateDate, boolean isSecurity, boolean isDelete) {
		super();
		this.id = id;
		this.passwd = passwd;
		this.userId = userId;
		this.title = title;
		this.detail = detail;
		this.writeDate = writeDate;
		this.updateDate = updateDate;
		this.isSecurity = isSecurity;
		this.isDelete = isDelete;
	}

	public Board( Entity en ) {
		super();
		this.id = Integer.parseInt(String.valueOf(en.getProperty("id")));
		this.passwd = (String) en.getProperty("passwd");
		this.userId = (String) en.getProperty("userId");
		this.title = (String) en.getProperty("title");
		this.detail = (String) en.getProperty("detail");
		this.writeDate = (String) en.getProperty("writeDate");
		this.updateDate = (String) en.getProperty("updateDate");
		this.isSecurity = (boolean) en.getProperty("isSecurity");
		this.isDelete = (boolean) en.getProperty("isDelete");
	}
	
	public Entity convertEntity() {
		Entity en = new Entity ("Board");
		en.setProperty("id",this.id);
		en.setProperty("passwd",this.passwd);
		en.setProperty("userId",this.userId);
		en.setProperty("title",this.title);
		en.setProperty("detail",this.detail);
		en.setProperty("writeDate",this.writeDate);
		en.setProperty("updateDate",this.updateDate);
		en.setProperty("isSecurity",this.isSecurity);
		en.setProperty("isDelete",this.isDelete);
		return en;
	}
	
	@Override
	public String toString() {
		return "Board [id=" + id + ", passwd=" + passwd + ", userId=" + userId + ", title=" + title + ", detail="
				+ detail + ", writeDate=" + writeDate + ", updateDate=" + updateDate + ", isSecurity=" + isSecurity
				+ ", isDelete=" + isDelete + "]";
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	public boolean isSecurity() {
		return isSecurity;
	}
	public void setSecurity(boolean isSecurity) {
		this.isSecurity = isSecurity;
	}
	public boolean isDelete() {
		return isDelete;
	}
	public void setDelete(boolean isDelete) {
		this.isDelete = isDelete;
	}
	
	
}
