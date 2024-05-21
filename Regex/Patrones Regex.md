# Patrones útiles

## Para passwords

``/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{8,16}$/``

## Para emails

``/^[a-zA-Z\d-_]+@[a-zA-Z0-9.]+.[a-z]+$/``

## Para fecha formato HH:MM:SS

``/([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?/``

