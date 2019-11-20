import mysql.connector


cnx = mysql.connector.connect(user='root', password='administrador',
                              host='localhost', port='3306',
                              database='prueba')

print("Conexion correcta") 
                              
cnx.close()
print(cnx)

