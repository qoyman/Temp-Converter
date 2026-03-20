from flask import Flask, request, jsonify
import time

app = Flask(__name__)

@app.route("/api/convert")
def convert():

    start_time = time.time()

    value = float(request.args.get("value"))
    mode = request.args.get("mode")

    print("\n------ REQUEST RECEIVED ------")
    print("Client IP:", request.remote_addr)
    print("Path:", request.path)
    print("Query:", request.query_string.decode())
    print("Headers:")
    
    for header, value_h in request.headers:
        print(f"{header}: {value_h}")

    if mode == "c":
        result = (value - 32) * 5 / 9
        unit = "°C"

    elif mode == "f":
        result = (value * 9/5) + 32
        unit = "°F"

    else:
        return jsonify({"error": "invalid mode"})

    end_time = time.time()

    print("Processing time:", round(end_time - start_time, 4), "seconds")
    print("------------------------------\n")

    return jsonify({
        "result": round(result,2),
        "unit": unit
    })

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
