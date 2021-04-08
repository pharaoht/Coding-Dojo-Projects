package Java_Stack.homework;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class basics {

    public static void printTo() {
        Integer num = 255;
        for (int i = 0; i <= num; i++) {
            System.out.println(i);
        }

    }

    public static void printOdd() {
        Integer num = 255;
        for (int i = 0; i <= num; i++) {
            if (i % 2 == 1) {
                System.out.println(i);
            }
        }
    }

    public static void printSum() {
        Integer num = 255;
        for (int i = 0; i <= num; i++) {
            int sum;
            sum = i + i;
            System.out.println(sum);
        }
    }

    public static void iterateArray() {
        ArrayList<Integer> dynamicArray = new ArrayList<Integer>();
        dynamicArray.add(1);
        dynamicArray.add(2);
        dynamicArray.add(3);
        dynamicArray.add(4);
        dynamicArray.add(5);
        dynamicArray.add(6);
        for (int i = 0; i <= dynamicArray.size(); i++) {
            System.out.println(i);
        }
    }

    public static void findMax() {
        ArrayList<Integer> dynamicArray = new ArrayList<Integer>();
        dynamicArray.add(1);
        dynamicArray.add(2);
        dynamicArray.add(3);
        dynamicArray.add(4);
        dynamicArray.add(5);
        dynamicArray.add(6);
        for (int i = 0; i <= dynamicArray.size(); i++) {
            int max = i;
            if (i > max) {
                max = i;
            }

        }
    }

    public static Integer findAverage() {
        int avg = 0;
        ArrayList<Integer> dynamicArray = new ArrayList<Integer>();
        dynamicArray.add(1);
        dynamicArray.add(2);
        dynamicArray.add(3);
        dynamicArray.add(4);
        dynamicArray.add(5);
        dynamicArray.add(6);

        for (int i = 0; i <= dynamicArray.size(); i++) {
            // avg = dynamicArray[i] + 0;
        }

        return avg / dynamicArray.size();
    }

    public static void findY(int num) {
        ArrayList<Integer> dynamicArray = new ArrayList<Integer>();
        dynamicArray.add(1);
        dynamicArray.add(2);
        dynamicArray.add(3);
        dynamicArray.add(4);
        dynamicArray.add(5);
        dynamicArray.add(6);

        for (int i = 0; i <= dynamicArray.size(); i++) {
            // if(dynamicArray[i] > num){
            // return dynamicArray[i]
            // }
        }
    }

    public static void sqaure() {
        int sum;
        ArrayList<Integer> dynamicArray = new ArrayList<Integer>();
        dynamicArray.add(1);
        dynamicArray.add(2);
        dynamicArray.add(3);
        dynamicArray.add(4);
        dynamicArray.add(5);
        dynamicArray.add(6);

        for (int i = 0; i <= dynamicArray.size(); i++) {
            // sum = dynamicArray[i] * dynamicArray[i];
        }
    }

}

// print 1-255

// print odd 1-255

// print sum 0 -255

// Iterating through an array

// find max

// get average

// array with odds

// greater than y

// square the values

// Eliminate negative numbers

// max, min, average

// shifting the values