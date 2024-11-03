package tech.octopusdragon.creaturecreator.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import tech.octopusdragon.creaturecreator.model.Creature;
import tech.octopusdragon.creaturecreator.repository.CreatureRepository;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/creature-creator")
public class CreatureController {

    private final CreatureRepository creatureRepository;

    private CreatureController(CreatureRepository creatureRepository) {
        this.creatureRepository = creatureRepository;
    }

    @PostMapping("/creature")
    public ResponseEntity<Void> create(@RequestBody Creature creature, UriComponentsBuilder ucb) {
        Creature creatureWithoutId = new Creature(null, creature.name(), creature.bodyShape(), creature.bodyColor());
        Creature savedCreature = creatureRepository.save(creatureWithoutId);
        URI creatureLocation = ucb
                .path("creature-creator/creature/{id}")
                .buildAndExpand(savedCreature.id())
                .toUri();
        return ResponseEntity.created(creatureLocation).build();
    }

    @GetMapping("/creature")
    public ResponseEntity<List<Creature>> retrieve(Pageable pageable) {
        Page<Creature> page = creatureRepository.findAll(
                PageRequest.of(
                        pageable.getPageNumber(),
                        pageable.getPageSize(),
                        pageable.getSortOr(Sort.by(Sort.Direction.DESC, "id"))
                )
        );
        return ResponseEntity.ok(page.getContent());
    }

    @GetMapping("/creature/{id}")
    public ResponseEntity<Creature> retrieve(@PathVariable Long id) {
        Optional<Creature> creature = creatureRepository.findById(id);
        return creature.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/creature/{id}")
    public ResponseEntity<Creature> update(@PathVariable Long id, @RequestBody Creature creatureUpdate) {
        Optional<Creature> creature = creatureRepository.findById(id);
        if (creature.isPresent()) {
            Creature updatedCreature = new Creature(creature.get().id(), creatureUpdate.name(), creatureUpdate.bodyShape(), creatureUpdate.bodyColor());
            creatureRepository.save(updatedCreature);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/creature/{id}")
    public ResponseEntity<Creature> delete(@PathVariable Long id) {
        if (creatureRepository.existsById(id)) {
            creatureRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
