package com.literalura.ChallengeLiteralura.controller;



import com.literalura.ChallengeLiteralura.dto.AutorDTO;
import com.literalura.ChallengeLiteralura.model.Autor;
import com.literalura.ChallengeLiteralura.repository.AutorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/autores")
@CrossOrigin(origins = "*") // CORS global si no tienes CorsConfig
public class AutorController {

    private final AutorRepository autorRepository;

    public AutorController(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    @GetMapping
    public List<AutorDTO> listarAutores() {
        return autorRepository.findAll().stream()
                .map(a -> new AutorDTO(a.getNombre(), a.getFechaDeNacimiento(), a.getFechaDeMuerte()))
                .collect(Collectors.toList());
    }

    @PostMapping
    public Autor guardarAutor(@RequestBody AutorDTO dto) {
        Autor autor = new Autor();
        autor.setNombre(dto.nombre());
        autor.setFechaDeNacimiento(dto.fechaNacimiento());
        autor.setFechaDeMuerte(dto.fechaFallecimiento());
        return autorRepository.save(autor);
    }

    @GetMapping("/{nombre}")
    public AutorDTO buscarPorNombre(@PathVariable String nombre) {
        return autorRepository.findByNombreContainsIgnoreCase(nombre)
                .map(a -> new AutorDTO(a.getNombre(), a.getFechaDeNacimiento(), a.getFechaDeMuerte()))
                .orElse(null);
    }
}
