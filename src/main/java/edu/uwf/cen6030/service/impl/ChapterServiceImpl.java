package edu.uwf.cen6030.service.impl;

import edu.uwf.cen6030.service.ChapterService;
import edu.uwf.cen6030.domain.Chapter;
import edu.uwf.cen6030.repository.ChapterRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Chapter}.
 */
@Service
@Transactional
public class ChapterServiceImpl implements ChapterService {

    private final Logger log = LoggerFactory.getLogger(ChapterServiceImpl.class);

    private final ChapterRepository chapterRepository;

    public ChapterServiceImpl(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    @Override
    public Chapter save(Chapter chapter) {
        log.debug("Request to save Chapter : {}", chapter);
        return chapterRepository.save(chapter);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Chapter> findAll() {
        log.debug("Request to get all Chapters");
        return chapterRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Chapter> findOne(Long id) {
        log.debug("Request to get Chapter : {}", id);
        return chapterRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Chapter : {}", id);
        chapterRepository.deleteById(id);
    }
}
