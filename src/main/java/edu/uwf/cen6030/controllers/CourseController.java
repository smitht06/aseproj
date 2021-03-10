package edu.uwf.cen6030.controllers;

import edu.uwf.cen6030.service.CourseService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CourseController {
    private final CourseService courseService;


    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @RequestMapping({"/courses"})
    public String listCourses(Model model){

        model.addAttribute("courses", courseService.findAll());

        return "courses/index";
    }
}
