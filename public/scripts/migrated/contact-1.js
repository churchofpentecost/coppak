(function(){const MAP_LAT = 31.4737;
const MAP_LNG = 74.2941;
const MAP_LABEL = "The Church of Pentecost Lahore Pakistan";

        window.coppakReady("DOMContentLoaded", () => {
            if (typeof L === "undefined") return;
            const el = document.getElementById("coppak-map");
            if (!el) return;
            const map = L.map(el).setView([MAP_LAT, MAP_LNG], 14);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
                maxZoom: 19,
            }).addTo(map);
            L.marker([MAP_LAT, MAP_LNG]).addTo(map).bindPopup(MAP_LABEL).openPopup();
        });
    })();