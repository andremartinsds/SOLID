class Video {
  tipoVideo

  verificaTipo() {
    return new Map([
      1 = "Novela",
      2 = "Youtube",
      3 = "Serie",
    ]).get(this.tipoVideo)
  }
}