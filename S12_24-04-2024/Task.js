function findDesignation(experience) {
  if (experience >= 0 && experience <= 2) {
    console.log("Junior Engineer");
  } else if (experience > 2 && experience <= 5) {
    console.log("Senior Engineer");
  } else if (experience > 5 && experience <= 7) {
    console.log("Team Lead");
  } else if (experience > 7 && experience <= 10) {
    console.log("Project Manager");
  } else {
    console.log("Software Architect");
  }
}

findDesignation(10);
