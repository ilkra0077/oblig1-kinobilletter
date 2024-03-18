package com.example.oblig1kinobilletter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BilletController {
    public final List<Billett> billettRegister = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagre(Billett enBillett){
        billettRegister.add(enBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return billettRegister;}

    @GetMapping("/slettAlle")
    public void slettAlle(){
        billettRegister.clear();
    }
}

