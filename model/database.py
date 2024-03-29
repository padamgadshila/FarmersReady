import mysql.connector
from werkzeug.utils import secure_filename
from datetime import datetime
import bcrypt
import os

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="farmersready"
)

def register(email,mobile,password,cpassword,role):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s and role =%s", (email,role))
    result = cursor.fetchall()
    if len(result) > 0:
        return "Email is already registered"
    else:
        if password != cpassword:
            return "Password is incorrect"
        else:
            hash = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(10))
            cursor.execute("INSERT INTO users (email,mobile,password,role) VALUES (%s,%s,%s,%s)", (email,mobile,hash,role))
            db.commit()
            cursor.close()
            return "success"
        
def login(email,password,role):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s and role =%s", (email,role))
    result = cursor.fetchall()
    if len(result) > 0:
        cursor.execute("SELECT * FROM users WHERE email = %s and role =%s", (email,role))
        result = cursor.fetchall()
        hash = result[0]["password"].encode("utf-8")
        bytespassword = password.encode("utf-8")
        if bcrypt.checkpw(bytespassword, hash):
            return "success"
        else:
            return "Password is incorrect"
    else:
        return "Email is not registered"