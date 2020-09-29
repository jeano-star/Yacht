from fastapi import APIRouter, Depends, HTTPException, File, UploadFile
from fastapi.responses import FileResponse
from typing import List

from sqlalchemy.orm import Session
from datetime import datetime

from ..db import crud, schemas
from ..db.models import containers
from ..db.database import SessionLocal, engine
from ..utils import get_db
from ..auth import get_active_user
from ..actions import apps

containers.Base.metadata.create_all(bind=engine)


router = APIRouter()


@router.get("/variables", response_model=List[schemas.TemplateVariables], dependencies=[Depends(get_active_user)])
def read_template_variables(db: Session = Depends(get_db)):
    return crud.read_template_variables(db=db)


@router.post("/variables", response_model=List[schemas.TemplateVariables], dependencies=[Depends(get_active_user)])
def set_template_variables(new_variables: List[schemas.TemplateVariables], db: Session = Depends(get_db)):
    return crud.set_template_variables(new_variables=new_variables, db=db)


@router.get("/export", response_model=schemas.Import_Export, dependencies=[Depends(get_active_user)])
def export_settings(db: Session = Depends(get_db)):
    return crud.export_settings(db=db)


@router.post("/export", dependencies=[Depends(get_active_user)])
def import_settings(db: Session = Depends(get_db), upload: UploadFile = File(...)):
    return crud.import_settings(db=db, upload=upload)

<<<<<<< HEAD
@router.get("/prune", dependencies=[Depends(get_active_user)])
def prune_images():
    return apps.prune_images()
=======
@router.get("/prune/{resource}", dependencies=[Depends(get_active_user)])
def prune_resources(resource: str):
    return apps.prune_resources(resource)
>>>>>>> ff5cde45e70a3c82a1e2f714da6e769b5bee580a
