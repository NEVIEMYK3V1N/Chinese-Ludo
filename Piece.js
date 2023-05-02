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
    pt_current;
    finished;
    in_base;
    in_runway;
    is_blocked;

    constructor(color, pt_current, finished, in_base, in_runway) {
        this.color = color;
        this.pt_current = pt_current;
        this.finished = finished;
        this.in_base = in_base;
        this.in_runway = in_runway;
    }

    constructor() {
        this.color = "";
        this.pt_current = new Point();
        this.finished = false;
        this.in_base = true;
        this.in_runway = false;
    }

    // unsure
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

    get_pt_current(dest) {
        Point.copy(dest, this.pt_current);
    }

    set_pt_current(new_pt_current) {
        Point.copy(this.pt_current, new_pt_current);
    }

    move(pt_move_to) {
        Point.copy(this.pt_current, pt_move_to);
    }

    static copy(dest, src) {
        dest.color = src.color;
        dest.finished = src.finished;
        dest.in_base = src.in_base;
        dest.in_runway = src.in_runway;
        dest.is_blocked = src.is_blocked;
        Point.copy(dest.pt_current, src.pt_current);
    }
}