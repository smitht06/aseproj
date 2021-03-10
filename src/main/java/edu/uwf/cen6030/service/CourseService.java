package edu.uwf.cen6030.service;

public interface CourseService extends CrudService<Course, Long> {

    Course findByName(String name);

    Course findByCourseNumber(String courseNumber);
}
