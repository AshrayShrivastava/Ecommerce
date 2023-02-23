# from __main__ import app
from flask import Blueprint, request
from service.EcommerceService import *

class Ecommerce:
    ecommmerce_app = Blueprint('ecommmerce_app', __name__, template_folder='templates')

    @ecommmerce_app.route('/addtocart', methods=['POST'])
    def addToCart():
        pass

    @ecommmerce_app.route('/placeorder', methods=['POST'])
    def placeorder():
        pass

    @ecommmerce_app.route('/getuser', methods=['POST'])
    def getuser():
        data = request.json
        # print(data)
        return getUser(data['userName'], data['password'])
    
    @ecommmerce_app.route('/setuser', methods=['POST'])
    def setuser():
        data = request.json
        # print(data)
        return setUser(data)


