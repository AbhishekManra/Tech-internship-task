const { Builder, Browser, By, Key, until ,WebDriver} = require('selenium-webdriver')
let arr = [];
let arr2 = [
    '#SoundariyaNanjundan𓃶',
    '#Chokli',
    '#VidaaMuyarchi',
    '#HappyBirthdaySalmanKhan'
  ];
// ;(async function example() {
//   let driver = await new Builder().forBrowser(Browser.CHROME).build()
//   try {
//     await driver.get('https://x.com/i/flow/login')
//     // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
//     await driver.sleep(5000)
//     await driver.findElement(By.name('text')).sendKeys('abhishektechnorex@gmail.com',Key.RETURN)
//     // const heading = await driver.findElement(By.tagName('h1')).getText()
//     // console.log(heading === 'Sign in to X')
//     await driver.sleep(5000)
//     //check if we need to add username/phonenumber
//     const heading = await driver.findElement(By.tagName('h1')).getText()
//     if(heading === 'Enter your phone number or username'){
//         await driver.findElement(By.name('text')).sendKeys('TechnoRex370080',Key.RETURN)
//     }
//     await driver.sleep(5000)

//     await driver.findElement(By.name('password')).sendKeys('Abhishek#03',Key.RETURN)

//     await driver.sleep(10000) // wait for 10 seconds

//     let group_elements = await driver.findElements(By.className('css-175oi2r r-6koalj r-1mmae3n r-3pj75a r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21'));
//     // for(let i = 0;i<4;i++){
//     group_elements.forEach(async ele=>{
//         let text = await ele.getText()
//         console.log(text);
//         let fields = text.split('\n')
//         arr.push(fields[1])
//     })
//     // console.log(group_elements)
//     // }
//     await driver.sleep(3000)
//     console.log(arr)
//     // await driver.findElement(By.name('text')).sendKeys('abhishektechnorex@gmail.com',Key,RETURN)
//     // await driver.wait(until.titleIs('webdriver - Google Search'), 10000)
//     await driver.sleep(5000)
//   } finally {
//     await driver.quit()
//   }
// })();
exports.example = async(req,res,next)=> {
let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://x.com/i/flow/login')
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    await driver.sleep(5000)
    await driver.findElement(By.name('text')).sendKeys(process.env.TWITTER_EMAIL,Key.RETURN)
    // const heading = await driver.findElement(By.tagName('h1')).getText()
    // console.log(heading === 'Sign in to X')
    await driver.sleep(5000)
    //check if we need to add username/phonenumber
    const heading = await driver.findElement(By.tagName('h1')).getText()
    if(heading === 'Enter your phone number or username'){
        await driver.findElement(By.name('text')).sendKeys(process.env.TWITTER_USERNAME,Key.RETURN)
    }
    await driver.sleep(5000)

    await driver.findElement(By.name('password')).sendKeys(process.env.TWITTER_PWD,Key.RETURN)

    await driver.sleep(10000) // wait for 10 seconds

    let group_elements = await driver.findElements(By.className('css-175oi2r r-6koalj r-1mmae3n r-3pj75a r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21'));
    // for(let i = 0;i<4;i++){
    group_elements.forEach(async ele=>{
        let text = await ele.getText()
        console.log(text);
        let fields = text.split('\n')
        arr.push(fields[1])
    })
        // console.log(group_elements)
    // }
    await driver.sleep(3000)
    console.log(arr)
    // await driver.findElement(By.name('text')).sendKeys('abhishektechnorex@gmail.com',Key,RETURN)
    // await driver.wait(until.titleIs('webdriver - Google Search'), 10000)
    await driver.sleep(3000)
  }catch(error){
    res.status(400).send(error.message)
  } finally {
    await driver.quit()
    res.status(200).json({arr : arr})
  }
}