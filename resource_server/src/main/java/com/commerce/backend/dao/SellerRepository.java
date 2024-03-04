package com.commerce.backend.dao;

import com.commerce.backend.model.entity.Seller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long>{
}
