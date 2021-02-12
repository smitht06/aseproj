package edu.uwf.cen6030;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("edu.uwf.cen6030");

        noClasses()
            .that()
                .resideInAnyPackage("edu.uwf.cen6030.service..")
            .or()
                .resideInAnyPackage("edu.uwf.cen6030.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..edu.uwf.cen6030.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
