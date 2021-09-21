import { createServer } from "miragejs";
createServer({
  routes() {
    this.namespace = "api";
    this.get("mobiles", () => {
      return {
        mobiles: [
          { id: 1, mobile: "Nokia", select: false },
          { id: 2, mobile: "Iphone", select: false },
          { id: 3, mobile: "Samsung", select: false },
          { id: 4, mobile: "Xiomi", select: false },
          { id: 5, mobile: "Vivo", select: false },
          { id: 6, mobile: "Oppo", select: false },
        ],
      };
    });
  },
});
