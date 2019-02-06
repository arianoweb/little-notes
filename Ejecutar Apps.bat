@echo off
echo.
echo.
echo ********************* Notas Simple 1.0 *********************

	echo Instalando Dependencias...
	START /min npm install
	TIMEOUT 3 > NUL
	echo Iniciando
    START node server.js
	start chrome "data:text/html;charset=ISO-8859-1,<html><head><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script> <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' rel="stylesheet"><link href="http://localhost:3030/css/style.css" rel="stylesheet"></head><body><script language=\"javascript\">window.open('http://localhost:3030/','clock','toolbar=0,location=0,status=0,menubar=0,scrollbars=1,'+'resizable=1,width=380,height=640,top=20,left=120');</script><button type='button' class='btn btn-secondary btn-lg btn-block' onclick=\"javascript:window.open('http://localhost:3030/','clock','toolbar=0,location=0,status=0,menubar=0,scrollbars=1,'+'resizable=1,width=380,height=640,top=20,left=120');\"> Abrir Notas Simples </button>"
	
	

