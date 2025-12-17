# Punto Financiero

Sistema interno de gestión para operaciones de **créditos de consumo**, orientado a controlar clientes, comercios adheridos, créditos, cobros, vencimientos y financistas desde un único panel.

El proyecto está pensado como una **herramienta administrativa privada**, no como una app pública.

---

## 🚀 Estado del proyecto

🟡 **En desarrollo activo**

Actualmente el sistema se encuentra en etapa de:
- Maquetado visual (UI)
- Definición de flujos
- Organización de componentes
- Preparación para autenticación y rutas protegidas

La lógica de negocio y persistencia de datos se incorporará en etapas posteriores.

---

## 🧠 ¿Qué hace el sistema?

El sistema permite (o permitirá):

### 📊 Dashboard
- Total de dinero liberado  
- Total de dinero financiado  
- Reintegro por cuotas  
- Dinero en circulación  
- Dinero liberado por financista  

### 👤 Clientes
- Alta y edición de clientes  
- Visualización de créditos asociados  

### 🏪 Comercios adheridos
- Gestión de comercios  
- Asociación de condiciones de financiación (cuotas / intereses)  

### 💳 Créditos
- Registro de créditos otorgados  
- Asociación a cliente, comercio y financista  
- Control individual de cuotas  

### ⏰ Cobros / Vencimientos
- Visualización de cuotas pendientes  
- Registro de pagos (efectivo / transferencia / cuenta corriente)  
- Gestión por cuota (cada cuota tiene su propio ID)  

### 🏦 Financistas
- Alta de financistas  
- Comisión asociada  
- Créditos otorgados por cada uno  

### 🔐 Login (en preparación)
- Acceso mediante modal  
- Preparado para futuras rutas protegidas  

---

## 🧱 Tecnologías utilizadas

### Frontend
- React  
- Vite  
- React-Bootstrap  
- Bootstrap 5  
- JavaScript (ES6+)  

### Estilos
- Bootstrap (tema oscuro)  
- Componentes reutilizables  
- Diseño jerárquico (cards principales y secundarios)  

---

## 🗂️ Estructura del proyecto

```text
src/
├── components/
│   ├── dashboard/
│   ├── forms/
│   ├── login/
│   └── table/
├── pages/
├── services/
├── hooks/
├── helpers/
├── App.jsx
└── main.jsx
