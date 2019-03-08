const webdriver = require('selenium-webdriver')
const moment = require('moment')
const sleep = require('./src/server/utils/sleep')
const voca = require('voca');

const run = async() => {
    console.log('test');
    const start = moment().valueOf();
    console.log(start);

    const browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).build();

    console.log('a');

    await browser.get('http://www.afreecatv.com/');

    console.log('b');

    await browser.findElement(webdriver.By.className('login')).click();

    console.log('c');

    const idForm = await browser.findElement(webdriver.By.id('uid'));
    await idForm.sendKeys('doo8866');

    const passwordForm = await browser.findElement(webdriver.By.id('password'));
    await passwordForm.sendKeys('dlenghks85!');

    await browser.findElement(webdriver.By.className('login_btn')).click();

    await sleep(3000);

    // 테스트 로직(1번만)
    // await browser.findElement(webdriver.By.className('more_list')).click();
    // await sleep(1000);

    // 실제 로직
    let more = true;
    let moreCnt = 0;
    while(more) {
        try {
            await browser.findElement(webdriver.By.className('more_list')).click();
            await sleep(1000);
            moreCnt++;
            console.log('moreCnt : ' + moreCnt);
        } catch(e) {
            more = false;
        }
    }

    const bjBox = await browser.findElements(webdriver.By.css('#broadlist_area .cast_box'));
    for(var i=0;i<bjBox.length;++i) {
        
        const video = await bjBox[i].findElement(webdriver.By.className('box_link'));
        const bj = await bjBox[i].findElement(webdriver.By.className('nick'));
        const count = await bjBox[i].findElement(webdriver.By.className('viewer'));

        const href = await video.getAttribute('href');
        const user_id = await bj.getAttribute('user_id');
        const nick = await bj.getText();
        const show = await count.getText();

        const showCount = voca.trim(voca.replaceAll(show, /[가-힣]|,/, ''));
        console.log(href);
        console.log(user_id);
        console.log(nick);
        console.log(showCount);
    }

    await browser.get('http://www.afreecatv.com/');

    const end = moment().valueOf();
    console.log(end);
    console.log(end-start);
}

run();


// const promise = browser.getTitle();



// promise.then(function(title) {
//     console.log(title);
// }).catch(function(error) {
//     // An error happened.
//     console.log('에러');
// });

// console.log('d');

//browser.quit();