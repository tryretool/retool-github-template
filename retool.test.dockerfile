FROM tryretool/backend:latest

COPY apps /usr/local/retool-git-repo/apps
COPY config /usr/local/retool-git-repo/config
COPY version /usr/local/retool-git-repo/version
