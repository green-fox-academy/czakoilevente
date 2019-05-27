#install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 4.4.5
#install git
sudo yum install -y git
#clone repo
git clone https://github.com/green-fox-academy/mallac-lev.git
#swap directory
cd mallac-lev
#install npm
npm install
#install pm2 globally
npm install pm2 -g
#initi project
pm2 start hello.js