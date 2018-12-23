package lw.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class ForgetPassController {

    @RequestMapping("/forget")
    public String forget(){
        return "forgetPassword.html";
    }
}
