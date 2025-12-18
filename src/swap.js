// Role swap functionality

const ROLES = ['top', 'jungle', 'mid', 'adc', 'support'];
const ROLE_ICONS = {
  top: chrome.runtime.getURL('icons/120px-Top_icon.png'),
  jungle: chrome.runtime.getURL('icons/120px-Jungle_icon.png'),
  mid: chrome.runtime.getURL('icons/120px-Middle_icon.png'),
  adc: chrome.runtime.getURL('icons/120px-Bottom_icon.png'),
  support: chrome.runtime.getURL('icons/120px-Support_icon.png')
};

let swapState = {
  selectedRole: null,
  swapMenuVisible: false
};

function createSwapUI() {
  const swapContainer = document.createElement('div');
  swapContainer.id = 'lh-swap-container';
  swapContainer.className = 'lh-swap-container';
  
  // Create main role buttons
  ROLES.forEach((role, index) => {
    const roleBtn = document.createElement('button');
    roleBtn.className = 'lh-role-btn';
    roleBtn.dataset.role = role;
    roleBtn.dataset.index = index;
    roleBtn.innerHTML = `<img src="${ROLE_ICONS[role]}" alt="${role}" style="width: 24px; height: 24px;">`;
    roleBtn.title = role.toUpperCase();
    
    roleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleRoleClick(role, index);
    });
    
    swapContainer.appendChild(roleBtn);
  });
  
  // Create swap menu (hidden by default)
  const swapMenu = document.createElement('div');
  swapMenu.id = 'lh-swap-menu';
  swapMenu.className = 'lh-swap-menu';
  swapMenu.style.display = 'none';
  
  ROLES.forEach((role, index) => {
    const swapBtn = document.createElement('button');
    swapBtn.className = 'lh-swap-option';
    swapBtn.dataset.role = role;
    swapBtn.dataset.index = index;
    swapBtn.innerHTML = `<img src="${ROLE_ICONS[role]}" alt="${role}" style="width: 24px; height: 24px;">`;
    swapBtn.title = `Swap with ${role.toUpperCase()}`;
    
    swapBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleSwap(index);
    });
    
    swapMenu.appendChild(swapBtn);
  });
  
  swapContainer.appendChild(swapMenu);
  document.body.appendChild(swapContainer);
  
  // Close menu when clicking outside
  document.addEventListener('click', () => {
    closeSwapMenu();
  });
  
  console.log('[Swap] UI created');
}

function handleRoleClick(role, index) {
  if (swapState.selectedRole === index) {
    closeSwapMenu();
    return;
  }
  
  swapState.selectedRole = index;
  swapState.swapMenuVisible = true;
  
  const swapMenu = document.getElementById('lh-swap-menu');
  const roleBtn = document.querySelector(`.lh-role-btn[data-index="${index}"]`);
  
  // Position menu to the left of the clicked role
  const rect = roleBtn.getBoundingClientRect();
  const containerRect = document.getElementById('lh-swap-container').getBoundingClientRect();
  swapMenu.style.display = 'flex';
  swapMenu.style.top = `${containerRect.top / 10}px`;
  swapMenu.style.right = `${containerRect.width + 5}px`;
  
  // Hide the clicked role from swap options
  const swapOptions = swapMenu.querySelectorAll('.lh-swap-option');
  swapOptions.forEach(opt => {
    if (opt.dataset.index === index.toString()) {
      opt.style.display = 'none';
    } else {
      opt.style.display = 'flex';
    }
  });
  
  // Highlight selected role
  document.querySelectorAll('.lh-role-btn').forEach(btn => {
    btn.classList.remove('lh-selected');
  });
  roleBtn.classList.add('lh-selected');
  
  console.log('[Swap] Role selected:', role, 'index:', index);
}

function handleSwap(targetIndex) {
  if (swapState.selectedRole === null) return;
  
  const fromIndex = swapState.selectedRole;
  console.log('[Swap] Swapping position', fromIndex, 'with', targetIndex);
  
  const container = findSummonerContainer();
  if (!container) {
    console.error('[Swap] Container not found');
    return;
  }
  
  const columns = Array.from(container.children);
  if (fromIndex >= columns.length || targetIndex >= columns.length) {
    console.error('[Swap] Invalid indices');
    return;
  }
  
  const fromElement = columns[fromIndex];
  const toElement = columns[targetIndex];
  
//   // Swap the elements
//   if (fromIndex < targetIndex) {
//     container.insertBefore(fromElement, toElement.nextSibling);
//   } else {
//     container.insertBefore(fromElement, toElement);
//   }
  const fromNext = fromElement.nextSibling;
  const toNext = toElement.nextSibling;

  container.insertBefore(fromElement, toNext);
  container.insertBefore(toElement, fromNext);
  
  console.log('[Swap] ✓ Swapped successfully');
  closeSwapMenu();
}

function closeSwapMenu() {
  swapState.selectedRole = null;
  swapState.swapMenuVisible = false;
  
  const swapMenu = document.getElementById('lh-swap-menu');
  if (swapMenu) {
    swapMenu.style.display = 'none';
  }
  
  document.querySelectorAll('.lh-role-btn').forEach(btn => {
    btn.classList.remove('lh-selected');
  });
}

function initSwap() {
  // Wait for page to be ready
  setTimeout(() => {
    const container = findSummonerContainer();
    if (container && container.children.length === 5) {
      createSwapUI();
    } else {
      console.log('[Swap] Waiting for 5 summoners...');
      setTimeout(initSwap, 1000);
    }
  }, 2000);
}