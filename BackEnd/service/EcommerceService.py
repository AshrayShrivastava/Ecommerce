from service.Connection import session
from models.User import User


def getUser(userName, password):
    user = session.query(User).filter_by(user_name=userName).all()