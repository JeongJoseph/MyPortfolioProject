package com.user.service;

import java.util.List;

import com.board.dao.ListNum;
import com.user.dao.User;

public interface UserService {
//	public abstract User checkUserID(String username);
//	public abstract int signIn(User user);
	public abstract int signUp(User user);
	public abstract User checkUserID(User user);
	public abstract void signOut(User user);
	public abstract List<User> checkUserList(ListNum lNum);
}
