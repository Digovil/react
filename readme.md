# React 🎁😘

Es una libería de JavaScript, de código abierto diseñada para crear interfaces de usuario.

Está constituido por:

- __Componentes:__ Parte de la interfaz de usuario que es independiente y reusable. Pueden ser componentes de clase o componentes funcionales.

- __Props:__ Es la manera en que los componentes se mandan argumentos. Es props de propiedades. Estos sólo pueden ser enviados de componentes padres a componentes hijos, pero no al contrario.

- __Componente Funcional:__ Función de JS/ES6 que retorna un elemento de React (JSX), debe de comenzar en mayúscula y este puede recibir valores:

        function Saludo(props) {
          return <h1>¡Hola, {props.nombre}!</h1>
        }

- __Componente de Clase:__ Es una clase de JavaScript moderno que retorna un elemento de JSX, este debe heredar de la clase de __React.Component__, deberá tener un metodo __render__ el cual deberá retornar un elemento de __JSX__, también puede recibir valores si es necesario:

        class Saludo extends React.Component {
          render() {
            return <h1>¡Hola, {this.props.nombre}!</h1>
          }
        }

- __Estado de Componente:__ Es la representación de javascript del conjunto de información que se presenta sobre el componente y sus valores actuales.

- __Hooks__:  Anteriormente se utilizaba los componentes de clase para poder trabajar con los estados de los componentes, donde le podíamos asignar estados a nuestros componentes, en versiones anteriores eso no se podía hacer en los componentes funcionales, hasta que llegarón los __hooks__ estos nos permiten asignar y actualizar el estado de un componente funcional.

Es una función especial que te permite trabajar con estados en componentes funcionales y otros aspectos de React; te permite trabajar con los distintos momentos de vida de un componente mientras está en la aplicación web, el más común es sin manejar el estado de un componente.   

Todo esto sin escribir un código de clase, lo que nos facilita escribir un código más conciso y fácil de entender.

- __Event listener:__ Función que es ejecutada cuando ocurre un evento específico.

## Herramientas 🛠👷🏾‍♂️

- [Documentación oficial](https://es.reactjs.org/docs/getting-started.html)
- [Extensión Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)


# JSX 💪🏾

Es __JavaScript XML__, la cual es una extensión de react que nos permite escribir en javascript cómo se verán los componentes usando una estructura similar a HTML. Su estructura, no necesariamente su estilo.

Esto nos permite una mejor visualización de su estructura y los errores y advertencia serán de mayor utilidad.

    const h1 = <h1>Hola mundo</h1>

Es decir con esta tegnología puedes utilizar cualquier elemento valido de html en javascript 😳 puedes agregar atributos a esos elementos en __jsx__, para especificar las características. Algunos atributos se escriben de forma distinta si se comparan con HTML. Si quiere ver los atributos de click aquí [clik](https://react-cn.github.io/react/docs/tags-and-attributes.html)

## Elementos vs Componentes

Son las unidades más pequeñas de React. Definen lo que se verá en la pantalla, es decir son las etiquetas que uno utiliza en el html, estás tienen que ser en minúsculas.

Los componentes en React están "hechos" de elementos.


