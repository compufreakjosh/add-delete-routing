import flask.ext.restless
import flask.ext.sqlalchemy
import datetime
 
app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = flask.ext.sqlalchemy.SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False)
    email = db.Column(db.String(120), unique=False)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username

            
# db.create_all()
# admin = User('admin', 'admin@example.com')
# guest = User('guest', 'guest@example.com')
# db.session.add(admin)
# db.session.add(guest)
# db.session.commit()

manager = flask.ext.restless.APIManager(app, flask_sqlalchemy_db=db)

manager.create_api(User,
                   methods=['GET', 'POST', 'DELETE', 'PUT'], results_per_page=20)
 
app.run()
