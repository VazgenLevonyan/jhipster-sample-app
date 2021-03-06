package org.mycompany.myapp;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("org.mycompany.myapp");

        noClasses()
            .that()
            .resideInAnyPackage("org.mycompany.myapp.service..")
            .or()
            .resideInAnyPackage("org.mycompany.myapp.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..org.mycompany.myapp.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
