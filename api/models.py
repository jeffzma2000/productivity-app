from api import db

class Task(db.Model):
    __tablename__ = 'Tasks'
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(64), index=True, unique=True)
    date = db.Column(db.Date)
    type = db.Column(db.String(64))
    number = db.Column(db.Integer)
    done = db.Column(db.Boolean)

    def __repr__(self):
        return '<Task {}>'.format(self.desc)