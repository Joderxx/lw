function proxyTemp() {
    var temp = "<div class=\"row panel panel-info text-center\">\n" +
        "                <div class=\"panel-heading\">代理</div>\n" +
        "                <div class=\"panel-body\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <form class=\"form-horizontal\">\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"host\" class=\"col-sm-1 control-label\">Host</label>\n" +
        "                                <div class=\"col-sm-10\">\n" +
        "                                    <input type=\"text\" class=\"form-control\" id=\"host\" placeholder=\"代理主机IP\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"port\" class=\"col-sm-1 control-label\">Port</label>\n" +
        "                                <div class=\"col-sm-3\">\n" +
        "                                    <input type=\"text\" class=\"form-control\" id=\"port\" placeholder=\"代理主机端口\">\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </form>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
    return temp;
}

function headerTemp() {
    var temp = "<div class=\"row panel panel-info text-center\">\n" +
        "                <div class=\"panel-heading\">头部信息</div>\n" +
        "                <div class=\"panel-body\">\n" +
                             "<div id='headers'></div>"+
        "                    <div class=\"row\">\n" +
        "                        <form class=\"form-horizontal\">\n" +
        "                            <div class=\"btn-group btn-group-sm\">\n" +
        "                                <button type=\"button\" class=\"btn btn-success\" onclick='addHeaderInfo(this)'>新增头部</button>\n" +
        "                            </div>\n" +
        "                        </form>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
    return temp;
}

function headerInfoTemp(index) {
    var temp = "<div id='headerInfo_"+index+"' class=\"row\">\n" +
        "                        <div class=\"row panel col-sm-offset-1 col-sm-10\">\n" +
        "                            <div class=\"col-sm-3 \">\n" +
        "                                <input type=\"text\" class=\"form-control\" id=\"headerKey\"_"+index+" placeholder=\"头部键\">\n" +
        "                            </div>\n" +
        "                            <div class=\"col-sm-1 \">\n" +
        "                                =\n" +
        "                            </div>\n" +
        "                            <div class=\"col-sm-6 \">\n" +
        "                                <input type=\"text\" class=\"form-control\" id=\"headerValue\"_"+index+" placeholder=\"头部值\">\n" +
        "                            </div>\n" +
        "                            <div >\n" +
        "                                <button type=\"button\" class=\"btn btn-warning btn-xs\" onclick='fbHeaderInfo(\"headerInfo_"+index+"\")'>\n" +
        "                                    <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>\n" +
        "                                </button>\n" +
        "                                <button type=\"button\" class=\"btn btn-danger btn-xs\" onclick='delHeaderInfo(\"headerInfo_"+index+"\")' >\n" +
        "                                    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n" +
        "                                </button>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        </div>"
    return temp;
}

function conditionTemp(index) {
    var temp = "<div class=\"row panel panel-info text-center\">\n" +
        "           <div class=\"panel-heading\">" +
        "               <input type=\"text\" name=\"attr\" placeholder=\"字段"+index+"\">" +
        "           </div>\n" +
        "           <div class=\"panel-body\">\n" +
        "           </div>" +
        "           <div class=\"row \">" +
        "               <form class=\"form-horizontal\">\n" +
        "                   <div class=\"btn-group btn-group-sm\">\n" +
        "                        <button type=\"button\" class=\"btn btn-success \">新增条件</button>\n" +
        "                    </div>\n" +
        "                </form>\n" +
        "           </div>"
        "       </div>";

    return temp;
}

function childConditionTemp(index) {

}