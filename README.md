### Before development - Local
1. Create a project folder.
2. Go inside the project folder.
3. Cloning the repo `git clone --recursive https://github.com/SUTD-3DC/3DC_web_py.git`.
* Below are based on unix command
4. Install virtual environment by running `sudo pip3 install virtualenv`.
5. Create virtual environment with `virtualenv -p python3 venv`.
6. Start virtual environment with `source venv/bin/activate`
7. Install required library.
  * `cd 3DC_web_py`
  * `pip3 install -r requirement.txt`
  
### Frontend
1. cd `project_folder/3DC_web_py/app/frontend`.
2. Run `npm run dev`.
3. Access the webpage using any browser with `http://localhost:8080`.

### Backend
1. SSH to server.
2. Go to `3DC_web_py/app/frontend`.
3. Run `npm run dev`.
4. Open new terminal tab and SSH to server.
5. Go to `3DC_web_py`.
* Run `konch` for testing small chunk of backend code.
6. Configure flask app by `export FLASK_APP=app`.
7. Configure the flask environment by `export FLASK_ENV=development`.
8. Start flask app with `flask run -h 0.0.0.0 -p port`; available port=[5000, 50001, 5002]
9. Access the webpage using any browser with `http://server-ip:port`.

### Development
1. Frontend and Backend must commit on the same branch for the same feature.

### Prerequisite Software 
1. Gitkraken - GUI tool for git version control.
2. Filezilla - File transfer tools between server and local directory.
