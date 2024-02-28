package com.commerce.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commerce.backend.converter.order.OrderResponseConverter;
import com.commerce.backend.dao.OrderRepository;
import com.commerce.backend.dao.SellerRepository;
import com.commerce.backend.model.entity.Seller;

@Service
public class SellerServiceImpl implements SellerService{

    private final SellerRepository sellerRepository;
    
    @Autowired
    public SellerServiceImpl(SellerRepository sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    @Override
    public List<Seller> getAllSellers() {
        List<Seller> sellers = sellerRepository.findAll();
        return sellers;
    }
    
}
