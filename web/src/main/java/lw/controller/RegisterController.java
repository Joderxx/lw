package lw.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

public class RegisterController {

    @RequestMapping("/request")
    public String register(HttpServletRequest request, Model model){
        return "register.html";
    }
}
