package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.PromptAsset;
import com.example.demo.repositories.PromptRepository;

@RestController
@RequestMapping("/api/assets")
@CrossOrigin(origins = "http://localhost:5173")
public class AssetController {

    @Autowired
    private PromptRepository repository;

    @GetMapping
    public List<PromptAsset> getAllAssets() {
        return repository.findAll();
    }

    @PostMapping
    public PromptAsset createAsset(@RequestBody PromptAsset asset) {
        return repository.save(asset);
    }

    @DeleteMapping("/{id}")
    public void deleteAsset(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    public PromptAsset updateAsset(@PathVariable Long id, @RequestBody PromptAsset newAssetData) {
        PromptAsset existingAsset = repository.findById(id).orElseThrow();
        existingAsset.setTitle(newAssetData.getTitle());
        existingAsset.setLighting(newAssetData.getLighting());
        existingAsset.setTexture(newAssetData.getTexture());
        existingAsset.setPromptText(newAssetData.getPromptText());
        existingAsset.setImageUrl(newAssetData.getImageUrl());
        return repository.save(existingAsset);
    }
}