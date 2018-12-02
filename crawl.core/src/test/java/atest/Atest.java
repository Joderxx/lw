package atest;

import org.jsoup.Connection;
import org.junit.Test;

public class Atest {

    @Test
    public void test1(){
        System.out.println(Connection.Method.valueOf("GET"));
    }
}
