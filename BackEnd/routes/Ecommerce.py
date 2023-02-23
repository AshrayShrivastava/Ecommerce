# from __main__ import app
from flask import Blueprint

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
        pass


