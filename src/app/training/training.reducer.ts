import { Action } from "@ngrx/store";
import { Exercise } from "./exercise.model";
import * as fromRoot from '../app.reducer'

import { 
    TrainingActions,
    SET_AVAILABLE_TRAININGS,
    SET_FINISHED_TRAININGS,
    START_TRAINING,
    STOP_TRAINING
 } from './training.actions'

import { TrainingService } from "./training.service";

export interface TrainingState {
    availableExercises: Exercise[];
    finishedExercises: Exercise[];
    activeTraining: Exercise;
};

export interface State extends fromRoot.State {
    training: TrainingService;
}

const initailState: TrainingState = {
    availableExercises: [],
    finishedExercises: [],
    activeTraining: null,
};

export function authReducer(state = initailState, action: TrainingActions) {
    switch( action.type) {
        case SET_AVAILABLE_TRAININGS:
            return { 
                ...state,
                availableExercise: action.payload
            };
        case SET_FINISHED_TRAININGS:
            return {
                ...state,
                finishedExercises: action.payload
            };
        case START_TRAINING:
            return {
                ...state,
                activeTraining: action.payload
            };
        case STOP_TRAINING:
            return {
                ...state,
                activeTraining: null,
            };
        default: {
            return state;
        }
    }
}

export const getAvailableExercises = (state: TrainingState) => state.availableExercises;
export const getFinishedExercises = (state: TrainingState) => state.finishedExercises;
export const getActiveTraining = (state: TrainingState) => state.activeTraining;