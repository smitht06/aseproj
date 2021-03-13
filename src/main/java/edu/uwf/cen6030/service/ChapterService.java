package edu.uwf.cen6030.service;

import edu.uwf.cen6030.domain.Chapter;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Chapter}.
 */
public interface ChapterService {

    /**
     * Save a chapter.
     *
     * @param chapter the entity to save.
     * @return the persisted entity.
     */
    Chapter save(Chapter chapter);

    /**
     * Get all the chapters.
     *
     * @return the list of entities.
     */
    List<Chapter> findAll();


    /**
     * Get the "id" chapter.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Chapter> findOne(Long id);

    /**
     * Delete the "id" chapter.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
