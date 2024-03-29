import bcrypt

password = "padam"
print(password)

bytes = password.encode('utf-8')
print(bytes)

salt = bcrypt.gensalt(10)
print(salt)

hash = bcrypt.hashpw(bytes, salt)
print(hash)

cbyteps = "padamm".encode('utf-8')

result = bcrypt.checkpw(cbyteps,hash)
print(result)