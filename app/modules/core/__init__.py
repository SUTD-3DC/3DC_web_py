# This blueprint is only used for redirecting to 'index.html' page
from flask import Blueprint

# Import all the view function
from app.modules.core.views import index

# Define the blueprint name
module = Blueprint('core', __name__)


module.add_url_rule('/', view_func=index)
module.add_url_rule('/<path:path>', view_func=index)
