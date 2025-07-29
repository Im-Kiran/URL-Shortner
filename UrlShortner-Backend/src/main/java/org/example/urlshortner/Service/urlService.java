package org.example.urlshortner.Service;

import org.example.urlshortner.Model.url;
import org.example.urlshortner.Repository.urlRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class urlService {
    @Autowired
    urlRepo urlRepo;
    public url add(url url) {
        return urlRepo.save(url);
    }
    public String redirect(String shortUrl) {
        url row=urlRepo.findByShortUrl(shortUrl);
        if(row==null) {
            throw new RuntimeException("Short URL not found");
        }
        else{
            return row.getLongUrl();
        }
    }

    public List<url> getAllMinLinks() {
        return urlRepo.findAll();
    }
    public url getLinkById(int id){
        return urlRepo.findById(id).get();
    }


    public String update(url url,int id) {
        url u=urlRepo.findById(id).get();
        u.setLongUrl(url.getLongUrl());
//        cust.setId(customer.getId());
        u.setShortUrl(url.getShortUrl());
        urlRepo.save(u);
        return "Url updated";
    }
    //deleting records
    public String delete(int id) {
        urlRepo.deleteById(id);
        return "url deleted";
    }
}
