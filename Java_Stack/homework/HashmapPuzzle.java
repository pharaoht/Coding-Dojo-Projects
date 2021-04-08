package Java_Stack.homework;

import java.util.HashMap;
import java.util.Set;

public class HashmapPuzzle {
    HashMap<String, String> tracks = new HashMap<String, String>();

    tracks.put("Time flies","Drake");

    tracks.put("From Time","Drake");

    tracks.put("No Tellin","Drake");

    tracks.put("Birthday","Drake");

    String name = tracks.get("Time flies");

    Set<String> keys = tracks.keySet();for(
    String key:keys)
    {
        System.out.println(key);
        System.out.println(tracks.get(key));
    }

}

// // HashMap<String, String> userMap = new HashMap<String, String>();

// userMap.put("nninja@codingdojo.com","Nancy Ninja");
// userMap.put("ssamurai@codingdojo.com","Sam Samurai");
// userMap.put("wwizard@codingdojo.com","Walter Wizard");

// // get the keys by using the keySet method

// Set<String> keys = userMap.keySet();for(
// String key:keys)
// {
// System.out.println(key);
// System.out.println(userMap.get(key));
// }

// ● Create a trackList of type HashMap

// Add in
// at least 4
// songs that
// are stored
// by title

// ●
// Pull out
// one of
// the songs
// by its
// track title

// ●
// Print out
// all the
// track names
// and lyrics
// in the
// format Track:
// Lyrics