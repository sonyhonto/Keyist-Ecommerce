package com.commerce.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class SellerDTO {
    private Long id;
    private String name;
    private String photoUrl;
    private String url;
    private String socialUrl;
    
}
