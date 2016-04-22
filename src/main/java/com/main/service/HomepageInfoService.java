package com.main.service;

import com.main.dao.HomepageInfo;
import com.main.dao.menusBar;

public interface HomepageInfoService {
	public abstract HomepageInfo getInfo();
	public abstract menusBar getMenusBar();
//	public abstract User checkUserID(String username);
}
