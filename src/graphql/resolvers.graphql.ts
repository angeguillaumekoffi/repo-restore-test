import { todoList } from "../db";
import { TodoListModel } from "../model";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    getTodoList: (root: any) => {
      return new Promise((resolve, reject) => {
        todoList.find((err: any, todolist: TodoListModel[]) => {
          if (err) reject(err);
          else resolve(todolist);
        });
      });
    },
    
    findATodo: (root: any, todo: any) => {
      return new Promise((resolve, reject) => {
        todoList.findOne({ _id: todo.id }, (err: any, todo: TodoListModel) => {
          if (err) reject(err);
          else resolve(todo);
        });
      });
    }
  },
  
  Mutation: {
    addTodo: (root: any, { todolist }) => {
      const { ...rest } = todolist;
      const newTodo = new todoList({ ...rest });

      return new Promise((resolve, reject) => {
        newTodo.save((err: any, todolist: TodoListModel) => {
          if (err) reject(err);
          else resolve(todolist);
        });
      });
    },

    updateTodo: (root: any, { todolist }) => {
      const { ...rest } = todolist;
      const newTodo = new todolist({
        ...rest,
      });

      return new Promise((resolve, reject) => {
        newTodo.save((err: any, todo: TodoListModel) => {
          if (err) reject(err);
          resolve(todo);
        });
      });
    },

    deleteTodo: (root: any, todo: any) => {
        console.log(todo);
    }
  },
};
