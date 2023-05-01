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
        let new_color = "";
        this.color = new_color;
        const new_pt = new Point();
        this.pt_current = new_pt;
        this.finished = false;
        this.in_base = true;
        this.in_runway = false;
    }

    get color() {
        return this.color;
    }
    
    set color(new_color) {
        this.color = new_color;
    }

    get pt_current() {
        return this.pt_current;
    }

    set pt_current(new_pt_current) {
        this.pt_current = new_pt_current;
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

    move(pt_move_to) {
        this.pt_current = pt_move_to;
    }
}