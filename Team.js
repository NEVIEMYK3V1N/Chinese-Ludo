/**
* Team.js
* @author Kevin Yang
* @since April 30, 2023
* This class defines team objects with specific properties and methods
*/

import Point from "Point.js";
import Piece from "Piece.js";
import Dice from "Dice.js";
import Map from "Map.js";

const CAN_LEAVE_BASE = 6;
const MAX_LB_IN_A_ROW = 3;

class Team {
    team_num;
    color;
    pieces_max;
    pieces_not_finished;
    finished;
    pieces_in_base;
    index_pt_begin;
    index_pt_end;
    index_pt_runway_begin;
    all_pieces;
    valid_action_pieces;
    six_count;
    runway_points;
    runway_length;
    spacing;


    constructor(team_num, color, pieces_max, pieces_not_finished, 
                finished, pieces_in_base, index_pt_begin, index_pt_end, 
                index_pt_runway_begin, all_pieces, valid_action_pieces,
                six_count, runway_points, runway_length, spacing) {
        this.team_num = team_num;
        this.color = color;
        this.pieces_max = pieces_max;
        this.pieces_not_finished = pieces_not_finished;
        this.finished = finished;
        this.six_count = six_count;
        this.pieces_in_base = pieces_in_base;
        this.index_pt_begin = index_pt_begin;
        this.index_pt_end = index_pt_end;
        this.index_pt_runway_begin = index_pt_runway_begin;
        this.runway_length = runway_length;
        this.spacing = spacing;

        this.all_pieces = new Array();
        for (i = 0; i < all_pieces.length; i++) {
            this.all_pieces[i] = new Piece();
            Piece.copy(this.all_pieces[i], all_pieces[i]);
        }
        
        this.valid_action_pieces = new Array();
        for (i = 0; i < valid_action_pieces.length; i++) {
            if (typeof (valid_action_pieces[i]) == "boolean") {
                this.valid_action_pieces[i] = valid_action_pieces[i];
            } else {
                this.valid_action_pieces[i] = new Point();
                Point.copy(this.valid_action_pieces[i], valid_action_pieces[i]);
            }
        }

        this.runway_points = new Array();
        for (i = 0; i < runway_length; i++) {
            this.runway_points[i] = new Point();
            Point.copy(this.runway_points[i], runway_points[i]);
        }
    }

    constructor() {
        this.team_num = -1;
        this.color = "";
        this.pieces_max = -1;
        this.pieces_not_finished = -1;
        this.finished = false;
        this.pieces_in_base = -1;
        this.index_pt_begin = -1;
        this.index_pt_end = -1;
        this.index_pt_runway_begin = -1;
        this.all_pieces = new Array();
        this.valid_action_pieces = new Array();
        this.six_count = -1;
        this.runway_points = new Array();
        this.runway_length = -1;
        this.spacing = -1;
    }

    get team_num() {
        return this.team_num;
    }

    set team_num(new_num) {
        this.team_num = new_num;
    }

    get color() {
        return this.color;
    }

    set color(new_color) {
        this.color = new_color;
    }

    get pieces_max() {
        return this.pieces_max;
    }
    
    set pieces_max(new_pieces_max) {
        this.pieces_max = new_pieces_max;
    }

    get pieces_not_finished() {
        return this.pieces_not_finished;
    }
    
    set pieces_not_finished(new_pieces_not_finished) {
        this.pieces_not_finished = new_pieces_not_finished;
    }

    get finished() {
        return this.finished;
    }
    
    set finished(new_finished) {
        this.finished = new_finished;
    }

    get six_count() {
        return this.six_count;
    }

    set six_count(new_six_count) {
        this.six_count = new_six_count;
    }

    get pieces_in_base() {
        return this.pieces_in_base;
    }
    
    set pieces_in_base(new_pieces_in_base) {
        this.pieces_in_base = new_pieces_in_base;
    }

    get index_pt_begin() {
        return this.index_pt_begin;
    }
    
    set index_pt_begin(new_index_pt_begin) {
        this.index_pt_begin = new_index_pt_begin;
    }

    get index_pt_end() {
        return this.index_pt_end;
    }
    
    set index_pt_end(new_index_pt_end) {
        this.index_pt_end = new_index_pt_end;
    }

    get index_pt_runway_begin() {
        return this.index_pt_runway_begin;
    }
    
    set index_pt_runway_begin(new_index_pt_runway_begin) {
        this.index_pt_runway_begin = new_index_pt_runway_begin;
    }

    get runway_length() {
        return this.runway_length;
    }

    set runway_length(new_runway_length) {
        this.runway_length = new_runway_length;
    }

    this.all_pieces = new Array();
        for (i = 0; i < all_pieces.length; i++) {
            this.all_pieces[i] = new Piece();
            Piece.copy(this.all_pieces[i], all_pieces[i]);
        }
        
        this.valid_action_pieces = new Array();
        for (i = 0; i < valid_action_pieces.length; i++) {
            if (typeof (valid_action_pieces[i]) == "boolean") {
                this.valid_action_pieces[i] = valid_action_pieces[i];
            } else {
                this.valid_action_pieces[i] = new Point();
                Point.copy(this.valid_action_pieces[i], valid_action_pieces[i]);
            }
        }

        this.runway_points = new Array();
        for (i = 0; i < runway_length; i++) {
            this.runway_points[i] = new Point();
            Point.copy(this.runway_points[i], runway_points[i]);
        }
    
    get_all_pieces(dest) {
        dest = new Array();
        
    }
    
    set all_pieces(new_all_pieces) {
        this.all_pieces = new_all_pieces;
    }

    get valid_action_pieces() {
        return this.valid_action_pieces;
    }
    
    set valid_action_pieces(new_valid_action_pieces) {
        this.valid_action_pieces = new_valid_action_pieces;
    }

    get runway_points() {
        return this.runway_points;
    }

    set runway_points(new_runway_points) {
        this.runway_points = this.runway_points;
    }    

    roll_dice(d) {
        return d.roll();
    }

    update_point_after_move(num_rolled, piece_index, map) {
        // move failed
        // index invalid
        if (piece_index < 0 || piece_index >= this.pieces_max) {
            return false;
        }
        
        const current_piece = new Piece();
        Piece.copy(current_piece, this.all_pieces[piece_index]);

        // piece already finished
        if (current_piece.finished) {
            return false;
        }

        // piece in base and didn't roll 6 
        if (num_rolled != CAN_LEAVE_BASE && current_piece.in_base) {
            return false;
        }

        const original_pt = new Point();
        Point.copy(original_pt, current_piece.pt_current);
        original_index = current_piece.pt_current.index_in_map;

        current_index = original_index;
        
        // move succeeded
        // if didnt roll 6
        if (num_rolled != CAN_LEAVE_BASE) {
            for (i = 0; i < num_rolled; i++) {
                forward_runway = true;
                forward_blocked = true;
                flied = false;
                index_pt_before_fly;
                is_blocked = current_piece.is_blocked;
                // if in runway
                if (current_piece.in_runway) {
                    // if piece reached the end of runway
                    if (current_piece.index_in_runway == this.runway_length - 1) {
                        // if movement is finished
                        if (i == num_rolled - 1) {
                            current_piece.finished = true;
                        }
                        // now start moving backwards
                        forward_runway = false;
                    }
                    // if the piece has not yet reached the end of runway - move forward
                    if (forward_runway) {
                        current_piece.index_in_runway += 1;
                        current_piece.pt_current = 
                        this.runway_points[current_piece.index_in_runway];
                    }
                    // if the piece reached the end of runway && still has moves - move backwards
                    else if (!forward_runway) {
                        current_piece.index_in_runway -= 1;
                        current_piece.pt_current = 
                        this.runway_points[current_piece.index_in_runway];
                    }
                }

                // if piece not in runway yet
                else if (!current_piece.in_runway) {
                    next_index;
                    // if the point is at the end of the map array - cycles back
                    if (current_index == map.num_of_points) {
                        next_index = 0;
                    } else {
                        next_index = current_index + 1;
                    }

                    // if the piece is not blocked and 
                    if (next_index == this.index_pt_runway_begin && 
                        !is_blocked) {

                    }
                }
            }
            
            if (true) {

            }

            // if no doubled-up pieces - move like usual

            // if there is doubled - move like 
        }

        // if rolled 6
        else if (num_rolled == CAN_LEAVE_BASE) {
            // max num of 6 in a row reached - return all pieces to base
        }
    }

    valid_pieces_update (num_rolled, map) {

    }

    piece_move (num_rolled, piece_index) {

    }

}