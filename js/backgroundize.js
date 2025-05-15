document.addEventListener('DOMContentLoaded', () => {
    // 提取主题Banner的背景图URL
    const bgUrl = document.querySelector('.banner').style.background.match(/url\((.*?)\)/)?.[1] || '/img/default-bg.jpg';
    
    // 应用全屏背景样式
    document.getElementById('web_bg').style = `
      background-image: url(${bgUrl});
      position: fixed; width: 100vw; height: 100vh; z-index: -1;
      background-size: cover; filter: brightness(0.8);
    `;
    
    // 清除原Banner背景（避免重复）
    document.querySelector('#banner').style.background = 'none';
    document.querySelector('#banner .mask')?.remove(); // 移除Banner蒙版
  });