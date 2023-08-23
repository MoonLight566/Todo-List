import { PopTwo } from "./home";

export const save = () => {
  const myTodo = [];
  const TodoList1 = (ProjectName) => {
    return {
      ProjectName,
    };
  };
  const TodoList = (TodoListName, Description, DueDate, Priority) => {
    return {
      TodoListName,
      Description,
      DueDate,
      Priority,
    };
  };

  const ProjectTask = () => {
    const TodoGrid = document.getElementById("TodoGrid");
    TodoGrid.textContent = "";
    for (let i = 0; i < myTodo.length; i++) {
      let Todo1 = myTodo[i];
      // TodoCard.onclick="event.stopPropagation();
      const TodoCard = document.createElement("div");
      TodoCard.classList.add("TodoCard");
      const ProjectName = document.createElement("h2");
      ProjectName.textContent = Todo1.ProjectName;
      const Button = document.createElement("button");
      Button.setAttribute("id", "Add1");
      Button.innerHTML = "Add Todo";
      const ContainerOne = document.createElement("div");
      ContainerOne.classList.add("ContainerOne");

      ContainerOne.appendChild(ProjectName);
      ContainerOne.appendChild(Button);
      TodoCard.appendChild(ContainerOne);
      TodoCard.appendChild(Container);
      TodoGrid.appendChild(TodoCard);
    }

    console.log(myTodo);
    const hi = document.querySelector("#Add1");
    hi.addEventListener("click", PopTwo);
  };
  const Project = (event) => {
    document.getElementById("ProjectPop").style.display = "none";
    const ProjectName = document.getElementById("ProjectName").value;
    const new1 = TodoList1(ProjectName);
    myTodo.push(new1);
    document.getElementById("One").reset();
    event.preventDefault();
    ProjectTask();
  };
  const Task = () => {
    const TodoGrid = document.getElementById("TodoGrid");
    const TodoCard = document.querySelector(".TodoCard");
    //   const Container = document.querySelector(".Container");
    //   Container.textContent = "";
    for (let j = 0; j < myTodo.length; j++) {
      let Todo = myTodo[j];
      const Container = document.createElement("div");
      Container.classList.add("Container");
      const ListContainer = document.createElement("div");
      ListContainer.classList.add("ListContainer");
      const TodoListName = document.createElement("p");
      TodoListName.textContent = Todo.TodoListName;
      const Description = document.createElement("p");
      Description.textContent = Todo.Description;
      const DueDate = document.createElement("p");
      DueDate.textContent = Todo.DueDate;
      const Priority = document.createElement("p");
      Priority.textContent = Todo.Priority;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "check";
      checkbox.value = "check";
      checkbox.id = "checkbox";

      ListContainer.appendChild(checkbox);
      ListContainer.appendChild(TodoListName);
      ListContainer.appendChild(Description);
      ListContainer.appendChild(DueDate);
      ListContainer.appendChild(Priority);
      Container.appendChild(ListContainer);
      TodoCard.appendChild(Container);
      TodoGrid.appendChild(TodoCard);
      for (let i = 0; i < myTodo.length; i++) {
        console.log(myTodo);
      }
    }
  };
  const addListToDo = (event) => {
    document.getElementById("mainPop").style.display = "none";

    const TodoListName = document.getElementById("TodoListName").value;
    const Description = document.getElementById("description").value;
    const DueDate = document.getElementById("Due-Date").value;
    const Priority = document.getElementById("priority").value;

    const new2 = TodoList(TodoListName, Description, DueDate, Priority);
    myTodo.push(new2);
    document.getElementById("form").reset();
    event.preventDefault();
    Task();
  };
  return { Project, addListToDo };
};
