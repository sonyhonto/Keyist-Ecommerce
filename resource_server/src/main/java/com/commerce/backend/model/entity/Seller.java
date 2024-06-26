package com.commerce.backend.model.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "seller")
@Getter
@Setter
@NoArgsConstructor
@ToString(exclude = "productList")
public class Seller {
    
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Product> productList;

    @Column(name = "name")
    private String name;

    @Column(name = "photo_url")
    private String photoUrl;
    
    @Column(name = "url")
    private String url;
    
    @Column(name = "social_url")
    private String socialUrl;
}
