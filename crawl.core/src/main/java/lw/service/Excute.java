package lw.service;

import crawl.model.ExcuteParameter;
import crawl.model.Result;

public interface Excute {

    Result excute(ExcuteParameter parameter) throws Exception;
}
