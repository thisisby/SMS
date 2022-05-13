from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import models, schemas


def get_all(db: Session):
    person = db.query(models.Person).all()
    if not person:
        return
    return person
    # print(person)


def create(request: schemas.Person, db: Session, ):
    person = db.query(models.Person).filter(
        models.Person.full_name == request.full_name).first()
    if person:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail="Person with this name are already exist")
    new_person = models.Person(role=request.role, card_id=request.card_id, full_name=request.full_name, phone_number=request.phone_number)
    db.add(new_person)
    db.commit()
    db.refresh(new_person)
    return new_person

# def show(card_id, db: Session):
#     person = db.query(models.Person).filter(models.Person.card_id == card_id).first()
#     if not person:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f"Person WITH THIS Card_ID {card_id} is not available")
#     return person

def update(id, request:schemas.Person, db: Session):
    updated_person = db.query(models.Person).filter(models.Person.card_id == id)
    if not updated_person.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Person with such {id} id is not definded")
    updated_person.update(dict(request), synchronize_session='evaluate')
    db.commit()
    return 'updated successfully'

def destroy(id, db: Session):
    deleted_person = db.query(models.Person).filter(models.Person.card_id == id)
    if not deleted_person:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Person with such {id}id is not definded")
    deleted_person.delete(synchronize_session=False)
    db.commit()

    return
