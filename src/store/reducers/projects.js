import React from "react";

export const initProjectsState = [
  {
    title: "Running Around",
    author: "Dree",
    content: "run run run"
  },
  {
    title: "Up and Away",
    author: "Larissa",
    content: "delicious"
  }
];

export function projectsReducer(state, action) {

  switch (action.type) {

    case("ADD_PROJECT") : {
      return state
    }

    case("DELETE_PROJECT") : {
      return state
    }

    default: break;

  }
  return state;
}