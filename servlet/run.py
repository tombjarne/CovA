import requests
import connexion

from flask import (
    Flask,
    render_template
)

# Create application instance
app = connexion.App(__name__, specification_dir="/")

#Read swagger.yml
app.add_api('swagger.yml')

#Create URL to route for '/'
@app.route('/')
def home():
    return render_template('index.html')

#Standalone
if __name__ == 'main':
    app.run(host='0.0.0.0', port=5000, debug=True)


# Application instance
#app = Flask(__name__, template_folder="templates")

#URL for '/'
#@app.route('/')
#def home():
#    return render_template("home.html")

#Standalone - run
#if __name__ == '__main__':
#    app.run(debug=True)


#response = requests.get("https://api.covid19api.com/summary")
#print(response)
#confirmed = response.json()['Global']['TotalConfirmed']
#recovered = response.json()['Global']['TotalRecovered']
#print(confirmed)
#print(recovered)