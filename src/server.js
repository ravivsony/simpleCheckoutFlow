import { createServer } from "miragejs";
createServer({
  routes() {
    this.namespace = "api";
    this.get("reminders", () => {
      return {
        reminders: [
          { id: 1, text: "Walk the dog" },
          { id: 2, text: "Take out the trash" },
          { id: 3, text: "Work out" },
        ],
      };
    });
  },
});
