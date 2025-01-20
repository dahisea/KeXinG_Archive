(function() {
  // 通过 JavaScript 动态创建页面内容
  function createPageContent() {
    return `
<body>
    <div id="page">
        <a href="http://www.sinovac.com.cn/" style="text-decoration: none;">
            <img src="sinovacbio.jpg" alt="Sinovac">
        </a>
        <div class="icp">
            <a href="https://beian.miit.gov.cn" target="_blank">京ICP备20007634-1号</a>&nbsp;&nbsp;&nbsp;
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802031387" target="_blank">
                <img src="police.png" alt="公安备案" />京公网安备 11010802031387号
            </a><br />
            地址：中国·北京 大兴区中关村科技园大兴生物医药产业基地天富街21号（102601）<br />
            联系我们：sinovac@sinovac.com
        </div>
    </div>
</body>
    `;
  }

  // 动态插入 HTML 内容
  function injectContent(targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = createPageContent(); // 将封装的内容注入到目标元素
    } else {
      console.error("Target element not found.");
    }
  }

  // 暴露接口给外部调用
  window.injectPageContent = injectContent;
})();
