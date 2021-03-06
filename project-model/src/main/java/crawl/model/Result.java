package crawl.model;

import lombok.Data;

import java.util.Map;

@Data
public class Result {

    /**
     * 整个的内容
     */
    private String body;
    /**
     * 头部信息
     */
    private Map<String,String> headers;
    /**
     * 状态码
     */
    private int statusCode;
    /**
     * 状态信息
     */
    private String statusMessage;
    /**
     * 请求方法
     */
    private String method;
    /**
     * 类型
     */
    private String contentType;
    /**
     * 编码
     */
    private String charset;

}
