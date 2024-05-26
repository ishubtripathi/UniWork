from flask import Flask, request, jsonify, render_template
import sqlite3
import os
import re

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Database setup
def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS uploads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL,
        filename TEXT NOT NULL,
        token TEXT UNIQUE NOT NULL
    )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])  # Ensure the endpoint accepts POST requests
def upload_file():
    name = request.form['name'].strip().lower().replace(' ', '')
    title = request.form['title']
    description = request.form['description']
    category = request.form['category']
    token = request.form['token']

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No file selected'}), 400

    # Ensure filename is secure using your custom secure_filename function
    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO uploads (name, title, description, category, filename, token)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (name, title, description, category, filename, token))
    conn.commit()
    conn.close()

    return jsonify({'message': 'File uploaded successfully', 'token': token})

@app.route('/retrieve/<token>', methods=['GET'])
def retrieve_file(token):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM uploads WHERE token=?', (token,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return jsonify({
            'name': row[1],
            'title': row[2],
            'description': row[3],
            'category': row[4],
            'filename': row[5],
            'token': row[6]
        })

    return jsonify({'message': 'Token not found'}), 404

def secure_filename(filename):
    # Replace spaces with underscores
    filename = filename.replace(' ', '_')
    # Remove special characters
    filename = re.sub(r'[^\w.-]', '', filename)
    return filename

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
