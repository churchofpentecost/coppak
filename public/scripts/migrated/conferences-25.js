
            (function () {
                const wrap = document.querySelector(".mobile-nav__wrapper");
                const burger = document.querySelector(".coppak-burger");
                if (!wrap || !burger) return;

                function close() {
                    if (!wrap.classList.contains("expanded")) return;
                    wrap.classList.remove("expanded");
                    document.body.classList.remove("locked");
                    burger.setAttribute("aria-expanded", "false");
                    burger.focus();
                }

                // Sync aria-expanded with the .expanded class toggled by Oxpins' jQuery
                const obs = new MutationObserver(function () {
                    burger.setAttribute(
                        "aria-expanded",
                        wrap.classList.contains("expanded") ? "true" : "false",
                    );
                });
                obs.observe(wrap, { attributes: true, attributeFilter: ["class"] });

                // Escape closes the menu and returns focus to the burger
                document.addEventListener("keydown", function (e) {
                    if (e.key === "Escape") close();
                });

                // Close when any in-menu link is tapped (let nav happen, then close)
                wrap.addEventListener("click", function (e) {
                    const link = e.target.closest && e.target.closest("a");
                    if (
                        link &&
                        link.getAttribute("href") &&
                        !link.classList.contains("mobile-nav__toggler")
                    ) {
                        setTimeout(close, 0);
                    }
                });
            })();
        