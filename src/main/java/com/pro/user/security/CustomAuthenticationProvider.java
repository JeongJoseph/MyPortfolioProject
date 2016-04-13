/*package com.pro.user.security;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.pro.user.service.UserSecurityService;
import com.pro.user.service.UserService;


@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    private static final Logger logger = LoggerFactory.getLogger(CustomAuthenticationProvider.class);

    @Autowired
    UserSecurityService userSecurityService;

  
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = (String) authentication.getCredentials();
        
        
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        User user;
        Collection<? extends GrantedAuthority> authorities;

        try {
            user = userSecurityService.loadUserByUsername(username);
            String hashedPassword = passwordEncoder.encode(password);
            
//            System.out.println("1 username : " + username + " / password : " + password + " / hash password : " + hashedPassword);
//            System.out.println("2 username : " + user.getUsername() + " / password : " + user.getPassword());
            
//            if (!hashedPassword.equals(user.getPassword())) throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
            if (!password.equals(user.getPassword())) throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
            authorities = user.getAuthorities();
        } catch(UsernameNotFoundException e) {
            logger.info(e.toString());
            throw new UsernameNotFoundException(e.getMessage());
        } catch(BadCredentialsException e) {
        	System.out.println(e.toString());
            logger.info(e.toString());
            throw new BadCredentialsException(e.getMessage());
        } catch(Exception e) {
            logger.info(e.toString());
            throw new RuntimeException(e.getMessage());
        }
        
        return new UsernamePasswordAuthenticationToken(user, password, authorities);
    }

    @Override
    public boolean supports(Class<?> arg0) {
        return true;
    }
}*/