let currentTooltip = null;
let currentCard = null;

document.addEventListener("mouseover", async function (e) {
  const card = e.target.closest("[aria-label]");
  if (!card || card === currentCard) return;

  const title = card.getAttribute("aria-label");
  if (!title) return;

  card.dataset.imdbChecked = "true";
  currentCard = card;

  const apiKey = "thewdb"; // Use sua chave se quiser mais estabilidade
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data || data.Response === "False") return;

    let imdb = "N/A", rotten = "N/A", metacritic = "N/A";

    if (data.Ratings && Array.isArray(data.Ratings)) {
      for (const rating of data.Ratings) {
        if (rating.Source === "Internet Movie Database") imdb = rating.Value;
        if (rating.Source === "Rotten Tomatoes") rotten = rating.Value;
        if (rating.Source === "Metacritic") metacritic = rating.Value;
      }
    }

    if (currentTooltip) currentTooltip.remove();

    const tooltip = document.createElement("div");
    tooltip.innerHTML = `<strong>${title}</strong><br>IMDb: ${imdb}<br>🍅 Rotten: ${rotten}<br>Metacritic: ${metacritic}`;
    
    Object.assign(tooltip.style, {
      position: "fixed",
      background: "#111",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: "8px",
      fontSize: "14px",
      zIndex: "9999999",
      top: e.clientY + 10 + "px",
      left: e.clientX + 10 + "px",
      pointerEvents: "none",
      boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
      maxWidth: "250px",
      lineHeight: "1.5"
    });

    document.body.appendChild(tooltip);
    currentTooltip = tooltip;

    const removeTooltip = (event) => {
      if (!card.contains(event.relatedTarget)) {
        tooltip.remove();
        currentTooltip = null;
        currentCard = null;
        card.removeEventListener("mouseleave", removeTooltip);
      }
    };

    card.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (currentTooltip) {
            currentTooltip.remove();
            currentTooltip = null;
            currentCard = null;
          }
        }, 5000); // 5000 ms = 5 segundos
      });
      
  } catch (err) {
    console.error("Erro ao buscar informações:", err);
  }
});
