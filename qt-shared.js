(function () {
  const THEME_SETTLE_MS = 820;
  const root = document.documentElement;
  let themeTimer = 0;
  let themeObserverReady = false;

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }
    callback();
  }

  function readJson(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function removeStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {}
  }

  function setupThemeMotion() {
    requestAnimationFrame(() => root.classList.add("qt-theme-ready"));
    const observer = new MutationObserver((mutations) => {
      if (!themeObserverReady) {
        themeObserverReady = true;
        return;
      }
      if (!mutations.some((item) => item.attributeName === "data-theme")) return;
      root.classList.add("qt-theme-changing");
      window.clearTimeout(themeTimer);
      themeTimer = window.setTimeout(() => {
        root.classList.remove("qt-theme-changing");
      }, THEME_SETTLE_MS);
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    themeObserverReady = true;
  }

  const auth = {
    usersKey: "qt-users",
    sessionKey: "qt-session",
    passwordPattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    usernamePattern: /^[A-Za-z0-9_]{3,24}$/,
    mode: "login",
    passwordVisible: false,
    modal: null,
    previousFocus: null,
    slots: [],
  };

  function getUsers() {
    return readJson(auth.usersKey, []);
  }

  function setUsers(users) {
    writeJson(auth.usersKey, users);
  }

  function getSession() {
    const session = readJson(auth.sessionKey, null);
    if (!session || !session.username) return null;
    const users = getUsers();
    const user = users.find(
      (item) => item.username.toLowerCase() === session.username.toLowerCase(),
    );
    if (!user) {
      removeStorage(auth.sessionKey);
      return null;
    }
    return { username: user.username };
  }

  function setSession(username) {
    writeJson(auth.sessionKey, { username });
  }

  function clearSession() {
    removeStorage(auth.sessionKey);
  }

  function passwordIcon(isVisible) {
    if (isVisible) {
      return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.3A9.8 9.8 0 0 1 12 5c5 0 8.5 4.4 9.5 7a13.7 13.7 0 0 1-2.3 3.4M6.1 6.2A13.2 13.2 0 0 0 2.5 12c1 2.6 4.5 7 9.5 7 1.3 0 2.5-.3 3.6-.8"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"/><circle cx="12" cy="12" r="2.6" stroke-width="1.8"/></svg>';
  }

  function ensureAuthModal() {
    if (auth.modal) return auth.modal;
    const modal = document.createElement("div");
    modal.id = "qt-auth-modal";
    modal.className = "qt-auth-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = [
      '<div class="qt-auth-dialog" role="dialog" aria-modal="true" aria-labelledby="qt-auth-title">',
      '  <div class="qt-auth-head">',
      '    <div id="qt-auth-title" class="qt-auth-title">Đăng nhập</div>',
      '    <button type="button" class="qt-auth-close" data-auth-close aria-label="Đóng">',
      '      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"/></svg>',
      "    </button>",
      "  </div>",
      '  <div class="qt-auth-tabs" role="tablist" aria-label="Tài khoản">',
      '    <button type="button" class="qt-auth-tab is-active" data-auth-mode="login">Đăng nhập</button>',
      '    <button type="button" class="qt-auth-tab" data-auth-mode="register">Đăng kí</button>',
      "  </div>",
      '  <form class="qt-auth-form" data-auth-form>',
      '    <div class="qt-auth-field">',
      '      <label for="qt-auth-username">Tài khoản</label>',
      '      <input id="qt-auth-username" name="username" type="text" autocomplete="username" spellcheck="false" required />',
      "    </div>",
      '    <div class="qt-auth-field">',
      '      <label for="qt-auth-password">Mật khẩu</label>',
      '      <div class="qt-password-wrap">',
      '        <input id="qt-auth-password" name="password" type="password" autocomplete="current-password" required />',
      '        <button type="button" class="qt-password-toggle" data-password-toggle aria-label="Hiện mật khẩu"></button>',
      "      </div>",
      "    </div>",
      '    <p class="qt-auth-hint" data-auth-hint>Mật khẩu cần ít nhất 8 kí tự, gồm chữ và số, không dùng kí tự đặc biệt.</p>',
      '    <div class="qt-auth-message" data-auth-message role="status" aria-live="polite"></div>',
      '    <button type="submit" class="qt-auth-submit">Đăng nhập</button>',
      "  </form>",
      "</div>",
    ].join("");
    document.body.appendChild(modal);
    auth.modal = modal;

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest("[data-auth-close]")) {
        closeAuthModal();
      }
    });
    modal.querySelectorAll("[data-auth-mode]").forEach((button) => {
      button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
    });
    modal.querySelector("[data-password-toggle]").addEventListener("click", () => {
      auth.passwordVisible = !auth.passwordVisible;
      updatePasswordVisibility();
    });
    modal.querySelector("[data-auth-form]").addEventListener("submit", handleAuthSubmit);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeAuthModal();
      }
    });
    updatePasswordVisibility();
    return modal;
  }

  function setAuthMode(mode) {
    auth.mode = mode === "register" ? "register" : "login";
    const modal = ensureAuthModal();
    const title = modal.querySelector("#qt-auth-title");
    const password = modal.querySelector("#qt-auth-password");
    const submit = modal.querySelector(".qt-auth-submit");
    const message = modal.querySelector("[data-auth-message]");
    title.textContent = auth.mode === "register" ? "Đăng kí" : "Đăng nhập";
    submit.textContent = auth.mode === "register" ? "Tạo tài khoản" : "Đăng nhập";
    password.autocomplete = auth.mode === "register" ? "new-password" : "current-password";
    message.textContent = "";
    message.classList.remove("is-error");
    modal.querySelectorAll("[data-auth-mode]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.authMode === auth.mode);
    });
  }

  function updatePasswordVisibility() {
    const modal = ensureAuthModal();
    const input = modal.querySelector("#qt-auth-password");
    const button = modal.querySelector("[data-password-toggle]");
    input.type = auth.passwordVisible ? "text" : "password";
    button.innerHTML = passwordIcon(auth.passwordVisible);
    button.setAttribute("aria-label", auth.passwordVisible ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    button.title = auth.passwordVisible ? "Ẩn mật khẩu" : "Hiện mật khẩu";
  }

  function setAuthMessage(text, isError) {
    const message = ensureAuthModal().querySelector("[data-auth-message]");
    message.textContent = text;
    message.classList.toggle("is-error", Boolean(isError));
  }

  function handleAuthSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    if (!auth.usernamePattern.test(username)) {
      setAuthMessage("Tài khoản dùng 3-24 chữ, số hoặc dấu gạch dưới.", true);
      return;
    }
    if (!auth.passwordPattern.test(password)) {
      setAuthMessage("Mật khẩu phải có chữ và số, tối thiểu 8 kí tự, không kí tự đặc biệt.", true);
      return;
    }

    const users = getUsers();
    const existing = users.find(
      (item) => item.username.toLowerCase() === username.toLowerCase(),
    );

    if (auth.mode === "register") {
      if (existing) {
        setAuthMessage("Tài khoản này đã tồn tại.", true);
        return;
      }
      users.push({ username, password });
      setUsers(users);
      setSession(username);
      setAuthMessage("Đăng kí xong, đã đăng nhập.", false);
      renderAuthSlots();
      window.setTimeout(closeAuthModal, 450);
      return;
    }

    if (!existing || existing.password !== password) {
      setAuthMessage("Sai tài khoản hoặc mật khẩu.", true);
      return;
    }
    setSession(existing.username);
    setAuthMessage("Đăng nhập thành công.", false);
    renderAuthSlots();
    window.setTimeout(closeAuthModal, 350);
  }

  function openAuthModal(mode) {
    const modal = ensureAuthModal();
    auth.previousFocus = document.activeElement;
    auth.passwordVisible = false;
    setAuthMode(mode || "login");
    updatePasswordVisibility();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    window.setTimeout(() => {
      const input = modal.querySelector("#qt-auth-username");
      if (input) input.focus();
    }, 40);
  }

  function closeAuthModal() {
    const modal = ensureAuthModal();
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    const form = modal.querySelector("[data-auth-form]");
    form.reset();
    setAuthMessage("", false);
    if (auth.previousFocus && typeof auth.previousFocus.focus === "function") {
      auth.previousFocus.focus();
    }
  }

  function createAuthSlot(isMobile) {
    const slot = document.createElement("div");
    slot.className = isMobile ? "qt-auth-slot qt-auth-slot-mobile" : "qt-auth-slot";
    auth.slots.push(slot);
    return slot;
  }

  function renderAuthSlots() {
    const session = getSession();
    auth.slots.forEach((slot) => {
      slot.innerHTML = "";
      if (!session) {
        const login = document.createElement("button");
        login.type = "button";
        login.className = "qt-auth-trigger";
        login.textContent = "Đăng nhập";
        login.addEventListener("click", () => openAuthModal("login"));
        slot.append(login);
        return;
      }

      const name = document.createElement("span");
      name.className = "qt-auth-name";
      name.textContent = session.username;
      const logout = document.createElement("button");
      logout.type = "button";
      logout.className = "qt-auth-logout";
      logout.textContent = "Đăng xuất";
      logout.addEventListener("click", () => {
        clearSession();
        renderAuthSlots();
      });
      slot.append(name, logout);
    });
  }

  function setupAuth() {
    const siteToggle = document.querySelector(".site-theme-toggle");
    if (siteToggle && siteToggle.parentElement) {
      const desktopSlot = createAuthSlot(false);
      siteToggle.parentElement.insertBefore(desktopSlot, siteToggle);
    }
    const mobilePanel = document.getElementById("mobile-panel");
    const mobileToggle = mobilePanel && mobilePanel.querySelector(".mobile-theme-toggle");
    if (mobilePanel) {
      const mobileSlot = createAuthSlot(true);
      if (mobileToggle && mobileToggle.nextSibling) {
        mobilePanel.insertBefore(mobileSlot, mobileToggle.nextSibling);
      } else {
        mobilePanel.insertBefore(mobileSlot, mobilePanel.firstChild);
      }
    }
    ensureAuthModal();
    renderAuthSlots();
  }

  function setupContinueCards() {
    const progress = readJson("qt-reading-progress", null);
    if (!progress || !progress.href || !progress.arcId || !progress.chapterLabel) return;
    document.querySelectorAll("[data-continue-reading]").forEach((link) => {
      link.href = progress.href;
      const title = link.querySelector("[data-continue-title]");
      const percent = Math.max(0, Math.min(100, Math.round((progress.progress || 0) * 100)));
      if (title) {
        title.textContent = "Arc " + progress.arcId + " · " + progress.chapterLabel;
      }
      const oldProgress = link.querySelector(".qt-continue-progress");
      if (oldProgress) oldProgress.remove();
      const titleParent = title && title.parentElement;
      if (titleParent && percent > 2 && percent < 98) {
        const note = document.createElement("p");
        note.className = "qt-continue-progress mt-1";
        note.textContent = "Đã đọc " + percent + "%";
        titleParent.append(note);
      }
    });
  }

  function setupScrollTopNavigation() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    try {
      const shouldScrollTop = sessionStorage.getItem("qt-scroll-top-next") === "1";
      const params = new URLSearchParams(window.location.search);
      if (shouldScrollTop && params.get("resume") !== "1") {
        sessionStorage.removeItem("qt-scroll-top-next");
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
      }
    } catch (error) {}

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.searchParams.get("resume") === "1") return;
      try {
        sessionStorage.setItem("qt-scroll-top-next", "1");
      } catch (error) {}
    });
  }

  setupThemeMotion();
  onReady(() => {
    setupAuth();
    setupContinueCards();
    setupScrollTopNavigation();
  });
})();
