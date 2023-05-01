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
        this.all_points = all_points;
        this.num_of_points = num_of_points;
    }

    constructor() {
        const all_pts = [];
        this.all_points = all_pts;
        this.num_of_points = 0;
    }

    get all_points() {
        return this.all_points;
    }

    set all_points(new_all_points) {
        this.all_points = this.new_all_points;
    }

    get num_of_points() {
        return this.num_of_points;
    }

    set num_of_points(new_num_of_points) {
        this.num_of_points = new_num_of_points;
    }

    change_point(index, pt) {
        this.all_points[index] = pt;
    }
}