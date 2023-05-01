/**
* Point.js
* @author Kevin Yang
* @since May 1, 2023
* This class defines point objects with specific functions and properties
*/

const FLY_ONE_COLOR = 0;
const FLY_ACROSS_LINE = 1;

class Point {
    x_coord;
    y_coord;
    index_in_map;
    color;
    interaction;
    empty_func() {
    }
    interaction_type;

    constructor(x_coord, y_coord, index_in_map, color, interaction,
                interaction_type, pieces_on_point) {
        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.index_in_map = index_in_map;
        this.color = color;
        this.interaction = interaction;
        this.interaction_type = interaction_type;
        this.pieces_on_point = pieces_on_point;
    }

    constructor() {
        this.x_coord = -1;
        this.y_coord = -1;
        this.index_in_map = -1;
        let new_color = "";
        this.color = new_color;
        this.index_in_map = empty_func;
        this.interaction_type = -1;
        const new_array = [];
        this.pieces_on_point = new_array;
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

    get interaction() {
        return this.interaction;
    }

    set interaction(new_interaction) {
        this.interaction = new_interaction;
    }

    get pieces_on_point() {
        return this.pieces_on_point;
    }

    set pieces_on_point(new_pieces_on_point) {
        this.pieces_on_point = new_pieces_on_point;
    }

}