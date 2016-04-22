package com.introduce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.main.dao.HomepageInfo;
import com.main.dao.menusBar;
import com.main.service.HomepageInfoService;

@Controller
public class IntroduceController {
	// UserService userService;
	@Autowired
	HomepageInfoService homeService;
	
//	@RequestMapping(value = "/index")
	@RequestMapping("/")
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/concept")
	public String mainPage() {
		return "introduce/concept";
	}

	@RequestMapping( value="/HomepageInfo", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody HomepageInfo checkUser() {
		return homeService.getInfo();
	}
	
	@RequestMapping( value="/getMenusBar", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody menusBar getMenusBar() {
		return homeService.getMenusBar();
	}
	
	
	
	@RequestMapping(value = "/teamIntroduce")
	public String teamIntroduce() {
		return "introduce/teamIntroduce";
	}

	@RequestMapping(value = "/teamProjectOverview")
	public String teamProjectOverview() {
		return "introduce/teamProjectOverview";
	}

	@RequestMapping(value = "/tp_network")
	public String tp_network() {
		return "introduce/tp_network";
	}

	@RequestMapping(value = "/tp_server")
	public String tp_server() {
		return "introduce/tp_server";
	}

	@RequestMapping(value = "/tp_database")
	public String tp_database() {
		return "introduce/tp_database";
	}
	
	@RequestMapping(value = "/tp_web")
	public String tp_web() {
		return "introduce/tp_web";
	}
	
	@RequestMapping(value = "/main_introduce")
	public String main_introduce() {
		return "introduce/mainIntroduce";
	}
	
	@RequestMapping(value = "/site_introduce")
	public String site_introduce() {
		return "introduce/siteIntroduce";
	}
	
	@RequestMapping(value = "/devloper_introduce")
	public String devloper_introduce() {
		return "introduce/devloperIntroduce";
	}
	
	
	
	@RequestMapping(value = "/signIn")
	public String signIn() {
		return "sign/signin";
	}
	@RequestMapping(value = "/signUp")
	public String signUp() {
		return "sign/signUp";
	}
	@RequestMapping(value = "/signOut")
	public String signOut() {
		return "sign/signout";
	}
	@RequestMapping(value = "/welcome")
	public String welcome() {
		return "sign/welcome";
	}
}
