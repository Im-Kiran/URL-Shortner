package org.example.urlshortner.Repository;

import org.example.urlshortner.Model.url;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface urlRepo extends JpaRepository<url, Integer> {
    url findByShortUrl(String shortUrl);
}
