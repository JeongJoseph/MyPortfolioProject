package com.user.dao;

import java.util.List;

import com.board.dao.ListNum;

public interface UserDAO {
//	public abstract User checkUserId(String username); 
//	public abstract int signIn(User user);
	public abstract int signUp(User user);
	public abstract void signOut(User user);
	public abstract User checkUserID(User user);
    public abstract List<User> checkUserList(ListNum lNum); 
	
	
}
