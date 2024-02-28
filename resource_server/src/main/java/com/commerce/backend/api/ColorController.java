package com.commerce.backend.api;

import com.commerce.backend.model.dto.SellerDTO;
import com.commerce.backend.model.response.color.ProductColorResponse;
import com.commerce.backend.service.ProductColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ColorController extends PublicApiController {

    private final ProductColorService productColorService;

    @Autowired
    public ColorController(ProductColorService productColorService) {
        this.productColorService = productColorService;
    }

    @GetMapping(value = "/colors")
    public ResponseEntity<List<ProductColorResponse>> getAllColors() {
        List<ProductColorResponse> productColors = productColorService.findAll();
        return new ResponseEntity<>(productColors, HttpStatus.OK);
    }

    @GetMapping(value = "/sellers")
    public ResponseEntity<List<SellerDTO>> getAllSellers() {

        return new ResponseEntity<>(List.of(
                // new SellerDTO(1, "name-1", "photo-url-1", "url-1", "social-url"),
                // new SellerDTO(2, "name-2", "photo-url-1", "url-1", "social-url"),
                // new SellerDTO(3, "name-3", "photo-url-1", "url-1", "social-url")

                new SellerDTO(0L, "Acme Fresh Start", "https://api.slingacademy.com/public/sample-photos/8.jpeg",
                        "link-to-url-0", "link-to-social-0"),
                new SellerDTO(1L, "Santa Monica Transitional",
                        "https://api.slingacademy.com/public/sample-photos/9.jpeg", "link-to-url-1",
                        "link-to-social-1"),
                new SellerDTO(2L, "Juneau Warm Support", "https://api.slingacademy.com/public/sample-photos/4.jpeg",
                        "link-to-url-2", "link-to-social-2"),
                new SellerDTO(3L, "Homesteady", "https://api.slingacademy.com/public/sample-photos/5.jpeg",
                        "link-to-url-3", "link-to-social-3"),
                new SellerDTO(4L, "Happy Homes Group", "https://api.slingacademy.com/public/sample-photos/7.jpeg",
                        "link-to-url-4", "link-to-social-4")

        ), HttpStatus.OK);
    }
}
