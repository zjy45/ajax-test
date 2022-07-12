// 用 AJAX 加载 CSS，并使其生效
// 用 AJAX 加载 JS ，并使其执行
// 用 AJAX 加载 HTML， 并使其出现在页面中
// 用 AJAX 加载 XML，并获取其节点内容
// 用 AJAX 加载 JSON，并将其转为对象
// 用 AJAX 模拟分页操作
addCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", 'style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            style = document.querySelector("style")
            style.innerHTML = request.response
        }
    }
    request.send()
}

addJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", '2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script);
        }
    }
    request.send()
}

addHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", '3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const template = document.createElement('div')
            template.innerHTML = request.response
            document.body.appendChild(template);
        }
    }
    request.send()
}

addXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

addJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(JSON.parse(request.response))
        }
    }
    request.send()
}

let n = 0
nextPage.onclick = () => {
    if (n === 3) {
        return window.alert('到底啦')
    }else {
        n += 1
    }
    const request = new XMLHttpRequest()
    request.open("get", `../db/page${n}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response)
            let page = `<ul>`
            data.forEach(item => {
                let k = Object.keys(item)[0]
                let v = item[k]
                page += `<li>${k}为${v}</li>`
            })
            page += `</ul>`
            displayList.innerHTML = page
        }
    }
    request.send()
}

previousPage.onclick = () => {
    if (n === 0) {
        return window.alert('到底啦')
    }else {
        n -= 1
    }
    const request = new XMLHttpRequest()
    request.open("get", `../db/page${n}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response)
            let page = `<ul>`
            data.forEach(item => {
                let k = Object.keys(item)[0]
                let v = item[k]
                page += `<li>${k}为${v}</li>`
            })
            page += `</ul>`
            displayList.innerHTML = page
        }
    }
    request.send()
}