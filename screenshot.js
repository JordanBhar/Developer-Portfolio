const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    await page.goto('http://localhost:3001', { waitUntil: 'load' });
    
    // Wait for Three.js canvas to render
    await page.waitForTimeout(3000);
    
    // Scroll to Skills Galaxy section
    await page.evaluate(() => {
      const skillsEl = document.querySelector('[id="skills"]');
      if (skillsEl) {
        skillsEl.scrollIntoView({ behavior: 'instant' });
      }
    });
    
    await page.waitForTimeout(1500);
    
    // Take screenshot
    await page.screenshot({ path: '/tmp/skills-galaxy-verified.png' });
    console.log('Screenshot taken successfully');
    
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
