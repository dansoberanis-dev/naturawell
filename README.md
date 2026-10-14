# Estética Naturawell: Site Oficial (versão 17)

Site institucional da **Estética Naturawell, Dra. Cristina Samy** (Curitiba/PR).
Página única, responsiva (mobile-first), em tons pastéis premium, com SEO local
para "estética em Curitiba / Batel".

- **WhatsApp da clínica:** (41) 99553-0376
- **Instagram:** [@estetica_naturawell](https://www.instagram.com/estetica_naturawell)
- **Unidade 1:** Av. Sete de Setembro, 4923 — Sala 804, Batel, Curitiba/PR
- **Unidade 2:** Av. do Batel, 1230 — Sala 310, Batel, Curitiba/PR

---

## 1. Como rodar no seu computador (seu ambiente: Windows, E:\sites\naturawell)

Sua estrutura atual:

```
E:\sites\naturawell\
├── naturawell-site.zip     (ou naturawell-site-v2.zip, v3...)
└── naturawell-site\        (pasta do site, é aqui que ele roda)
    └── index.html
```

### Instalar uma versão nova (ZIP que chega em Downloads)

```powershell
# 1) Pare o servidor, se estiver rodando (Ctrl + C no terminal dele)

# 2) Acha o ZIP mais novo nos Downloads:
$Downloads = (New-Object -ComObject Shell.Application).NameSpace("shell:Downloads").Self.Path
$Zip = Get-ChildItem (Join-Path $Downloads "naturawell-site*.zip") | Sort-Object LastWriteTime -Descending | Select-Object -First 1
$Zip.FullName

# 3) Guarda a versão atual como backup e instala a nova:
$Destino = "E:\sites\naturawell"
$Backup  = Join-Path $Destino ("_backup_" + (Get-Date -Format "yyyyMMdd-HHmm"))
Move-Item "$Destino\naturawell-site" $Backup
Expand-Archive -LiteralPath $Zip.FullName -DestinationPath $Destino -Force
Copy-Item $Zip.FullName $Destino -Force

# 4) Roda:
cd "$Destino\naturawell-site"
py -m http.server 5173
```

Abra no navegador: **http://localhost:5173** (deixe o terminal aberto).

### Só rodar de novo, sem atualizar

```powershell
cd E:\sites\naturawell\naturawell-site
py -m http.server 5173
```

Para parar: `Ctrl + C`. Se o comando `py` falhar, use `python -m http.server 5173`.

## Novidades da versão 17

- Prévia de link no WhatsApp (e redes sociais): a imagem de compartilhamento agora é um print real da página inicial, no formato 1200x630 (`assets/img/og-naturawell.jpg`, 92 KB), no lugar da foto de fundo do hero. Vale para `og:image`, Twitter Card e dados estruturados.
- Observação: a prévia só aparece se o endereço da imagem estiver no mesmo domínio em que o site está abrindo. Hoje está `www.esteticanaturawell.com.br`. Se o link divulgado for o `*.vercel.app`, o `og:image` precisa apontar para esse domínio. O WhatsApp também guarda a prévia em cache por link; para testar de novo, cole o link com `?v=2` no final ou em uma conversa nova.

## Novidades da versão 16

- Projeto pronto para o GitHub: repositório `dansoberanis-dev/naturawell` definido, `.gitignore` ajustado (fora ZIPs e backups) e fluxo de publicação testado (Commit com os 25 arquivos do site, `index.html` na raiz).
- README ganhou a seção de publicação com os comandos de envio para o GitHub e o passo a passo de importação na Vercel.

## Novidades da versão 15

- Hero: removida a linha "Com Dra. Cristina Samy, no Batel" acima do título.
- Favicon corrigido de verdade desta vez: o site declarava dois ícones e o navegador preferia o antigo (favicon.svg). Agora só existe o Símbolo da logo oficial (assets/img/favicon-logo.png) e o arquivo antigo foi removido do pacote.
- Conferência feita no site renderizado: a frase não aparece mais e o único ícone declarado é o Símbolo da logo.

## Novidades da versão 14

- Conteúdo da postagem "A estética evoluiu" adaptado ao site (o que já existia foi mantido; o novo entrou onde fazia sentido):
  - Filosofia: manifesto da nova fase, causas investigadas (inflamação, hormônios, metabolismo, retenção e emocional) e as frentes unidas, incluindo alimentação anti-inflamatória.
  - Passo 1 do método virou "Consulta integrativa e exames", refletindo a investigação da causa antes de qualquer protocolo. FAQ e dados estruturados alinhados.
  - Cartão de massagens agora é "Massagens Terapêuticas & Drenagem" e o cartão integrativo cita a alimentação anti-inflamatória.
  - Dra. Cristina Samy: "Beleza de verdade não é excesso. É equilíbrio."
  - Chamada final: "Bem-vinda à nova era da Naturawell."

## Novidades da versão 13

- Rodapé ganhou a linha "Desenvolvido por Daniel Soberanis", com o nome linkado para o WhatsApp dele: (41) 98454-2307.

## Novidades da versão 12

- Título do hero agora em três linhas: "Beleza que começa / de dentro e aparece / no espelho."
- Favicon novo: o Símbolo (a flor dourada) da logo oficial, também usado no ícone de instalação do site.

## Novidades da versão 11

- Correção da limpeza do cartaz da Dra. Cristina Samy: os textos agora são apagados com a silhueta dela protegida, então nenhum preenchimento encosta no blazer, nas pernas ou nos sapatos. A conferência foi feita com zoom nas bordas do corpo e nos pés.

## Novidades da versão 10

- Seção da Dra. Cristina Samy: refeita a partir do cartaz original enviado, sem recomposição. A logo e a profissional estão exatamente nas posições e proporções do cartaz; foram removidos somente os textos promocionais, o selo e os elementos do carrossel.
- Os pés dela aparecem por completo, como no cartaz original, sem máscara de esmaecimento e sem corte na exibição.
- No site, a imagem só ganhou uma extensão suave do fundo nas laterais para preencher o bloco sem cortar nada.

## Novidades da versão 9

- Seção da Dra. Cristina Samy: o cartaz enviado foi limpo e agora mostra somente a logo da Naturawell e a profissional de corpo inteiro, sem os textos publicitários, selo e elementos decorativos do cartaz original.
- A imagem da Dra. Cristina Samy usa a foto real do cartaz e acompanha a altura do bloco de texto, com esmaecimento ao redor para não aparecer o limite da imagem.
- Logo oficial enviada pela clínica aplicada na barra de menu e também no rodapé. O símbolo da logo passou a ser o ícone da aba do navegador.

## Novidades da versão 8

- Seção da Dra. Cristina Samy: a foto nova foi completada para corpo inteiro (mesma blusa branca, calça bege, proporções naturais) e apresentada na altura do bloco de texto, com as bordas esmaecidas para não aparecer o limite da imagem.
- Observação: a parte abaixo do busto foi gerada digitalmente a partir da foto enviada. Se a clínica preferir, basta enviar uma foto real de corpo inteiro que trocamos o arquivo `dra-corpo.webp` mantendo o mesmo efeito.

## Novidades da versão 7

- Nova foto da Dra. Cristina Samy (a enviada pela clínica): recortada sem fundo a partir do arquivo original, salva sem perdas, ocupando toda a altura do bloco de texto. O avatar do topo também foi atualizado com a mesma foto.

## Novidades da versão 6

- Seção da Dra. Cristina Samy: agora a profissional aparece recortada, sem o fundo da foto. A imagem ocupa toda a altura do bloco de texto, sem distorcer, com sombra suave seguindo a silhueta e um brilho dourado atrás.

## Novidades da versão 5

- Seção da Dra. Cristina Samy: a foto agora ocupa toda a altura do bloco de texto, mais larga, sem moldura e sem sombra de cartão. As bordas da foto esmaecem e se fundem com o fundo da seção, com um brilho dourado suave atrás.

## Novidades da versão 4

- Seção da Dra. Cristina Samy: ficou só a foto da profissional, menor (272 px), em proporção vertical 4:5 e com recorte novo. A segunda imagem foi removida.

## Novidades da versão 3

- Fotos convertidas para WebP: o site ficou cerca de 50% mais leve e rápido.
- Barra dourada no topo mostra o progresso da leitura da página.
- O menu destaca automaticamente a seção que está na tela.
- Filtro de tratamentos mostra quantos itens estão visíveis ("Mostrando tratamentos faciais (5)").
- Formulário confirma o envio na própria página antes de abrir o WhatsApp.
- Fotos dos cartões corporais/integrativos trocadas para combinar melhor com cada tratamento.
- Chamada final ganhou foto de fundo bem suave.
- SEO reforçado: serviços da clínica nos dados estruturados e coordenadas do mapa.
- Acessibilidade: foco visível dourado ao navegar pelo teclado e FAQ ligado corretamente para leitores de tela.

---

## 2. Estrutura dos arquivos

```
naturawell-site/
├── index.html              ← todo o conteúdo + SEO (título, descrições, dados estruturados)
├── assets/
│   ├── css/styles.css      ← visual: tons pastéis premium, responsivo mobile-first
│   ├── js/main.js          ← menu, filtros, antes/depois, depoimentos, FAQ, formulário → WhatsApp
│   └── img/                ← fotos do site
├── assets/img/favicon-logo.png ← Símbolo da logo, ícone da aba do navegador
├── robots.txt              ← instruções para o Google
├── sitemap.xml             ← mapa do site para o Google
├── site.webmanifest        ← ícone/tema ao "instalar" no celular
├── vercel.json             ← cache pronto para a futura publicação na Vercel
└── README.md               ← este arquivo
```

Não usa banco de dados, não usa build. É HTML + CSS + JavaScript puro:
pode hospedar em qualquer lugar (Vercel, Netlify, GitHub Pages etc.).

---

## 3. O que você pode editar facilmente

| O que mudar | Onde |
|---|---|
| **Número do WhatsApp** | `assets/js/main.js`, linha 5 (`WHATSAPP_NUMBER`) **e** os links `wa.me/5541995530376` no `index.html` (busque por `5541995530376`) |
| **Endereços das unidades** | `index.html`: seção `Unidades`, rodapé e dados estruturados (`application/ld+json` no topo) |
| **Foto da Dra. Cristina Samy** | Substitua `assets/img/dra-cartaz-v11.webp` por outra imagem no mesmo formato, ou envie a foto original para limpos o cartaz dela |
| **Logo oficial** | `assets/img/logo.png` (versão transparente usada no menu e no rodapé) |
| **Foto pequena da Dra.** | `assets/img/dra-cris-avatar.jpg` |
| **Depoimentos** | `assets/js/main.js`, no trecho `const quotes = [...]` — troque pelos depoimentos/avaliações reais do Google |
| **Tratamentos e textos** | `index.html`, seção `Tratamentos` (cada tratamento é um bloco `<article class="card">`) |
| **Domínio oficial** | Ao definir o domínio, troque `https://www.esteticanaturawell.com.br/` em: `index.html` (canonical + Open Graph + JSON-LD), `robots.txt` e `sitemap.xml` |

---

## 4. Confira antes de publicar (importante)

1. **Endereço da Unidade 2** — no site consta *Av. do Batel, 1230 — Sala 310*, conforme listo pública encontrada no Google. **Confirme se está correto** (e o da Unidade 1 também) e ajuste se necessário.
2. **Horários de atendimento** — o site usa "atendimento com hora marcada" de propósito. Se quiser horários fixos, edite a seção `Unidades`.
3. **Foto da Dra Cristina Samy.** — a imagem atual é o cartaz enviado com os textos removidos, mantendo a logo e a profissional nas posições originais e os pés por completo. Se houver o arquivo original do ensaio em resolução maior, podemos refazer `dra-cartaz-v11.webp` com ainda mais nitidez.
4. **Depoimentos** — os textos atuais são ilustrativos do estilo de relato das pacientes. Substitua por avaliações reais do Google/Instagram antes de divulgar amplamente.

---

## 5. Publicação: GitHub e Vercel

Repositório criado: **https://github.com/dansoberanis-dev/naturawell** (usuário: `dansoberanis-dev`)

### Enviar o site para o GitHub (rodar uma vez, no PowerShell)

```powershell
cd E:\sites\naturawell\naturawell-site

# Identidade dos commits (só precisa uma vez na vida):
git config --global user.name "Daniel Soberanis"
git config --global user.email "dansoberanis-dev@users.noreply.github.com"

git init
git remote add origin https://github.com/dansoberanis-dev/naturawell.git
git add .
git status
git commit -m "Site Estética Naturawell"
git branch -M main
git push -u origin main
```

O `git push` abre o navegador para você entrar na sua conta do GitHub. Se der erro dizendo que o repositório já tem conteúdo (por exemplo, um README criado pelo site), rode `git pull origin main --allow-unrelated-histories` e depois `git push -u origin main` de novo. Se travar em algum erro diferente, cole o erro no chat que resolvemos.

### Importar na Vercel

1. Na Vercel, escolha importar o repositório `dansoberanis-dev/naturawell`.
2. Framework Preset: **Other**. Build Command, Output Directory e Install Command: **deixe em branco** (o `index.html` já está na raiz e o site não tem build).
3. Clique em Deploy. A cada `git push` novo, a Vercel publica a atualização sozinha.

### Depois que o domínio oficial estiver ativo

1. Trocar `https://www.esteticanaturawell.com.br/` pelo domínio real em: `index.html` (canonical, Open Graph e dados estruturados), `robots.txt` e `sitemap.xml`, ou manter se esse for o domínio.
2. Cadastrar o `sitemap.xml` no **Google Search Console** e atualizar o link do site no **Google Empresas**.

---

## 6. Créditos das fotos

Fotos de procedimentos/ambiente: bancos de imagens gratuitos (Unsplash/Pexels e similares) — recomenda-se substituí-las gradualmente por fotos reais da clínica.
Fotos da Dra. Cristina Samy: recortes dos materiais enviados (Instagram @estetica_naturawell).
