package com.commerce.backend.model.response.product;

import com.commerce.backend.model.dto.ProductVariantDTO;
import com.commerce.backend.model.entity.Seller;

import lombok.Data;


@Data
public class ProductVariantResponse {
    private Long id;
    private String name;
    private String url;
    private String sellerName;
    private String sellerUrl;
    private ProductVariantDTO productVariant;
}
