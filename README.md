# LeagueHouse_opgg_tool Extension by Wicoro

Une extension de navigateur qui trie automatiquement les invocateurs sur les pages multisearch d'OP.GG pour correspondre à l'ordre spécifié dans les paramètres de l'URL.

## Ce qu'elle fait

Lorsque vous ouvrez un lien multisearch OP.GG (par exemple, depuis le bot Discord LeagueHouse), les invocateurs sont souvent affichés dans un ordre mélangé qui ne correspond pas à l'ordre des paramètres de l'URL. Cette extension détecte l'ordre prévu depuis l'URL et réorganise automatiquement les colonnes des invocateurs pour correspondre.

**Avant :** Invocateurs affichés dans un ordre aléatoire  
**Après :** Invocateurs affichés dans le même ordre que les paramètres de l'URL

## Installation

### Pour Chrome

1. **Téléchargez les fichiers de l'extension**
   - Créez un nouveau dossier sur votre ordinateur appelé `LeagueHouse-opgg-tool`
   - Enregistrez `manifest.json` et `content.js` dans ce dossier

3. **Chargez l'extension**
   - Ouvrez Chrome et naviguez vers `chrome://extensions/`
   - Activez le **Mode développeur** (interrupteur dans le coin supérieur droit)
   - Cliquez sur **"Charger l'extension non empaquetée"**
   - Sélectionnez votre dossier `LeagueHouse-opgg-tool`
   - L'extension est maintenant installée !

### Pour Firefox

1. **Téléchargez les fichiers de l'extension**
   - Créez un nouveau dossier sur votre ordinateur appelé `LeagueHouse-opgg-tool`
   - Enregistrez `manifest.json` et `content.js` dans ce dossier

3. **Chargez l'extension temporairement**
   - Ouvrez Firefox et naviguez vers `about:debugging#/runtime/this-firefox`
   - Cliquez sur **"Charger un module complémentaire temporaire..."**
   - Naviguez vers votre dossier `LeagueHouse-opgg-tool` et sélectionnez le fichier `manifest.json`
   - L'extension est maintenant installée !
   
   **Note :** Dans Firefox, les extensions temporaires sont supprimées lorsque vous fermez le navigateur. Pour une installation permanente, vous devrez signer l'extension via Mozilla.

## Utilisation

1. Ouvrez n'importe quelle URL multisearch OP.GG avec plusieurs invocateurs
2. L'extension détecte automatiquement la page et réordonne les invocateurs pour correspondre à l'ordre de l'URL
3. L'extension ajoute également un outil de swap à la droite de l'écran

### L'extension ne fonctionne pas

Contactez `wicoro` sur Discord

## Détails techniques

- **Version du Manifest :** 1.1
- **Permissions :** activeTab (accède uniquement aux pages OP.GG que vous consultez)
- **Sites supportés :** pages multisearch op.gg dans toutes les régions
- **Script de contenu :** S'exécute automatiquement lorsque vous visitez des pages correspondantes

## Confidentialité

Cette extension :
- Fonctionne uniquement sur les pages OP.GG
- Ne collecte ni ne transmet aucune donnée
- Ne suit pas votre navigation
- Fonctionne entièrement localement dans votre navigateur

---

# LeagueHouse_opgg_reorder Extension

A browser extension that automatically reorders summoners on OP.GG multisearch pages to match the order specified in the URL parameters.

## What it does

When you open an OP.GG multisearch link (e.g., from a LeagueHouse Discord bot), the summoners are often displayed in a shuffled order that doesn't match the URL parameter order. This extension detects the intended order from the URL and automatically rearranges the summoner columns to match.

**Before:** Summoners displayed in random order  
**After:** Summoners displayed in the same order as the URL parameters

## Installation

### For Chrome

1. **Download the extension files**
   - Create a new folder on your computer called `LeagueHouse-opgg-tool`
   - Save `manifest.json` and `content.js` into this folder

3. **Load the extension**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle switch in the top right corner)
   - Click **"Load unpacked"**
   - Select your `LeagueHouse-opgg-tool` folder
   - The extension is now installed!

### For Firefox

1. **Download the extension files**
   - Create a new folder on your computer called `LeagueHouse-opgg-tool`
   - Save `manifest.json` and `content.js` into this folder

3. **Load the extension temporarily**
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
   - Click **"Load Temporary Add-on..."**
   - Navigate to your `LeagueHouse-opgg-tool` folder and select the `manifest.json` file
   - The extension is now installed!
   
   **Note:** In Firefox, temporary extensions are removed when you close the browser. For permanent installation, you would need to sign the extension through Mozilla.

## Usage

1. Open any OP.GG multisearch URL with multiple summoners
2. The extension automatically detects the page and reorders the summoners to match the URL order
3. The extension adds a swapping tool at the right of the screen

### The extension isn't working

Contact `wicoro` on Discord

## Technical Details

- **Manifest Version:** 1.1
- **Permissions:** activeTab (only accesses OP.GG pages you're viewing)
- **Supported Sites:** op.gg multisearch pages across all regions
- **Content Script:** Runs automatically when you visit matching pages

## Privacy

This extension:
- Only runs on OP.GG pages
- Does not collect or transmit any data
- Does not track your browsing
- Operates entirely locally in your browser
