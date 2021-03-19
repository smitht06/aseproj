import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CourseMaster3KTestModule } from '../../../test.module';
import { MaterialDetailComponent } from 'app/entities/material/material-detail.component';
import { Material } from 'app/shared/model/material.model';

describe('Component Tests', () => {
  describe('Material Management Detail Component', () => {
    let comp: MaterialDetailComponent;
    let fixture: ComponentFixture<MaterialDetailComponent>;
    const route = ({ data: of({ material: new Material(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CourseMaster3KTestModule],
        declarations: [MaterialDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(MaterialDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MaterialDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load material on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.material).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
