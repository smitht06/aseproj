package edu.uwf.cen6030.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Chapter.
 */
@Entity
@Table(name = "chapter")
public class Chapter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "number", nullable = false, unique = true)
    private Integer number;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "description", nullable = false)
    private String description;

    @OneToMany(mappedBy = "chapter")
    private Set<Material> materials = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = "chapters", allowSetters = true)
    private Course course;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public Chapter number(Integer number) {
        this.number = number;
        return this;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public Chapter name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public Chapter description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Material> getMaterials() {
        return materials;
    }

    public Chapter materials(Set<Material> materials) {
        this.materials = materials;
        return this;
    }

    public Chapter addMaterial(Material material) {
        this.materials.add(material);
        material.setChapter(this);
        return this;
    }

    public Chapter removeMaterial(Material material) {
        this.materials.remove(material);
        material.setChapter(null);
        return this;
    }

    public void setMaterials(Set<Material> materials) {
        this.materials = materials;
    }

    public Course getCourse() {
        return course;
    }

    public Chapter course(Course course) {
        this.course = course;
        return this;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Chapter)) {
            return false;
        }
        return id != null && id.equals(((Chapter) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Chapter{" +
            "id=" + getId() +
            ", number=" + getNumber() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }


}
