/**
* Team.js
* @author Kevin Yang
* @since April 30, 2023
* This class defines team objects with specific properties and methods
*/

import Point from "Point.js";
import Dice from "Dice.js";

class Team {
    team_num;
    color;
    pieces_max;
    pieces_not_finished;
    finished;
    pieces_in_base;
    pt_begin;
    pt_end;
    pt_runway;
    all_pieces;
    valid_action_pieces;

    constructor(team_num, color, pieces_max, pieces_not_finished, 
                finished, pieces_in_base, pt_begin, pt_end, pt_runway,
                all_pieces, valid_action_pieces) {
        this.team_num = team_num;
        this.color = color;
        this.pieces_max = pieces_max;
        this.pieces_not_finished = pieces_not_finished;
        this.finished = finished;
        this.pieces_in_base = pieces_in_base;
        this.pt_begin = pt_begin;
        this.pt_end = pt_end;
        this.pt_runway = pt_runway;
        this.all_pieces = all_pieces;
        this.valid_action_pieces = valid_action_pieces;
    }

    constructor() {
        this.team_num = -1;
        this.color = "";
        this.pieces_max = -1;
        this.pieces_not_finished = -1;
        this.finished = false;
        this.pieces_in_base = -1;
        const pt_bgn = new Point();
        this.pt_begin = pt_bgn;
        const pt_ed = new Point();
        this.pt_end = pt_ed;
        const pt_rw = new Point();
        this.pt_runway = pt_rw;
        const all_pcs = [];
        this.all_pieces = all_pcs;
        const vap = [];
        this.valid_action_pieces = vap;
    }

    get t_num() {
        return this.team_num;
    }

    set t_num(new_num) {
        this.team_num = new_num;
    }

    get clr() {
        return this.color;
    }

    set clr(new_color) {
        this.color = new_color;
    }

    get pcs_max() {
        return this.pieces_max;
    }
    
    set pcs_max(new_pieces_max) {
        this.pieces_max = new_pieces_max;
    }

    get pcs_n_fini() {
        return this.pieces_not_finished;
    }
    
    set pcs_n_fini(new_pieces_not_finished) {
        this.pieces_not_finished = new_pieces_not_finished;
    }

    get fini() {
        return this.finished;
    }
    
    set fini(new_finished) {
        this.finished = new_finished;
    }

    get pcs_in_bs() {
        return this.pieces_in_base;
    }
    
    set pcs_in_bs(new_pieces_in_base) {
        this.pieces_in_base = new_pieces_in_base;
    }

    get pt_bgn() {
        return this.pt_begin;
    }
    
    set pt_bgn(new_pt_begin) {
        this.pt_begin = new_pt_begin;
    }

    get pt_end() {
        return this.pt_end;
    }
    
    set pt_end(new_pt_end) {
        this.pt_end = new_pt_end;
    }

    get pt_rw() {
        return this.pt_runway;
    }
    
    set pt_rw(new_pt_runway) {
        this.pt_runway = new_pt_runway;
    }

    get all_pcs() {
        return this.all_pieces;
    }
    
    set all_pcs(new_all_pieces) {
        this.all_pieces = new_all_pieces;
    }

    get va_pcs() {
        return this.valid_action_pieces;
    }
    
    set va_pcs(new_valid_action_pieces) {
        this.valid_action_pieces = new_valid_action_pieces;
    }

    roll_dice(d) {
        return d.roll();
    }

    is_piece_finished (piece_index) {
        
    }

    is_piece_valid_action (num_rolled, piece_index) {

    }

    valid_pieces_update (num_rolled) {

    }

    piece_move (num_rolled, piece_index) {

    }

}