package com.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.board.dao.ListNum;
import com.board.service.BoardService;
import com.user.dao.User;
import com.user.service.UserService;

@Controller
public class UserController {
	
	int returnValue = 0;
	@Autowired
	UserService userService;
	
	@Autowired
	BoardService boardService;
//	@RequestMapping( value="/userSignIn", method = RequestMethod.POST, produces = "application/json")
//	public @ResponseBody int checkUser(@RequestBody User user) {
//		return userService.signUp(user);
//	}
//	
	@RequestMapping( value="/checkUserID", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody int userCheckId(@RequestBody User user) {
//		if (userService.checkUserID(user)==null){
//			return 0;
//		} else {
		System.out.println(3333);
			return 0;
//		}
	}
	

//	@RequestMapping( value="/userSignUp", method = RequestMethod.POST, produces = "application/json")
//	public @ResponseBody int userSignUp(@RequestBody User user) {
//		if (userService.checkUserID(user)==null){
//			return 0;
//		} else {
//			return 1;
//		}
//	}
	
	@RequestMapping( value="/userSignIn", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody int signIn(@RequestBody User user) {
		
		User resultUser = userService.checkUserID(user);
		if (resultUser != null) {
			if (user.getId().equals(resultUser.getId()) && 
					user.getPasswd().equals(resultUser.getPasswd())){
				returnValue = 1;
			} else { returnValue = 2;}
		} else {	returnValue = 0; }
		return returnValue;
		
		
	}
	
	@RequestMapping( value="/userSignUp", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody int signUp(@RequestBody User user) {
		if (userService.checkUserID(user) == null) {
			userService.signUp(user);	return 1;
		} else { return 0; }
	}
	
	@RequestMapping( value="/getUserInfo", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody User getUserInfo(@RequestBody User user) {
		return userService.checkUserID(user);
	}
	
	
	@RequestMapping( value="/userSignOut", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody int signOut(@RequestBody User user) {
		if (userService.checkUserID(user) != null) {
			userService.signOut(user); return 1;
		} else {	return 0;	}
	}
	
	
	
	@RequestMapping( value="/checkUserList", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody List<User> checkUserList(@RequestBody ListNum lNum) {
		return userService.checkUserList(lNum);
	}
	
//	@RequestMapping( value="/userCheckIdPw", method = RequestMethod.POST, produces = "application/json")
//	public @ResponseBody User userCheckIdPw(@RequestBody User user) {
//		return userService.userCheckIdPw(user);
//	}
}
