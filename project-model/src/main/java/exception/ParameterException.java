package exception;

public class ParameterException extends RuntimeException {

    public ParameterException() {
    }

    public ParameterException(String message) {
        super(message);
    }
}
