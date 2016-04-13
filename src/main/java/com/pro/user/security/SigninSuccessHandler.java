/*package com.pro.user.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

public class SigninSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
	 private static final Logger logger = LoggerFactory.getLogger(SigninSuccessHandler.class);
	 
	 @Override
     public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication auth) throws IOException, ServletException {
		 System.out.println(333334234);
          String accept = request.getHeader("accept");

          if( StringUtils.indexOf(accept, "html") > -1 ) {

        	  System.out.println(0);
          } else if( StringUtils.indexOf(accept, "xml") > -1 ) {
        	  System.out.println(1);

          } else if( StringUtils.indexOf(accept, "json") > -1 ) {
               System.out.println(2);

          }
     }

}
*/