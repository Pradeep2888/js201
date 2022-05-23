function amar(name,skill) {
    this.name = name;
    this.skill = skill;
  }
  
  function Food(name, skill) {
    amar.call(this, name, skill);
    this.category = 'skills';
  }
  
  console.log(new Food('amar', dancing).name);
  