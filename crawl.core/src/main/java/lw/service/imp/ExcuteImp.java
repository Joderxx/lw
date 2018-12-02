package lw.service.imp;


import crawl.model.ExcuteParameter;
import crawl.model.Result;
import lw.service.Crawl;
import lw.service.Excute;
import org.jsoup.Connection;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExcuteImp implements Excute {

    @Autowired
    private Crawl crawl;

    @Override
    public Result excute(ExcuteParameter parameter) throws Exception {
        Result result = new Result();
        Connection connection = crawl.connect(parameter.getUrl()).ignoreContentType(true);
        connection = crawl.data(connection,parameter.getData());
        connection = crawl.method(connection,parameter.getMethod());
        connection = crawl.doLogin(connection,
                parameter.getLoginUrl(),parameter.getLoginData());
        connection = crawl.cookies(connection,parameter.getCookies());
        connection = crawl.headers(connection,parameter.getHeaders());
        connection = crawl.proxy(connection,parameter.getProxyHost(),parameter.getProxyPort());
        connection = crawl.requestBody(connection,parameter.getRequestBody());
        Connection.Response response = crawl.excute(connection);

        result.setMethod(parameter.getMethod().toUpperCase());
        result.setCharset(crawl.charset(response));
        result.setHeaders(crawl.headers(response));
        result.setStatusCode(crawl.statusCode(response));
        result.setStatusMessage(crawl.statusMessage(response));
        result.setCharset(crawl.charset(response));

        if (!parameter.isFilter()){
            result.setBody(crawl.body(response));
            result.setContentType(crawl.contentType(response));
        }else {
            Element body = crawl.parseHtml(crawl.body(response));
            //todo
        }

        return result;
    }
}
