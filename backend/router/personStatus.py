from fastapi import APIRouter, status, Depends, HTTPException
from sqlalchemy.orm import Session
import schemas, main, models, database
from typing import List
from repository import personStatus

router = APIRouter(
    tags=["PersonStatus"],
    prefix='/personStatus'
)


@router.get('/', status_code=status.HTTP_200_OK, response_model=List[schemas.PersonStatus])
def all(db: Session = Depends(database.get_db)):
    return personStatus.get_all(db)


@router.post('/', status_code=status.HTTP_201_CREATED)
def create(request: schemas.PersonStatus, db: Session = Depends(database.get_db),
           ):
    return personStatus.create(request, db)


# @2.get('/{id}', status_code=status.HTTP_200_OK, response_model=schemas.Person)
# def show(id, db: Session = Depends(database.get_db),):
#     return person.show(id, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id, request: schemas.PersonStatus, db: Session = Depends(database.get_db),
           ):
    return personStatus.update(id, request, db)


@router.delete('/{id}', status_code=status.HTTP_204_NO_CONTENT)
def destroy(id, db: Session = Depends(database.get_db), ):
    deleted_personStatus = db.query(models.PersonStatus).filter(models.PersonStatus.id == id)
    if not deleted_personStatus:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Person with such {id}id is not definded")
    deleted_personStatus.delete(synchronize_session=False)
    db.commit()
    return 'done'