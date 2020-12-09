var app = new Vue(
  {

    el: "#root",

    data: {
      imageIndex: 0,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Milano%2C_Duomo%2C_2016-06_CN-04.jpg/1280px-Milano%2C_Duomo%2C_2016-06_CN-04.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/1280px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Piazza_Plebiscito_-_panoramio.jpg/1280px-Piazza_Plebiscito_-_panoramio.jpg"
      ],
      autoplay: ''
    },

    created: function() {
      this.autoplay = setInterval(
        () => {
          this.nextImage();
        }, 2000
      );
    },

    methods: {

      clickNextImage: function() {
        clearInterval(this.autoplay);
        this.nextImage();
      },
      clicPrevImage: function() {
        clearInterval(this.autoplay);
        this.prevImage();
      },

      nextImage: function() {
        this.imageIndex++;

        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }

      },
      prevImage: function() {
        this.imageIndex--;

        if (this.imageIndex == -1) {
          this.imageIndex = this.images.length -1;
        }

      }

    }

  }
);
