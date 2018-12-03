var headerFlag = true; //是否添加头部
var proxyFlag = true;
var conditionNum = 0; //主条件个数
var childConditionNum = 0;
var headerNum = 0;

function addProxy(btn) {
    var proxy = document.getElementById("proxy");
    if (proxyFlag){
        proxy.innerHTML = proxyTemp();
        btn.innerHTML = '删除代理';
        btn.className = "btn btn-danger"
        proxyFlag = false;
    } else {
        btn.innerHTML = '添加代理'
        btn.className = "btn btn-primary"
        proxy.innerHTML = '';
        proxyFlag = true;
    }
}

function addHeaderForm(btn) {
    var header = document.getElementById("header");
    if (headerFlag){
        header.innerHTML= headerTemp();
        btn.innerHTML = '删除头部信息';
        btn.className = "btn btn-danger"
        headerFlag = false;
    } else {
        header.innerHTML= '';
        btn.className = "btn btn-info"
        btn.innerHTML = '添加头部信息';
        headerFlag = true;
    }
}

function addHeaderInfo(btn) {
    headerNum++;
    var header = document.getElementById("headers");
    header.innerHTML += headerInfoTemp(headerNum);
}

function delHeaderInfo(div) {
    var div = document.getElementById(div);
}

function fbHeaderInfo(div) {
    headerNum--;
    var div = document.getElementById(div);
}


function addCondition(btn) {
    conditionNum++;
    var condition = document.getElementById("conditionBody");
    condition.innerHTML += conditionTemp(conditionNum);

}