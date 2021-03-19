package edu.uwf.cen6030.repository;

import edu.uwf.cen6030.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
    Optional<Authority> findById(String user);
}
