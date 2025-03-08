# Coming soon

### To resynchronize `.gitignore`
    git rm -r --cached .
    git add .
    git commit -m "Resynchronize .gitignore"





## Steps:

1. create the lets encrypt files

    1  git clone https://github.com/BlenDaniel/DAPR.git
    2  cd DAPR/
    3  docker compose up -d
    4  docker compose ps
    5  cd web
    6  vi nginapp.conf 
    7  docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d blen.cc
    8  cd ..
    9  docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d blen.cc
   10  vi docker-compose.yml 
   11  cd web
   12  vi Dockerfile 
   13  cd ..
   14  docker compose up -d --build
   15  docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d blen.cc
   16  docker compose ps
   17  cd web
   18  ls
   19  vi Dockerfile 
   20  vi nginx.conf
   21  cd ..
   22  vi docker-compose.yml 
   23  ls
   24  cd web
   25  vi nginx.conf 
   26  cd ..
   27  docker down
   28  docker compose down
   29  docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker rmi $(docker images -q)
   30  vi docker-compose.yml 
   31  docker-compose up --build webserver
   32  docker compose up --build webserver
   33  vi docker-compose.yml
   34  docker compose up --build nginx_server
   35  vi docker-compose.yml
   36  docker compose up --build nginx_server
   37  docker compose up --build webserver
   38  docker compose up --build webserver -d
   39  docker compose up --build frontend -d
   40  docker compose ps
   41  vi docker-compose.yml 
   42  cd web§
   43  cd web
   44  vi nginx.conf 
   45  ls
   46  vi Dockerfile 
   47  vi nginx.conf 
   48  cd ..
   49  docker compose stop
   50  docker compose up --build webserver -d
   51  docker compose ps
   52  docker compose up --build frontend -d
   53  docker compose ps
   54  docker compose up --build webserver -d
   55  docker compose ps
   56  cd web/
   57  vi nginx.conf 
   58  cd ..
   59  docker compose up --build webserver -d
   60  docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker rmi $(docker images -q)
   61  docker compose up --build webserver -d
   62  docker compose up --build frontend -d
   63  docker compose ps
   64* docker compose run --rm letsencrypt certonly --webroot --webroot-path /var/www/certbot/ -d
   65  docker compose up --build letsencrypt
   66  vi docker-compose.yml 
   67  docker compose up --build letsencrypt
   68  cd web
   69  vi nginx.conf 
   70  cd ..
   71  docker compose up --build -d webserver
   72  docker compose ps
   73  history
