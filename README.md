# 🎬 Netflix Ratings Tooltip v0.1

Extensão de usuário para exibir notas de filmes e séries diretamente na interface da Netflix! Ao passar o mouse sobre um título, um balão (tooltip) aparece com as notas do IMDb, Rotten Tomatoes e Metacritic.

> ⚠️ **Versão 0.1** — Funciona melhor com a interface da Netflix em inglês (🇺🇸). Isso garante que os títulos localizados sejam compatíveis com a OMDb API.

## 🔧 Como funciona

1. O script detecta os elementos de título da Netflix com base no atributo `aria-label`.
2. Consulta a OMDb API usando o título exato (`t=`).
3. Exibe um tooltip com as notas disponíveis (IMDb, Rotten Tomatoes e Metacritic).
4. O balão desaparece após 5 segundos ou quando o mouse sai do card.

## 📌 Limitações

- Alguns títulos podem não retornar notas se estiverem ausentes na OMDb ou escritos de forma diferente.
- A API gratuita (`thewdb`) tem limite de uso diário — use sua própria chave OMDb para maior estabilidade.

## 📦 Instalação

- Crie uma pasta no seu computador, por exemplo: netflix-imdb-addon.
- Salve os arquivos manifest.json, content.js e icon.png nessa pasta.
# No Chrome:
- Vá para chrome://extensions/
- Ative o modo de desenvolvedor (canto superior direito).
- Clique em "Carregar sem compactação" e selecione a pasta da extensão.

## 🚀 Próximas versões (planejamento)

- Tradução automática de títulos (ou dicionário local).
- Compatibilidade com a interface em português.
- Opção para fixar o balão na tela.
- Suporte a múltiplas regiões da Netflix.

## 📄 Licença

[MIT](LICENSE)

---

Criado por [dilacrius](https://github.com/Dilacrius).
