# 🏥 VitaLink — Landing Page Oficial

> **Ecosistema de Monitoreo Preventivo & Cuidado Integral para Adultos Mayores**  
> Desarrollado por la startup **CodeBrokers**

![VitaLink Status](https://img.shields.io/badge/Status-Completado%20%26%20Listo-success)
![Versión](https://img.shields.io/badge/Versi%C3%B3n-1.0.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green)

---

## 📖 Descripción del Proyecto

**VitaLink** es una plataforma digital de salud preventiva y acompañamiento continuo que conecta en un mismo ecosistema a:
1. **Adultos Mayores (Senior First):** Brindando seguridad, botón SOS de 1 toque, recordatorios amigables y fomento de su autonomía en el hogar.
2. **Familiares y Cuidadores:** Visualización en tiempo real de signos vitales, detección temprana de anomalías o caídas y eliminación de la incertidumbre.
3. **Clínicas, Hospitales y Profesionales de Salud (B2B):** Canal digital para recepción de alertas de emergencia con telemetría previa para agilizar el triaje y la atención médica.

Esta Landing Page fue construida desde cero como un repositorio independiente y limpio en base a la investigación y especificaciones del reporte de la startup CodeBrokers.

---

## ✨ Características y Secciones de la Landing Page

- 🚀 **Hero Section de Alto Impacto:** Propuesta de valor, llamadas a la acción y tarjeta de telemetría de paciente con gráfica de ritmo cardíaco (ECG) animada.
- 📊 **Contadores de Impacto Animados:** Reducción de tiempo de respuesta (-68%), precisión en alertas (99.4%) y métricas clave de salud preventiva.
- ⚖️ **Problemática vs Solución:** Comparativa visual detallada entre el modelo tradicional reactivo y el ecosistema proactivo de VitaLink (metodología 5W2H & Lean UX).
- 💎 **6 Pilares de la Solución:** Monitoreo preventivo 24/7, detección de caídas y alertas inteligentes, expediente clínico digital unificado, red de enlace hospitalario, modo senior accesible y gestor de medicación.
- 🎮 **Simulador Interactivo en Vivo:**
  - **Selector de 3 Roles:** *Vista Familiar (Dashboard)*, *Vista Adulto Mayor (Modo Simple)* y *Vista Red Médica/Clínica (Portal B2B)*.
  - **Detonador de Escenarios en Tiempo Real:** Simulación de ritmo normal, alerta de taquicardia/presión alta, emergencia por caída con impacto SOS y confirmación de toma de medicamentos.
- 👥 **Segmentos Objetivo:** Enfoque para familias/adultos mayores (B2C) y prestadores de salud (B2B).
- 🏷️ **Planes y Precios Transparentes:** Toggle interactivo Mensual / Anual con cálculo automático de 20% de descuento.
- 👨‍💻 **Startup Profile & Equipo CodeBrokers:** Misión, Visión y presentación del equipo fundador (Merly Salon Puerta, Yazid Said Conde).
- 🌟 **Testimonios y Validación:** Historias de impacto de familiares, especialistas médicos y adultos mayores.
- ❓ **Preguntas Frecuentes (FAQ Accordion):** Respuestas a dudas técnicas, compatibilidad de dispositivos y privacidad médica.
- 📝 **Formulario de Contacto & Demostración:** Formulario interactivo con validación, estados de carga y modal de confirmación.
- 👁️ **Modo Senior (Accesibilidad WCAG 2.1):** Botón accesible en el navbar que amplía dinámicamente la tipografía, incrementa el contraste y maximiza los elementos táctiles.

---

## 📁 Estructura del Repositorio

```
vitalink/
├── index.html          # Estructura semántica HTML5, Tailwind CSS y componentes
├── styles.css          # Estilos personalizados, animaciones ECG, glassmorphism y Modo Senior
├── app.js              # Lógica interactiva (Simulador, roles, accesibilidad, precios y FAQ)
├── assets/
│   ├── logo.svg        # Logotipo vectorizado de VitaLink
│   └── favicon.svg     # Favicon oficial
└── README.md           # Documentación técnica y guía de uso
```

---

## 🚀 Cómo Visualizar y Ejecutar el Proyecto

### Opción 1: Abrir directamente en el navegador
Puedes hacer doble clic en el archivo `index.html` en el explorador de archivos de Windows o arrastrarlo a cualquier navegador web (Chrome, Edge, Firefox, etc.).

### Opción 2: Servidor local con Python (Recomendado)
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
python -m http.server 3000
```
Luego abre tu navegador en `http://localhost:3000`.

---

## 🌐 Opciones de Despliegue

La landing page es 100% estática y ligera (cero dependencias de servidor):
- **GitHub Pages:** Sube los archivos a tu repositorio en GitHub y activa GitHub Pages en `Settings > Pages > Branch: main`.
- **Vercel / Netlify:** Conecta el repositorio de GitHub y se desplegará automáticamente con 1 solo clic.

---

## 👨‍💻 Desarrollado por
**Startup CodeBrokers**  
*Proyecto VitaLink — Conectando el cuidado, protegiendo vidas.*
