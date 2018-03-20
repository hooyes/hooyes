const fs = require('fs');
const request = require('request');
const xhtml = require("./xhtml");
const  Thread = { 
    Sleep : function (d) {  
    return new Promise((a, r) => { 
    setTimeout(() => { 
      a() 
    }, d) 
  }) }
}
async function Main(keyword) {
        console.log("正在查询关键字: %s ",keyword);
        var sPage = 1;
        var sMaxPage = 50; 
        var MaxPage = 50;
        var k = 1;
        while (sPage >= 1 && sPage < MaxPage && k <= sMaxPage)
        {
             k++;
            var Url = "http://s.weibo.com/weibo/"+encodeURIComponent(keyword)+"?topnav=1&wvr=6&b=1&page="+sPage;
            console.log(Url);
            let html = await fetchHtml(Url);
            (sPage == 1) ? 
            console.log("正在解析第1页数据") : console.log("正在解析第"+sPage+"/"+MaxPage+"页")
            MaxPage = Worker(html, keyword, sPage);
            sPage++;
            await Thread.Sleep(3000);
        }
        await Thread.Sleep(1000);
    console.log("done!");
}

function Worker(text,keyword,page){
    text = xhtml.firstblood(text);
	var maxpage = xhtml.pagenum(text);
	var i = 1;
	var k = 0;
	while (i > 0 && k < 100)
	{
	    k++;
	    var vText = text;
	    start = vText.indexOf("<!-- feed -->", i);
	    if (start > 0)
	    {
	        end = vText.indexOf("<!--/feed_action-->", start);
	        i = end;
	        vText = vText.substr(start - 1, end - start);

	        var WeiboData = {};
	        WeiboData.comment_txt = xhtml.comment_txt(vText);
	        WeiboData.verify = xhtml.verify(vText);
	        WeiboData.feed_action = xhtml.feed_action(vText);
	        WeiboData.feed_from = xhtml.feed_from(vText);
	        WeiboData.nick = xhtml.nick(vText);
	        WeiboData.keyword = keyword;
	        WeiboData.page = page;
            // hooyes提示: TODO抓取到的数据保存,这里输出日志展现 
            console.log(WeiboData);
	    }
	    else
	    {
	        i = 0;
	        break;
	    }
	}
	return maxpage;
}

function fetchHtml(url) {
    let cookies = fs.readFileSync('./cookies.txt');
    let headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36",
        'Accept-Language': 'en-US,en;q=0.5',
        'WeiboData-Type': 'application/x-www-form-urlencoded',
        'Connection': 'Keep-Alive',
        'cookie': cookies.toString()
    };
    let options = {
        method: 'GET',
        url: url, 
        headers: headers,
        gzip: true
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                response.setEncoding('utf-8');
                resolve(response.body);
            } else {
                console.log('error');
            }
        })
    })
}

let argvs = process.argv;
let keyword = argvs[2];
Main(keyword);

// hooyes 2018