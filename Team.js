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
    pt_begin;
    pt_end;
    pt_runway_begin;
    all_pieces;
    valid_action_pieces;
    six_count;
    runway_points;
    runway_length;


    constructor(team_num, color, pieces_max, pieces_not_finished, 
                finished, pieces_in_base, pt_begin, pt_end, pt_runway_begin,
                all_pieces, valid_action_pieces,six_count,
                runway_points, runway_length) {
        this.team_num = team_num;
        this.color = color;
        this.pieces_max = pieces_max;
        this.pieces_not_finished = pieces_not_finished;
        this.finished = finished;
        this.pieces_in_base = pieces_in_base;
        this.pt_begin = pt_begin;
        this.pt_end = pt_end;
        this.pt_runway_begin = pt_runway_begin;
        this.all_pieces = all_pieces;
        this.valid_action_pieces = valid_action_pieces;
        this.six_count = six_count;
        this.runway_points = runway_points;
        this.runway_length = runway_length;
    }

    constructor() {
        this.team_num = -1;
        let new_color = "";
        this.color = new_color;
        this.pieces_max = -1;
        this.pieces_not_finished = -1;
        this.finished = false;
        this.pieces_in_base = -1;
        const pt_bgn = new Point();
        this.pt_begin = pt_bgn;
        const pt_ed = new Point();
        this.pt_end = pt_ed;
        const pt_rw_bgn = new Point();
        this.pt_runway_begin = pt_rw_bgn;
        const all_pcs = [];
        this.all_pieces = all_pcs;
        const vap = [];
        this.valid_action_pieces = vap;
        this.six_count = -1;
        const rw_pts = [];
        this.runway_points = rw_pts;
        this.runway_length = -1;
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

    get pieces_in_base() {
        return this.pieces_in_base;
    }
    
    set pieces_in_base(new_pieces_in_base) {
        this.pieces_in_base = new_pieces_in_base;
    }

    get pt_begin() {
        return this.pt_begin;
    }
    
    set pt_begin(new_pt_begin) {
        this.pt_begin = new_pt_begin;
    }

    get pt_end() {
        return this.pt_end;
    }
    
    set pt_end(new_pt_end) {
        this.pt_end = new_pt_end;
    }

    get pt_runway_begin() {
        return this.pt_runway_begin;
    }
    
    set pt_runway_begin(new_pt_runway_begin) {
        this.pt_runway_begin = new_pt_runway_begin;
    }

    get all_pieces() {
        return this.all_pieces;
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

    get runway_length() {
        return this.runway_length;
    }

    set runway_length(new_runway_length) {
        this.runway_length = new_runway_length;
    }

    roll_dice(d) {
        return d.roll();
    }

    get_point_after_move(num_rolled, piece_index, map) {
        // move failed
        // index invalid
        if (piece_index < 0 || piece_index >= this.pieces_max) {
            return false;
        }
        
        const current_piece = this.all_pieces[piece_index];

        // piece already finished
        if (current_piece.finished) {
            return false;
        }

        // piece in base and didn't roll 6 
        if (num_rolled != CAN_LEAVE_BASE && current_piece.in_base) {
            return false;
        }

        const current_point = current_piece.pt_current;
        current_index = current_point.index_in_map;
        
        // move succeeded
        // if didnt roll 6
        if (num_rolled != CAN_LEAVE_BASE) {
            for (i = 0; i < num_rolled; i++) {
                forward_runway = true;
                forward_blocked = true;
                flied = false;
                const pt_before_fly = null;
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