from service.Connection import session
from models.User import User
import bcrypt

def getUser(userName, password):
    user = session.query(User).filter_by(user_name=userName).first()
    if(user==None):
        return "Username does not exist"
    encoded_pass = password.encode('utf-8')
    given_password = bcrypt.hashpw(encoded_pass, user.salt)
    if(user.password==given_password):
        return user.role
    
    return "Incorrect Credentialls"

def setUser(data):
    userName=data['userName']
    email=data['email']
    password=data['password']
    firstName=data['firstName']
    lastName=data['lastName']
    role=data['role']
    cart=[]

    salt = bcrypt.gensalt()
    hashedPassword = bcrypt.hashpw(password.encode('utf-8'), salt)

    user = User(user_name=userName, password=hashedPassword, email=email, role=role,
                first_name=firstName, last_name=lastName, cart=cart, salt=salt)

    session.add(user)
    session.commit()

    return user.user_name