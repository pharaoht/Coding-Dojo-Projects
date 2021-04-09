package Java_Stack.homework;

import java.util.ArrayList;

public class TryCatch {
    ArrayList<Object> myList = new ArrayList<Object>();myList.add("13");

    for(
    int i = 0;i<myList.size();i++)
    {
        try{
            Integer castedValue = (Integer) myList.get(i);
        }
        catch{
            throw new Error();
        }
    
    }
}
