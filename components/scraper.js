import puppeteer from 'puppeteer';

async function scrapeData() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto('https://kide.app/search?searchText=oulu', { waitUntil: 'domcontentloaded' });

    // Wait for initial content to load
    await page.waitForSelector('o-product-card');

    let previousCount = 0;
    let newCount = 0;
    let scrollAttempts = 0;
    const maxScrolls = 20;

    while (scrollAttempts < maxScrolls) {
        scrollAttempts++;

        // Scroll down
        await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for content to load

        // Count loaded events
        newCount = await page.evaluate(() => document.querySelectorAll('o-product-card').length);
        console.log(`Scroll ${scrollAttempts}: Found ${newCount} events`);

        if (newCount === previousCount) {
            console.log("No new events detected, stopping scroll...");
            break;
        }
        previousCount = newCount;
    }

    // Extract titles and locations
    data = await page.evaluate(() => {
        const results = [];
        const productCards = document.querySelectorAll('o-product-card');

        productCards.forEach(card => {
            const titleElement = card.querySelector('.o-font--title-responsive');
            const locationElement = card.querySelector('.o-font--body-1');

            if (titleElement && locationElement) {
                const title = titleElement.innerText.trim();
                const location = locationElement.innerText.trim();

                // Only include events that have "@" in title or location (even if it's inside a word)
                if (title.includes('@') || location.includes('@')) {
                    results.push({ title, location });
                }
            }
        });

        return results;
    });

    console.log(`Total events scraped: ${data.length}`);
    console.log(data);

    await browser.close();
}

export default scrapeData()

// Run the scraper
//scrapeData().catch(console.error);
