#from scraper import scrape
from flask import Flask, render_template, jsonify, make_response, request
import json
import xlrd
import json
from flask_cors import CORS, cross_origin

from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

countries = ("./EF.xlsx")

workbook = xlrd.open_workbook(countries, 'r')
sheet = workbook.sheet_by_index(0)

#print(sheet.cell_value(0,0))

@app.route("/autocomplete", methods=['GET'])
@cross_origin()
def index():

    #entries = json.dumps(scrape("country"))
    entry = request.args.get('country').upper()
    print(entry)
    suggestion_dict = {}
    pointer = 0
    snippet = False

    print(sheet.nrows)
    for country in range(0, sheet.nrows):
        current = sheet.cell(country, 0).value.upper()
        if entry in current[:5]:
            cell = {"country": str(sheet.cell(country, 0).value)}
            suggestion_dict[pointer] = cell
            pointer += 1
            snippet = True

        elif entry in current and snippet == False:
            cell = {"country": str(sheet.cell(country, 0).value)}
            suggestion_dict[pointer] = cell
            pointer += 1

        if len(entry) != len(current):
            snippet = True
        else:
            snippet = False

    #    return json.dumps(suggestion_dict)

    r = make_response(json.dumps(suggestion_dict))
    r.mimetype = 'application/json'
    r.status_code = 200
    return r

"""@app.route('/parse_data', methods=['GET', 'POST'])
def parse_data():
    if request.method == "POST":
        #data = request.form("blah")
        #print("blah")
        search = request.get_json()
        #new_search = json.dumps(scrape(data))
        return jsonify(search)
    return render_template('index.html')"""

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
