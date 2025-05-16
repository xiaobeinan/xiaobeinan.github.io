document.addEventListener('DOMContentLoaded', function() {
    // 获取当前域名（不含协议，如 xxxxx.xx）
    const currentDomain = window.location.hostname;
    // 拼接完整的 about 页面链接（强制使用 HTTPS）
    const aboutPageUrl = `https://${currentDomain}/about/`;
    
    // 更新页脚链接和文本
    const aboutLink = document.getElementById('dynamic-about-link');
    const domainText = document.getElementById('dynamic-domain');
    
    if (aboutLink && domainText) {
      aboutLink.href = aboutPageUrl;
      domainText.textContent = currentDomain; // 显示主域名
    }
  });