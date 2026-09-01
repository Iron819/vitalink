/**
 * VitaLink - Plataforma de Monitoreo Preventivo para Adultos Mayores
 * Lógica Interactiva y Experiencia de Usuario
 * Desarrollado por Startup CodeBrokers
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initSeniorAccessibilityMode();
  initLiveSimulator();
  initRoleTabs();
  initPricingToggle();
  initFaqAccordion();
  initContactForm();
  initLiveTelemetryCounters();
});

/* ==========================================================================
   1. Navbar Scroll Effect & Active Links
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('main-header');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur-md', 'border-b', 'border-slate-100');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-white/95', 'shadow-md', 'backdrop-blur-md', 'border-b', 'border-slate-100');
      navbar.classList.add('bg-transparent');
    }
  });
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   3. Modo Senior / Senior Accessibility Mode (High Contrast & Big Fonts)
   ========================================================================== */
function initSeniorAccessibilityMode() {
  const seniorBtn = document.getElementById('btn-senior-mode');
  const seniorBtnMobile = document.getElementById('btn-senior-mode-mobile');
  const seniorStatusText = document.getElementById('senior-mode-status');

  function toggleSeniorMode() {
    const isSeniorActive = document.body.classList.toggle('senior-accessible-mode');
    
    if (isSeniorActive) {
      if (seniorStatusText) seniorStatusText.textContent = 'Desactivar Modo Senior';
      showToast('👁️ Modo Senior Activado: Tipografía ampliada y alto contraste para mayor legibilidad.');
      localStorage.setItem('vitalink_senior_mode', 'true');
      if (seniorBtn) {
        seniorBtn.classList.add('bg-amber-400', 'text-slate-950', 'border-amber-500');
        seniorBtn.classList.remove('bg-white', 'text-slate-700');
      }
    } else {
      if (seniorStatusText) seniorStatusText.textContent = 'Modo Senior (Accesible)';
      showToast('Modo Estándar restablecido.');
      localStorage.setItem('vitalink_senior_mode', 'false');
      if (seniorBtn) {
        seniorBtn.classList.remove('bg-amber-400', 'text-slate-950', 'border-amber-500');
        seniorBtn.classList.add('bg-white', 'text-slate-700');
      }
    }
  }

  if (seniorBtn) seniorBtn.addEventListener('click', toggleSeniorMode);
  if (seniorBtnMobile) seniorBtnMobile.addEventListener('click', toggleSeniorMode);

  // Restore state
  if (localStorage.getItem('vitalink_senior_mode') === 'true') {
    toggleSeniorMode();
  }
}

/* ==========================================================================
   4. Live Interactive Simulator of VitaLink Ecosystem
   ========================================================================== */
function initLiveSimulator() {
  // Metric DOM Elements
  const heartBpmEl = document.getElementById('sim-bpm');
  const bpEl = document.getElementById('sim-bp');
  const spo2El = document.getElementById('sim-spo2');
  const tempEl = document.getElementById('sim-temp');
  const statusBadgeEl = document.getElementById('sim-status-badge');
  const alertCardEl = document.getElementById('sim-alert-card');
  const alertMsgEl = document.getElementById('sim-alert-msg');
  const alertTimeEl = document.getElementById('sim-alert-time');
  const ecgLine = document.querySelector('.ecg-line');
  const ecgStatusDot = document.getElementById('sim-ecg-dot');

  // Simulation Trigger Buttons
  const btnNormal = document.getElementById('btn-sim-normal');
  const btnAlert = document.getElementById('btn-sim-alert');
  const btnFall = document.getElementById('btn-sim-fall');
  const btnMeds = document.getElementById('btn-sim-meds');
  const simButtons = [btnNormal, btnAlert, btnFall, btnMeds];

  function setActiveSimButton(activeBtn) {
    simButtons.forEach(btn => {
      if (!btn) return;
      btn.classList.remove('bg-sky-600', 'text-white', 'border-sky-600', 'ring-2', 'ring-sky-300');
      btn.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
    });
    if (activeBtn) {
      activeBtn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
      activeBtn.classList.add('bg-sky-600', 'text-white', 'border-sky-600', 'ring-2', 'ring-sky-300');
    }
  }

  // Scenarios
  function triggerNormal() {
    setActiveSimButton(btnNormal);
    if (heartBpmEl) heartBpmEl.textContent = '72';
    if (bpEl) bpEl.textContent = '118/76';
    if (spo2El) spo2El.textContent = '98%';
    if (tempEl) tempEl.textContent = '36.6°C';

    if (statusBadgeEl) {
      statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300';
      statusBadgeEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Estado: Estable & Seguro';
    }

    if (alertCardEl) {
      alertCardEl.className = 'p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 text-emerald-900 transition-all';
      if (alertMsgEl) alertMsgEl.innerHTML = '<strong>Todo en orden:</strong> Signos vitales dentro del rango óptimo. Última lectura hace 1 minuto.';
      if (alertTimeEl) alertTimeEl.textContent = 'Ahora mismo';
    }

    if (ecgLine) ecgLine.style.stroke = '#10b981';
    if (ecgStatusDot) ecgStatusDot.className = 'w-3 h-3 rounded-full bg-emerald-500 animate-ping';
  }

  function triggerHeartAlert() {
    setActiveSimButton(btnAlert);
    if (heartBpmEl) heartBpmEl.textContent = '128';
    if (bpEl) bpEl.textContent = '145/95';
    if (spo2El) spo2El.textContent = '94%';
    if (tempEl) tempEl.textContent = '37.1°C';

    if (statusBadgeEl) {
      statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300';
      statusBadgeEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span> Estado: Frecuencia Cardíaca Elevada';
    }

    if (alertCardEl) {
      alertCardEl.className = 'p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-950 shadow-md transition-all';
      if (alertMsgEl) alertMsgEl.innerHTML = '<strong>⚠️ Alerta Preventiva:</strong> Taquicardia sostenida (128 BPM) detectada en reposo. Notificación enviada a familiar (Carlos).';
      if (alertTimeEl) alertTimeEl.textContent = 'Hace 30 seg';
    }

    if (ecgLine) ecgLine.style.stroke = '#f59e0b';
    if (ecgStatusDot) ecgStatusDot.className = 'w-3 h-3 rounded-full bg-amber-500 animate-ping';
    showToast('⚠️ Alerta simulada: Se notificó a la familia por elevación del ritmo cardíaco.');
  }

  function triggerFallEmergency() {
    setActiveSimButton(btnFall);
    if (heartBpmEl) heartBpmEl.textContent = '104';
    if (bpEl) bpEl.textContent = '132/88';
    if (spo2El) spo2El.textContent = '96%';
    if (tempEl) tempEl.textContent = '36.5°C';

    if (statusBadgeEl) {
      statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-400 animate-bounce';
      statusBadgeEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span> 🚨 EMERGENCIA: Impacto y Caída Detectada';
    }

    if (alertCardEl) {
      alertCardEl.className = 'p-4 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-950 shadow-lg ring-2 ring-rose-200 transition-all';
      if (alertMsgEl) alertMsgEl.innerHTML = '<strong>🚨 Alarma Crítica:</strong> Acelerómetro registró impacto brusco en sala de estar. Geolocalización compartida y enlace con Central Médica activado.';
      if (alertTimeEl) alertTimeEl.textContent = 'Inmediato (00:05)';
    }

    if (ecgLine) ecgLine.style.stroke = '#ef4444';
    if (ecgStatusDot) ecgStatusDot.className = 'w-3 h-3 rounded-full bg-rose-600 animate-ping';
    showToast('🚨 SOS Caída Simulada: Notificación multicanal disparada a familiares y ambulancia.');
  }

  function triggerMedicationReminder() {
    setActiveSimButton(btnMeds);
    if (statusBadgeEl) {
      statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-300';
      statusBadgeEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-sky-500"></span> Medicación al Día';
    }

    if (alertCardEl) {
      alertCardEl.className = 'p-4 rounded-xl border border-sky-200 bg-sky-50 text-sky-950 transition-all';
      if (alertMsgEl) alertMsgEl.innerHTML = '<strong>💊 Recordatorio de Salud:</strong> Confirmada toma de Enalapril 10mg (Horario 08:00 AM). Registrado en el expediente clínico digital.';
      if (alertTimeEl) alertTimeEl.textContent = 'Hace 2 min';
    }

    showToast('💊 Registro de medicación sincronizado con el expediente del paciente.');
  }

  if (btnNormal) btnNormal.addEventListener('click', triggerNormal);
  if (btnAlert) btnAlert.addEventListener('click', triggerHeartAlert);
  if (btnFall) btnFall.addEventListener('click', triggerFallEmergency);
  if (btnMeds) btnMeds.addEventListener('click', triggerMedicationReminder);
}

/* ==========================================================================
   5. Role Switcher Tabs (Familiar, Adulto Mayor, Clínica)
   ========================================================================== */
function initRoleTabs() {
  const tabs = document.querySelectorAll('.role-tab-btn');
  const views = document.querySelectorAll('.role-view-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetRole = tab.dataset.role;

      // Update tab styles
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-sky-600', 'text-white', 'shadow-md');
        t.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });
      tab.classList.add('active', 'bg-sky-600', 'text-white', 'shadow-md');
      tab.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');

      // Show matching view
      views.forEach(v => {
        if (v.id === `role-view-${targetRole}`) {
          v.classList.remove('hidden');
          v.classList.add('block', 'animate-fade-in');
        } else {
          v.classList.add('hidden');
          v.classList.remove('block');
        }
      });
    });
  });
}

/* ==========================================================================
   6. Pricing Billing Toggle (Monthly / Annual Discount)
   ========================================================================== */
function initPricingToggle() {
  const toggleCheckbox = document.getElementById('pricing-toggle');
  const priceBasic = document.getElementById('price-basic');
  const pricePro = document.getElementById('price-pro');
  const priceClinic = document.getElementById('price-clinic');
  const periodLabels = document.querySelectorAll('.pricing-period');

  if (!toggleCheckbox) return;

  toggleCheckbox.addEventListener('change', () => {
    const isAnnual = toggleCheckbox.checked;

    if (isAnnual) {
      if (priceBasic) priceBasic.innerHTML = 'S/ 29 <span class="text-sm font-normal text-slate-500">/mes (facturado anual)</span>';
      if (pricePro) pricePro.innerHTML = 'S/ 65 <span class="text-sm font-normal text-slate-500">/mes (facturado anual)</span>';
      if (priceClinic) priceClinic.innerHTML = 'S/ 240 <span class="text-sm font-normal text-slate-500">/mes (facturado anual)</span>';
      periodLabels.forEach(p => p.textContent = 'Ahorras un 20% anual');
      showToast('🎉 ¡Descuento del 20% anual aplicado a todos los planes!');
    } else {
      if (priceBasic) priceBasic.innerHTML = 'S/ 39 <span class="text-sm font-normal text-slate-500">/mes</span>';
      if (pricePro) pricePro.innerHTML = 'S/ 79 <span class="text-sm font-normal text-slate-500">/mes</span>';
      if (priceClinic) priceClinic.innerHTML = 'S/ 299 <span class="text-sm font-normal text-slate-500">/mes</span>';
      periodLabels.forEach(p => p.textContent = 'Facturación mensual');
    }
  });
}

/* ==========================================================================
   7. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all others
      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent) otherContent.classList.add('hidden');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ==========================================================================
   8. Contact & Demo Form Submission with Modal Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('demo-contact-form');
  const modal = document.getElementById('modal-feedback');
  const modalClose = document.getElementById('modal-feedback-close');
  const modalTitle = document.getElementById('modal-feedback-title');
  const modalMsg = document.getElementById('modal-feedback-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const role = document.getElementById('form-role')?.value;
    const phone = document.getElementById('form-phone')?.value.trim();

    if (!name || !email) {
      showToast('⚠️ Por favor completa tu nombre y correo electrónico.');
      return;
    }

    // Submit animation simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Procesando solicitud...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (modal && modalTitle && modalMsg) {
        modalTitle.textContent = `¡Gracias por tu interés, ${name}!`;
        modalMsg.textContent = `Hemos registrado tu solicitud para el perfil de "${role || 'Familiar'}". Un asesor de CodeBrokers se comunicará contigo al correo ${email} y teléfono ${phone || 'registrado'} para programar tu demostración de VitaLink.`;
        modal.classList.remove('hidden');
      } else {
        showToast('✅ ¡Solicitud recibida con éxito! Nos contactaremos pronto.');
      }
    }, 1000);
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   9. Live Telemetry Metric Animated Counters
   ========================================================================== */
function initLiveTelemetryCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  let hasAnimated = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || '0');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      let count = 0;
      const step = target / 50;

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = `${prefix}${isDecimal ? target.toFixed(1) : Math.round(target)}${suffix}`;
          clearInterval(timer);
        } else {
          counter.textContent = `${prefix}${isDecimal ? count.toFixed(1) : Math.round(count)}${suffix}`;
        }
      }, 30);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('section-stats');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   10. Toast Notification System
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white text-sm font-medium px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 transform translate-y-20 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-info-circle text-sky-400 text-lg flex-shrink-0"></i><span>${message}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 4000);
}
