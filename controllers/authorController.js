import { authorModel } from "../models";
import { APIResponse } from "../utils/response.js";

export const getAuthors = (request, response) => {
  const authors = authorModel.getAllAuthors();
  APIResponse(response, authors, "List of all authors");
};

export const getAuthor = (request, response) => {
  const { id } = request.params;
  const author = authorModel.getAuthorById(id);
  if (author) {
    APIResponse(response, author, "Author found");
  } else {
    APIResponse(response, null, "Author not found", 404);
  }
};

export const createAuthor = (request, response) => {
  const newAuthor = request.body;
  newAuthor.id = crypto.randomUUID();
  authorModel.addAuthor(newAuthor);
  APIResponse(response, newAuthor, "Author created", 201);
};

export const deleteAuthor = (request, response) => {
  const id = request.params.id;
  const author = authorModel.getAuthorById(id);
  if (author) {
    authorModel.deleteAuthor(id);
    APIResponse(response, null, "Author deleted", 204);
  } else APIResponse(response, null, "Author not found", 404);
};

export const updateAuthor = (request, response) => {
  const id = request.params.id;
  const newAuthor = request.body;
  const author = authorModel.getAuthorById(id);
  if (author) {
    authorModel.updateAuthor(id, new Author());
    APIResponse(response, post, "Author updated", 200);
  } else APIResponse(response, null, "Author not found", 404);
};
