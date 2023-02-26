from service.Connection import session
from models.User import User
from models.Order import Order
from models.Item import Item
from models.Coupon import Coupon
import bcrypt
from datetime import datetime
import random
import string
import json

n=2

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

def addItem(data):
    name=data['name']
    price=data['price']
    quantity=data['quantity']

    item = Item(item_name=name, price=price, available_quantity=quantity, sold_quantity=0)
    session.add(item)
    session.commit()
    return "added"

def getAllItem():
    items=session.query(Item.item_id,Item.item_name,Item.price,Item.available_quantity).all()
    # Item.item_id,Item.item_name,Item.price,Item.available_quantity
    itemObject=[]
    for item in items:
        itemObject.append({"id":item[0], "name":item[1], "price":item[2], "quantity": item[3]})

    return itemObject

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

def isValidCoupon(couponCode, userId):
    if(len(couponCode)==0):
        return False
    
    coupon = session.query(Coupon).filter_by(user_id=userId).filter_by(active=True).first()
    if(coupon!=None and coupon.coupon_code==couponCode and coupon.active==True):
        return True
    
    return False

def getFinalCartPrice(cart, couponCode, userId):
    totalPrice=0
    removed_item=[]
    for item in cart:
        price, available=session.query(Item.price, Item.available_quantity).filter_by(item_id=item).first()
        
        if(price==None or available<cart[item]):
            removed_item.append(item)
            continue
        
        totalPrice+=cart[item]*price
        session.query(Item).filter_by(item_id=item).update(
            {Item.available_quantity:Item.available_quantity-cart[item], 
             Item.sold_quantity: Item.sold_quantity+cart[item]}
            )
    
    if(isValidCoupon(couponCode, userId)):
        # print('valid')
        session.query(Coupon).filter_by(user_id=userId).filter_by(active=True).update({Coupon.active:False, Coupon.discount_claimed:0.1*totalPrice})
        totalPrice*=0.9
    else:
        couponCode=""

    for item in removed_item:
        cart.pop(item)

    return totalPrice, couponCode, cart

def placeOrder(userId, couponCode):
    cartItem = session.query(User.cart).filter_by(user_id=userId).first()
    if(cartItem==None):
        return "Invalid Request"
    cart = cartItem[0]
    
    totalPrice, couponCode, updatedCart = getFinalCartPrice(cart, couponCode, userId)

    if(len(updatedCart)==0):
        return "Invalid Request"
    
    order = Order(user_id=userId, items=updatedCart, total_price=totalPrice, coupon_code=couponCode, placed_at=datetime.now())
    session.add(order)
    
    session.query(User).filter_by(user_id=userId).update({User.cart: {}})
    session.commit()

    orders=session.query(Order).all()
    
    if(len(orders)%n==0):
        session.query(Coupon).filter_by(active=True).update({Coupon.active: False})
        newCouponCode = (''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=5)))
        newCoupon=Coupon(coupon_code=newCouponCode, user_id=userId, active=True, discount_claimed=0)
        session.add(newCoupon)
        session.commit()
        return "Congratulations you won a coupon of 10% for your next order, use coupon code {} to avail the offer".format(newCouponCode)

    return "Order Placed"


def getAllDetails():
    detailObject={}
    totalPurchase=0
    items=session.query(Item.item_id, Item.item_name,Item.price,Item.sold_quantity).all()
    soldItemList={}
    
    for item in items:
        soldItemList[item[0]]={"name":item[1], "quantity_sold": item[3]}
        totalPurchase+=(item[2]*item[3])
    
    detailObject['ItemsSold']=soldItemList
    detailObject['totalPurchaseAmount']=totalPurchase

    coupons = session.query(Coupon.coupon_code,Coupon.discount_claimed).all()
    
    # print(discounts)

    totalDiscount=0
    couponObject={}
    for coupon in coupons:
        totalDiscount+=coupon[1]
        couponObject[coupon[0]]=coupon[1]
    
    detailObject['coupons']=couponObject
    detailObject['TotalDisicount']=totalDiscount

    return detailObject


    