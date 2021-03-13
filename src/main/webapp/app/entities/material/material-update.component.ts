import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IMaterial, Material } from 'app/shared/model/material.model';
import { MaterialService } from './material.service';

@Component({
  selector: 'jhi-material-update',
  templateUrl: './material-update.component.html',
})
export class MaterialUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required]],
    type: [null, [Validators.required]],
    link: [null, [Validators.required]],
    chapterId: [null, [Validators.required]],
  });

  constructor(protected materialService: MaterialService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ material }) => {
      this.updateForm(material);
    });
  }

  updateForm(material: IMaterial): void {
    this.editForm.patchValue({
      id: material.id,
      name: material.name,
      type: material.type,
      link: material.link,
      chapterId: material.chapterId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const material = this.createFromForm();
    if (material.id !== undefined) {
      this.subscribeToSaveResponse(this.materialService.update(material));
    } else {
      this.subscribeToSaveResponse(this.materialService.create(material));
    }
  }

  private createFromForm(): IMaterial {
    return {
      ...new Material(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      type: this.editForm.get(['type'])!.value,
      link: this.editForm.get(['link'])!.value,
      chapterId: this.editForm.get(['chapterId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMaterial>>): void {
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
}
