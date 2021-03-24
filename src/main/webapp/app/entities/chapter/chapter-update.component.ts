import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IChapter, Chapter } from 'app/shared/model/chapter.model';
import { ChapterService } from './chapter.service';
import { ICourse } from 'app/shared/model/course.model';
import { CourseService } from 'app/entities/course/course.service';

@Component({
  selector: 'jhi-chapter-update',
  templateUrl: './chapter-update.component.html',
})
export class ChapterUpdateComponent implements OnInit {
  isSaving = false;
  courses: ICourse[] = [];

  editForm = this.fb.group({
    id: [],
    number: [null, [Validators.required]],
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    course: [],
  });

  constructor(
    protected chapterService: ChapterService,
    protected courseService: CourseService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ chapter }) => {
      this.updateForm(chapter);

      this.courseService.query().subscribe((res: HttpResponse<ICourse[]>) => (this.courses = res.body || []));
    });
  }

  updateForm(chapter: IChapter): void {
    this.editForm.patchValue({
      id: chapter.id,
      number: chapter.number,
      name: chapter.name,
      description: chapter.description,
      course: chapter.course,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const chapter = this.createFromForm();
    if (chapter.id !== undefined) {
      this.subscribeToSaveResponse(this.chapterService.update(chapter));
    } else {
      this.subscribeToSaveResponse(this.chapterService.create(chapter));
    }
  }

  private createFromForm(): IChapter {
    return {
      ...new Chapter(),
      id: this.editForm.get(['id'])!.value,
      number: this.editForm.get(['number'])!.value,
      name: this.editForm.get(['name'])!.value,
      description: this.editForm.get(['description'])!.value,
      course: this.editForm.get(['course'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IChapter>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ICourse): any {
    return item.id;
  }
}
