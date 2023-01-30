var controles = {
  current: "",
  previous: "",

  setCurrent: function (current) {
    if(this.current == current) return

    this.current = current
  },

  setPrevious: function () {
    this.setCurrent(this.previous)
  },
};
