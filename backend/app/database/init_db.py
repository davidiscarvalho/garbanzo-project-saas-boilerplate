from app.database.db import engine
from app.models.user import User
from app.database.db import Base

def init_db():
    Base.metadata.create_all(bind=engine)
