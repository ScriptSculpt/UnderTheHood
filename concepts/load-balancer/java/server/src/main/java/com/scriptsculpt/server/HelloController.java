package com.scriptsculpt.server;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Value("${SERVER_ID:server1}")
    private String serverId;



    @GetMapping("/")
    public String home() {
        return "Hello from " + serverId + "!";
    }

    @GetMapping("/admin")
    public String admin() {
        return "Hello from " + serverId + " admin!";
    }


}
