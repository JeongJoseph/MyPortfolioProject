package com.user.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.board.dao.ListNum;
import com.user.dao.User;
import com.user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService{
	
	private static final Logger logger = LoggerFactory.getLogger(UserService.class);

	@Resource 
    private UserDAO userdao;
	
//	@Override
//	public int signIn(User user) {
//    	return userdao.signIn(user);
//    }
	@Override
	public int signUp(User user) {
    	return userdao.signUp(user);
    }
	@Override
	public User checkUserID(User user) {
		return userdao.checkUserID(user);
	}
	@Override
	public void signOut(User user) {
		userdao.signOut(user);
	}
	@Override
	public List<User> checkUserList(ListNum lNum) {
		return userdao.checkUserList(lNum);
	} 
	
	/*@Override
	public List<User> list(){
		  return null;
	  }*/
}
