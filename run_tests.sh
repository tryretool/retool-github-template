docker build -f test.dockerfile -t tester . && docker run --ipc=host -v /var/run/docker.sock:/var/run/docker.sock -it --network host -v "$(pwd)/recordings:/retool/cypress/videos" tester
