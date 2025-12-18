// =============================================================================
// src/main.js - Main entry point
// =============================================================================

console.log('[LeagueHouse] Extension loaded');

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log('[LeagueHouse] Initializing...');
  initReorder();
  initSwap();
  console.log('[LeagueHouse] ✓ All features initialized');
}