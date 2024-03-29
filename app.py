from flask import *
from model.database import *
app = Flask(__name__)
app.secret_key = "youWillNeverKnowMyKey"
# Customers
@app.route('/customer')
def customer():
    return render_template('customers/index.html')


@app.route('/customer/register', methods=['POST','GET'])
def customer_register():
    if request.method == 'POST':
        email = request.form['email']
        mobile = request.form['mobile']
        password = request.form['password']
        cpassword = request.form['cpassword']
        role="customer"
        status = register(email=email, mobile=mobile, password=password, cpassword=cpassword,role=role);

        if "Email is already registered" in status:
            return render_template('customers/register.html', emailError=status)
        elif "Password is incorrect" in status:
            return render_template_string('customers/register.html', passwordError=status)
        elif "success" in status:
            session["user"] ={"email":email, "role":role}
            return redirect(url_for('customer'))
    return render_template('customers/register.html')

@app.route('/customer/login', methods=['POST','GET'])
def customer_login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        role="customer"

        status = login(email=email, password=password,role=role);
        if "Email is not registered" in status:
            return render_template('customers/login.html', emailError=status)
        elif "Password is incorrect" in status:
            return render_template_string('customers/login.html', passwordError=status)
        elif "success" in status:
            session["user"] ={"email":email, "role":role}
            return redirect(url_for('customer'))
    return render_template('customers/login.html')



if __name__ == '__main__':
    app.run(debug=True, port=3000)