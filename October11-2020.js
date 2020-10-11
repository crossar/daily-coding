// Testing Objects for Properties

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }

  // Manipulating Complex Objects

  var myMusic = [
    {
      artist: "Black Pink ft. Selena Gomez",
      title: "Ice cream",
      release_year: 2020,
      formats: ["MP3", "MP4", "CD"],
      gold: true
    },
    // record here
    {
      artist: "BTS",
      title: "Dynamite",
      release_year: 2020,
      formats: ["CD", "MP3", "MP4"]
    }
  ];