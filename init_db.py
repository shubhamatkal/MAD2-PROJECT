from app import db
from app import Librarian
import os
from werkzeug.security import generate_password_hash

def check_librarian_exists():
    librarian = Librarian.query.filter_by(username=os.getenv('ADMIN_USERNAME')).first()
    if librarian:
        print(f"Librarian admin with username {os.getenv('ADMIN_USERNAME')} exists.")
    else:
        print("Librarian with username 'shubham' does not exist. Adding entry...")
        new_librarian = Librarian(username=os.getenv('ADMIN_USERNAME'), passhashed=generate_password_hash(os.getenv('ADMIN_PASSWORD')), libraryname='Shubham Library')
        db.session.add(new_librarian)
        db.session.commit()
        print(f"New librarian {os.getenv('ADMIN_USERNAME')} added.")

if __name__ == "__main__":
    check_librarian_exists()