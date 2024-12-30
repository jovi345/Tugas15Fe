<template>
  <div class="container">
    <div class="stats-container">
      <div class="details">
        <h1>Todo App</h1>
        <p>Keep it up!</p>
        <div id="progressBar">
          <div id="progress"></div>
        </div>
      </div>
      <div class="stats-numbers">
        <p id="numbers">{{ tasks.length }}</p>
      </div>
    </div>

    <form @submit.prevent="submitTask">
      <input v-model="inputTask" type="text" placeholder="Write your task" />
      <button type="submit">+</button>
    </form>

    <ul class="task-list">
      <li v-for="(val, id) in tasks" :key="id">
        <div class="taskItem">
          <div class="task">
            <input
              type="checkbox"
              v-model="val.isChecked"
              @change="selectOnlyOne(id)"
            />

            <p v-if="!val.isChecked">{{ val.name }}</p>
            <s v-if="val.isChecked">{{ val.name }}</s>
          </div>
          <div class="icons">
            <box-icon
              type="solid"
              name="trash"
              @click.prevent="deleteTask(id)"
              color="#f38ba8"
              class="box-icon"
            ></box-icon>
            <box-icon
              type="solid"
              name="edit"
              @click.prevent="editTask(id)"
              color="#a6e3a1"
              class="box-icon"
            ></box-icon>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "boxicons";

export default {
  data() {
    return {
      inputTask: "",
      tasks: [
        { name: "hello", isChecked: false },
        { name: "tes", isChecked: false },
        { name: "dunia", isChecked: false },
      ],
    };
  },
  methods: {
    async getTask() {},
    selectOnlyOne(id) {
      console.log(id);
    },

    async submitTask() {
      try {
        // const data = { job: this.inputTask };
      } catch (error) {
        console.error(error);
      }
    },

    async editTask(id) {
      try {
        console.log(`edit ${id}`);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteTask(id) {
      try {
        console.log(`delete ${id}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getTask();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0 auto;
  max-width: 500px;
}

.stats-container {
  padding: 30px;
  border-radius: 10px;
  border: 2px solid var(--sapphire);
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
}

.details {
  width: 100%;
}

#progressBar {
  width: 100%;
  height: 10px;
  background-color: var(--secondaryBackground);
  border-radius: 5px;
  margin-top: 20px;
}

#progress {
  width: 50%;
  height: 10px;
  background-color: var(--green);
  border-radius: 10px;
  transition: all 0.3s ease;
}

#numbers {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sapphire);
  border-radius: 50%;
  font-size: 20px;
  font-weight: 700;
}

form {
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 16px;
}

input {
  flex: 1;
  padding: 16px;
  background: var(--secondaryBackground);
  border: 1px solid var(--sapphire);
  border-radius: 10px;
  outline: none;
  color: var(--text);
}

button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sapphire);
  color: var(--text);
  font-size: 30px;
  font-weight: bold;
  outline: none;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  width: 100%;
  list-style: none;
  padding: 0px;
}

.taskItem {
  display: flex;
  background-color: var(--secondaryBackground);
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
}

.task {
  display: flex;
  align-items: center;
  gap: 10px;
}

.task input {
  width: 20px;
  height: 20px;
}

.box-icon {
  width: 24px;
  height: 24px;
  margin: 2px;
  cursor: pointer;
}
</style>
