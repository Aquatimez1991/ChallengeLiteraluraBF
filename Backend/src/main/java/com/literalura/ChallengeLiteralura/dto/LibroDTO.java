package com.literalura.ChallengeLiteralura.dto;

import com.literalura.ChallengeLiteralura.model.Autor;
import com.literalura.ChallengeLiteralura.model.Libro;

import java.util.List;

public record LibroDTO(
        String titulo,
        List<String> idiomas,
        Integer descargas,
        List<String> autores
) {
    public static LibroDTO fromEntity(Libro libro) {
        List<String> nombresAutores = libro.getAutores()
                .stream()
                .map(Autor::getNombre)
                .toList();

        return new LibroDTO(
                libro.getTitulo(),
                libro.getIdiomas(),
                (Integer) libro.getNumeroDeDescargas().intValue(),
                nombresAutores
        );
    }
}
