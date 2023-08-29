const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
      imgtheoffice: "./img/the-office.png",
    };
  },
}).mount("#hello");
