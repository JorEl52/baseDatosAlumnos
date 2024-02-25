import random

nombres = ["Juan", "María", "Luis", "Ana", "Pedro", "Laura", "Carlos", "Isabel", "Miguel", "Rosa","Perla","Luisa","Jacinto","Alexander","Alejandra","Dayana","Diana","Alberto","Eduardo","Giovanna","Amairani","Manuel","José","Daniela","Cecilia","Fausto","Rodrigo"]
apellidos_paternos = ["Gómez", "Pérez", "Rodríguez", "Fernández", "López","Itehua","Hernández","Ordoñez","Mejía","González","Coronel","Casarrubias","Ruz","Cruz","Flores","Espejel","Rubalcaba"]
apellidos_maternos = ["González", "Hernández", "Martínez", "García", "Sánchez","Martínez","López","Dionicio","Abasolo","Quanalo","Castillo","Escobar","Hinojosa","Agustín","Soriano","Avendaño"]
edades = range(15, 19)  # Rango de edades entre 18 y 64 años

def generar_nombre_completo_edad():
    nombre = random.choice(nombres)
    apellido_paterno = random.choice(apellidos_paternos)
    apellido_materno = random.choice(apellidos_maternos)
    edad = random.choice(edades)
    return nombre, apellido_paterno, apellido_materno, edad

cantidad_nombres = 40  # Número de nombres aleatorios a generar

for _ in range(cantidad_nombres):
    nombre, apellido_paterno, apellido_materno, edad = generar_nombre_completo_edad()
    print("Nombre completo:", nombre, apellido_paterno, apellido_materno)
    print("Edad:", edad)
    print()