package Java_Stack.homework.linkList;

public class LinkList {
    public Node head;

    public LinkList() {

    }

    public void add(int value) {
        Node newNode = new Node(value);
        if (head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    public void remove(int value){
        Node.pop()
    }

    public void printValues() {
        for (int i = 0; i < Node.size(); i++) {
            System.out.println(Node.get(i));
        }
    }
}
