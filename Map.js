/**
* Map.js
* @author Kevin Yang
* @since May 1, 2023
* This class defines map objects with specific functions and properties
*/

import Point from "Point.js";

class Map {
    all_points;
    num_of_points;

    constructor(all_points, num_of_points) {
        this.all_points = new Array();
        for (let i = 0; i < num_of_points; i++) {
            Point.copy(this.all_points[i], all_points[i]);
        }
        this.num_of_points = num_of_points;
    }

    /*
    get num_of_points() {
        return this.num_of_points;
    }

    set num_of_points(new_num_of_points) {
        this.num_of_points = new_num_of_points;
    }
    */

    get_point_at_index(dest, index) {
        Point.copy(dest, this.all_points[index]);
    }

    set_point_at_index(new_pt, index) {
        Point.copy(this.all_points[index], new_pt);
    }
}