import random

first_names = ['Jesus', 'Francisco', 'Gerardo', 'Emilio', 'Luis', 'Olivia','Jacinto','Emilia','Perla','Camila','Evely','Giovanna','Andrea','Amalia','Lizeth','Marisol','Andres','David','Rodrigo','Arturo','Angel','Jorge','Jair','Alexander','Alejandra','Rocio','Ariel','Martin','Eugenia']
last_names = ['Hernandez', 'Gutierrez', 'Altamirano', 'Flores', 'Aguilar', 'Garcia','Gonzalez','Abasolo','Hermenegildo','Cantu','Coronel']
apellidoMaterno = ['Itehua','Torres','Casimiro','Espejel','Ordoñez','Carrasco','Morales','Tepezila','Dinori','Carso','Palacios','Castillo']

def generate_random_name():
    first_name = random.choice(first_names)
    last_name = random.choice(last_names)
    apellidoMatern = random.choice(apellidoMaterno)
    age = random.randint(15, 18)
    return first_name, last_name, apellidoMatern, age

# Generate 10 random names
for i in range(40):
    name, last_name, apellidoMatern, age = generate_random_name()
    print(f'Name: {name} {last_name} {apellidoMatern}, Age: {age}')