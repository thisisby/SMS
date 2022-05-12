from fastapi import APIRouter, status, Depends, HTTPException
from sqlalchemy.orm import Session
import schemas, main, models, database
from typing import List
from repository import person

router = APIRouter(
    tags=["Person"],
    prefix='/person'
)



@router.get('/', status_code=status.HTTP_200_OK, response_model=List[schemas.Person])
def all(db: Session = Depends(database.get_db)):
    return person.get_all(db)
    print(db)
    print(person.get_all(db))

@router.post('/', status_code=status.HTTP_201_CREATED)
def create(request: schemas.PersonShow, db: Session = Depends(database.get_db),
           ):
    return person.create(request, db)


# @router.get('/{id}', status_code=status.HTTP_200_OK, response_model=schemas.PersonShow)
# def show(id, db: Session = Depends(database.get_db),):
#     return person.show(id, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id, request: schemas.PersonShow, db: Session = Depends(database.get_db),
           ):
    return person.update(id, request, db)


@router.delete('/{id}', status_code=status.HTTP_204_NO_CONTENT)
def destroy(id, db: Session = Depends(database.get_db), ):
    deleted_person = db.query(models.Person).filter(models.Person.id == id)
    if not deleted_person:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Person with such {id}id is not definded")
    deleted_person.delete(synchronize_session=False)
    db.commit()
    return 'done'