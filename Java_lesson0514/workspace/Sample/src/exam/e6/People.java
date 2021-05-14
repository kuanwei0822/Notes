package exam.e6;

public class People {
    private String id;
    private int age;

    public People(String id, int age) {
        this.id = id;
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
