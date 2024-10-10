import { Request, Response } from "express";

import { getAllUsers, getUserById } from "../models";
import { APIResponse } from "../utils";

export const getUsers = async (request: Request, response: Response) => {
  const users = await getAllUsers();
  APIResponse(response, users, "List of all users");
};

export const getUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const objectId = id;

  const user = await getUserById(objectId);
  if (user) {
    APIResponse(response, user, "User found");
  } else {
    APIResponse(response, null, "User not found", 404);
  }
};
