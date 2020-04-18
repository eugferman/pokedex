import { mapperTableTypes } from './mapperTableTypes';

const typeOfCurrentPokemon = [
  {
    type: {
        name:"poison"
    }
  },
  {
    type: {
      name: "electric"
    }
  }   
]

const tableTypesOfPokemon = [
  {
    "id": 0,
    "type": "normal",
    "immunes": ["Ghost"],
    "weaknesses": ["Rock","Steel"],
    "strengths": []
  },
  {
    "id": 1,
    "type": "fire",
    "immunes": [],
    "weaknesses": ["Fire","Water","Rock","Dragon"],
    "strengths": ["Grass","Ice","Bug","Steel"]
  },
  { 
    "id": 2,
    "type": "water",
    "immunes": [],
    "weaknesses": ["Water","Grass","Dragon"],
    "strengths": ["Fire","Ground","Rock"]
  },
  {
    "id": 3,
    "type": "electric",
    "immunes": ["Ground"],
    "weaknesses": ["Electric","Grass","Dragon"],
    "strengths": ["Water","Flying"]
  },
  { "id": 4,
    "type": "grass",
    "immunes":[],
    "weaknesses":["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],
    "strengths":["Water","Ground","Rock"]
  },
  { "id": 5,
    "type": "ice",
    "immunes":[],
    "weaknesses":["Fire","Water","Ice","Steel"],
    "strengths":["Grass","Ground","Flying","Dragon"]
  },
  { "id": 6,
    "type": "fighting",
    "immunes":["Ghost"],
    "weaknesses":["Poison","Flying","Psychic","Bug","Fairy"],
    "strengths":["Normal","Ice","Rock","Dark","Steel"]
  },
  { "id": 7,
    "type": "poison",
    "immunes":["Steel"],
    "weaknesses":["Poison","Ground","Rock","Ghost"],
    "strengths":["Grass","Fairy"]
  },
  { "id": 8,
    "type": "ground",
    "immunes":["Flying"],
    "weaknesses":["Grass","Bug"],
    "strengths":["Fire","Electric","Poison","Rock","Steel"]
  },
  { "id": 9,
    "type": "flying",
    "immunes":[],
    "weaknesses":["Electric","Rock","Steel"],
    "strengths":["Grass","Fighting","Bug"]},
  { "id": 10,
    "type": "psychic",
    "immunes":["Dark"],
    "weaknesses":["Psychic","Steel"],
    "strengths":["Fighting","Poison"]
  },
  { "id": 11,
    "type": "bug",
    "immunes":[],
    "weaknesses":["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
    "strengths":["Grass","Psychic","Dark"]
  },
  { "id": 12,
    "type": "rock",
    "immunes":[],
    "weaknesses":["Fighting","Ground","Steel"],
    "strengths":["Fire","Ice","Flying","Bug"]
  },
  { "id": 13,
    "type": "ghost",
    "immunes":["Normal"],
    "weaknesses":["Dark"],
    "strengths":["Psychic","Ghost"]
  },
  { "id": 14,
    "type": "dragon",
    "immunes":["Fairy"],
    "weaknesses":["Steel"],
    "strengths":["Dragon"]
  },
  { "id": 15,
    "type": "dark",
    "immunes":[],
    "weaknesses":["Fighting","Dark","Fairy"],
    "strengths":["Psychic","Ghost"]
  },
  { "id": 16,
    "type": "steel",
    "immunes":[],
    "weaknesses":["Fire","Water","Electric","Steel"],
    "strengths":["Ice","Rock","Fairy"]
  },
  { "id": 17,
    "type": "fairy",
    "immunes":[],
    "weaknesses":["Fire","Poison","Steel"],
    "strengths":["Fighting","Dragon","Dark"]
  }
]

const resultFunction = mapperTableTypes(typeOfCurrentPokemon, tableTypesOfPokemon);

describe("MAPPER TEST POISON", () => {
  test("it should view the immunes of poison", () => {
    const resultToImmunes = "Steel";
    expect(resultFunction[0].immunes).toEqual(resultToImmunes);
  });
  test("it should view the weaknesses of poison", () => {
    const resultToWeaknesses = "Poison,Ground,Rock,Ghost";
    expect(resultFunction[0].weaknesses).toEqual(resultToWeaknesses);
  });
  test("it should view the strengths of poison", () => {
    const resultToStrengths = "Grass,Fairy";
    expect(resultFunction[0].strengths).toEqual(resultToStrengths);
  });
});

describe("MAPPER TEST ELECTRIC", () => {
  test("it should view the immunes of electric", () => {
    const resultToImmunes = "Ground";
    expect(resultFunction[1].immunes).toEqual(resultToImmunes);
  });
  test("it should view the weaknesses of electric", () => {
    const resultToWeaknesses = "Electric,Grass,Dragon";
    expect(resultFunction[1].weaknesses).toEqual(resultToWeaknesses);
  });
  test("it should view the strengths of electric", () => {
    const resultToStrengths = "Water,Flying";
    expect(resultFunction[1].strengths).toEqual(resultToStrengths);
  });
});
