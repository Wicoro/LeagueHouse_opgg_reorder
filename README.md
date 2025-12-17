# LeagueHouse_opgg_reorder Extension

A browser extension that automatically reorders summoners on OP.GG multisearch pages to match the order specified in the URL parameters.

## What it does

When you open an OP.GG multisearch link (e.g., from a LeagueHouse Discord bot), the summoners are often displayed in a shuffled order that doesn't match the URL parameter order. This extension detects the intended order from the URL and automatically rearranges the summoner columns to match.

**Before:** Summoners displayed in random order  
**After:** Summoners displayed in the same order as the URL parameters

## Installation

### For Chrome

1. **Download the extension files**
   - Create a new folder on your computer called `opgg-reorder`
   - Save `manifest.json` and `content.js` into this folder

2. **Create placeholder icons** (optional)
   - Create two simple PNG files named `icon48.png` (48x48 pixels) and `icon128.png` (128x128 pixels)
   - Place them in the `opgg-reorder` folder
   - *Alternatively*, remove the `"icons"` section from `manifest.json`

3. **Load the extension**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle switch in the top right corner)
   - Click **"Load unpacked"**
   - Select your `opgg-reorder` folder
   - The extension is now installed!

### For Firefox

1. **Download the extension files**
   - Create a new folder on your computer called `opgg-reorder`
   - Save `manifest.json` and `content.js` into this folder

2. **Create placeholder icons** (optional)
   - Create two simple PNG files named `icon48.png` (48x48 pixels) and `icon128.png` (128x128 pixels)
   - Place them in the `opgg-reorder` folder
   - *Alternatively*, remove the `"icons"` section from `manifest.json`

3. **Load the extension temporarily**
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
   - Click **"Load Temporary Add-on..."**
   - Navigate to your `opgg-reorder` folder and select the `manifest.json` file
   - The extension is now installed!
   
   **Note:** In Firefox, temporary extensions are removed when you close the browser. For permanent installation, you would need to sign the extension through Mozilla.

## Usage

1. Open any OP.GG multisearch URL with multiple summoners

2. The extension automatically detects the page and reorders the summoners to match the URL order

3. That's it! No configuration needed.

### The extension isn't working

Constact `wicoro` on discord

Check that:
- The extension is enabled in your browser's extension manager
- You're on an OP.GG multisearch page (not a single summoner page)
- The URL contains multiple summoners in the `summoners=` parameter

## Technical Details

- **Manifest Version:** 3
- **Permissions:** activeTab (only accesses OP.GG pages you're viewing)
- **Supported Sites:** op.gg multisearch pages across all regions
- **Content Script:** Runs automatically when you visit matching pages

## Privacy

This extension:
- Only runs on OP.GG pages
- Does not collect or transmit any data
- Does not track your browsing
- Operates entirely locally in your browser
