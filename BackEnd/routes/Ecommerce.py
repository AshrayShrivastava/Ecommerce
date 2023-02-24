# from __main__ import app
from flask import Blueprint, request
from service.EcommerceService import *

class Ecommerce:
    ecommmerce_app = Blueprint('ecommmerce_app', __name__, template_folder='templates')

    @ecommmerce_app.route('/addtocart', methods=['POST'])
    def addToCart():
        data = request.json
        return addToCart(data['userId'], data['itemId'])

    @ecommmerce_app.route('/placeorder', methods=['GET'])
    def placeorder():
        user_id = request.args.get('user_id')
        return placeOrder(user_id)

    @ecommmerce_app.route('/getuser', methods=['POST'])
    def getuser():
        data = request.json
        return getUser(data['email'], data['password'])
    
    @ecommmerce_app.route('/adduser', methods=['POST'])
    def adduser():
        data = request.json
        return addUser(data)


