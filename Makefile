all:
	cd py_base && make
	cd web_app && make
	sudo docker-compose build
clean:
	cd web_app && make clean
	cd py_base && make clean
	sudo docker-compose rm -f


