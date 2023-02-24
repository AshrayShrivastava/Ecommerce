from service.Connection import session
from models.User import User
from models.Order import Order
from models.Item import Item
import bcrypt
from datetime import datetime

def getUser(email, password):
    user = session.query(User).filter_by(email=email).first()
    if(user==None):
        return ["Email does not exist"]
    encoded_pass = password.encode('utf-8')
    given_password = bcrypt.hashpw(encoded_pass, user.salt)
    if(user.password==given_password):
        return [user.user_id, user.user_name, user.role]
    
    return ["Incorrect Credentialls"]

def addUser(data):
    userName=data['userName']
    email=data['email']
    password=data['password']
    firstName=data['firstName']
    lastName=data['lastName']
    role=data['role']
    cart={}

    salt = bcrypt.gensalt()
    hashedPassword = bcrypt.hashpw(password.encode('utf-8'), salt)

    user = User(user_name=userName, password=hashedPassword, email=email, role=role,
                first_name=firstName, last_name=lastName, cart=cart, salt=salt)

    session.add(user)
    session.commit()

    return user.user_name

def addToCart(userId, itemId, quantity):
    cartItem = session.query(User.cart).filter_by(user_id=userId).first()
    if(cartItem==None):
        return "Invalid Request"
    cart = cartItem[0]
    if(itemId in cart):
        cart[itemId]+=quantity
    else:
        cart[itemId]=quantity
    print(cart)
    session.query(User).filter_by(user_id=userId).update({User.cart: cart})
    session.commit()
    return "success"

def placeOrder(userId):
    cartItem = session.query(User.cart).filter_by(user_id=userId).first()
    if(cartItem==None):
        return "Invalid Request"
    cart = cartItem[0]
    
    totalPrice=0
    for item in cart:
        price=session.query(Item.price).filter_by(item_id=item).first()
        if(price==None):
            cart.pop(item)
            continue
        totalPrice+=cart[item]*price[0]
    order = Order(user_id=userId, items=cart, total_price=totalPrice, placed_at=datetime.now())
    session.add(order)
    session.query(User).filter_by(user_id=userId).update({User.cart: {}})
    session.commit()
    return "placed"