// =============================================================================
// src/utils.js - Shared utility functions
// =============================================================================

function getSummonersFromURL() {
  const params = new URLSearchParams(window.location.search);
  const summoners = params.get('summoners');
  if (!summoners) return [];
  
  return summoners.split(',').map(s => 
    decodeURIComponent(s).trim().toLowerCase()
  );
}

function normalizeName(name) {
  return name.replace(/#.*$/, '')
    .replace(/[-_\s]/g, '')
    .trim()
    .toLowerCase();
}

function extractNameFromHref(href) {
  const parts = href.split('/');
  const nameWithRegion = decodeURIComponent(parts[parts.length - 1]);
  const lastDashIndex = nameWithRegion.lastIndexOf('-');
  const nameOnly = lastDashIndex > 0 ? nameWithRegion.substring(0, lastDashIndex) : nameWithRegion;
  return normalizeName(nameOnly);
}

function findSummonerContainer() {
  return document.querySelector('.flex.w-width-limit.flex-wrap');
}

function getSummonerColumns() {
  const container = findSummonerContainer();
  if (!container) return [];
  
  return Array.from(container.children).filter(child => 
    child.classList.contains('flex') && child.classList.contains('flex-col')
  );
}

function getSummonerData(column) {
  const link = column.querySelector('a[href*="/lol/summoners/"]');
  if (!link) return null;
  
  const href = link.getAttribute('href');
  const normalizedName = extractNameFromHref(href);
  
  return {
    element: column,
    href: href,
    name: normalizedName
  };
}