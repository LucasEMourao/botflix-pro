# 🎬 Botflix Pro

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-FF6D5B?style=for-the-badge&logo=n8n&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

O **Botflix Pro** é um assistente inteligente de recomendações cinematográficas que une o poder da IA generativa com dados reais de mercado. O projeto utiliza uma interface moderna para capturar a intenção do usuário e um motor de automação robusto no backend (n8n) para processar dados via Inteligência Artificial e APIs de cinema.

---

## 🧠 Como o Projeto Funciona?

O diferencial deste projeto é o seu "Backend as a Service" orquestrado via n8n. O fluxo funciona da seguinte forma:

1.  **Interface (Frontend):** O usuário envia uma mensagem (ex: "quero um filme de suspense no espaço") via interface React/Vite.
2.  **Gatilho (Webhook):** O prompt é enviado para um Webhook no n8n via método POST com o campo `userPrompt`.
3.  **Inteligência Artificial (AI Agent):** O **Google Gemini** processa o texto, identifica o melhor filme correspondente e retorna estritamente o título em formato JSON.
4.  **Enriquecimento (HTTP Request):** O título retornado pela IA é enviado para a API oficial do **The Movie Database (TMDB)** para buscar dados reais (poster, sinopse, nota e data de lançamento).
5.  **Entrega:** O sistema responde à requisição inicial com o objeto completo do filme para renderização imediata.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Framework:** React + Vite.
- **Linguagem:** TypeScript.
- **Estilização:** CSS Moderno.

### Backend & Automação (n8n)
- **n8n:** Orquestrador de fluxo low-code.
- **Google Gemini:** Modelo de linguagem (LLM) para processamento de intenções.
- **TMDB API:** Fonte oficial de metadados cinematográficos.

---

## ⚙️ Configuração do Ambiente

### 1. Backend (n8n)
O arquivo de configuração da automação está localizado em `/n8n/WorflowBotflix.json`.
1.  Importe o arquivo `.json` no seu painel do n8n.
2.  Configure as credenciais:
    - **Google Gemini(PaLM) API**: Para o agente de IA.
    - **HTTP Bearer Auth**: Para autenticação na API do TMDB.
3.  Ative o workflow e copie a **URL do Webhook**.

### 2. Frontend

### Clone o repositório
```bash
git clone [https://github.com/LucasEMourao/botflix-pro.git](https://github.com/LucasEMourao/botflix-pro.git)
```
### Instale as dependências
```bash
npm install
```

### Configure o arquivo .env com a URL do seu Webhook
```bash
echo "VITE_API_URL=SUA_URL_DO_WEBHOOK_N8N" > .env
```

### Execute o projeto
```bash
npm run dev 
```

---

## 📂 Estrutura de Pastas

```bash
.
├── .vscode/              # Configurações do editor (extensões, linting)
├── n8n/                  # JSON do workflow para importação no n8n
├── src/                  # Código-fonte principal do frontend
│   ├── components/       # Componentes reutilizáveis de interface (UI)
│   ├── services/         # Integração com o Webhook do n8n (API calls)
│   ├── App.tsx           # Lógica principal e gerenciamento de estado
│   └── main.tsx          # Ponto de entrada do React
├── index.html            # HTML principal da aplicação
├── package.json          # Dependências e scripts do projeto
└── vite.config.ts        # Configurações de build e plugins do Vite
```
---

## 👤 Autor
Lucas Mourão (Lukinha)

- Estudante de Análise e Desenvolvimento de Sistemas.

- Focado em Full-Stack Development e Automação Inteligente.

- GitHub: [https://github.com/LucasEMourao](https://github.com/LucasEMourao)

- LinkedIn: [Lucas Mourão](https://www.linkedin.com/in/lucas-eleutherio-mourao)

Nota: Este projeto demonstra como unir interfaces modernas com fluxos de automação low-code para criar soluções de IA rápidas e eficientes.
