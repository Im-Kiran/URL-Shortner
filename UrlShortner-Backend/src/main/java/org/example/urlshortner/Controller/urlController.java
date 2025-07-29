package org.example.urlshortner.Controller;

import jakarta.servlet.http.HttpServletResponse;
import org.example.urlshortner.Model.url;
import org.example.urlshortner.Service.urlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@CrossOrigin(origins ="http://localhost:5173")
@RestController
@RequestMapping("/")
public class urlController {
    @Autowired
    urlService urlService;
    @PostMapping("/generate")
    public url add(@RequestBody url url) {
        return urlService.add(url);
    }
    @GetMapping("/{shortUrl}")
    public void redirect(@PathVariable String shortUrl, HttpServletResponse response) throws IOException {
        String longurl = urlService.redirect(shortUrl);
        response.sendRedirect(longurl);
    }
    @GetMapping("/minLinks")
    public List<url> getAllMinLinks() {
        return urlService.getAllMinLinks();
    }

    @GetMapping("/getById/{id}")
    public url getLinkById(@PathVariable int id) {
        return urlService.getLinkById(id);
    }

    @PutMapping("/edit/{id}")
    public String update(@RequestBody url url,@PathVariable int id) {
        return urlService.update(url,id);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return urlService.delete(id);
    }
}
