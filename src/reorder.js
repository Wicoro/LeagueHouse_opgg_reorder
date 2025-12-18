// =============================================================================
// src/reorder.js - Reorder functionality
// =============================================================================

// Find and reorder summoner elements
function reorderSummoners() {
  const urlOrder = getSummonersFromURL();
  if (urlOrder.length === 0) {
    console.log('No summoners in URL');
    return false;
  }
  
  console.log('URL order:', urlOrder);
  
  // Find the parent container first
  const container = document.querySelector('.flex.w-width-limit.flex-wrap');
  
  if (!container) {
    console.log('Container not found, retrying...');
    return false;
  }
  
  // Get all direct children (summoner columns)
  const summonerColumns = Array.from(container.children).filter(child => 
    child.classList.contains('flex') && child.classList.contains('flex-col')
  );


  if (summonerColumns.length < 5) {
    console.log('Not enough summoner columns found, ordering ' + summonerColumns.length + ' columns.');
  }
  
  console.log('Found', summonerColumns.length, 'summoner columns');
  
  // Create a map of normalized names to column elements
  const elementMap = new Map();
  
  summonerColumns.forEach(col => {
    // Navigate the path to find the href
    const link = col.querySelector('a[href*="/lol/summoners/"]');
    if (link) {
      const href = link.getAttribute('href');
      const normalizedName = extractNameFromHref(href);
      console.log('Found summoner:', normalizedName, 'href:', href);
      elementMap.set(normalizedName, col);
    }
  });
  
  if (elementMap.size === 0) {
    console.log('No summoner links found');
    return false;
  }
  
  // Get the parent container (already have it from above)
  if (!container) {
    console.log('Container not found');
    return false;
  }
  
  // Reorder based on URL
  let reordered = false;
  urlOrder.forEach((urlName, index) => {
    const normalized = normalizeName(urlName);
    const element = elementMap.get(normalized);
    
    console.log('Looking for:', normalized, 'found:', !!element);
    
    if (element) {
      const currentIndex = Array.from(container.children).indexOf(element);
      if (currentIndex !== index) {
        console.log('Moving', normalized, 'from index', currentIndex, 'to', index);
        
        // Insert before the element currently at the target position
        const targetElement = container.children[index];
        if (targetElement) {
          container.insertBefore(element, targetElement);
          reordered = true;
        }
      }
    }
  });
  
  if (reordered) {
    console.log('✓ OP.GG summoners reordered successfully');
  } else {
    console.log('No reordering needed');
  }
  
  if (summonerColumns.length < 5) {
    return false;
  }
  return true;
}

function initReorder() {
  let attempts = 0;
  const maxAttempts = 20;
  
  const tryReorder = setInterval(() => {
    attempts++;
    console.log('[Reorder] Attempt', attempts);
    const success = reorderSummoners();
    
    if (success || attempts >= maxAttempts) {
      clearInterval(tryReorder);
      if (!success && attempts >= maxAttempts) {
        console.log('[Reorder] Failed after', maxAttempts, 'attempts');
      }
    }
  }, 500);
  
  const observer = new MutationObserver(() => {
    const container = findSummonerContainer();
    if (container && container.children.length > 0) {
      observer.disconnect();
      reorderSummoners();
    }
  });
  
  setTimeout(() => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }, 1000);
}