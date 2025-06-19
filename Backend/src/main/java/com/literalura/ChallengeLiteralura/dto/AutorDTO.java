package com.literalura.ChallengeLiteralura.dto;


import java.time.LocalDate;

public record AutorDTO(
        String nombre,
        Integer fechaNacimiento,
        Integer fechaFallecimiento
) {}
