//================================
// TRABAJO PRÁCTICO OBLIGATORIO 2
// ================================

function ejecutarTodosLosEjercicios() {
     console.clear();
     console.log("🎯 TRABAJO PRÁCTICO OBLIGATORIO 2 - JAVASCRIPT");
     console.log("===============================================");
     console.log("");

    // ============================================
    // EJERCICIO 1: Calcular área de un rectángulo
    // ============================================
    console.log("EJERCICIO 1");
    console.log ("Calculo  del area de un rectángulo")
    console.log ("Para calcular el área de un rectángulo, es necesario multiplicar su base por su altura. La fórmula utilizada es A=bxh, donde A representa el área, b la base y h la altura del rectángulo.");


    function calcularAreaRectangulo(base, altura) {
        return base * altura;
    }
    
    console.log("Solucion 1:");
    console.log("b1 = 5, h1 = 3")
    console.log("Resultado: Area1 = ", calcularAreaRectangulo(5, 3));
    console.log("b2 = 10, h2 = 4")
    console.log("Resultado: Area2 = ",calcularAreaRectangulo(10, 4));
    console.log("b3 = 7, h3 = 6")
    console.log("Resultado: Area3 = ",calcularAreaRectangulo(7, 6));
    console.log("______________________________________________");
    console.log("");
                                

    // ==========================================
    // EJERCICIO 2: Contar palabras en una cadena
    // ==========================================

    console.log("EJERCICIO 2");
    console.log("Contar palabras en una cadena")
    console.log("/* Para contar las palabras en una cadena de texto, primero utilicé el método trim() para eliminar los espacios en blanco al inicio y al final de la cadena. Luego, usé el método split(' ') para dividir la cadena en un array de palabras. Usé split(/\s+/): Separa por cualquier cantidad de espacios, no solo uno. Y de esta manera obtuve la longitud de este array para obtener el número de palabras. De esta manera, la función puede manejar cadenas con diferentes formatos, como espacios adicionales al inicio, al final o entre palabras. Probé la función con tres ejemplos diferentes para asegurarme de que funciona apropiadamente. */")
    console.log("\n");
    

    function contarPalabras(cadena) {
        return cadena.trim().split(/\s+/).length;
    }

    console.log("Solucion 2:");
    console.log("Numero de palabras en 'Humahuaca es un lugar interesante'")
    console.log("Numero de palabras =",contarPalabras("Humahuaca es un lugar  interesante"));
    console.log("Numero de palabras en 'JavaScript es el lenguaje de los navegadores'")
    console.log("Numbero de palabras =",contarPalabras("JavaScript es el lenguaje de los navegadores"));
    console.log("Numero de palabras en 'Una sola palabra'")
    console.log("Numbero de palabras =", contarPalabras("Una sola palabra"));
    console.log("______________________________________________");
    console.log("");


    // =========================================
    // EJERCICIO 3: Contar vocales en una cadena
    // =========================================

    console.log("EJERCICIO 3: Contar vocales en una cadena")
    console.log("Para contar vocales, definí una cadena con todas las vocales en minúsculas y mayúsculas.    Luego recorro cada carácter de la cadena de entrada y verifico si está incluido en mi cadena de vocales usando includes(). Si es así, incremento el contador. Funciona tanto mayúsculas como minúsculas.")
   
    console.log("\n")
    console.log("Solucion 3:");
    function contarVocales(texto) {
      const vocales = "aeiouAEIOU";
      let count = 0;
      for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
          count++;
        }
      }
      return count;
    }

    console.log("Solución 3:");
    console.log("No. vocales en Javascript =",contarVocales("JavaScript")); // 3
    console.log("No. vocales en AEIOU =",contarVocales("AEIOU")); // 5
    console.log("No. vocales en xyz =",contarVocales("xyz")); // 0
    console.log("______________________________________________");
    console.log("\n");

    // =====================================
    // EJERCICIO 4: Encontrar el palíndromo
    // =====================================

    console.log("palíndromo:Definición Del gr. παλίνδρομος palíndromos 'que recorre a la inversa'.1.m. Palabra  o    frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha     que de     derecha a izquierda; p. ej., anilina; dábale arroz a la zorra el abad.  " )

    console.log("EJERCICIO 4: Encontrar el palindromo")

    /*
    Para verificar si una cadena de caracteres es un palíndromo, primero normaliza la cadena quitando caracteres especiales y se convierte a minúsculas. Luego se compara la cadena original con
    su versión invertida (usando los comandos split, reverse y join). Si son iguales, es un palíndromo.
    */

    function esPalindromo(cadena) {
        const normalizada = cadena.toLowerCase().replace(/[^a-z]/g, '');;
        const invertida = normalizada.split('').reverse().join('');
        return normalizada === invertida;    
    }

    console.log("Solución 4:");
    console.log("BY-323-YB es Palindromo",esPalindromo("BY-323-YB")); // true
    console.log("Isaac no ronca asi es Palindromo",esPalindromo("Isaac no ronca asi")); // true
    console.log("miralejos es palindromo", esPalindromo("miralejos")); // false
    console.log("______________________________________________");
    console.log("\n");


    // =====================================
    // EJERCICIO 5: Edad canina
    // =====================================

    // 5. Crear un programa para convertir la edad de un perro a años humanos

    /*Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina, que equivale a 7 veces la edad humana.
    Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
    edadCanina(7); Tu perro tiene 49 años humanos*/
    
    function edadCanina(edad) {
    console.log(`Tu perro tiene ${edad * 7} años humanos`);
    }

    console.log("Solución5:");
    console.log("Edad humana = 7 ");
    console.log(edadCanina(3)); // Tu perro tiene 49 años humanos
    console.log("Edad humana = 3 ");
    edadCanina(3); // Tu perro tiene 21 años humanos
    console.log("Edad humana = 10 ");
    edadCanina(10); // Tu perro tiene 70 años humanos
    console.log("______________________________________________");
    console.log("\n")
    
    // ===================================
    // EJERCICIO 6: Capitalizar palabras
    // ===================================
     /*
    Para capitalizar la primera letra de cada palabra, se divide la cadena en palabras
    usando split(' '). Luego se puede usar map() para transformar cada palabra; para 
    convertir el primer caracter a mayúscula se hace con charAt(0) y luego se concatena con el resto
    de la palabra en minúscula usando slice(1). Finalmente la palabra o cadena se unira con join(' ')
    En detalle: 
    cadena.split(' ')
    Divide la cadena en palabras, separándola por espacios.

    .map(palabra => ...)
    Recorre cada palabra del array. Aplica una transformación a cada una: la primera letra se convierte en mayúscula y el resto en minúscula.
    Retorna un array de palabras.
    palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() hace lo siguiente
    
    palabra.charAt(0): toma la primera letra.
    
    .toUpperCase(): la convierte en mayúscula.

    palabra.slice(1): toma el resto de la palabra (desde el segundo carácter en adelante).

    .toLowerCase(): lo convierte en minúsculas.

    Luego concatena las dos partes.
    */
 
    
    function capitalizarPalabras(cadena) {
        return cadena.split(' ').map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
    }

    console.log(capitalizarPalabras("la ruta del aprendizaje continuo en programacion")); // "La Ruta Del Aprendizaje Continuo En Programacion"
    console.log(capitalizarPalabras("caminando por la costanera")); // "Caminando Por La Costanera"
    console.log(capitalizarPalabras("a r t i f i c i a l ")); // "A R T I F I C I A L"
    console.log("_______________________________________________");   
    console.log("\n")
   
   
    // ================================
    // EJERCICIO 7: Serie de Fibonacci
    // ================================
    
    /*...
        Generar los primeros N números de la sucesión de Fibonacci
        Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci
        
        La serie de Fibonacci es una sucesión de números donde: Cada número es la suma de los dos anteriores.

        La secuencia comienza así: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
        Fórmula general: Para n ≥ 2:

        F(n) = F(n-1) + F(n-2)
        Y los dos primeros términos son:
            F(0) = 0  
            F(1) = 1
            F(2) = 1
            F(3) = 2
    */


    
    /*  Para generar la secuencia de Fibonacci, se considera los dos primero términos: 
        los casos base: si n es 0 o menor retorna un arreglo vacio, y si es 1 retorno [0], si es 2 retorno [0,1].
        Para n mayor a 2, se inicia con [0,1] y luego se puede usar un bucle para calcular cada siguiente número, conociendo que
        cada número es la suma de los dos anteriores.
        Cada nuevo número se agrega al array resultadoy se returma el resultado.
    */
    
    
    function fibonacci(n) {
        if (n <= 0) return [0];
        if (n === 1) return [1];
        if (n === 2) return [0, 1];
        
        const resultado = [0, 1];
        
        for (let i = 2; i < n; i++) {
            resultado.push(resultado[i-1] + resultado[i-2]);
        }
        
        return resultado;
    }

    console.log("Solución 7: Secuencia de Fibonacci");
    console.log("Secuencia de Fibonacci para n=0",fibonacci(2))
    console.log("Secuencia de Fibonacci para n=1",fibonacci(5))
    console.log("Secuencia de Fibonacci para n=2",fibonacci(7))        
    console.log("_______________________________________________");
    console.log("\n")
   


    // ================================
    // EJERCICIO 8: Lista de Productos
    // ================================
    

    /*const productos = [
        { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
        { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
        { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
        { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
        { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
        ]

    */
   
    // 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio 
    // 2. Usando map: Crear un array con solo los nombres de los productos
    // 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
    // 4. Usando find: Encontrar el producto con id 3
    // 5. Usando reduce: Calcular el valor total del inventario (precio * stock)   

    
    const productos = [
        { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
        { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
        { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
        { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
        { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
    ];
    
    
    console.log("Solución 8.1 Lista de Productos:");
    
    // 8.1 forEach
    function ejercicioProductos() {
    console.log("8.1 forEach: Mostrar en consola cada producto con su nombre y precio");
    productos.forEach(producto => console.log(`${producto.nombre} : $${producto.precio}`));                
    }
    ejercicioProductos()
    
    console.log("------------------------");

    console.log("8.2 - Map: Array con los nombres de los productos:");
    const nombres = productos.map(producto => producto.nombre);
    console.log(nombres);
    console.log("------------------------");

    
    // Se requiere filtrar los elementos del array productos que cumplen la condición
    // donde los productros sean mayores a 20.
    // Devuelve un nuevo array con los elementos que pasan la prueba.
    
    console.log("8.3 Obtener productos electrónicos con stock mayor a 20") 
    console.log("8.3 - Filter: Electrónicos con stock > 20:");
    const electronicosStock = productos.filter(producto => 
    producto.categoria === 'electrónica' && producto.stock > 20);
    
    console.log("8.3 - Filter:",electronicosStock);
    console.log("------------------");
    

    // find() encuentra el primer elemento que cumpla con la condición  
    // donde producto tenga un id3. Por tanto, Devuelve el primer elemento
    // que cumple con la función.
    

    console.log("8.4 - Usando find: Encontrar el producto con id 3. Find: Producto con id 3:");
    const productoId3 = productos.find(producto => producto.id === 3);
    console.log(productoId3);
    console.log("------------------");


    // Reduce a un array a un solo valor aplicando una función acumuladora.
    // Puede usarse para sumar, multiplicar, agrupar, etc.
    // Acumula todos los elementos en un solo resultado

    console.log("8.5 Usando reduce: Calcular el valor total del inventario (precio * stock)") 
    const valorTotal = productos.reduce((total, producto) => 
        total + (producto.precio * producto.stock), 0);
    console.log("Valor Total del inventario: ",`$${valorTotal}`);


    // =========================================
    // EJERCICIO 9: Estudiantes y Calificaciones
    // =========================================
        /*
        Este ejercicio se requiere trabajar con datos más complejos que incluyen arrays dentro
        de objetos. Para calcular promedios de calificaciones, se ha usado reduce() para sumar todas
        las notas y dividir por la cantidad. Luego para mostrar solo dos decimales se aplica toFixed(2).
        En los ejecicios anteriores se usaron nuevamente los métodos: map() para transformar datos, filter() con condiciones calculadas,
        y find() para búsquedas específicas.
        */

        const estudiantes = [
            { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
            { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
            { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
            { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
        ];


        // 1. Usando forEach: Mostrar nombre y edad de cada estudiante
        console.log("9.1 - ForEach: Nombre y edad de estudiantes:");
        estudiantes.forEach(estudiante => {
            console.log(`${estudiante.nombre}: ${estudiante.edad} años`);
        });
        console.log("------------------");

        // Usando map: Crear array de objetos con nombre y promedio de calificaciones
        console.log("9.2 - Map: Estudiantes con promedio:");
        const estudiantesConPromedio = estudiantes.map(estudiante => {
            const promedio = estudiante.calificaciones.reduce((sum, cal) => sum + cal, 0) / estudiante.calificaciones.length;
            return { nombre: estudiante.nombre, promedio: promedio.toFixed(2) };
        });
        console.log(estudiantesConPromedio);
        console.log("------------------");


        // Usando filter: Obtener estudiantes con promedio mayor a 7.5
        console.log("9.3 - Filter: Estudiantes con promedio > 7.5:");
        const estudiantesDestacados = estudiantes.filter(estudiante => {
            const promedio = estudiante.calificaciones.reduce((sum, cal) => sum + cal, 0) / estudiante.calificaciones.length;
            return promedio > 7.5;
        });
        console.log(estudiantesDestacados);
        console.log("------------------");


        // Usando find: Encontrar estudiante llamado 'María
        console.log("9.4 - Find: Estudiante llamado María:");
        const maria = estudiantes.find(estudiante => estudiante.nombre === 'María');
        console.log(maria);
        console.log("------------------");


        // Usando reduce: Calcular la edad promedio de los estudiantes
        console.log("9.5 - Reduce: Edad promedio de estudiantes:");
        const edadPromedio = estudiantes.reduce((total, estudiante) => 
            total + estudiante.edad, 0) / estudiantes.length;
        console.log(`${edadPromedio.toFixed(2)} años`);
        

        
        // ================================
        // EJERCICIO 10: Películas
        // ================================
        

        /*
            Para este último ejercicio se requiere aplicar los métodos de array usados en el ejercicio 8 y 9, 
            ahora aplicado con datos de películas, donde las condiciones pueden ser más de una. 
            La estructura mantiene la misma estructura o patrón : forEach para mostrar, map para transformar,
            filter para seleccionar, find para buscar, y reduce para acumular valores.
            En el caso de filter() se requiere filtrar por genero y rating.
            En map() transformar strings con toUpperCase() en map().
        */
        
        const peliculas = [
        { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
        { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
        { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
        { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
        { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
        ];

        console.log("10.1 - ForEach: Título y año de películas:");
        peliculas.forEach(pelicula => {
            console.log(`${pelicula.titulo} (${pelicula.año})`);
        });
        console.log("");

        console.log("10.2 - Map: Títulos en mayúsculas:");
        const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
        console.log(titulosMayusculas);
        console.log("");

        console.log("10.3 - Filter: Dramas con rating > 8.5:");
        const dramasDestacados = peliculas.filter(pelicula => 
            pelicula.genero === 'drama' && pelicula.rating > 8.5
        );
        console.log(dramasDestacados);
        console.log("");

        console.log("10.4 - Find: Película estrenada en 2014:");
        const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
        console.log(pelicula2014);
        console.log("");

        console.log("10.5 - Reduce: Duración total de todas las películas:");
        const duracionTotal = peliculas.reduce((total, pelicula) => 
            total + pelicula.duracion, 0);
        console.log(`${duracionTotal} minutos`);
}



