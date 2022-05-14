from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import models
import schemas


def get_all(db: Session):
    personStatus = db.query(models.PersonStatus).order_by(
        models.PersonStatus.id.desc()).all()
    # if not personStatus:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
    #                         detail=f'No created record')
    if not personStatus:
        return
    return personStatus


def create(request: schemas.PersonStatus, db: Session, ):
    personStatus = db.query(models.PersonStatus).filter(
        models.PersonStatus.full_name == request.full_name).order_by(models.PersonStatus.id.desc()).first()
    if personStatus:
        if personStatus.status == "Off":
            return "Poshel Nahui"
    new_personStatus = models.PersonStatus(role=request.role, card_id=request.card_id, full_name=request.full_name,
                                           phone_number=request.phone_number, leave=request.leave, status=request.status)
    db.add(new_personStatus)
    db.commit()
    db.refresh(new_personStatus)
    return new_personStatus

# def show(card_id, db: Session):
#     personStatus = db.query(models.PersonStatus).filter(models.PersonStatus.card_id == card_id).first()
#     if not personStatus:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f"Person WITH THIS Card_ID {card_id} is not available")
#     return personStatus


def update(id, request: schemas.PersonStatus, db: Session):
    updated_personStatus = db.query(models.PersonStatus).filter(
        models.PersonStatus.id == id)
    if not updated_personStatus.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Person with such {id} id is not definded")
    updated_personStatus.update(dict(request), synchronize_session='evaluate')
    db.commit()
    return "updated_personStatus"


def destroy(id, db: Session):
    deleted_personStatus = db.query(models.PersonStatus).filter(
        models.PersonStatus.id == id)
    if not deleted_personStatus:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Person with such {id}id is not definded")
    deleted_personStatus.delete(synchronize_session=False)
    db.commit()

    return
