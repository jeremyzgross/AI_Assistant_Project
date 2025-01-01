import webdriver from 'selenium-webdriver'
import { randomInt } from 'crypto'

export const webScrapper = async (url: string) => {
  const driver = new webdriver.Builder().forBrowser('chrome').build()
  await driver.sleep(randomInt(5000, 9000))
  await driver.get(url)
  const pageSource = await driver.getPageSource()
  await driver.sleep(randomInt(5000, 9000)) 
  await driver.quit()
  return pageSource
}

const linkedinUrl = 'https://www.linkedin.com/jobs/view/4112739260'

webScrapper(linkedinUrl)
