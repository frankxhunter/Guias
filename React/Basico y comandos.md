# Primeros pasos en React y comando fundamentales

## Comandos para ejecutar react en html

```html
     <!-- React Script -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script, para compilar jsx -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
        const app = document.getElementById('app')
        ReactDOM.render(<h1>Hello world, my name is Frank</h1>, app)
    </script>
```
