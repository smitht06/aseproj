package edu.uwf.cen6030.service;

import edu.uwf.cen6030.CourseMaster3KApp;
import edu.uwf.cen6030.domain.Course;
import edu.uwf.cen6030.repository.CourseRepository;
import edu.uwf.cen6030.web.rest.CourseResourceIT;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = CourseMaster3KApp.class)
@Transactional
public class CourseServiceIT {

    private Course course;

    @Autowired
    private EntityManager em;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private CourseService courseService;

    @BeforeEach
    public void init() {
        course = CourseResourceIT.createEntity(em);
    }

    @Test
    public void testThatSearchSucceeds() {
        courseRepository.saveAndFlush(course);
        List<Course> foundCoursesUpperCase = courseService.search("AA");
        assertThat(foundCoursesUpperCase).isNotEmpty();

        List<Course> foundCoursesLowerCase = courseService.search("aa");
        assertThat(foundCoursesLowerCase).isNotEmpty();

        List<Course> notFoundCourses = courseService.search("Does not exist");
        assertThat(notFoundCourses).isEmpty();
    }
}
