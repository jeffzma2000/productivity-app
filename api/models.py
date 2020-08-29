from api import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    desc = db.Column(db.String(64), index=True, unique=True)
    date = db.Column(db.DateTime, index=True, unique=True)

    def __repr__(self):
        return '<Task {}>'.format(self.desc)