package springTest;

import crawl.model.ExcuteParameter;
import lw.service.Excute;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-crawl.xml")
public class Test11 {

    @Autowired
    private Excute excute;

    @Test
    public void test1() throws Exception {
        ExcuteParameter parameter = new ExcuteParameter();
        parameter.setUrl("https://www.baidu.com/");
        parameter.setMethod("get");
        System.out.println(excute.excute(parameter));
    }

}
