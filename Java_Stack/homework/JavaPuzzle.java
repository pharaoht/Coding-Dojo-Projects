package Java_Stack.homework;

import java.util.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Random;

public class JavaPuzzle {
    public static ArrayList<Integer> Numbers() {
        int sum;
        ArrayList<Integer> dynamicArray = new ArrayList<Integer>();
        ArrayList<Integer> dynamicArray2 = new ArrayList<Integer>();
        dynamicArray.add(3);
        dynamicArray.add(5);
        dynamicArray.add(1);
        dynamicArray.add(2);
        dynamicArray.add(7);
        dynamicArray.add(9);
        dynamicArray.add(8);
        dynamicArray.add(13);
        dynamicArray.add(25);
        dynamicArray.add(32);

        for (int i = 0; i <= dynamicArray.size(); i++) {
            sum = dynamicArray.get(i) + 0;
            if (dynamicArray.get(i) > 10) {
                dynamicArray2.add(dynamicArray.get(i));
            }
        }

        return dynamicArray2;
    }

    public static ArrayList<String> Names() {
        ArrayList<String> nameArray = new ArrayList<String>();
        ArrayList<String> nameArray2 = new ArrayList<String>();
        String temp;

        nameArray.add("Nancy");
        nameArray.add("Jinichi");
        nameArray.add("Fujibayashi");
        nameArray.add("Momochi");
        nameArray.add("Ishikawa");
        Collections.shuffle(nameArray);
        for (int i = 0; i < nameArray.size(); i++) {
            temp = nameArray.get(i);

            if (temp.length() > 5) {
                nameArray2.add(temp);
            }
        }

        return nameArray2;
    }

    public static ArrayList<String> Alphabet() {
        String letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
        ArrayList<String> splited = new ArrayList<String>(Arrays.asList(letters.split(",")));
        Collections.shuffle(splited);
        System.out.println(splited.get(0));
        System.out.println(splited.get(25));
        return splited;
    }

    public static ArrayList<Integer> RandomNum() {
        Random rand = new Random();
        ArrayList<Integer> random = new ArrayList<Integer>();
        int i = 0;
        while (i < 10) {
            random.add(rand.nextInt(100));
            i++;
        }

        return random;
    }
}

// Create an array that contains all 26 letters of the alphabet (this array must
// have 26 values). Shuffle the array and, after shuffling, display the last
// letter from the array. Have it also display the first letter of the array. If
// the first letter in the array is a vowel, have it display a message.