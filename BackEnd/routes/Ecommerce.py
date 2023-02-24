# from __main__ import app
from flask import Blueprint, request
from service.EcommerceService import *

class Ecommerce:
    ecommmerce_app = Blueprint('ecommmerce_app', __name__, template_folder='templates')

    @ecommmerce_app.route('/addtocart', methods=['POST'])
    def addToCart():
        data = request.json
        return addToCart(data['userId'], data['itemId'], data['quantity'])

    @ecommmerce_app.route('/placeorder', methods=['POST'])
    def placeorder():
        data = request.json
        return placeOrder(data['user_id'], data['coupon_code'])

    @ecommmerce_app.route('/getuser', methods=['POST'])
    def getuser():
        data = request.json
        return getUser(data['email'], data['password'])
    
    @ecommmerce_app.route('/adduser', methods=['POST'])
    def adduser():
        data = request.json
        return addUser(data)

    @ecommmerce_app.route('/addItem', methods=['POST'])
    def addItem():
        data = request.json
        return addItem(data)
    
    @ecommmerce_app.route('/getallitem', methods=['GET'])
    def getAllItem():
        return getAllItem()
    
    @ecommmerce_app.route('/getalldetails', methods=['GET'])
    def getAllDetails():
        return getAllDetails()

