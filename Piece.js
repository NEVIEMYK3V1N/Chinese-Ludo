/**
* Piece.js
* @author Kevin Yang
* @since April 30, 2023
* This class defines piece objects with specific functions and properties
*/

import Team from "Team.js";
import Point from "Point.js";

class Piece {
    color;
    index_pt_current;
    finished;
    in_base;
    in_runway;
    is_blocked;

    constructor(color, index_pt_current, finished, in_base, in_runway, is_blocked) {
        this.color = color;
        this.index_pt_current = index_pt_current;
        this.finished = finished;
        this.in_base = in_base;
        this.in_runway = in_runway;
        this.is_blocked = is_blocked;
    }

    /*
    get color() {
        return this.color;
    }
    
    set color(new_color) {
        this.color = new_color;
    }
    
    get finished() {
        return this.finished;
    }

    set finished(new_finished) {
        this.finished = new_finished;
    }

    get in_base() {
        return this.in_base;
    }

    set in_base(new_in_base) {
        this.in_base = new_in_base;
    }

    get in_runway() {
        return this.in_runway;
    }

    set in_runway(new_in_runway) {
        this.in_runway = new_in_runway;
    }

    get is_blocked() {
        return this.is_blocked;
    }

    set is_blocked(new_is_blocked) {
        this.is_blocked = new_is_blocked;
    }

    get index_pt_current() {
        return this.index_pt_current;
    }

    set index_pt_current (new_index_pt_current) {
        this.index_pt_current = new_index_pt_current;
    }
    */

    static copy(dest, src) {
        dest.color = src.color;
        dest.finished = src.finished;
        dest.in_base = src.in_base;
        dest.in_runway = src.in_runway;
        dest.is_blocked = src.is_blocked;
        dest.index_pt_current = src.index_pt_current;
    }
}