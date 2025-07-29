package org.example.urlshortner.Model;

import jakarta.persistence.*;

@Table
@Entity
public class url {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String longUrl;
    private String shortUrl;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLongUrl() {
        return longUrl;
    }

    public void setLongUrl(String longUrl) {
        this.longUrl = longUrl;
    }
    public String getShortUrl() {
        return shortUrl;
    }
    public void setShortUrl(String shortUrl) {
        this.shortUrl = shortUrl;
    }

}
