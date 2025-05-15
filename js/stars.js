// 星星粒子类
class Star {
  constructor(x, y) {
    // 初始化星星属性
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1; // 星星大小 1-3px
    this.opacity = 1; // 初始透明度
    this.speedX = (Math.random() - 0.5) * 3; // 水平速度
    this.speedY = (Math.random() - 0.5) * 3; // 垂直速度
    this.life = 60; // 生命周期
    
    // 创建DOM元素
    this.element = document.createElement('div');
    this.element.style.cssText = `
      position: fixed;
      pointer-events: none;
      width: ${this.size}px;
      height: ${this.size}px;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
      z-index: 1000;
      transition: opacity 0.5s ease-out;
    `;
    
    // 添加到页面
    document.body.appendChild(this.element);
    this.updatePosition();
  }
  
  // 更新星星位置和状态
  updatePosition() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    this.opacity = this.life / 60;
    
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.opacity = this.opacity;
    
    // 生命周期结束后移除元素
    if (this.life <= 0) {
      this.element.remove();
    }
  }
}

// 星星数组和鼠标移动事件监听
let stars = [];
document.addEventListener('mousemove', function(e) {
  // 每10个像素生成一个星星
  if (Math.random() > 0.8) {
    stars.push(new Star(e.clientX, e.clientY));
  }
  
  // 限制星星数量，防止性能问题
  if (stars.length > 50) {
    stars.shift().element.remove();
  }
});

// 动画循环
function animate() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].updatePosition();
  }
  requestAnimationFrame(animate);
}

// 启动动画
animate();