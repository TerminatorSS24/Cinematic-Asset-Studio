package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "prompts")
public class PromptAsset {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String lighting;
    private String texture;
    
    @Column(columnDefinition = "TEXT")
    private String promptText;
    
    private String imageUrl;

    public PromptAsset() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getLighting() { return lighting; }
    public void setLighting(String lighting) { this.lighting = lighting; }
    public String getTexture() { return texture; }
    public void setTexture(String texture) { this.texture = texture; }
    public String getPromptText() { return promptText; }
    public void setPromptText(String promptText) { this.promptText = promptText; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}