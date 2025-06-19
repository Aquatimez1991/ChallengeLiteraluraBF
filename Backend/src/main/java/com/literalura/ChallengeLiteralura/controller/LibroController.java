package com.literalura.ChallengeLiteralura.controller;

import com.literalura.ChallengeLiteralura.dto.LibroDTO;
import com.literalura.ChallengeLiteralura.model.Libro;
import com.literalura.ChallengeLiteralura.repository.LibroRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:4200")
public class LibroController {

    private final LibroRepository libroRepository;

    public LibroController(LibroRepository libroRepository) {
        this.libroRepository = libroRepository;
    }

    @GetMapping
    public List<Libro> listarLibros() {
        return libroRepository.findAll();
    }
    @GetMapping(value = "/dto", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<LibroDTO>> listarLibrosDTO() {
        List<LibroDTO> libros = libroRepository.findAll().stream()
                .map(LibroDTO::fromEntity)
                .toList();

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(libros);
    }
}

