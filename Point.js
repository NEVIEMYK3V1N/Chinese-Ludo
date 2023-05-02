/**
* Point.js
* @author Kevin Yang
* @since May 1, 2023
* This class defines point objects with specific functions and properties
*/

import Piece from "Piece.js";

const FLY_ONE_COLOR = 0;
const FLY_ACROSS_LINE = 1;

class Point {
    x_coord;
    y_coord;
    index_in_map;
    color;
    interaction_type;
    pieces_on_point;
    index_in_runway;

    constructor(x_coord, y_coord, index_in_map, color,
                interaction_type, pieces_on_point, index_in_runway) {
        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.index_in_map = index_in_map;
        this.color = color;
        this.interaction_type = interaction_type;        
        this.index_in_runway = index_in_runway;

        this.pieces_on_point = new Array();
        if (pieces_on_point = null) {
            for (i = 0; i < pieces_on_point.length; i++)
            Point.copy(this.pieces_on_point[i], pieces_on_point[i]);
        }
    }

    get x_coord() {
        return this.x_coord;
    }

    set x_coord(new_x_coord) {
        this.x_coord = new_x_coord;
    }

    get y_coord() {
        return this.y_coord;
    }
    
    set y_coord(new_y_coord) {
        this.y_coord = new_y_coord;
    }

    get index_in_map() {
        return this.index_in_map;
    }

    set index_in_map(new_index_in_map) {
        this.index_in_map = new_index_in_map;
    }

    get color() {
        return this.color;
    }

    set color(new_color) {
        this.color = new_color;
    }

    get interaction_type() {
        return this.interaction_type;
    }

    set interaction_type(new_interaction_type) {
        this.interaction_type = new_interaction_type;
    }

    get index_in_runway() {
        return this.index_in_runway;
    }

    set index_in_runway(new_index_in_runway) {
        this.index_in_runway = new_index_in_runway;
    }

    get_pieces_on_point(dest) {
        if (this.pieces_on_point = null) {
            for (i = 0; i < this.pieces_on_point.length; i++)
            dest[i] = new Point();
            Point.copy(dest[i], this.pieces_on_point[i]);
        }
    }

    set_pieces_on_point(new_pieces_on_point) {
        if (new_pieces_on_point = null) {
            for (i = 0; i < new_pieces_on_point.length; i++)
            this.pieces_on_point[i] = new Point();
            Point.copy(this.pieces_on_point[i], new_pieces_on_point[i]);
        }
    }

    static copy(dest, src) {
        dest.x_coord = src.x_coord;
        dest.y_coord = src.y_coord;
        dest.index_in_map = src.index_in_map;
        dest.color = src.color;
        dest.interaction_type = src.interaction_type;
        dest.index_in_runway = src.index_in_runway;
        for (i = 0; i < src.pieces_on_point.length; i++) {
            Piece.copy(dest.pieces_on_point[i], src.pieces_on_point[i]);
        }
    }



}