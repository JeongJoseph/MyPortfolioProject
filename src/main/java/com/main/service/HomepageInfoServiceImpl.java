package com.main.service;

import javax.annotation.Resource;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.main.dao.HomepageInfo;
import com.main.dao.HomepageInfoDAO;
import com.main.dao.menusBar;

@Service
public class HomepageInfoServiceImpl implements HomepageInfoService{
//	private static final Logger logger = LoggerFactory.getLogger(HomepageInfoService.class);

	@Resource 
    private HomepageInfoDAO homepageinfo;
	
	@Override
	public  HomepageInfo getInfo(){
		 return homepageinfo.getInfo();
		
	}
	
	@Override
	public menusBar getMenusBar() {
		return homepageinfo.getMenusBar();
	}
}
