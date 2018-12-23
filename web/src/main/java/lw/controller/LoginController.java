package lw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller

public class LoginController {

    @GetMapping("/login")
    public String login(String username, String password, Model model){
        return "login.html";
    }

    @PostMapping("/login")
    public String doLogin(String username, String password, Model model){
        return "login.html";
    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest request, Model model){
        return "login.html";
    }
}
